import{u as i,L as s,j as t,i as r}from"./index-8c36b85d.js";const a="/nanny-services/assets/home1x-f9eca0a9.png",p="/nanny-services/assets/home2x-1ca38526.png",d=i.div`
  position: relative;
  max-width: 1376px;
  width: 100%;
  height: 736px;
  height: auto;
  border-radius: 30px;
  background-color: ${e=>e.theme.colors.green};
  background-repeat: no-repeat;
  background-image: image-set(url(${a}) 1x, url(${p}) 2x);
  background-position: right bottom;
  padding: 0 96px;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`,x=i.div`
  height: 736px;
`,h=i.h1`
  position: relative;
  z-index: 1;
  max-width: 517px;
  width: 100%;
  font-weight: 500;
  font-size: 70px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.white};
  margin-bottom: 28px;
  padding-top: 251px;

  @media screen and (max-width: 1264px) {
    padding-top: 170px;
    font-size: 65px;
  }

  @media screen and (max-width: 1264px) {
    font-size: 45px;
  }
`,c=i.p`
  position: relative;
  z-index: 1;
  max-width: 517px;
  width: 100%;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.white};
  margin-bottom: 64px;

  @media screen and (max-width: 420px) {
    margin-bottom: 34px;
  }
`,o=i.svg`
  position: absolute;
  top: 22px;
  right: 45px;
  width: 15px;
  height: 17px;

  transition: transform 250ms ${e=>e.theme.transition};
`,n=i(o)`
  width: 20px;
  height: 16px;
  right: 40px;
  transform: translateX(calc(50% + 50px));
`,l=i(s)`
  position: relative;
  z-index: 1;
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

  &:hover ${o}, &:focus ${o} {
    transform: translateY(-55px);
  }

  &:hover ${n}, &:focus ${n} {
    transform: translateX(calc(-50% + 10px));
  }
`,m=i.div`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 699px;
  width: 100%;
  height: 736px;
  background-image: linear-gradient(
    ${e=>e.theme.colors.gradientColor},
    ${e=>e.theme.colors.gradientColor}
  );
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  @media screen and (max-width: 790px) {
    border-radius: 30px;
  }
`,g=i.div`
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

  @media screen and (max-width: 1024px) {
    bottom: 30px;
    right: 30px;
  }

  @media screen and (max-width: 420px) {
    width: 214px;
    height: 100px;
    padding: 16px;
  }
`,w=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background-color: ${e=>e.theme.colors.green};

  @media screen and (max-width: 420px) {
    width: 44px;
    height: 44px;
  }
`,f=i.svg`
  width: 20px;
  height: 16px;
`,u=i.p`
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  color: ${e=>e.theme.colors.textGrayColor};
`,b=i.p`
  font-weight: 700;
  font-size: 24px;
  color: ${e=>e.theme.colors.black};
`,j=()=>t.jsxs(d,{children:[t.jsxs(x,{children:[t.jsx(h,{children:"Make Life Easier for the Family:"}),t.jsx(c,{children:"Find Babysitters Online for All Occasions"}),t.jsxs(l,{to:"/nannies",children:["Get started",t.jsx(o,{children:t.jsx("use",{href:`${r}#arrow-up`})}),t.jsx(n,{children:t.jsx("use",{href:`${r}#arrow-right`})})]})]}),t.jsx(m,{children:t.jsxs(g,{children:[t.jsx(w,{children:t.jsx(f,{children:t.jsx("use",{href:`${r}#check`})})}),t.jsxs("div",{children:[t.jsx(u,{children:"Experienced nannies"}),t.jsx(b,{children:"15,000"})]})]})})]});export{j as default};
