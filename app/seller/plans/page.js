import Nav from '../../../components/Nav';import SellerPricingPlans from '../../../components/SellerPricingPlans';import Link from 'next/link';
export default function Plans(){return <><Nav/><main className="page"><div className="container"><Link href="/seller" className="btn">← Seller dashboard</Link><SellerPricingPlans/></div></main></>}
