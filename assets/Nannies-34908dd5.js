import{u as o,j as t,i as l,F as L,a as M,E as N,b as T,c as B,M as v,r as m,d as k,t as W,e as f,f as G,g as D}from"./index-31d67081.js";const E=e=>e.nannies.nannyList,I=e=>e.nannies.currentPage,P="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let q=(e=21)=>{let r="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)r+=P[n[e]&63];return r};const O=o.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 48px;
`,_=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,H=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background-color: ${e=>e.theme.colors.avatarBorder};
`,U=o.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: ${e=>e.theme.colors.green};
`,V=o.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};
`,Z=o.p`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.black};
`,K=o.div`
  display: flex;
  gap: 8px;
`,Y=o.svg`
  width: 16px;
  height: 16px;
`,J=o.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${e=>e.theme.colors.black};
`,Q=({reviews:e})=>t.jsx(O,{children:e.map(r=>t.jsxs("li",{children:[t.jsxs(_,{children:[t.jsx(H,{children:t.jsx(U,{children:r.reviewer.charAt(0).toUpperCase()})}),t.jsxs("div",{children:[t.jsx(Z,{children:r.reviewer}),t.jsxs(K,{children:[t.jsx(Y,{children:t.jsx("use",{href:`${l}#star`})}),t.jsx(J,{children:r.rating.toFixed(1)})]})]})]}),t.jsx(V,{children:r.comment})]},q()))}),X=o.li`
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
`,ee=o.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 2px solid ${e=>e.theme.colors.avatarBorder};
  border-radius: 30px;
`,te=o.span`
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
`,oe=o.img`
  border-radius: 15px;
  width: 96px;
  height: 96px;
`,re=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 992px;
  margin-bottom: 8px;
`,ne=o.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textGray};
`,ie=o.ul`
  display: flex;
  gap: 16px;
`,se=o.div`
  display: flex;
  gap: 48px;
  align-items: center;
`,le=o.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${e=>e.theme.colors.black};
`,g=o.li`
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
`,w=o.span`
  display: inline-block;
  flex-shrink: 0;
  width: 2px;
  height: 16px;
  margin-left: 16px;
  background-color: ${e=>e.theme.colors.textBorder};
`,u=o.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
`,ae=o.span`
  color: ${e=>e.theme.colors.activeGreen};
`,ce=o.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`,he=o.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 24px;
  color: ${e=>e.theme.colors.black};
`,pe=o.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};

  margin-bottom: ${({$biggerMargin:e})=>{switch(e){case!0:return"48px";default:return"14px"}}};
`,de=o.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${e=>e.theme.colors.black};
`,xe=o.button`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=o.svg`
  width: 26px;
  height: 22px;
  fill: ${e=>e.theme.colors.black};
  transition: fill 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    fill: ${e=>e.theme.colors.green};
  }
`,me=o(y)`
  fill: ${e=>e.theme.colors.green};
`,ge=o.button`
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
`,ue=e=>{const r=new Date(e),i=new Date().getTime()-r.getTime();return Math.floor(i/(1e3*60*60*24*365.25))},be=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,c=o.li`
  border-radius: 24px;
  padding: 8px 16px;
  background-color: ${e=>e.theme.colors.grayBackgraund};
`,h=o.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textGray};
`,p=o.span`
  color: ${e=>e.theme.colors.black};
`,je=({nanny:e})=>t.jsxs(be,{children:[t.jsx(c,{children:t.jsxs(h,{children:["Age:"," ",t.jsx(p,{style:{textDecoration:"underline",textDecorationSkipInk:"none"},children:ue(e.birthday)})]})}),t.jsx(c,{children:t.jsxs(h,{children:["Experience: ",t.jsx(p,{children:e.experience})]})}),t.jsx(c,{children:t.jsxs(h,{children:["Kids Age: ",t.jsx(p,{children:e.kids_age})]})}),t.jsx(c,{children:t.jsxs(h,{children:["Characters:"," ",t.jsx(p,{children:e.characters.map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(", ")})]})}),t.jsx(c,{children:t.jsxs(h,{children:["Education: ",t.jsx(p,{children:e.education})]})})]}),fe=o.div`
  padding-right: 32px;
`,we=o(L)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`,$e=o.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.black};
  margin-bottom: 20px;
`,ve=o.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};
  margin-bottom: 40px;
