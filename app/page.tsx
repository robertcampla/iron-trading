'use client';

import {
  Activity,
  BarChart3,
  Bell,
  Bot,
  CalendarDays,
  ChevronDown,
  CircleDollarSign,
  FolderKanban,
  LayoutDashboard,
  Link2,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  WalletCards,
} from 'lucide-react';

const navItems = [
  [LayoutDashboard, 'Inicio'],
  [WalletCards, 'Cuentas'],
  [Bot, 'Autopilot'],
  [ShieldCheck, 'Riesgo'],
  [FolderKanban, 'Estrategias'],
  [BarChart3, 'Rendimiento'],
  [CalendarDays, 'Diario'],
  [Settings, 'Configuración'],
] as const;

const accounts = [
  { name: 'APEX 50K EOD', type: 'Fondeada', equity: '$51,384', pnl: '+$384', safe: 82, trades: 3, risk: '$116', available: '$1,736', active: true },
  { name: 'APEX 50K EOD', type: 'Evaluación', equity: '$50,742', pnl: '+$278', safe: 64, trades: 2, risk: '$220', available: '$980', active: true },
  { name: 'TOPSTEP 50K', type: 'Evaluación', equity: '$49,865', pnl: '-$116', safe: 48, trades: 1, risk: '$310', available: '$540', active: false },
];

