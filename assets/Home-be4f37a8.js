import{u as r,L as n,j as o,i}from"./index-fef374f5.js";import{h}from"./home1x-0c9ce9af.js";const p="/nanny-services/assets/home2x-1ca38526.png",a=r.div`
  display: flex;
  width: 1376px;
  height: 736px;
  border-radius: 30px;
  background-color: ${e=>e.theme.colors.green};
`,c=r.div`
  width: 677px;
  height: 736px;
  padding: 251px 64px 0 96px;
`,x=r.h1`
  font-weight: 500;
  font-size: 70px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.white};
  margin-bottom: 28px;
`,l=r.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.white};
  margin-bottom: 64px;
`,t=r.svg`
  position: absolute;
  top: 22px;
  right: 45px;
  width: 15px;
  height: 17px;

  transition: transform 250ms ${e=>e.theme.transition};
`,s=r(t)`
  width: 20px;
  height: 16px;
  right: 40px;
  transform: translateX(calc(50% + 50px));
`,d=r(n)`
  position: relative;
  display: inline-block;
  width: 230px;
  padding: 18px 50px;
  overflow: hidden;
  background-color: transparent;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.borderColor};
  border-radius: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.white};

  &:hover ${t}, &:focus ${t} {
    transform: translateY(-55px);
  }

  &:hover ${s}, &:focus ${s} {
    transform: translateX(calc(-50% + 10px));
  }
`,g=r.div`
  position: relative;
  max-width: 699px;
  width: 100%;
  max-height: 736px;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      ${e=>e.theme.colors.gradientColor},
      ${e=>e.theme.colors.gradientColor}
    ),
    image-set(url(${h}) 1x, url(${p}) 2x);
  background-size: cover;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`,m=r.div`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 284px;
  height: 118px;
  padding: 32px;
  border-radius: 20px;
  background-color: ${e=>e.theme.colors.white};
`,f=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background-color: ${e=>e.theme.colors.green};
`,u=r.svg`
  width: 20px;
  height: 16px;
`,b=r.p`
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  color: ${e=>e.theme.colors.textGrayColor};
`,w=r.p`
  font-weight: 700;
  font-size: 24px;
  color: ${e=>e.theme.colors.black};
`,k=()=>o.jsxs(a,{children:[o.jsxs(c,{children:[o.jsx(x,{children:"Make Life Easier for the Family:"}),o.jsx(l,{children:"Find Babysitters Online for All Occasions"}),o.jsxs(d,{to:"/nannies",children:["Get started",o.jsx(t,{children:o.jsx("use",{href:`${i}#arrow-up`})}),o.jsx(s,{children:o.jsx("use",{href:`${i}#arrow-right`})})]})]}),o.jsx(g,{children:o.jsxs(m,{children:[o.jsx(f,{children:o.jsx(u,{children:o.jsx("use",{href:`${i}#check`})})}),o.jsxs("div",{children:[o.jsx(b,{children:"Experienced nannies"}),o.jsx(w,{children:"15,000"})]})]})})]});export{k as default};
