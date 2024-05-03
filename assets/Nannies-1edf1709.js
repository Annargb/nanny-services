import{u as n,h as b,j as t,r as s,a as p,b as g,f as y,c as k}from"./index-9ea3385d.js";import{N as v,a as j,b as w}from"./NotFound-4c3b37ad.js";const N=e=>e.nannies.nannyList,C=e=>e.nannies.isVisibleButton,L=e=>e.nannies.error,S=e=>e.nannies.loading,M="#4fa94d",B={"aria-busy":!0,role:"progressbar"},E=n.div`
  display: ${e=>e.$visible?"flex":"none"};
`,P="http://www.w3.org/2000/svg",a=242.776657104492,T=1.6,D=b`
12.5% {
  stroke-dasharray: ${a*.14}px, ${a}px;
  stroke-dashoffset: -${a*.11}px;
}
43.75% {
  stroke-dasharray: ${a*.35}px, ${a}px;
  stroke-dashoffset: -${a*.35}px;
}
100% {
  stroke-dasharray: ${a*.01}px, ${a}px;
  stroke-dashoffset: -${a*.99}px;
}
`;n.path`
  stroke-dasharray: ${a*.01}px, ${a};
  stroke-dashoffset: 0;
  animation: ${D} ${T}s linear infinite;
`;const R=b`
to {
   transform: rotate(360deg);
 }
`;n.svg`
  animation: ${R} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;n.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const V=({height:e=80,width:u=80,radius:i=9,color:d=M,ariaLabel:h="three-dots-loading",wrapperStyle:r,wrapperClass:c,visible:o=!0})=>t.jsx(E,{style:r,$visible:o,className:c,"data-testid":"three-dots-loading","aria-label":h,...B,children:t.jsxs("svg",{width:u,height:e,viewBox:"0 0 120 30",xmlns:P,fill:d,"data-testid":"three-dots-svg",children:[t.jsxs("circle",{cx:"15",cy:"15",r:Number(i)+6,children:[t.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"60",cy:"15",r:i,attributeName:"fill-opacity",from:"1",to:"0.3",children:[t.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"105",cy:"15",r:Number(i)+6,children:[t.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),z=b`
to {
   stroke-dashoffset: 136;
 }
`;n.polygon`
  stroke-dasharray: 17;
  animation: ${z} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;n.svg`
  transform-origin: 50% 65%;
`;const F=()=>t.jsx(V,{visible:!0,height:"80",width:"80",color:"#103931",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{position:"absolute",top:"50%",left:"50%",margin:"auto"},wrapperClass:""}),q=n.div`
  padding: 64px 96px 100px 96px;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.grayBackgraund};

  @media screen and (max-width: 1024px) {
    padding: 64px 20px;
  }
`,H=n.ul`
  margin-bottom: 64px;
`,U=n.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.white};
  border-radius: 30px;
  display: block;
  padding: 14px 38px;
  margin: 0 auto;
  width: 159px;
  height: 48px;
  border: 1px solid ${e=>e.theme.colors.green};
  background-color: ${e=>e.theme.colors.green};
  transition:
    color 250ms ${e=>e.theme.transition},
    background-color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.green};
    background-color: ${e=>e.theme.colors.white};
  }
`,G=()=>{const[e,u]=s.useState(0),i=p(C),d=p(N),h=p(L),r=p(S),c=g(),o=s.useRef(null),[f,x]=s.useState(1),$=()=>{u(o.current.scrollTop)};s.useEffect(()=>{c(y(f))},[f,c]),s.useEffect(()=>{o.current&&(o.current.scrollTop=e)},[e]),s.useEffect(()=>{!r||!o.current||(o.current.scrollTop=o.current.scrollHeight)},[r]);const m=l=>{console.log(`Вибрана опція: ${l.value}`),c(k(l.value))};return t.jsxs(q,{children:[t.jsx(v,{handleOptionChange:m}),!d.length&&!h&&!r&&t.jsx(j,{text:"There are no matching options for your request"}),r&&!h?t.jsx(F,{}):t.jsx(H,{ref:o,onScroll:$,children:d.map(l=>t.jsx(w,{nanny:l},l.id))}),i&&!r&&t.jsx(U,{type:"button",onClick:()=>{x(f+1)},children:"Load more"})]})};export{G as default};
