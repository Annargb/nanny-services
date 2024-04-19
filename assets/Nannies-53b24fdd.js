import{u as o,j as t,i as p,E as F,F as q,c as T,a as s,b as N,d as L,r as m,C as M,e as w,f as R,g as S,h as P}from"./index-fef374f5.js";const B=e=>e.nannies.nannyList,E=e=>e.nannies.currentPage,W="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let D=(e=21)=>{let r="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)r+=W[n[e]&63];return r};const G=o.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 48px;
`,I=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,_=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background-color: ${e=>e.theme.colors.avatarBorder};
`,H=o.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: ${e=>e.theme.colors.green};
`,O=o.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};
`,U=o.p`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.black};
`,Z=o.div`
  display: flex;
  gap: 8px;
`,V=o.svg`
  width: 16px;
  height: 16px;
`,K=o.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${e=>e.theme.colors.black};
`,Y=({reviews:e})=>t.jsx(G,{children:e.map(r=>t.jsxs("li",{children:[t.jsxs(I,{children:[t.jsx(_,{children:t.jsx(H,{children:r.reviewer.charAt(0).toUpperCase()})}),t.jsxs("div",{children:[t.jsx(U,{children:r.reviewer}),t.jsxs(Z,{children:[t.jsx(V,{children:t.jsx("use",{href:`${p}#star`})}),t.jsx(K,{children:r.rating.toFixed(1)})]})]})]}),t.jsx(O,{children:r.comment})]},D()))}),J=o.li`
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
`,Q=o.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 2px solid ${e=>e.theme.colors.avatarBorder};
  border-radius: 30px;
`,X=o.span`
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
`,ee=o.img`
  border-radius: 15px;
  width: 96px;
  height: 96px;
`,te=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 992px;
  margin-bottom: 8px;
`,oe=o.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textGray};
`,re=o.ul`
  display: flex;
  gap: 16px;
`,ne=o.div`
  display: flex;
  gap: 48px;
  align-items: center;
`,ie=o.svg`
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
`,$=o.span`
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
`,se=o.span`
  color: ${e=>e.theme.colors.activeGreen};
`,ae=o.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`,le=o.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 24px;
  color: ${e=>e.theme.colors.black};
`,ce=o.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};

  margin-bottom: ${({$biggerMargin:e})=>{switch(e){case!0:return"48px";default:return"14px"}}};
`,he=o.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${e=>e.theme.colors.black};
`,de=o.button`
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
`,pe=o(y)`
  fill: ${e=>e.theme.colors.green};
`,xe=o.button`
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
`,me=e=>{const r=new Date(e),i=new Date().getTime()-r.getTime();return Math.floor(i/(1e3*60*60*24*365.25))},ge=o.ul`
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
`,d=o.span`
  color: ${e=>e.theme.colors.black};
`,ue=({nanny:e})=>t.jsxs(ge,{children:[t.jsx(c,{children:t.jsxs(h,{children:["Age:"," ",t.jsx(d,{style:{textDecoration:"underline",textDecorationSkipInk:"none"},children:me(e.birthday)})]})}),t.jsx(c,{children:t.jsxs(h,{children:["Experience: ",t.jsx(d,{children:e.experience})]})}),t.jsx(c,{children:t.jsxs(h,{children:["Kids Age: ",t.jsx(d,{children:e.kids_age})]})}),t.jsx(c,{children:t.jsxs(h,{children:["Characters:"," ",t.jsx(d,{children:e.characters.map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(", ")})]})}),t.jsx(c,{children:t.jsxs(h,{children:["Education: ",t.jsx(d,{children:e.education})]})})]}),je=o.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.black};
  margin-bottom: 20px;
