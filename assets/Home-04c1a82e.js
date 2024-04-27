import{u as t,L as p,j as o,i}from"./index-4dc547b0.js";const n="/nanny-services/assets/home1x-f9eca0a9.png",s="/nanny-services/assets/home2x-1ca38526.png",d=t.div`
  position: relative;
  /* display: flex; */
  max-width: 1376px;
  width: 100%;
  height: 736px;
  /* max-height: 736px; */
  ///
  height: auto;
  border-radius: 30px;
  background-color: ${e=>e.theme.colors.green};
  background-repeat: no-repeat;
  background-image: image-set(url(${n}) 1x, url(${s}) 2x);
  /* background-image: linear-gradient(
      ${e=>e.theme.colors.gradientColor},
      ${e=>e.theme.colors.gradientColor}
    ),
    image-set(url(${n}) 1x, url(${s}) 2x); */
  background-position: right bottom;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 0 96px;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`,x=t.div`
  /* width: 677px; */
  height: 736px;
  /* padding: 0 64px 0 96px; */
`,h=t.h1`
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
    padding-top: 150px;
    font-size: 55px;
  }
`,c=t.p`
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
`,r=t.svg`
  position: absolute;
  top: 22px;
  right: 45px;
  width: 15px;
  height: 17px;

  transition: transform 250ms ${e=>e.theme.transition};
`,a=t(r)`
  width: 20px;
  height: 16px;
  right: 40px;
  transform: translateX(calc(50% + 50px));
`,l=t(p)`
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

  &:hover ${r}, &:focus ${r} {
    transform: translateY(-55px);
  }

  &:hover ${a}, &:focus ${a} {
    transform: translateX(calc(-50% + 10px));
  }
`,g=t.div`
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
  border-radius: 30px;
  /* border-top-right-radius: 30px;
  border-bottom-right-radius: 30px; */
  /* background-repeat: no-repeat;
  background-image: linear-gradient(
      ${e=>e.theme.colors.gradientColor},
      ${e=>e.theme.colors.gradientColor}
    ),
    image-set(url(${n}) 1x, url(${s}) 2x);
  background-size: cover;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px; */
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

  @media screen and (max-width: 1024px) {
    bottom: 30px;
    right: 30px;
  }
`,u=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background-color: ${e=>e.theme.colors.green};
`,b=t.svg`
  width: 20px;
  height: 16px;
`,f=t.p`
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  color: ${e=>e.theme.colors.textGrayColor};
`,w=t.p`
  font-weight: 700;
  font-size: 24px;
  color: ${e=>e.theme.colors.black};
`,j=()=>o.jsxs(d,{children:[o.jsxs(x,{children:[o.jsx(h,{children:"Make Life Easier for the Family:"}),o.jsx(c,{children:"Find Babysitters Online for All Occasions"}),o.jsxs(l,{to:"/nannies",children:["Get started",o.jsx(r,{children:o.jsx("use",{href:`${i}#arrow-up`})}),o.jsx(a,{children:o.jsx("use",{href:`${i}#arrow-right`})})]})]}),o.jsx(g,{children:o.jsxs(m,{children:[o.jsx(u,{children:o.jsx(b,{children:o.jsx("use",{href:`${i}#check`})})}),o.jsxs("div",{children:[o.jsx(f,{children:"Experienced nannies"}),o.jsx(w,{children:"15,000"})]})]})})]});export{j as default};
