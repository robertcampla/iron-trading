'use client';

import {
  Activity, Bell, Bot, BriefcaseBusiness, ChartNoAxesCombined, ChevronDown,
  CircleDollarSign, Crosshair, Gauge, Hammer, House, Link2, NotebookText,
  Plus, Radio, Search, Settings, ShieldCheck, Sparkles, TrendingUp, Workflow,
} from 'lucide-react';

const navItems = [
  [House,'Inicio'],[BriefcaseBusiness,'Cuentas'],[Bot,'Autopilot'],[ShieldCheck,'Riesgo'],
  [Workflow,'Estrategias'],[ChartNoAxesCombined,'Rendimiento'],[NotebookText,'Diario'],[Settings,'Configuración'],
] as const;

const accounts = [
  {name:'APEX 50K (EOD)',type:'Fondeada',equity:'$51,384',pnl:'+$384',safe:82,trades:3,risk:'$116',available:'$1,736',active:true},
  {name:'APEX 50K (EOD)',type:'Evaluación',equity:'$50,742',pnl:'+$278',safe:64,trades:2,risk:'$220',available:'$980',active:true},
  {name:'TOPSTEP 50K',type:'Evaluación',equity:'$49,865',pnl:'-$116',safe:48,trades:1,risk:'$310',available:'$540',active:false},
];

