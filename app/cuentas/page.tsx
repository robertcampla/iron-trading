'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, BriefcaseBusiness, Plus, ShieldCheck, Target, TrendingDown, Gauge, Trash2 } from 'lucide-react';
import './cuentas.css';

type Account = {
  id:number; firm:string; name:string; stage:'Evaluación'|'Fondeada'; size:number; balance:number;
  target:number; drawdown:number; dailyLoss:number; maxContracts:number;
};

const seed:Account[]=[
 {id:1,firm:'Apex',name:'APEX 50K EOD',stage:'Fondeada',size:50000,balance:51384,target:3000,drawdown:2500,dailyLoss:1000,maxContracts:10},
 {id:2,firm:'Apex',name:'APEX 50K EOD',stage:'Evaluación',size:50000,balance:50742,target:3000,drawdown:2500,dailyLoss:1000,maxContracts:10},
];

const money=(n:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);

export default function CuentasPage(){
 const [accounts,setAccounts]=useState(seed);
 const [form,setForm]=useState<Omit<Account,'id'>>({firm:'Apex',name:'APEX 50K EOD',stage:'Evaluación',size:50000,balance:50000,target:3000,drawdown:2500,dailyLoss:1000,maxContracts:10});
 const [showForm,setShowForm]=useState(false);
 const totals=useMemo(()=>({capital:accounts.reduce((s,a)=>s+a.size,0),equity:accounts.reduce((s,a)=>s+a.balance,0),funded:accounts.filter(a=>a.stage==='Fondeada').length}),[accounts]);
 const setNum=(key:keyof typeof form,value:string)=>setForm(v=>({...v,[key]:Number(value)||0}));
 const add=()=>{setAccounts(a=>[...a,{...form,id:Date.now()}]);setShowForm(false)};
 return <main className="accounts-page">
   <header className="accounts-top"><Link href="/" className="back"><ArrowLeft size={17}/> Inicio</Link><div><span>IRON TRADING</span><b>CUENTAS</b></div><button className="primary" onClick={()=>setShowForm(!showForm)}><Plus size={16}/> Agregar cuenta</button></header>
   <section className="accounts-wrap">
    <div className="accounts-title"><span>IRON ACCOUNT CONTROL</span><h1>Mis Cuentas de Fondeo</h1><p>Configura cada cuenta y visualiza automáticamente su exposición, objetivo y margen frente al drawdown.</p></div>
    <div className="account-kpis"><Kpi icon={<BriefcaseBusiness/>} label="Cuentas" value={String(accounts.length)}/><Kpi icon={<Gauge/>} label="Capital administrado" value={money(totals.capital)}/><Kpi icon={<TrendingDown/>} label="Equity combinado" value={money(totals.equity)}/><Kpi icon={<ShieldCheck/>} label="Cuentas fondeadas" value={String(totals.funded)}/></div>
    {showForm&&<section className="account-form panel"><div className="form-head"><div><span>NUEVA CUENTA</span><h2>Reglas de la cuenta</h2></div><button onClick={()=>setShowForm(false)}>Cancelar</button></div><div className="form-grid">
      <Field label="Prop Firm"><select value={form.firm} onChange={e=>setForm(v=>({...v,firm:e.target.value}))}><option>Apex</option><option>Topstep</option><option>Tradeify</option><option>Otra</option></select></Field>
      <Field label="Estado"><select value={form.stage} onChange={e=>setForm(v=>({...v,stage:e.target.value as Account['stage']}))}><option>Evaluación</option><option>Fondeada</option></select></Field>
      <Field label="Nombre"><input value={form.name} onChange={e=>setForm(v=>({...v,name:e.target.value}))}/></Field>
      <Field label="Tamaño de cuenta ($)"><input type="number" value={form.size} onChange={e=>setNum('size',e.target.value)}/></Field>
      <Field label="Balance actual ($)"><input type="number" value={form.balance} onChange={e=>setNum('balance',e.target.value)}/></Field>
      <Field label="Profit target ($)"><input type="number" value={form.target} onChange={e=>setNum('target',e.target.value)}/></Field>
      <Field label="Drawdown máximo ($)"><input type="number" value={form.drawdown} onChange={e=>setNum('drawdown',e.target.value)}/></Field>
      <Field label="Pérdida diaria máxima ($)"><input type="number" value={form.dailyLoss} onChange={e=>setNum('dailyLoss',e.target.value)}/></Field>
      <Field label="Máximo contratos"><input type="number" value={form.maxContracts} onChange={e=>setNum('maxContracts',e.target.value)}/></Field>
    </div><div className="form-actions"><button className="primary" onClick={add}><Plus size={16}/> Guardar cuenta</button></div></section>}
    <section className="accounts-list"><div className="section-head"><div><span>PORTAFOLIO</span><h2>Cuentas configuradas</h2></div><b>{accounts.length} total</b></div>
      <div className="account-table-head"><span>Cuenta</span><span>Equity</span><span>Objetivo</span><span>Drawdown</span><span>Seguridad</span><span>Contratos</span><span/></div>
      {accounts.map(a=><AccountRow key={a.id} a={a} remove={()=>setAccounts(x=>x.filter(v=>v.id!==a.id))}/>) }
      {!accounts.length&&<div className="empty">No hay cuentas configuradas.</div>}
    </section>
   </section>
 </main>
}

function AccountRow({a,remove}:{a:Account;remove:()=>void}){
 const profit=a.balance-a.size;
 const remaining=Math.max(0,a.target-profit);
 const floor=a.size-a.drawdown;
 const distance=Math.max(0,a.balance-floor);
 const safety=Math.max(0,Math.min(100,Math.round((distance/a.drawdown)*100)));
 const progress=Math.max(0,Math.min(100,Math.round((profit/a.target)*100)));
 return <article className="account-row panel"><div className="account-id"><div>{a.firm==='Apex'?'A':a.firm[0]}</div><span><b>{a.name}</b><small>{a.firm} · <em className={a.stage==='Fondeada'?'funded':''}>{a.stage}</em></small></span></div><div><strong>{money(a.balance)}</strong><small>{profit>=0?'+':''}{money(profit)} vs inicio</small></div><div><strong>{money(remaining)}</strong><small>{progress}% completado</small></div><div><strong>{money(distance)}</strong><small>Piso {money(floor)}</small></div><div className="safety"><strong>{safety}%</strong><span><i style={{width:`${safety}%`}}/></span></div><div><strong>{a.maxContracts}</strong><small>Máximo</small></div><button className="trash" onClick={remove} aria-label="Eliminar cuenta"><Trash2 size={16}/></button></article>
}
function Kpi({icon,label,value}:{icon:React.ReactNode;label:string;value:string}){return <div className="kpi panel"><span>{icon}</span><div><strong>{value}</strong><small>{label}</small></div></div>}
function Field({label,children}:{label:string;children:React.ReactNode}){return <label className="field"><span>{label}</span>{children}</label>}
