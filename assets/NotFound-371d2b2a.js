import{u as o,j as t,i as g,F as E,g as O,E as D,r as n,k as G,l as B,c as _,n as q,b as J,e as C,C as P,o as U,_ as H}from"./index-50ddea40.js";const V="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Y=(e=21)=>{let r="",s=crypto.getRandomValues(new Uint8Array(e));for(;e--;)r+=V[s[e]&63];return r};const K=o.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 48px;
`,Q=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,X=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background-color: ${e=>e.theme.colors.avatarBorder};
`,Z=o.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: ${e=>e.theme.colors.green};
`,ee=o.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};
`,te=o.p`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.black};
`,oe=o.div`
  display: flex;
  gap: 8px;
`,re=o.svg`
  width: 16px;
  height: 16px;
`,ie=o.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${e=>e.theme.colors.black};
`,se=({reviews:e})=>t.jsx(K,{children:e.map(r=>t.jsxs("li",{children:[t.jsxs(Q,{children:[t.jsx(X,{children:t.jsx(Z,{children:r.reviewer.charAt(0).toUpperCase()})}),t.jsxs("div",{children:[t.jsx(te,{children:r.reviewer}),t.jsxs(oe,{children:[t.jsx(re,{children:t.jsx("use",{href:`${g}#star`})}),t.jsx(ie,{children:r.rating.toFixed(1)})]})]})]}),t.jsx(ee,{children:r.comment})]},Y()))}),ne=o.li`
  position: relative;
  display: flex;
  gap: 24px;
  max-width: 1184px;
  width: 100%;
  ///
  min-height: 318px;
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 32px;
  background-color: ${e=>e.theme.colors.white};

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    /* align-items: center; */
    padding: 16px;
  }
`,le=o.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 2px solid ${e=>e.theme.colors.avatarBorder};
  border-radius: 30px;
`,ae=o.span`
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
`,ce=o.img`
  border-radius: 15px;
  width: 96px;
  height: 96px;
`,he=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 992px;
  width: 100%;
  margin-bottom: 8px;

  ///
  padding-right: 74px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`,de=o.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textGray};
`,pe=o.ul`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 635px) {
    flex-direction: column;
    gap: 4px;
  }
`,xe=o.div`
  display: flex;
  gap: 48px;
  align-items: center;
`,me=o.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${e=>e.theme.colors.black};
`,T=o.li`
  display: flex;
  align-items: center;
`,I=o.span`
  display: inline-block;
  flex-shrink: 0;
  width: 2px;
  height: 16px;
  margin-left: 16px;
  background-color: ${e=>e.theme.colors.textBorder};

  @media screen and (max-width: 635px) {
    display: none;
  }
`,N=o.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
`,ge=o.span`
  color: ${e=>e.theme.colors.activeGreen};
`,ue=o.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`,fe=o.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 24px;
  color: ${e=>e.theme.colors.black};
`,be=o.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};

  margin-bottom: ${({$biggerMargin:e})=>{switch(e){case!0:return"48px";default:return"14px"}}};
`,je=o.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${e=>e.theme.colors.black};
`,we=o.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`,L=o.svg`
  width: 26px;
  height: 22px;
  fill: ${e=>e.theme.colors.black};
  transition: fill 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    fill: ${e=>e.theme.colors.green};
  }
`,ve=o(L)`
  fill: ${e=>e.theme.colors.green};
`,$e=o.button`
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
  max-width: 215px;
  width: 100%;
  transition:
    color 250ms ${e=>e.theme.transition},
    background-color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.green};
    background-color: ${e=>e.theme.colors.white};
  }
`,ke=e=>{const r=new Date(e),h=new Date().getTime()-r.getTime();return Math.floor(h/(1e3*60*60*24*365.25))},ye=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,f=o.li`
  border-radius: 24px;
  padding: 8px 16px;
  background-color: ${e=>e.theme.colors.grayBackgraund};
`,b=o.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textGray};
`,j=o.span`
  color: ${e=>e.theme.colors.black};
`,Se=({nanny:e})=>t.jsxs(ye,{children:[t.jsx(f,{children:t.jsxs(b,{children:["Age:"," ",t.jsx(j,{style:{textDecoration:"underline",textDecorationSkipInk:"none"},children:ke(e.birthday)})]})}),t.jsx(f,{children:t.jsxs(b,{children:["Experience: ",t.jsx(j,{children:e.experience})]})}),t.jsx(f,{children:t.jsxs(b,{children:["Kids Age: ",t.jsx(j,{children:e.kids_age})]})}),t.jsx(f,{children:t.jsxs(b,{children:["Characters:"," ",t.jsx(j,{children:e.characters.map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(", ")})]})}),t.jsx(f,{children:t.jsxs(b,{children:["Education: ",t.jsx(j,{children:e.education})]})})]}),Fe=o.div`
  padding-right: 32px;
`,Ce=o(E)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`,Ae=o.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.black};
  margin-bottom: 20px;

  @media screen and (max-width: 395px) {
    font-size: 28px;
  }
  /* padding-right: 32px; */
`,ze=o.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};
  margin-bottom: 40px;
