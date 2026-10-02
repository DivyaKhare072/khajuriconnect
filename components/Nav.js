'use client';
import Link from 'next/link';import {ShoppingBag} from 'lucide-react';import {useCart} from './CartProvider';
export default function Nav(){const {count}=useCart();return <nav className="nav"><Link className="brand" href="/"><span className="brand-mark">K</span>KhajuriConnect</Link><div className="navlinks"><Link href="/shop">Books</Link><Link href="/stores">Stores</Link><Link href="/#market">Discover Khajuri</Link><Link href="/seller">For Sellers</Link></div><Link className="btn dark" href="/cart"><ShoppingBag size={16}/> Cart ({count})</Link></nav>}
