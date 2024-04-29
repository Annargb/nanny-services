import{u as o,c as r,b as n,r as i,e as c,j as a}from"./index-50ddea40.js";import{N as p,a as d}from"./NotFound-371d2b2a.js";const x=o.div`
  padding: 64px 96px 100px 96px;
  min-height: 100vh;
  background-color: ${t=>t.theme.colors.grayBackgraund};

  @media screen and (max-width: 1024px) {
    padding: 64px 20px;
  }
`,u=o.ul`
  margin-bottom: 64px;
`,l=t=>t.favorites.favoritesList,g=()=>{const t=r(l),e=n();return i.useEffect(()=>{const s=JSON.parse(localStorage.getItem("favorites"));s!=null&&e(c(s))},[e]),a.jsx(x,{children:t.length?a.jsx(u,{children:t.map(s=>a.jsx(d,{nanny:s},s.id))}):a.jsx(p,{text:"It seems like you don't have your favorites"})})};export{g as default};