`,Te=o.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,Ne=o.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
`,Re=o.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${e=>e.theme.colors.textGray};
  margin-bottom: 4px;
`,Ie=o.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
`,Me=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
`,Oe=o.button`
  border-radius: 30px;
  /* padding: 16px 217px; */
  padding: 16px;
  max-width: 470px;
  width: 100%;
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
`,w=o.label`
  position: relative;
  max-width: 231px;
  width: 100%;
`,R=o(w)`
  max-width: 470px;
  width: 100%;
`,v=o(O)`
  max-width: 231px;
  width: 100%;
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
`,M=o(v)`
  max-width: 470px;
  width: 100%;
`,Le=o(v)`
  max-width: 470px;
  width: 100%;
  height: 116px;
  resize: none;
`,m=o(D)`
  position: absolute;
  top: 54px;
  left: 8px;
  font-size: 12px;
  color: ${e=>e.theme.colors.red};
`,We=o.div`
  overflow-y: auto;
  height: 240px;

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
`,Ee=o.div`
  padding-right: 24px;
`,De=o.div`
  position: relative;
  /* max-width: 200px; */
  font-size: 16px;
`,Ge=o(O)`
  position: relative;
  max-width: 231px;
  width: 100%;
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
`,Be=o.div`
  position: absolute;
  z-index: 2;
  top: calc(100% + 8px);
  right: 0;
  width: 150px;
  max-height: 180px;
  padding: 16px;
  /* background-color: ${e=>e.theme.colors.snowWhite}; */
  background-color: #fff;
  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
  border-radius: 12px;
`,_e=o.h3`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${e=>e.theme.colors.black};
`,qe=o.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 100px;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,Je=o.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: rgba(17, 16, 28, 0.3);
  cursor: pointer;
  transition: color 250ms ${e=>e.theme.transition};

  &:hover {
    color: ${e=>e.theme.colors.black};
  }

  &.selected {
    color: ${e=>e.theme.colors.black};
  }
`,Pe=o.span`
  margin-right: 12px;
`,Ue=o.span`
  margin-left: 12px;
`,He=o.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 16px;
  right: 16px;
  cursor: pointer;
