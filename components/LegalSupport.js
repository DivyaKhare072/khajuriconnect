'use client';
import Link from 'next/link';
import {FileText,Scale,Store,ShieldCheck,LockKeyhole,RefreshCw,Ban,HeartHandshake,LifeBuoy,BookOpen,ChevronRight} from 'lucide-react';
import {policies} from '../lib/policies';
const icons={FileText,Scale,Store,ShieldCheck,LockKeyhole,RefreshCw,Ban,HeartHandshake,LifeBuoy,BookOpen};
export default function LegalSupport(){return <section className="legal-panel"><div className="kicker">Your rights & responsibilities</div><h2 className="serif">Legal & Support</h2><p className="meta">Clear policies help keep our student-first marketplace fair and trustworthy.</p><div className="legal-list">{policies.map(p=>{const Icon=icons[p.icon]||FileText;return <Link className="legal-link" href={`/policies/${p.slug}`} key={p.slug}><span className="legal-icon"><Icon size={18}/></span><span className="legal-link-copy"><strong>{p.title}</strong><small>{p.description}</small></span><ChevronRight size={18}/></Link>})}</div></section>}
