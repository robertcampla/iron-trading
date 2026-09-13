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
  { name: 'APEX 50K (EOD)', type: 'Fondeada', equity: '$51,384', pnl: '+$384', safe: 82, trades: 3, risk: '$116', available: '$1,736', active: true },
  { name: 'APEX 50K (EOD)', type: 'Evaluación', equity: '$50,742', pnl: '+$278', safe: 64, trades: 2, risk: '$220', available: '$980', active: true },
  { name: 'TOPSTEP 50K', type: 'Evaluación', equity: '$49,865', pnl: '-$116', safe: 48, trades: 1, risk: '$310', available: '$540', active: false },
];

export default function Home() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">IT</div>
          <div>
            <div className="brand-name">IRON TRADING</div>
            <div className="brand-tag">FUNDED TRADING INTELLIGENCE</div>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map(([Icon, label], index) => (
            <button className={`nav-item ${index === 0 ? 'active' : ''}`} key={label}>
              <Icon size={18} strokeWidth={1.75} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-quote">
          <div className="quote-rule" />
          <p>DISCIPLINA HOY.<br />RESULTADOS SIEMPRE.</p>
          <span>TRADE WITH PURPOSE</span>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div className="searchbox">
            <Search size={16} />
            <span>Buscar...</span>
            <kbd>⌘ K</kbd>
          </div>

          <div className="market-status">
            <span className="status-dot" />
            <div>
              <strong>Mercado conectado</strong>
              <small>MNQ · NQ · ES</small>
            </div>
          </div>

          <div className="top-actions">
            <button className="icon-button" aria-label="Notificaciones"><Bell size={18} /></button>
            <div className="profile">
              <div className="avatar">RC</div>
              <div><b>Roberto C.</b><span>Plan Pro</span></div>
              <ChevronDown size={15} />
            </div>
          </div>
        </header>

        <div className="content">
          <section className="hero-card">
            <div className="mountain mountain-one" />
            <div className="mountain mountain-two" />
            <div className="hero-glow" />

            <div className="hero-copy">
              <span className="eyebrow copper">IRON TRADING · CONTROL CENTER</span>
              <h1>Buenas tardes, Roberto.</h1>
              <p>Todo bajo control. Tus cuentas, riesgo y automatización en un solo lugar.</p>
            </div>

            <div className="hero-time">
              <span>Domingo, 13 de Septiembre de 2026</span>
              <strong>04:26 PM</strong>
              <small>Arizona · MST</small>
            </div>

            <div className="hero-stats">
              <Metric value="3" label="Cuentas activas" />
              <Metric value="$150,000" label="Capital total" />
              <Metric value="+$742" label="P&L hoy" positive />
              <Metric value="82%" label="Margen de seguridad" />
              <Metric value="12" label="Operaciones hoy" />
            </div>
          </section>

          <section className="dashboard-grid">
            <div className="accounts-panel panel">
              <div className="section-head">
                <div>
                  <span className="eyebrow">PORTFOLIO</span>
                  <h2>Mis Cuentas de Fondeo</h2>
                </div>
                <div className="account-controls">
                  <button className="filter active">Activas</button>
                  <button className="filter">Evaluación</button>
                  <button className="filter">Fondeadas</button>
                  <button className="outline-button"><Plus size={15} /> Agregar cuenta</button>
                </div>
              </div>

              <div className="account-grid">
                {accounts.map((account, i) => (
                  <article className={`account-card ${i === 0 ? 'selected' : ''}`} key={`${account.name}-${i}`}>
                    <div className="account-top">
                      <div className="prop-logo">{i === 2 ? 'T' : 'A'}</div>
                      <div>
                        <h3>{account.name}</h3>
                        <span className={`status-pill ${account.type === 'Fondeada' ? 'funded' : 'evaluation'}`}>{account.type}</span>
                      </div>
                    </div>

                    <div className="account-money">
                      <div><span>Equity actual</span><strong>{account.equity}</strong></div>
                      <div className={account.pnl.startsWith('+') ? 'profit' : 'loss'}><span>Hoy</span><strong>{account.pnl}</strong></div>
                    </div>

                    <div className="risk-labels"><span>Margen de seguridad</span><b>{account.safe}%</b></div>
                    <div className="safety-line"><div style={{ width: `${account.safe}%` }} /></div>

                    <div className={`autopilot-chip ${account.active ? '' : 'paused'}`}>{account.active ? '● AUTOPILOT ACTIVO' : '● PAUSADO'}</div>

                    <div className="mini-stats">
                      <MiniStat value={String(account.trades)} label="Trades" />
                      <MiniStat value={account.risk} label="Riesgo usado" />
                      <MiniStat value={account.available} label="Disponible" />
                    </div>
                  </article>
                ))}

                <button className="add-account-card">
                  <div className="plus-ring"><Plus size={22} /></div>
                  <strong>Agregar nueva cuenta</strong>
                  <span>Centraliza todas tus cuentas en un solo lugar.</span>
                </button>
              </div>
            </div>

            <aside className="right-stack">
              <div className="panel system-panel">
                <div className="section-head compact"><h2>Estado del Sistema</h2><span className="system-badge">● Operativo</span></div>
                <SystemRow icon={<Link2 size={15} />} label="Conexión NinjaTrader" value="Conectado" />
                <SystemRow icon={<Activity size={15} />} label="Ejecución" value="Lista" />
                <SystemRow icon={<Sparkles size={15} />} label="Motor de estrategias" value="Activo" />
                <SystemRow icon={<ShieldCheck size={15} />} label="Gestión de riesgo" value="Protegido" />
                <SystemRow icon={<Bell size={15} />} label="Notificaciones" value="Activadas" />
              </div>

              <div className="panel daily-panel">
                <div className="section-head compact"><h2>Resumen de Hoy</h2></div>
                <SummaryRow label="P&L del día" value="+$742" positive />
                <SummaryRow label="Trades" value="6" />
                <SummaryRow label="Win Rate" value="66.7%" />
                <SummaryRow label="Mejor operación" value="+$312" positive />
                <SummaryRow label="Peor operación" value="-$88" negative />
                <SummaryRow label="Tiempo en mercado" value="2h 14m" />
              </div>
            </aside>
          </section>

          <section className="autopilot-panel panel">
            <div className="section-head compact autopilot-head">
              <div className="autopilot-title"><Bot size={18} /><h2>Iron Autopilot Global</h2><span className="running-pill">● RUNNING</span></div>
              <span className="eyebrow">LIVE DECISION FLOW</span>
            </div>

            <div className="autopilot-flow">
              <FlowStep icon={<TrendingUp size={20} />} title="Mercado" subtitle="Analizando" />
              <div className="flow-line" />
              <FlowStep icon={<Target size={20} />} title="Estrategia" subtitle="Buscando setup" />
              <div className="flow-line" />
              <FlowStep icon={<ShieldCheck size={20} />} title="Riesgo" subtitle="Validando" />
              <div className="flow-line" />
              <FlowStep icon={<CircleDollarSign size={20} />} title="Ejecución" subtitle="Lista" />
              <div className="current-state">
                <span>Estado actual</span>
                <strong>SEARCHING OPPORTUNITY</strong>
                <p>Esperando una configuración de alta probabilidad.</p>
              </div>
            </div>
          </section>

          <section className="analytics-grid">
            <div className="panel analytics-card">
              <div className="section-head compact"><h2>Rendimiento Semanal</h2><span className="profit">+2.4%</span></div>
              <div className="bars">
                {[42, 61, 32, 69, 85, 71, 96].map((h, i) => <div key={i} className={i === 2 ? 'bar negative' : 'bar'} style={{ height: `${h}%` }} />)}
              </div>
              <div className="days"><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span></div>
            </div>

            <div className="panel analytics-card trade-distribution">
              <div className="section-head compact"><h2>Distribución de Operaciones</h2></div>
              <div className="donut-row">
                <div className="donut"><div><strong>18</strong><span>Total</span></div></div>
                <div className="legend">
                  <div><span className="dot long" />Long <b>11 (61%)</b></div>
                  <div><span className="dot short" />Short <b>7 (39%)</b></div>
                </div>
              </div>
            </div>

            <div className="panel analytics-card news-card">
              <div className="section-head compact"><h2>Actividad Reciente</h2><button className="text-button">Ver más</button></div>
              <div className="news-list">
                <News time="15:40" text="Iron Risk Engine mantiene la cuenta en estado seguro." />
                <News time="15:32" text="Autopilot continúa buscando configuración MNQ." />
                <News time="15:25" text="Profit lock disponible al superar la meta diaria." />
                <News time="15:18" text="Bridge preparado para integración Replay/SIM." />
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function Metric({ value, label, positive = false }: { value: string; label: string; positive?: boolean }) {
  return <div className="metric"><strong className={positive ? 'profit' : ''}>{value}</strong><span>{label}</span></div>;
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return <div><strong>{value}</strong><span>{label}</span></div>;
}

function SystemRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="system-row"><span className="system-icon">{icon}</span><span>{label}</span><b>{value}</b></div>;
}

function SummaryRow({ label, value, positive, negative }: { label: string; value: string; positive?: boolean; negative?: boolean }) {
  return <div className="summary-row"><span>{label}</span><b className={positive ? 'profit' : negative ? 'loss' : ''}>{value}</b></div>;
}

function FlowStep({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return <div className="flow-step"><div className="flow-icon">{icon}</div><strong>{title}</strong><span>{subtitle}</span></div>;
}

function News({ time, text }: { time: string; text: string }) {
  return <div className="news-item"><span>{time}</span><p>{text}</p></div>;
}
