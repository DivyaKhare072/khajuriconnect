"use client";
import {useEffect,useState} from 'react';
export default function CursorTrail(){
 const [point,setPoint]=useState({x:-100,y:-100}); const [visible,setVisible]=useState(false);
 useEffect(()=>{if(window.matchMedia('(pointer: coarse)').matches||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const move=e=>{setPoint({x:e.clientX,y:e.clientY});setVisible(true)};const leave=()=>setVisible(false);
 window.addEventListener('pointermove',move,{passive:true});document.addEventListener('pointerleave',leave);
 return()=>{window.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',leave)};
 },[]);
 return <div aria-hidden="true" className={`cursor-orb ${visible?'is-visible':''}`} style={{left:point.x,top:point.y}}/>;
}