`,Ve=e=>{const[r,s]=n.useState(!1),[h,p]=n.useState("00:00"),[$,k]=n.useState(0),l=n.useRef(null),d=()=>{k(l.current.scrollTop)};n.useEffect(()=>{r&&l.current&&(l.current.scrollTop=$)},[r,$]);const A=()=>{s(!r)},z=x=>{p(x),s(!1)},y=x=>{l.current&&!l.current.contains(x.target)&&s(!1)};return n.useEffect(()=>(document.addEventListener("mousedown",y),()=>{document.removeEventListener("mousedown",y)}),[]),t.jsxs(De,{children:[t.jsx(Ge,{name:e,type:"text",value:h,readOnly:!0,onClick:A,placeholder:"00:00"}),t.jsx(He,{children:t.jsx("use",{href:`${g}#clock`})}),r&&t.jsxs(Be,{children:[t.jsx(_e,{children:"Meeting time"}),t.jsx(qe,{ref:l,onScroll:d,children:[...Array(48)].map((x,u)=>{const S=Math.floor(u/2),F=u%2===0?"00":"30",i=`${S.toString().padStart(2,"0")}:${F}`;return t.jsxs(Je,{onClick:()=>z(i),className:h===i?"selected":"",children:[t.jsx(Pe,{children:S.toString().padStart(2,"0")}),t.jsx("span",{children:":"}),t.jsx(Ue,{children:F})]},u)})})]})]})},Ye=({nanny:e})=>t.jsxs(t.Fragment,{children:[t.jsxs(Fe,{children:[t.jsx(Ae,{children:"Make an appointment with a babysitter"}),t.jsx(ze,{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."}),t.jsxs(Te,{children:[t.jsx(Ne,{src:e.avatar_url,alt:e.name}),t.jsxs("div",{children:[t.jsx(Re,{children:"Your nanny"}),t.jsx(Ie,{children:e.name})]})]})]}),t.jsx(We,{children:t.jsx(Ee,{children:t.jsx(G,{initialValues:{addres:"",phone:"+380",childsAge:"",time:"00:00",email:"",name:"",comment:""},validationSchema:B,onSubmit:(r,s)=>{s.setSubmitting(!0),s.resetForm(),window.location.reload()},children:()=>t.jsxs(Ce,{children:[t.jsxs(Me,{children:[t.jsxs(w,{children:[t.jsx(v,{name:"addres",type:"text",placeholder:"Addres"}),t.jsx(m,{name:"addres",component:"span",required:!0})]}),t.jsxs(w,{children:[t.jsx(v,{name:"phone",type:"tel"}),t.jsx(m,{name:"phone",component:"span",required:!0})]}),t.jsxs(w,{children:[t.jsx(v,{name:"childsAge",type:"text",placeholder:"Child's age"}),t.jsx(m,{name:"childsAge",component:"span",required:!0})]}),t.jsxs(w,{children:[t.jsx(Ve,{name:"time"}),t.jsx(m,{name:"time",component:"span",required:!0})]}),t.jsxs(R,{children:[t.jsx(M,{name:"email",type:"email",placeholder:"Email"}),t.jsx(m,{name:"email",component:"span",required:!0})]}),t.jsxs(R,{children:[t.jsx(M,{name:"name",type:"text",placeholder:"Father's or mother's name"}),t.jsx(m,{name:"name",component:"span",required:!0})]}),t.jsx(R,{children:t.jsx(Le,{as:"textarea",name:"comment",type:"text",placeholder:"Comment"})})]}),t.jsx(Oe,{type:"submit",children:"Send"})]})})})})]}),Xe=({nanny:e})=>{const r=_(q),[s,h]=n.useState(!1),[p,$]=n.useState(!1),[k,l]=n.useState(x(e)||!1),d=J(),A=()=>{h(!0),document.body.style.overflow="hidden"},z=()=>{h(!1),document.body.style.overflow=""},y=()=>{$(!0)};n.useEffect(()=>{const i=JSON.parse(localStorage.getItem("favorites"));i!=null&&d(C(i))},[d]);function x(i){if(r){const a=JSON.parse(localStorage.getItem("favorites"))||[];return Array.isArray(a)?a.some(c=>c.id===i.id):!1}else return!1}const u=i=>{let a=JSON.parse(localStorage.getItem("favorites"))||[];Array.isArray(a)||(a=[]);const c=[...a,i];localStorage.setItem("favorites",JSON.stringify(c)),l(!0),a.length>0&&d(C(c))},S=i=>{const c=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(W=>W.id!==i.id);c.length===0?(localStorage.removeItem("favorites"),d(C([]))):(localStorage.setItem("favorites",JSON.stringify(c)),d(C(c))),l(!1)},F=i=>{if(r)return k?S(i):u(i);H.error("You must be logged in to add to favorites")};return t.jsxs(ne,{children:[t.jsxs(le,{children:[t.jsx(ce,{src:e.avatar_url,alt:e.name}),t.jsx(ae,{})]}),t.jsxs("div",{children:[t.jsxs(he,{children:[t.jsx(de,{children:"Nanny"}),t.jsx(xe,{children:t.jsxs(pe,{children:[t.jsxs(T,{children:[t.jsx(me,{children:t.jsx("use",{href:`${g}#map-pin`})}),t.jsx(N,{children:e.location}),t.jsx(I,{})]}),t.jsxs(T,{children:[t.jsx(ue,{children:t.jsx("use",{href:`${g}#star`})}),t.jsxs(N,{children:["Rating: ",e.rating]}),t.jsx(I,{})]}),t.jsx(T,{children:t.jsxs(N,{children:["Price / 1 hour:"," ",t.jsxs(ge,{children:[e.price_per_hour,"$"]})]})})]})})]}),t.jsx(we,{type:"button",onClick:()=>F(e),children:k?t.jsx(ve,{children:t.jsx("use",{href:`${g}#full-heart`})}):t.jsx(L,{children:t.jsx("use",{href:`${g}#heart`})})}),t.jsx(fe,{children:e.name}),t.jsx(Se,{nanny:e}),t.jsx(be,{$biggerMargin:p,children:e.about}),!p&&t.jsx(je,{type:"button",onClick:y,children:"Read more"}),p&&t.jsxs(t.Fragment,{children:[t.jsx(se,{reviews:e.reviews}),t.jsx($e,{type:"button",onClick:()=>A(),children:"Make an appointment"})]})]}),t.jsx(P,{isModalOpen:s,closeModal:z,styles:U,children:t.jsx(Ye,{nanny:e})})]})},Ke=o.p`
  padding-top: 100px;
  font-weight: 400;
  font-size: 24px;
  line-height: 125%;
  color: ${e=>e.theme.colors.textGrayColor};
  text-align: center;
`,Ze=({text:e})=>t.jsx(Ke,{children:e});export{Ze as N,Xe as a};