`,ke=o.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,ye=o.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
`,Ce=o.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${e=>e.theme.colors.textGray};
  margin-bottom: 4px;
`,Ae=o.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
`,Fe=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
`,ze=o.button`
  border-radius: 30px;
  padding: 16px 217px;
  width: 470px;
  height: 52px;
  border: 1px solid ${e=>e.theme.colors.green};
  background-color: ${e=>e.theme.colors.green};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.white};
  transition:
    background-color 250ms ${e=>e.theme.transition},
    color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.white};
    color: ${e=>e.theme.colors.green};
  }
`,d=o.label`
  position: relative;
  width: 231px;
`,b=o(d)`
  width: 470px;
`,a=o(M)`
  width: 231px;
  height: 52px;
  padding: 16px 18px;
  font-size: inherit;
  line-height: 1.25;
  border-radius: 12px;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.inputBorderColor};
  outline: none;
  color: ${e=>e.theme.colors.black};
  background-color: transparent;
  transition: border-color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.green};
  }

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${e=>e.theme.colors.black};
  }
`,$=o(a)`
  width: 470px;
`,Se=o(a)`
  width: 470px;
  height: 116px;
  resize: none;
`,s=o(N)`
  position: absolute;
  top: 54px;
  left: 8px;
  font-size: 12px;
  color: ${e=>e.theme.colors.red};
`,Re=o.div`
  overflow-y: auto;
  height: 310px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 160px;
  }

  &::-webkit-scrollbar-track {
  }

  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.textGrayColor};
    border-radius: 7px;
  }
`,Le=o.div`
  padding-right: 24px;
