// MindState AI — top components (Nav, Hero, HeroDemo, Logos)
const { useState, useEffect, useRef } = React;

const useT = () => {
  const [lang, setLang] = useState(() => localStorage.getItem("msai_lang") || "fr");
  useEffect(() => {
    localStorage.setItem("msai_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  const t = (k) => (window.I18N[lang] && window.I18N[lang][k]) || window.I18N.en[k] || k;
  return { lang, setLang, t };
};

const useReveal = () => {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
};

function Nav({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on); on();
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="MindState AI">
          <img src="assets/mark-clean.png" alt="" className="nav-mark" />
          <span className="nav-wordmark"><b>MindState</b><i>AI</i></span>
        </a>
        <div className="nav-links hide-mobile">
          <a href="#services">{t("nav_platform")}</a>
          <a href="#intelligo">{t("nav_agents")}</a>
          <a href="#sovereignty">{t("nav_sovereignty")}</a>
          <a href="#company">{t("nav_company")}</a>
        </div>
        <div className="nav-right">
          <div className="lang-toggle hide-mobile">
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")}>FR</button>
          </div>
          <a className="btn btn-ghost btn-sm hide-mobile" href="#cta">{t("nav_talk")}</a>
          <a className="btn btn-primary btn-sm" href="#cta">{t("nav_demo")} <Icon name="arrow" size={14} /></a>
        </div>
      </div>
    </nav>
  );
}

function HeroDemo({ t }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timings = [800, 1600, 900, 900, 900, 900, 2200];
    let timer;
    const run = () => {
      timer = setTimeout(() => {
        setStep((s) => (s + 1) % 7);
        run();
      }, timings[step] || 1200);
    };
    run();
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="hero-demo">
      <div className="demo-bar">
        <span>{t("demo_status")}</span>
        <span className="pulse">{t("demo_live")}</span>
      </div>
      <div className="demo-body">
        {step >= 0 && (
          <div className="demo-msg user">
            <div className="avatar">CS</div>
            <div className="bubble">{t("demo_user_1")}</div>
          </div>
        )}
        {step >= 1 && (
          <div className="demo-msg agent">
            <div className="avatar">M</div>
            <div className="bubble">{t("demo_agent_1")}</div>
          </div>
        )}
        {step >= 2 && <div className="demo-action-chip">{t("demo_chip_1")}</div>}
        {step >= 3 && <div className="demo-action-chip">{t("demo_chip_2")}</div>}
        {step >= 4 && <div className="demo-action-chip">{t("demo_chip_3")}</div>}
        {step === 5 && <div className="demo-typing"><span></span><span></span><span></span></div>}
        {step >= 6 && (
          <div className="demo-msg agent">
            <div className="avatar">M</div>
            <div className="bubble">{t("demo_agent_2")}</div>
          </div>
        )}
      </div>
      <div className="demo-footer">
        <span>{t("demo_footer_left")}</span>
        <span>{t("demo_footer_right")}</span>
      </div>
    </div>
  );
}

function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-mark-bg"><img src="assets/mark-clean.png" alt="" /></div>
      <div className="container" style={{ position: "relative" }}>
        <div className="hero-grid">
          <div className="hero-left">
            <div className="eyebrow">{t("hero_eyebrow")}</div>
            <h1 className="hero-display">
              {t("hero_title_1")} <em>{t("hero_title_2_em")}</em> {t("hero_title_3")}
            </h1>
            <p className="lead">{t("hero_lead")}</p>
            <div className="hero-bottom-meta">
              <div className="hero-cta-row">
                <a className="btn btn-primary btn-lg" href="#cta">{t("hero_cta_primary")} <Icon name="arrow" size={16} /></a>
                <a className="btn btn-ghost btn-lg" href="#services"><Icon name="play" size={14} /> {t("hero_cta_secondary")}</a>
              </div>
              <div className="hero-sub"><span className="dot"></span>{t("hero_status")}</div>
            </div>
          </div>
          <HeroDemo t={t} />
        </div>
      </div>
    </section>
  );
}

function Logos({ t }) {
  const items = ["Banque Nationale", "Atlas Assurance", "Tunisie Télécom", "Ministère des Finances", "Crédit Maghreb", "Harbour Group"];
  return (
    <section className="logos">
      <div className="container logos-inner">
        <div className="logos-label">{t("logos_label")}</div>
        <div className="logos-row">
          {items.map((n, i) => (
            <div className="logo-item" key={i}>
              <span className="logo-mark">
                <svg viewBox="0 0 22 22" width="22" height="22">
                  {i % 3 === 0 && <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />}
                  {i % 3 === 1 && <rect x="4" y="4" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(45 11 11)" />}
                  {i % 3 === 2 && <path d="M4 18 L11 4 L18 18 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />}
                </svg>
              </span>
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Logos, useT, useReveal });