export default function Home() {
  return (
    <main className="iron-app">
      <aside className="iron-sidebar">
        <div className="iron-brand">
          <div className="iron-monogram">IT</div>
          <div>
            <div className="iron-brand-name">IRON TRADING</div>
            <div className="iron-brand-sub">FUNDED TRADING INTELLIGENCE</div>
          </div>
        </div>

        <nav className="iron-nav">
          {navItems.map(([Icon, label], index) => (
            <button className={`iron-nav-item ${index === 0 ? 'is-active' : ''}`} key={label}>
              <Icon size={18} strokeWidth={1.7} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="iron-side-footer">
          <div className="iron-side-rule" />
          <p>DISCIPLINA HOY.<br />RESULTADOS SIEMPRE.</p>
          <span>TRADE WITH PURPOSE</span>
        </div>
      </aside>

      <section className="iron-workspace">
        <header className="iron-topbar">
          <div className="iron-search"><Search size={16} /><span>Buscar...</span><kbd>⌘ K</kbd></div>
          <div className="iron-live-market"><span className="live-dot" /><div><b>Mercado conectado</b><small>MNQ · NQ · ES</small></div></div>
          <div className="iron-profile-wrap">
            <button className="iron-icon-btn"><Bell size={18} /></button>
            <div className="iron-profile"><div className="iron-avatar">RC</div><div><b>Roberto C.</b><span>Plan Pro</span></div><ChevronDown size={15} /></div>
          </div>
        </header>

        <div className="iron-content">
          <section className="command-hero">
            <div className="hero-sky" />
            <div className="hero-mountain back" />
            <div className="hero-mountain front" />
            <div className="hero-vignette" />

            <div className="command-copy">
              <span className="command-kicker">IRON TRADING · CONTROL CENTER</span>
              <h1>Buenas tardes,<br /><span>Roberto.</span></h1>
              <p>Capital, riesgo y automatización bajo una sola inteligencia operativa.</p>
            </div>

            <div className="command-time">
              <span>Domingo, 13 de Septiembre de 2026</span>
              <strong>04:26 PM</strong>
              <small>Arizona · MST</small>
            </div>

            <div className="command-status-card">
              <span>SISTEMA GLOBAL</span>
              <strong>OPERATIVO</strong>
              <div><i /> Todos los módulos responden correctamente</div>
            </div>

            <div className="command-metrics">
              <Metric value="3" label="Cuentas activas" />
              <Metric value="$150,000" label="Capital total" />
              <Metric value="+$742" label="P&L hoy" positive />
              <Metric value="82%" label="Margen de seguridad" />
              <Metric value="12" label="Operaciones hoy" />
            </div>
          </section>

          <section className="portfolio-layout">
            <div className="portfolio-card iron-panel">
              <div className="panel-heading">
                <div><span>PORTFOLIO</span><h2>Mis Cuentas de Fondeo</h2></div>
                <div className="account-tabs"><button className="active">Activas</button><button>Evaluación</button><button>Fondeadas</button><button className="add-btn"><Plus size={15}/> Agregar cuenta</button></div>
              </div>

              <div className="funded-grid">
                {accounts.map((account, index) => (
                  <article className={`funded-card ${index === 0 ? 'featured' : ''}`} key={`${account.name}-${index}`}>
                    <div className="funded-card-head">
                      <div className="funded-logo">{index === 2 ? 'T' : 'A'}</div>
                      <div><h3>{account.name}</h3><span className={`account-type ${account.type === 'Fondeada' ? 'funded' : ''}`}>{account.type}</span></div>
                      <span className={`engine-state ${account.active ? '' : 'paused'}`}>{account.active ? 'AUTO ON' : 'PAUSADO'}</span>
                    </div>
                    <div className="funded-balance"><div><span>Equity actual</span><strong>{account.equity}</strong></div><div className={account.pnl.startsWith('+') ? 'profit' : 'loss'}><span>Hoy</span><strong>{account.pnl}</strong></div></div>
                    <div className="safety-header"><span>Safety margin</span><b>{account.safe}%</b></div>
                    <div className="safety-track"><i style={{ width: `${account.safe}%` }} /></div>
                    <div className="funded-mini-grid"><MiniStat value={String(account.trades)} label="Trades" /><MiniStat value={account.risk} label="Riesgo usado" /><MiniStat value={account.available} label="Disponible" /></div>
                  </article>
                ))}
                <button className="funded-add-card"><div><Plus size={25}/></div><strong>Agregar nueva cuenta</strong><span>Centraliza todas tus cuentas aquí.</span></button>
              </div>
            </div>

            <div className="system-column">
              <div className="iron-panel system-health">
                <div className="system-title"><div><span>SYSTEM</span><h2>Estado del Sistema</h2></div><b>OPERATIVO</b></div>
                <SystemRow icon={<Link2 size={15}/>} label="NinjaTrader" value="Conectado" />
                <SystemRow icon={<Activity size={15}/>} label="Ejecución" value="Lista" />
                <SystemRow icon={<Sparkles size={15}/>} label="Strategy Engine" value="Activo" />
                <SystemRow icon={<ShieldCheck size={15}/>} label="Risk Engine" value="Protegido" />
                <SystemRow icon={<Bell size={15}/>} label="Notificaciones" value="Activadas" />
              </div>

              <div className="iron-panel daily-summary">
                <div className="panel-heading simple"><div><span>SESSION</span><h2>Resumen de Hoy</h2></div></div>
                <SummaryRow label="P&L del día" value="+$742" positive />
                <SummaryRow label="Trades" value="6" />
                <SummaryRow label="Win Rate" value="66.7%" />
                <SummaryRow label="Mejor operación" value="+$312" positive />
                <SummaryRow label="Peor operación" value="-$88" negative />
                <SummaryRow label="Tiempo en mercado" value="2h 14m" />
              </div>
            </div>
          </section>

          <section className="autopilot-command iron-panel">
            <div className="autopilot-topline">
              <div className="autopilot-brand"><div className="auto-icon"><Bot size={19}/></div><div><span>IRON ENGINE</span><h2>Iron Autopilot Global</h2></div><b>RUNNING</b></div>
              <span className="decision-flow-label">LIVE DECISION FLOW</span>
            </div>
            <div className="autopilot-rail">
              <FlowStep icon={<TrendingUp size={20}/>} title="Mercado" subtitle="Analizando" />
              <div className="rail-line"><i /></div>
              <FlowStep icon={<Target size={20}/>} title="Estrategia" subtitle="Buscando setup" />
              <div className="rail-line"><i /></div>
              <FlowStep icon={<ShieldCheck size={20}/>} title="Riesgo" subtitle="Validando" />
              <div className="rail-line"><i /></div>
              <FlowStep icon={<CircleDollarSign size={20}/>} title="Ejecución" subtitle="Lista" />
              <div className="decision-state"><span>ESTADO ACTUAL</span><strong>SEARCHING OPPORTUNITY</strong><p>Esperando una configuración de alta probabilidad.</p></div>
            </div>
          </section>

          <section className="insight-grid">
            <div className="iron-panel insight-card performance-card">
              <div className="insight-head"><h2>Rendimiento Semanal</h2><b>+2.4%</b></div>
              <div className="performance-chart">{[45,62,30,72,88,74,98].map((h,i)=><div key={i}><i className={i===2?'negative':''} style={{height:`${h}%`}}/><span>{['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'][i]}</span></div>)}</div>
            </div>
            <div className="iron-panel insight-card distribution-card">
              <div className="insight-head"><h2>Distribución de Operaciones</h2></div>
              <div className="distribution-body"><div className="distribution-ring"><div><strong>18</strong><span>Total</span></div></div><div className="distribution-legend"><p><i className="long"/>LONG <b>11 · 61%</b></p><p><i className="short"/>SHORT <b>7 · 39%</b></p></div></div>
            </div>
            <div className="iron-panel insight-card activity-card">
              <div className="insight-head"><h2>Actividad Reciente</h2><button>Ver más</button></div>
              <News time="15:40" text="Iron Risk Engine mantiene la cuenta en estado seguro." />
              <News time="15:32" text="Autopilot continúa buscando configuración MNQ." />
              <News time="15:25" text="Profit lock disponible al superar la meta diaria." />
              <News time="15:18" text="Bridge preparado para integración Replay/SIM." />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function Metric({ value, label, positive = false }: { value: string; label: string; positive?: boolean }) {
  return <div className="command-metric"><strong className={positive ? 'profit' : ''}>{value}</strong><span>{label}</span></div>;
}
function MiniStat({ value, label }: { value: string; label: string }) { return <div><strong>{value}</strong><span>{label}</span></div>; }
function SystemRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="system-row"><span>{icon}</span><p>{label}</p><b>{value}</b></div>; }
function SummaryRow({ label, value, positive, negative }: { label: string; value: string; positive?: boolean; negative?: boolean }) { return <div className="summary-row"><span>{label}</span><b className={positive ? 'profit' : negative ? 'loss' : ''}>{value}</b></div>; }
function FlowStep({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) { return <div className="flow-step"><div>{icon}</div><strong>{title}</strong><span>{subtitle}</span></div>; }
function News({ time, text }: { time: string; text: string }) { return <div className="activity-row"><span>{time}</span><p>{text}</p></div>; }
