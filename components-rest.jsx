// Compare, Company, Process, CTA, Contact, Footer
function Compare({ t }) {
  const rows = [
    { dim: t("compare_row_1_dim"), sub: t("compare_row_1_sub"), us: t("compare_row_1_us"), plat: t("compare_row_1_plat"), cons: t("compare_row_1_cons"), type: "text" },
    { dim: t("compare_row_2_dim"), sub: t("compare_row_2_sub"), us: true, plat: false, cons: "partial", type: "check" },
    { dim: t("compare_row_3_dim"), sub: t("compare_row_3_sub"), us: true, plat: false, cons: "partial", type: "check" },
    { dim: t("compare_row_4_dim"), sub: t("compare_row_4_sub"), us: true, plat: false, cons: "partial", type: "check" },
    { dim: t("compare_row_5_dim"), sub: t("compare_row_5_sub"), us: true, plat: false, cons: true, type: "check" },
    { dim: t("compare_row_6_dim"), sub: t("compare_row_6_sub"), us: true, plat: true, cons: false, type: "check" },
  ];
  const cell = (v, row) => {
    if (row.type === "text") return <span className="compare-value strong">{v}</span>;
    if (v === true) return <span className="compare-check yes"><Icon name="check" size={16} strokeWidth={2.2} /></span>;
    if (v === "partial") return <span className="compare-check partial"><Icon name="dot" size={10} strokeWidth={2} /></span>;
    return <span className="compare-check no"><Icon name="x" size={14} strokeWidth={2} /></span>;
  };
  return (
    <section className="compare" id="compare">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head-left">
            <div className="section-num">{t("compare_num")}</div>
            <h2 className="h2">{t("compare_title")}</h2>
            <p className="lead">{t("compare_lead")}</p>
          </div>
        </div>
        <div className="compare-table reveal">
          <div className="compare-row head">
            <div className="compare-cell">{t("compare_dim")}</div>
            <div className="compare-cell highlight">{t("compare_us")}</div>
            <div className="compare-cell">{t("compare_platforms")}</div>
            <div className="compare-cell">{t("compare_consult")}</div>
          </div>
          {rows.map((r, i) => (
            <div className="compare-row" key={i}>
              <div className="compare-cell">
                <div className="compare-dim-label">{r.dim}</div>
                <span className="compare-dim-sub">{r.sub}</span>
              </div>
              <div className="compare-cell highlight">{cell(r.us, r)}</div>
              <div className="compare-cell">{cell(r.plat, r)}</div>
              <div className="compare-cell">{cell(r.cons, r)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Company({ t }) {
  return (
    <section className="about" id="company">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head-left">
            <div className="section-num">{t("company_num")}</div>
            <h2 className="h2">{t("company_title")}</h2>
          </div>
        </div>
        <div className="company-lead-row reveal">
          <p className="lead" style={{ fontSize: "22px", maxWidth: "72ch" }}>{t("company_lead")}</p>
        </div>
        <div className="about-stats reveal">
          {[1,2,3,4].map((i) => (
            <div className="about-stat" key={i}>
              <div className="val">{t("stat_" + i + "_v")}</div>
              <div className="lab">{t("stat_" + i + "_l")}</div>
            </div>
          ))}
        </div>
        <div className="process-grid reveal">
          {[1,2,3,4].map(i => {
            const icons = ["eye","sparkles","workflow","chart"];
            return (
            <div className="process-step" key={i}>
              <div className="step-head">
                <span className="step-icon"><Icon name={icons[i-1]} size={20} /></span>
                <div className="step-num">0{i}</div>
              </div>
              <h3>{t("process_" + i + "_t")}</h3>
              <p>{t("process_" + i + "_d")}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA({ t }) {
  return (
    <section className="cta" id="cta">
      <div className="cta-bg-mark"></div>
      <svg className="cta-rings" viewBox="0 0 800 800">
        <circle cx="400" cy="400" r="100" />
        <circle cx="400" cy="400" r="200" />
        <circle cx="400" cy="400" r="300" />
        <circle cx="400" cy="400" r="390" />
      </svg>
      <div className="container cta-inner">
        <h2 className="h2">{t("cta_title")}</h2>
        <div className="cta-side">
          <p>{t("cta_lead")}</p>
          <a className="btn btn-primary btn-lg" href="https://calendly.com/hgara-mindstate/30min" target="_blank" rel="noopener">{t("cta_primary")} <Icon name="arrow" size={16} /></a>
          <a href="mailto:contact@mindstate.tech" className="cta-mail" style={{ color: "color-mix(in oklab, var(--bg) 80%, transparent)", fontSize: 14 }}>{t("cta_secondary")} <Icon name="arrowUpRight" size={13} /></a>
        </div>
      </div>
      <div className="contact-bar">
        <div className="container contact-row">
          <div className="contact-item">
            <span className="contact-icon"><Icon name="building" size={18} /></span>
            <div>
              <div className="contact-label">{t("addr_title")}</div>
              <div className="contact-val">{t("addr_val")}</div>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><Icon name="mail" size={18} /></span>
            <div>
              <div className="contact-label">{t("mail_title")}</div>
              <div className="contact-val"><a href="mailto:contact@mindstate.tech">{t("mail_val")}</a></div>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><Icon name="phone" size={18} /></span>
            <div>
              <div className="contact-label">{t("tel_title")}</div>
              <div className="contact-val"><a href="tel:+21636694639">{t("tel_val")}</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wordmark">MindState</div>
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="nav-logo">
              <img src="assets/mark-clean.png" alt="" className="nav-mark" />
              <span className="nav-wordmark"><b>MindState</b><i>AI</i></span>
            </div>
            <p className="body-sm">{t("footer_tagline")}</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
              <a href="#" aria-label="GitHub"><Icon name="github" size={18} /></a>
              <a href="mailto:contact@mindstate.tech" aria-label="Email"><Icon name="mail" size={18} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{t("footer_col_1")}</h4>
            <ul>
              <li><a href="#services">{t("f1_1")}</a></li>
              <li><a href="#services">{t("f1_2")}</a></li>
              <li><a href="#services">{t("f1_3")}</a></li>
              <li><a href="#services">{t("f1_4")}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("footer_col_2")}</h4>
            <ul>
              <li><a href="#intelligo">{t("f2_1")}</a></li>
              <li><a href="#intelligo">{t("f2_2")}</a></li>
              <li><a href="#intelligo">{t("f2_3")}</a></li>
              <li><a href="#intelligo">{t("f2_4")}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("footer_col_3")}</h4>
            <ul>
              <li><a href="#sovereignty">{t("f3_1")}</a></li>
              <li><a href="#company">{t("f3_2")}</a></li>
              <li><a href="mailto:contact@mindstate.tech">{t("f3_3")}</a></li>
              <li><a href="#">{t("f3_4")}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t("footer_copy")}</span>
          <span>{t("footer_legal")}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Compare, Company, CTA, Footer });