`,Me=({nanny:e})=>t.jsxs(t.Fragment,{children:[t.jsxs(fe,{children:[t.jsx($e,{children:"Make an appointment with a babysitter"}),t.jsx(ve,{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."}),t.jsxs(ke,{children:[t.jsx(ye,{src:e.avatar_url,alt:e.name}),t.jsxs("div",{children:[t.jsx(Ce,{children:"Your nanny"}),t.jsx(Ae,{children:e.name})]})]})]}),t.jsx(Re,{children:t.jsx(Le,{children:t.jsx(T,{initialValues:{addres:"",phone:"+380",childsAge:"",time:"00:00",email:"",name:"",comment:""},validationSchema:B,onSubmit:(r,n)=>{n.setSubmitting(!0),n.resetForm(),window.location.reload()},children:({values:r,setFieldValue:n})=>t.jsxs(we,{children:[t.jsxs(Fe,{children:[t.jsxs(d,{children:[t.jsx(a,{name:"addres",type:"text",placeholder:"Addres"}),t.jsx(s,{name:"addres",component:"span",required:!0})]}),t.jsxs(d,{children:[t.jsx(a,{name:"phone",type:"tel"}),t.jsx(s,{name:"phone",component:"span",required:!0})]}),t.jsxs(d,{children:[t.jsx(a,{name:"childsAge",type:"text",placeholder:"Child's age"}),t.jsx(s,{name:"childsAge",component:"span",required:!0})]}),t.jsxs(d,{children:[t.jsx(a,{name:"time",type:"time",placeholder:"00:00",selected:r.time,onChange:i=>{const{value:x}=i.target;n("time",x)}}),t.jsx(s,{name:"time",component:"span",required:!0})]}),t.jsxs(b,{children:[t.jsx($,{name:"email",type:"email",placeholder:"Email"}),t.jsx(s,{name:"email",component:"span",required:!0})]}),t.jsxs(b,{children:[t.jsx($,{name:"name",type:"text",placeholder:"Father's or mother's name"}),t.jsx(s,{name:"name",component:"span",required:!0})]}),t.jsx(b,{children:t.jsx(Se,{as:"textarea",name:"comment",type:"text",placeholder:"Comment"})})]}),t.jsx(ze,{type:"submit",children:"Send"})]})})})})]}),Ne=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
`,Te=o.svg`
  width: 20px;
  height: 20px;
  transition: fill 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    fill: ${e=>e.theme.colors.green};
  }
`,Be={overlay:{background:"rgba(11, 11, 11, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",maxWidth:"600px",maxHeight:"720px",overflow:"hidden",padding:"64px 32px 64px 64px",borderRadius:"30px",marginRight:"-50%",paddingLeft:"-5px",transform:"translate(-50%, -50%)",backgroundColor:"fbfbfb"}};v.setAppElement("#modal");const We=({children:e,isModalOpen:r,closeModal:n})=>t.jsxs(v,{isOpen:r,onRequestClose:n,style:Be,contentLabel:"Custom Modal",children:[t.jsx(Ne,{type:"button",onClick:n,children:t.jsx(Te,{children:t.jsx("use",{href:`${l}#close`})})}),e]}),Ge=({nanny:e})=>{const[r,n]=m.useState(!1),[i,x]=m.useState(!1),[j,C]=m.useState(!1),A=k(),F=()=>{n(!0),document.body.style.overflow="hidden"},z=()=>{n(!1),document.body.style.overflow=""},S=()=>{x(!0)},R=async()=>{C(!j),await A(W(e))};return t.jsxs(X,{children:[t.jsxs(ee,{children:[t.jsx(oe,{src:e.avatar_url,alt:e.name}),t.jsx(te,{})]}),t.jsxs("div",{children:[t.jsxs(re,{children:[t.jsx(ne,{children:"Nanny"}),t.jsxs(se,{children:[t.jsxs(ie,{children:[t.jsxs(g,{children:[t.jsx(le,{children:t.jsx("use",{href:`${l}#map-pin`})}),t.jsx(u,{children:e.location}),t.jsx(w,{})]}),t.jsxs(g,{children:[t.jsx(ce,{children:t.jsx("use",{href:`${l}#star`})}),t.jsxs(u,{children:["Rating: ",e.rating]}),t.jsx(w,{})]}),t.jsx(g,{children:t.jsxs(u,{children:["Price / 1 hour:"," ",t.jsxs(ae,{children:[e.price_per_hour,"$"]})]})})]}),t.jsx(xe,{type:"button",onClick:R,children:j?t.jsx(me,{children:t.jsx("use",{href:`${l}#full-heart`})}):t.jsx(y,{children:t.jsx("use",{href:`${l}#heart`})})})]})]}),t.jsx(he,{children:e.name}),t.jsx(je,{nanny:e}),t.jsx(pe,{$biggerMargin:i,children:e.about}),!i&&t.jsx(de,{type:"button",onClick:S,children:"Read more"}),i&&t.jsxs(t.Fragment,{children:[t.jsx(Q,{reviews:e.reviews}),t.jsx(ge,{type:"button",onClick:()=>F(),children:"Make an appointment"})]})]}),t.jsx(We,{isModalOpen:r,closeModal:z,children:t.jsx(Me,{nanny:e})})]})},De=o.div`
  padding: 64px 96px 100px 96px;
  background-color: ${e=>e.theme.colors.grayBackgraund};
`,Ee=o.ul`
  margin-bottom: 64px;
`,Ie=o.button`
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
`,Pe=o.select`
  margin-bottom: 32px;
`,qe=o.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${e=>e.theme.colors.textGray};
  margin-bottom: 8px;
`,Oe=()=>{const e=r=>{const n=r.target.value;console.log(`Вибрана опція: ${n}`)};return t.jsxs(t.Fragment,{children:[t.jsx(qe,{children:"Filters"}),t.jsxs(Pe,{onChange:e,children:[t.jsx("option",{value:"az",children:"A to Z"}),t.jsx("option",{value:"za",children:"Z to A"}),t.jsx("option",{value:"less",children:"Less than 10$"}),t.jsx("option",{value:"greater",children:"Greater than 10$"}),t.jsx("option",{value:"popular",children:"Popular"}),t.jsx("option",{value:"notPopular",children:"Not popular"}),t.jsx("option",{value:"all",children:"Show all"})]})]})},He=()=>{const e=f(I),r=f(E),n=k();return m.useEffect(()=>{n(G(e))},[e,n]),t.jsxs(De,{children:[t.jsx(Oe,{}),t.jsx(Ee,{children:r.map(i=>t.jsx(Ge,{nanny:i},i.id))}),t.jsx(Ie,{type:"button",onClick:()=>n(D()),children:"Load more"})]})};export{He as default};