`,be=o.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textGrayColor};
  margin-bottom: 40px;
`,fe=o.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,we=o.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
`,$e=o.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${e=>e.theme.colors.textGray};
  margin-bottom: 4px;
`,ve=o.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
`,ye=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
  margin-bottom: 40px;
`,ke=o.button`
  border-radius: 30px;
  padding: 16px 217px;
  width: 472px;
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
`,a=o(F)`
  position: absolute;
  top: 54px;
  left: 8px;
  font-size: 12px;
  color: ${e=>e.theme.colors.red};
`,x=o.label`
  position: relative;
  width: 230px;
  height: 52px;
`,j=o(x)`
  width: 470px;
`,l=o(q)`
  width: 230px;
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
`,v=o(l)`
  width: 470px;
`,Ae=o(l)`
  width: 470px;
  height: 116px;
  resize: none;
`,ze=/^[a-z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,Ce=T().shape({addres:s().trim().min(8,"Address must contain at least 8 characters").max(100,"Too long address").required("Address is required"),phone:s().trim().matches(/^\+(?:[0-9] ?){6,14}[0-9]$/,{message:"Invalid Phone Number",excludeEmptyString:!1}).max(13,"Too long phone number").required("The phone number is required"),childsAge:s().trim().max(15,"Please enter a child's sge").required("Child's age is required"),time:s().length(5).matches(/(\d){2}:(\d){2}/,'Hour must have this pattern "00:00"').required("Meeting time is required"),email:s().trim().matches(ze,"Please enter a valid email. For example jane@mail.com").required("Email is required"),name:s().trim().min(2,"Name must contain at least 2 characters").max(40,"Too long name").required("Father's or mother's name is required"),comment:s().trim().min(10,"The comment should contain short information about your child").required("The comment is required")}),Fe=({nanny:e})=>t.jsxs(t.Fragment,{children:[t.jsx(je,{children:"Make an appointment with a babysitter"}),t.jsx(be,{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."}),t.jsxs(fe,{children:[t.jsx(we,{src:e.avatar_url,alt:e.name}),t.jsxs("div",{children:[t.jsx($e,{children:"Your nanny"}),t.jsx(ve,{children:e.name})]})]}),t.jsx(N,{initialValues:{addres:"",phone:"+380",childsAge:"",time:"00:00",email:"",name:"",comment:""},validationSchema:Ce,children:t.jsxs(L,{children:[t.jsxs(ye,{children:[t.jsxs(x,{children:[t.jsx(l,{name:"addres",type:"text",placeholder:"Addres"}),t.jsx(a,{name:"addres",component:"span",required:!0})]}),t.jsxs(x,{children:[t.jsx(l,{name:"phone",type:"tel"}),t.jsx(a,{name:"phone",component:"span",required:!0})]}),t.jsxs(x,{children:[t.jsx(l,{name:"childsAge",type:"text",placeholder:"Child's age"}),t.jsx(a,{name:"childsAge",component:"span",required:!0})]}),t.jsxs(x,{children:[t.jsx(l,{name:"time",type:"time",placeholder:"00:00"}),t.jsx(a,{name:"time",component:"span",required:!0})]}),t.jsxs(j,{children:[t.jsx(v,{name:"email",type:"email",placeholder:"Email"}),t.jsx(a,{name:"email",component:"span",required:!0})]}),t.jsxs(j,{children:[t.jsx(v,{name:"name",type:"text",placeholder:"Father's or mother's name"}),t.jsx(a,{name:"name",component:"span",required:!0})]}),t.jsxs(j,{children:[t.jsx(Ae,{as:"textarea",name:"comment",type:"text",placeholder:"Comment"}),t.jsx(a,{name:"comment",component:"span",required:!0})]})]}),t.jsx(ke,{type:"submit",children:"Send"})]})})]}),qe=({nanny:e})=>{const[r,n]=m.useState(!1),[i,b]=m.useState(!1),[f,k]=m.useState(!1),A=()=>{n(!0),document.body.style.overflow="hidden"},z=()=>{n(!1),document.body.style.overflow=""},C=()=>{b(!0)};return t.jsxs(J,{children:[t.jsxs(Q,{children:[t.jsx(ee,{src:e.avatar_url,alt:e.name}),t.jsx(X,{})]}),t.jsxs("div",{children:[t.jsxs(te,{children:[t.jsx(oe,{children:"Nanny"}),t.jsxs(ne,{children:[t.jsxs(re,{children:[t.jsxs(g,{children:[t.jsx(ie,{children:t.jsx("use",{href:`${p}#map-pin`})}),t.jsx(u,{children:e.location}),t.jsx($,{})]}),t.jsxs(g,{children:[t.jsx(ae,{children:t.jsx("use",{href:`${p}#star`})}),t.jsxs(u,{children:["Rating: ",e.rating]}),t.jsx($,{})]}),t.jsx(g,{children:t.jsxs(u,{children:["Price / 1 hour:"," ",t.jsxs(se,{children:[e.price_per_hour,"$"]})]})})]}),t.jsx(de,{type:"button",onClick:()=>k(!f),children:f?t.jsx(pe,{children:t.jsx("use",{href:`${p}#full-heart`})}):t.jsx(y,{children:t.jsx("use",{href:`${p}#heart`})})})]})]}),t.jsx(le,{children:e.name}),t.jsx(ue,{nanny:e}),t.jsx(ce,{$biggerMargin:i,children:e.about}),!i&&t.jsx(he,{type:"button",onClick:C,children:"Read more"}),i&&t.jsxs(t.Fragment,{children:[t.jsx(Y,{reviews:e.reviews}),t.jsx(xe,{type:"button",onClick:()=>A(),children:"Make an appointment"})]})]}),t.jsx(M,{isModalOpen:r,closeModal:z,children:t.jsx(Fe,{nanny:e})})]})},Te=o.div`
  padding: 64px 96px 100px 96px;
  background-color: ${e=>e.theme.colors.grayBackgraund};
`,Ne=o.ul`
  margin-bottom: 64px;
`,Le=o.button`
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
`,Me=o.select`
  margin-bottom: 32px;
`,Re=o.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${e=>e.theme.colors.textGray};
  margin-bottom: 8px;
`,Se=()=>{const e=r=>{const n=r.target.value;console.log(`Вибрана опція: ${n}`)};return t.jsxs(t.Fragment,{children:[t.jsx(Re,{children:"Filters"}),t.jsxs(Me,{onChange:e,children:[t.jsx("option",{value:"az",children:"A to Z"}),t.jsx("option",{value:"za",children:"Z to A"}),t.jsx("option",{value:"less",children:"Less than 10$"}),t.jsx("option",{value:"greater",children:"Greater than 10$"}),t.jsx("option",{value:"popular",children:"Popular"}),t.jsx("option",{value:"notPopular",children:"Not popular"}),t.jsx("option",{value:"all",children:"Show all"})]})]})},Be=()=>{const e=w(E),r=w(B),n=R();return m.useEffect(()=>{n(S(e))},[e,n]),t.jsxs(Te,{children:[t.jsx(Se,{}),t.jsx(Ne,{children:r.map(i=>t.jsx(qe,{nanny:i},i.id))}),t.jsx(Le,{type:"button",onClick:()=>n(P()),children:"Load more"})]})};export{Be as default};
