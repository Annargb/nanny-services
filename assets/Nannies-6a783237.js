import{u as r,j as t,i as a,r as m,a as d,b as u,f as j}from"./index-a0c67e7e.js";const f=e=>e.nannies.nannyList,b=e=>e.nannies.currentPage,w=e=>{const o=new Date(e),n=new Date().getTime()-o.getTime();return Math.floor(n/(1e3*60*60*24*365.25))},$="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let k=(e=21)=>{let o="",i=crypto.getRandomValues(new Uint8Array(e));for(;e--;)o+=$[i[e]&63];return o};const v=r.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 48px;
`,y=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,R=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background-color: ${e=>e.theme.colors.avatarBorder};
`,A=r.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: ${e=>e.theme.colors.green};
`,C=r.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};
`,T=r.p`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.black};
`,N=r.div`
  display: flex;
  gap: 8px;
`,z=r.svg`
  width: 16px;
  height: 16px;
`,B=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${e=>e.theme.colors.black};
`,D=({reviews:e})=>t.jsx(v,{children:e.map(o=>t.jsxs("li",{children:[t.jsxs(y,{children:[t.jsx(R,{children:t.jsx(A,{children:o.reviewer.charAt(0).toUpperCase()})}),t.jsxs("div",{children:[t.jsx(T,{children:o.reviewer}),t.jsxs(N,{children:[t.jsx(z,{children:t.jsx("use",{href:`${a}#star`})}),t.jsx(B,{children:o.rating.toFixed(1)})]})]})]}),t.jsx(C,{children:o.comment})]},k()))}),L=r.li`
  display: flex;
  gap: 24px;
  width: 1184px;
  ///
  min-height: 318px;
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 32px;
  background-color: ${e=>e.theme.colors.white};

  &:last-child {
    margin-bottom: 0;
  }
`,W=r.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 2px solid ${e=>e.theme.colors.avatarBorder};
  border-radius: 30px;
`,I=r.span`
  position: absolute;
  top: 9px;
  right: 9px;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: ${e=>e.theme.colors.white};

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${e=>e.theme.colors.activeGreen};
  }
`,M=r.img`
  border-radius: 15px;
  width: 96px;
  height: 96px;
`,S=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 992px;
`,G=r.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textGray};
`,P=r.ul`
  display: flex;
  gap: 16px;
  /* flex-shrink: 0; */
  /* margin: 0 48px 8px 0; */
  margin-bottom: 8px;
  /* margin-right: 48px; */
`,E=r.div`
  display: flex;
  gap: 48px;
`,U=r.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${e=>e.theme.colors.black};
`,x=r.li`
  display: flex;
  align-items: center;
  /* flex-shrink: 0; */
  /* gap: 8px; */

  /* &:nth-child(-n + 2) {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 2px;
      width: 2px;
      height: 16px;
      background-color: ${e=>e.theme.colors.textBorder};
    }
  } */

  /* padding-right: 16px; */
  /* border-right: 1px solid ${e=>e.theme.colors.textBorder}; */
`,g=r.div`
  flex-shrink: 0;
  width: 2px;
  height: 16px;
  margin-left: 16px;
  background-color: ${e=>e.theme.colors.textBorder};
`,p=r.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
`,_=r.span`
  color: ${e=>e.theme.colors.activeGreen};
`,F=r.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`,H=r.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 24px;
  color: ${e=>e.theme.colors.black};
`,K=r.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,s=r.li`
  border-radius: 24px;
  padding: 8px 16px;
  background-color: ${e=>e.theme.colors.grayBackgraund};
`,c=r.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textGray};
`,l=r.span`
  color: ${e=>e.theme.colors.black};
`,V=r.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};

  margin-bottom: ${({$biggerMargin:e})=>{switch(e){case!0:return"48px";default:return"14px"}}};
  /* margin-bottom: 14px; */
`,q=r.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${e=>e.theme.colors.black};
`,J=r.button`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`,O=r.svg`
  width: 26px;
  height: 22px;
`,Q=r.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.white};
  border-radius: 30px;
  padding: 14px 26px;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.green};
  background-color: ${e=>e.theme.colors.green};
  width: 215px;
  transition:
    color 250ms ${e=>e.theme.transition},
    background-color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.green};
    background-color: ${e=>e.theme.colors.white};
  }
`,X=({nanny:e})=>{const[o,i]=m.useState(!1),n=()=>{i(!0)};return t.jsxs(L,{children:[t.jsxs(W,{children:[t.jsx(M,{src:e.avatar_url,alt:e.name}),t.jsx(I,{})]}),t.jsxs("div",{children:[t.jsxs(S,{children:[t.jsx(G,{children:"Nanny"}),t.jsxs(E,{children:[t.jsxs(P,{children:[t.jsxs(x,{children:[t.jsx(U,{children:t.jsx("use",{href:`${a}#map-pin`})}),t.jsx(p,{children:e.location}),t.jsx(g,{})]}),t.jsxs(x,{children:[t.jsx(F,{children:t.jsx("use",{href:`${a}#star`})}),t.jsxs(p,{children:["Rating: ",e.rating]}),t.jsx(g,{})]}),t.jsx(x,{children:t.jsxs(p,{children:["Price / 1 hour:"," ",t.jsxs(_,{children:[e.price_per_hour,"$"]})]})})]}),t.jsx(J,{type:"button",children:t.jsx(O,{children:t.jsx("use",{href:`${a}#heart`})})})]})]}),t.jsx(H,{children:e.name}),t.jsxs(K,{children:[t.jsx(s,{children:t.jsxs(c,{children:["Age:"," ",t.jsx(l,{style:{textDecoration:"underline",textDecorationSkipInk:"none"},children:w(e.birthday)})]})}),t.jsx(s,{children:t.jsxs(c,{children:["Experience: ",t.jsx(l,{children:e.experience})]})}),t.jsx(s,{children:t.jsxs(c,{children:["Kids Age: ",t.jsx(l,{children:e.kids_age})]})}),t.jsx(s,{children:t.jsxs(c,{children:["Characters:"," ",t.jsx(l,{children:e.characters.map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(", ")})]})}),t.jsx(s,{children:t.jsxs(c,{children:["Education: ",t.jsx(l,{children:e.education})]})})]}),t.jsx(V,{$biggerMargin:o,children:e.about}),!o&&t.jsx(q,{type:"button",onClick:n,children:"Read more"}),o&&t.jsxs(t.Fragment,{children:[t.jsx(D,{reviews:e.reviews}),t.jsx(Q,{type:"button",children:"Make an appointment"})]})]})]})},Y=r.div`
  padding-top: 64px;
  background-color: #f3f3f3;
`,ee=()=>{const e=d(b),o=d(f),i=u();return m.useEffect(()=>{i(j(e))},[e,i]),t.jsx(Y,{children:t.jsx("ul",{children:o.map(n=>t.jsx(X,{nanny:n},n.id))})})};export{ee as default};
