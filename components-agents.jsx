// Services, Intelligo! catalogue, Sovereignty sections
const { useState: useStateA } = React;

function Services({ t }) {
  const services = [
    { n: "s1", tag: t("s1_tag"), icon: "workflow" },
    { n: "s2", tag: t("s2_tag"), icon: "bolt" },
    { n: "s3", tag: t("s3_tag"), icon: "scale" },
    { n: "s4", tag: t("s4_tag"), icon: "chart" },
  ];
  return (
    <section className="agents" id="services">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head-left">
            <div className="section-num">{t("services_num")}</div>
            <h2 className="h2">{t("services_title")}</h2>
            <p className="lead">{t("services_lead")}</p>
          </div>
        </div>
        <div className="services-grid reveal">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-head">
                <div className="service-icon"><Icon name={s.icon} size={22} /></div>
                <div className="service-num">{t(s.n + "_num")}</div>
              </div>
              <h3 className="service-title">{t(s.n + "_title")}</h3>
              <p className="service-desc">{t(s.n + "_desc")}</p>
              <div className="service-tag">{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Intelligo({ t }) {
  const [filter, setFilter] = useStateA("all");
  const catMeta = {
    all: { icon: "grid" },
    finance: { icon: "coins" },
    legal: { icon: "gavel" },
    hr: { icon: "users" },
    tech: { icon: "terminal" },
    public: { icon: "building" },
  };
  const cats = ["all", "finance", "legal", "hr", "tech", "public"];
  const agentIcons = ["sparkles","chart","shield","mail","book","code","workflow","megaphone"];
  const agents = [1,2,3,4,5,6,7,8].map(i => ({
    i, t: t("ag_"+i+"_t"), s: t("ag_"+i+"_s"), d: t("ag_"+i+"_d"), cat: t("ag_"+i+"_cat"), icon: agentIcons[i-1]
  }));
  const visible = agents.filter(a => filter === "all" || a.cat === filter);
  return (
    <section className="intelligo" id="intelligo">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head-left">
            <div className="section-num">{t("intelligo_num")}</div>
            <h2 className="h2">{t("intelligo_title")}</h2>
            <p className="lead">{t("intelligo_lead")}</p>
          </div>
        </div>
        <div className="filter-bar reveal">
          {cats.map(c => (
            <button key={c} className={"chip" + (filter === c ? " active" : "")} onClick={() => setFilter(c)}>
              <Icon name={catMeta[c].icon} size={15} />
              {t("ag_" + c)}
            </button>
          ))}
        </div>
        <div className="intelligo-grid reveal">
          {visible.map(a => (
            <div className="intelligo-card" key={a.i}>
              <div className="intelligo-card-head">
                <div className="intelligo-mark">
                  <Icon name={a.icon} size={20} />
                </div>
                <div>
                  <h3 className="intelligo-title">{a.t}</h3>
                  <div className="intelligo-sub">{a.s}</div>
                </div>
              </div>
              <p className="intelligo-desc">{a.d}</p>
              <div className="intelligo-actions">
                <a className="btn btn-ghost btn-sm" href="#cta">
                  {t("intelligo_explore") || "Explore"} <Icon name="arrowUpRight" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sovereignty({ t }) {
  const icons = ["lock", "server", "flag"];
  const points = [1,2,3].map(i => ({
    t: t("sov_" + i + "_t"), d: t("sov_" + i + "_d"), icon: icons[i-1]
  }));
  const models = ["OpenAI", "Anthropic", "Mistral", "LLaMA", "Grok", "Custom"];
  return (
    <section className="sovereignty" id="sovereignty">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head-left">
            <div className="section-num">{t("sov_num")}</div>
            <h2 className="h2">{t("sov_title")}</h2>
            <p className="lead">{t("sov_lead")}</p>
          </div>
        </div>
        <div className="sov-grid">
          <div className="sov-points reveal">
            {points.map((p, i) => (
              <div className="sov-point" key={i}>
                <div className="sov-icon"><Icon name={p.icon} size={22} /></div>
                <div>
                  <div className="sov-num-dot">0{i+1}</div>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sov-visual reveal">
            <div className="sov-label">{t("sov_models")}</div>
            <div className="sov-models">
              {models.map((m, i) => <span key={i} className="llm-badge">{m}</span>)}
            </div>
            <div className="sov-diagram">
              <div className="sov-diagram-box">
                <div className="sov-box-label">Your datacenter</div>
                <div className="sov-box-inner">
                  <div className="sov-box-chip">Agents</div>
                  <div className="sov-box-chip">RAG</div>
                  <div className="sov-box-chip">Observability</div>
                </div>
              </div>
              <div className="sov-line">
                <span>air-gapped</span>
              </div>
              <div className="sov-diagram-outside">MindState — code, evals, support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, Intelligo, Sovereignty });
