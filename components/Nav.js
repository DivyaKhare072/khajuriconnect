'use client';
import Link from 'next/link';import {ShoppingBag} from 'lucide-react';
export default function Nav({cartCount=0}){return <nav className="nav"><Link className="brand" href="/"><span className="brand-mark">K</span>KhajuriConnect</Link><div className="navlinks"><Link href="/shop">Books</Link><Link href="/stores">Stores</Link><Link href="/#market">Discover Khajuri</Link><Link href="/seller">For Sellers</Link></div><Link className="btn dark" href="/shop"><ShoppingBag size={16}/> {cartCount?`Cart (${cartCount})`:'Shop'}</Link></nav>}
