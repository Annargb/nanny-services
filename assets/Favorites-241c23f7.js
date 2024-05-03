import{u as i,a as u,r as n,b as m,d as g,j as t}from"./index-9ea3385d.js";import{a as d,N as x,b as f}from"./NotFound-4c3b37ad.js";const b=i.div`
  padding: 64px 96px 100px 96px;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.grayBackgraund};

  @media screen and (max-width: 1024px) {
    padding: 64px 20px;
  }
`,v=i.ul`
  margin-bottom: 64px;
`,k=i.button`
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
`,j=e=>e.favorites.favoritesList,$=()=>{const e=u(j),[c,l]=n.useState([]),p=m();n.useEffect(()=>{const o=JSON.parse(localStorage.getItem("favorites"));o!=null&&p(g(o))},[p]),n.useEffect(()=>{l(e)},[e]);const h=o=>{console.log(`Вибрана опція: ${o.value}`);let s=[...e];switch(o.value){case"az":s.sort((r,a)=>r.name.localeCompare(a.name));break;case"za":s.sort((r,a)=>a.name.localeCompare(r.name));break;case"less":s=e.filter(r=>r.price_per_hour<10);break;case"greater":s=e.filter(r=>r.price_per_hour>10).sort((r,a)=>r.price_per_hour-a.price_per_hour);break;case"popular":s.sort((r,a)=>a.rating-r.rating);break;case"notPopular":s.sort((r,a)=>r.rating-a.rating);break;case"all":s=[...e];break}l(s)};return t.jsx(b,{children:e.length?t.jsxs(t.Fragment,{children:[t.jsx(x,{handleOptionChange:h}),c.length?t.jsxs(t.Fragment,{children:[t.jsx(v,{children:c.map(o=>t.jsx(f,{nanny:o},o.id))}),t.jsx(k,{type:"button",children:"Load more"})]}):t.jsx(d,{text:"There are no matching options for your request"})]}):t.jsx(d,{text:"It seems like you don't have your favorites"})})};export{$ as default};