export default function Home(){
  return <main className="iron-app">
    <aside className="iron-sidebar">
      <div className="iron-brand">
        <div className="iron-thor-logo"><Hammer size={31} strokeWidth={2.2}/></div>
        <div><div className="iron-brand-name">IRON TRADING</div><div className="iron-brand-sub">FUNDED TRADING INTELLIGENCE</div></div>
      </div>
      <nav className="iron-nav">{navItems.map(([Icon,label],i)=><button className={`iron-nav-item ${i===0?'is-active':''}`} key={label}><span className="nav-icon-wrap"><Icon size={18} strokeWidth={1.8}/></span><span>{label}</span></button>)}</nav>
      <div className="sidebar-photo" aria-hidden="true"/>
      <div className="iron-side-footer"><div className="discipline-card">DISCIPLINA<br/>HOY.<br/>RESULTADOS<br/>SIEMPRE.</div><span>TRADING · A HIGHER STANDARD</span></div>
    </aside>

    <section className="iron-workspace">
      <header className="iron-topbar">
        <div className="iron-search"><Search size={16}/><span>Buscar...</span><kbd>⌘K</kbd></div>
        <div className="market-ticker"><span>MNQ <b>21,452.75</b> <em>+0.18%</em></span><span>NQ <b>21,455.00</b> <em>+0.17%</em></span><span>ES <b>5,711.50</b> <em>+0.12%</em></span></div>
        <div className="iron-profile-wrap"><button className="iron-icon-btn"><Bell size={18}/></button><div className="iron-profile"><div className="iron-avatar">RC</div><div><b>Roberto C.</b><span>Plan Pro</span></div><ChevronDown size={15}/></div></div>
      </header>

      <div className="iron-content">
        <section className="command-hero">
          <div className="hero-photo"/><div className="hero-vignette"/>
          <div className="command-copy"><span className="hero-kicker">IRON TRADING · COMMAND CENTER</span><h1>Buenas tardes, Roberto.</h1><p>Tus cuentas están protegidas. El Autopilot opera dentro de los límites establecidos.</p></div>
          <div className="command-time"><span>Sábado, 13 de Septiembre de 2026</span><strong>04:26 PM</strong><small>Hora de Arizona (MST)</small></div>
          <div className="hero-motto">MISMO ENFOQUE<br/><b>MAYORES RESULTADOS</b></div>
          <div className="command-metrics"><Metric value="3" label="Cuentas activas"/><Metric value="$150,000" label="Capital total"/><Metric value="+$742" label="P&L hoy" positive/><Metric value="82%" label="Margen de seguridad"/><Metric value="12" label="Operaciones hoy"/></div>
        </section>

        <section className="control-grid">
          <div className="left-control-stack">
            <div className="portfolio-card iron-panel">
              <div className="panel-heading"><div><h2>Mis Cuentas de Fondeo</h2></div><div className="account-tabs"><button>Todas</button><button className="active">Activas</button><button>Evaluación</button><button>Fondeadas</button><button className="add-btn"><Plus size={15}/>Agregar cuenta</button></div></div>
              <div className="funded-grid">{accounts.map((a,i)=><article className={`funded-card ${i===0?'featured':''}`} key={i}>
                <div className="funded-card-head"><div className={`funded-logo ${i===2?'topstep':''}`}>{i===2?'T':'A'}</div><div><h3>{a.name}</h3><span className={`account-type ${a.type==='Fondeada'?'funded':''}`}>{a.type}</span></div></div>
                <div className="funded-balance"><div><strong>{a.equity}</strong><span>Equity actual</span></div><div className={a.pnl.startsWith('+')?'profit':'loss'}><strong>{a.pnl}</strong><span>Hoy</span></div></div>
                <div className="safety-row"><div className="safety-track"><i style={{width:`${a.safe}%`}}/></div><b>{a.safe}%</b></div>
                <div className={`engine-pill ${a.active?'':'paused'}`}><Radio size={11}/>{a.active?'AUTOPILOT ACTIVO':'PAUSADO'}</div>
                <div className="funded-mini-grid"><Mini value={String(a.trades)} label="Trades"/><Mini value={a.risk} label="Riesgo usado"/><Mini value={a.available} label="Disponible"/></div>
              </article>)}
                <button className="funded-add-card"><div><Plus size={23}/></div><strong>Agregar nueva cuenta</strong><span>Conecta tu próxima cuenta y centraliza todo en un solo lugar.</span><b>Conectar cuenta</b></button>
              </div>
            </div>

            <section className="autopilot-command iron-panel">
              <div className="autopilot-topline"><div className="autopilot-brand"><div className="auto-icon"><Bot size={17}/></div><div><span>IRON AUTOPILOT</span><h2>Autopilot Global</h2></div><b>● RUNNING</b></div><span className="decision-flow-label">LIVE DECISION FLOW</span></div>
              <div className="autopilot-rail"><Flow icon={<TrendingUp size={20}/>} title="Mercado" sub="Analizando"/><div className="rail-arrow">→</div><Flow icon={<Crosshair size={20}/>} title="Estrategia" sub="Buscando setup"/><div className="rail-arrow">→</div><Flow icon={<ShieldCheck size={20}/>} title="Riesgo" sub="Validando"/><div className="rail-arrow">→</div><Flow icon={<CircleDollarSign size={20}/>} title="Ejecución" sub="Listo"/><div className="decision-state"><span>Estado actual</span><strong>SEARCHING OPPORTUNITY</strong><p>Esperando la próxima configuración de alta probabilidad...</p></div></div>
            </section>
          </div>

          <aside className="system-column">
            <div className="system-health iron-panel"><div className="system-title"><div><h2>Estado del Sistema</h2></div><b>● Operativo</b></div><System icon={<Link2 size={14}/>} label="Conexión NinjaTrader" value="Conectado"/><System icon={<Activity size={14}/>} label="Ejecución" value="Lista"/><System icon={<Sparkles size={14}/>} label="Motor de estrategias" value="Activo"/><System icon={<ShieldCheck size={14}/>} label="Gestión de riesgo" value="Protegido"/><System icon={<Bell size={14}/>} label="Notificaciones" value="Activadas"/></div>
            <div className="daily-summary iron-panel"><div className="panel-heading simple"><div><h2>Resumen de Hoy</h2></div></div><Summary label="P&L del día" value="+$742" positive/><Summary label="Trades" value="6"/><Summary label="Win Rate" value="66.7%"/><Summary label="Mejor operación" value="+$312" positive/><Summary label="Peor operación" value="-$88" negative/><Summary label="Tiempo en mercado" value="2h 14m"/></div>
          </aside>
        </section>

        <section className="insight-grid">
          <div className="insight-card iron-panel"><div className="insight-head"><h2>Rendimiento Semanal</h2><b>+2.4%</b></div><div className="performance-chart">{[34,52,29,58,78,57,88].map((h,i)=><div key={i}><i className={i===2?'negative':''} style={{height:`${h}%`}}/><span>{['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'][i]}</span></div>)}</div></div>
          <div className="insight-card iron-panel"><div className="insight-head"><h2>Distribución de Operaciones</h2></div><div className="distribution-body"><div className="distribution-ring"><div><strong>18</strong><span>Total</span></div></div><div className="distribution-legend"><p><i className="long"/>Long <b>11 (61%)</b></p><p><i className="short"/>Short <b>7 (39%)</b></p></div></div></div>
          <div className="insight-card iron-panel"><div className="insight-head"><h2>Noticias Clave</h2><button>Ver más</button></div><div className="news-lines"><p><span>15:30</span>Fed mantiene tasas sin cambios</p><p><span>12:45</span>Datos de empleo superan expectativas</p><p><span>10:20</span>Nasdaq muestra fuerza en pre-mercado</p><p><span>08:15</span>Dólar se mantiene estable</p></div></div>
        </section>

        <footer className="brand-footer"><div className="footer-mantra"><Gauge size={22}/><div><b>CONTROL · DISCIPLINA · LIBERTAD</b><span>MÁS QUE TRADING · UN ESTILO DE VIDA</span></div></div><blockquote>“El éxito en el trading no se trata de predecir el mercado, sino de estar preparado para cualquier escenario.”</blockquote><div className="signature">Roberto C.</div><div className="plan-words">PLAN<br/>EXECUTE<br/>REPEAT</div></footer>
      </div>
    </section>
  </main>
}

function Metric({value,label,positive=false}:{value:string;label:string;positive?:boolean}){return <div className="command-metric"><strong className={positive?'profit':''}>{value}</strong><span>{label}</span></div>}
function Mini({value,label}:{value:string;label:string}){return <div><strong>{value}</strong><span>{label}</span></div>}
function System({icon,label,value}:{icon:React.ReactNode;label:string;value:string}){return <div className="system-row"><span>{icon}</span><p>{label}</p><b>{value}</b></div>}
function Summary({label,value,positive,negative}:{label:string;value:string;positive?:boolean;negative?:boolean}){return <div className="summary-row"><span>{label}</span><b className={positive?'profit':negative?'loss':''}>{value}</b></div>}
function Flow({icon,title,sub}:{icon:React.ReactNode;title:string;sub:string}){return <div className="flow-step"><div>{icon}</div><strong>{title}</strong><span>{sub}</span></div>}
