import{u as d,a as c,r as a,b as p,d as x,j as e}from"./index-8c36b85d.js";import{a as i,N as l,h,b as u}from"./NotFound-66de1de8.js";const g=d.div`
  padding: 64px 96px 100px 96px;
  min-height: 100vh;
  background-color: ${t=>t.theme.colors.grayBackgraund};

  @media screen and (max-width: 1024px) {
    padding: 64px 20px;
  }
`,m=d.ul`
  margin-bottom: 64px;
`,v=t=>t.favorites.favoritesList,j=()=>{const t=c(v),[o,r]=a.useState([]),n=p();return a.useEffect(()=>{const s=JSON.parse(localStorage.getItem("favorites"));s!=null&&n(x(s))},[n]),a.useEffect(()=>{r(t)},[t]),e.jsx(g,{children:t.length?e.jsxs(e.Fragment,{children:[e.jsx(l,{handleOptionChange:s=>h(s,t,r)}),o.length?e.jsx(e.Fragment,{children:e.jsx(m,{children:o.map(s=>e.jsx(u,{nanny:s},s.id))})}):e.jsx(i,{text:"There are no matching options for your request"})]}):e.jsx(i,{text:"It seems like you don't have your favorites"})})};export{j as default};
