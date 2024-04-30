import{u as o,b as i,r as t,c as n,e as u,j as a}from"./index-f321af1e.js";import{N as c,a as p}from"./NotFound-b1d8eaff.js";const l=o.div`
  padding: 64px 96px 100px 96px;
  min-height: 100vh;
  background-color: ${r=>r.theme.colors.grayBackgraund};

  @media screen and (max-width: 1024px) {
    padding: 64px 20px;
  }
`,y=o.ul`
  margin-bottom: 64px;
`,b=r=>r.favorites.favoritesList,m=()=>{const r=i(b);t.useState(r);const s=n();t.useEffect(()=>{const e=JSON.parse(localStorage.getItem("favorites"));e!=null&&s(u(e))},[s]);const d=(e,h)=>{switch(console.log(`Вибрана опція: ${e.value}`),option){case"az":dbQuery=query(dbRef,orderByChild("name"));break;case"za":dbQuery=query(dbRef,orderByChild("name"));break;case"less":dbQuery=query(dbRef,orderByChild("price_per_hour"),endAt(10));break;case"greater":dbQuery=query(dbRef,orderByChild("price_per_hour"),startAt(10));break;case"popular":dbQuery=query(dbRef,orderByChild("rating"));break;case"notPopular":dbQuery=query(dbRef,orderByChild("rating"));break;case"all":dbQuery=query(dbRef,orderByKey());break}};return a.jsxs(l,{children:[a.jsx(NanniesSelect,{handleOptionChange:d}),r.length?a.jsx(y,{children:r.map(e=>a.jsx(p,{nanny:e},e.id))}):a.jsx(c,{text:"It seems like you don't have your favorites"})]})};export{m as default};
