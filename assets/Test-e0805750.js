import{d as y,r as $,x as f,f as c,w as v,R as g,o as k,i as u,S as w,T as C}from"./index-d7709c43.js";const R={style:{height:"400px"}},V=y({__name:"Test",setup(T){const _=(e=10,t="column-",a)=>Array.from({length:e}).map((r,s)=>({...a,key:`${t}${s}`,dataKey:`${t}${s}`,title:`Column ${s}`,width:150})),i=(e,t=200,a="row-")=>Array.from({length:t}).map((r,s)=>e.reduce((n,p,h)=>(n[p.dataKey]=`Row ${s} - Col ${h}`,n),{id:`${a}${s}`,parentId:null})),o=_(10);o.unshift({key:"column-n-1",width:50,title:"Row No.",cellRenderer:({rowIndex:e})=>`${e+1}`,align:"center"});const m=i(o,200),d=({columnIndex:e})=>{const t=`hovering-col-${e}`;return{"data-key":t,onMouseenter:()=>{l.value=t},onMouseleave:()=>{l.value=""}}},l=$("");return(e,t)=>{const a=C,r=g;return k(),f("div",R,[c(r,null,{default:v(({height:s,width:n})=>[c(a,{columns:u(o),"cell-props":d,class:w(l.value),data:u(m),width:n,height:s},null,8,["columns","class","data","width","height"])]),_:1})])}}});export{V as default};
