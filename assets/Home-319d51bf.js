import{u as t,L as n,j as o,i}from"./index-c1eb2c44.js";const p="/nanny-services/assets/home1x-f9eca0a9.png",h="/nanny-services/assets/home2x-1ca38526.png",a=t.div`
  display: flex;
  width: 1376px;
  height: 736px;
  border-radius: 30px;
  background-color: ${e=>e.theme.colors.green};
`,c=t.div`
  width: 677px;
  height: 736px;
  padding: 251px 64px 0 96px;
`,x=t.h1`
  font-weight: 500;
  font-size: 70px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.white};
  margin-bottom: 28px;
`,l=t.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.white};
  margin-bottom: 64px;
`,r=t.svg`
  position: absolute;
  top: 22px;
  right: 45px;
  width: 15px;
  height: 17px;

  transition: transform 250ms ${e=>e.theme.transition};
`,s=t(r)`
  width: 20px;
  height: 16px;
  right: 40px;
  transform: translateX(calc(50% + 50px));
`,d=t(n)`
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

  &:hover ${r}, &:focus ${r} {
    transform: translateY(-55px);
  }

  &:hover ${s}, &:focus ${s} {
    transform: translateX(calc(-50% + 10px));
  }
`,g=t.div`
  position: relative;
  max-width: 699px;
  width: 100%;
  max-height: 736px;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      ${e=>e.theme.colors.gradientColor},
      ${e=>e.theme.colors.gradientColor}
    ),
    image-set(url(${p}) 1x, url(${h}) 2x);
  background-size: cover;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`,m=t.div`
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
`,f=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background-color: ${e=>e.theme.colors.green};
`,u=t.svg`
  width: 20px;
  height: 16px;
`,b=t.p`
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  color: ${e=>e.theme.colors.textGrayColor};
`,w=t.p`
  font-weight: 700;
  font-size: 24px;
  color: ${e=>e.theme.colors.black};
`,j=()=>o.jsxs(a,{children:[o.jsxs(c,{children:[o.jsx(x,{children:"Make Life Easier for the Family:"}),o.jsx(l,{children:"Find Babysitters Online for All Occasions"}),o.jsxs(d,{to:"/nannies",children:["Get started",o.jsx(r,{children:o.jsx("use",{href:`${i}#arrow-up`})}),o.jsx(s,{children:o.jsx("use",{href:`${i}#arrow-right`})})]})]}),o.jsx(g,{children:o.jsxs(m,{children:[o.jsx(f,{children:o.jsx(u,{children:o.jsx("use",{href:`${i}#check`})})}),o.jsxs("div",{children:[o.jsx(b,{children:"Experienced nannies"}),o.jsx(w,{children:"15,000"})]})]})})]});export{j as default};
