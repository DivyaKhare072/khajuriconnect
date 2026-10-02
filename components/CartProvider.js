'use client';
import {createContext,useCallback,useContext,useEffect,useMemo,useState} from 'react';
const CartContext=createContext(null);
export function CartProvider({children}){
 const [items,setItems]=useState([]); const [ready,setReady]=useState(false);
 useEffect(()=>{try{const saved=localStorage.getItem('khajuri-cart-v1');if(saved)setItems(JSON.parse(saved));}catch{}setReady(true)},[]);
 useEffect(()=>{if(ready)localStorage.setItem('khajuri-cart-v1',JSON.stringify(items))},[items,ready]);
 const add=useCallback(book=>setItems(old=>{const found=old.find(x=>x.id===book.id);return found?old.map(x=>x.id===book.id?{...x,qty:x.qty+1}:x):[...old,{...book,qty:1}]}),[]);
 const remove=useCallback(id=>setItems(old=>old.filter(x=>x.id!==id)),[]);
 const setQty=useCallback((id,qty)=>setItems(old=>qty<1?old.filter(x=>x.id!==id):old.map(x=>x.id===id?{...x,qty:Math.min(20,qty)}:x)),[]);
 const clear=useCallback(()=>setItems([]),[]);
 const count=items.reduce((sum,x)=>sum+x.qty,0); const total=items.reduce((sum,x)=>sum+x.price*x.qty,0);
 const value=useMemo(()=>({items,add,remove,setQty,clear,count,total,ready}),[items,add,remove,setQty,clear,count,total,ready]);
 return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export function useCart(){const value=useContext(CartContext);if(!value)throw new Error('useCart must be used inside CartProvider');return value;}
