import{b as r,j as e,x as n}from"./index-be36d13a.js";function d({children:t,restricted:s=!0}){const o=r(i=>i.auth.isLoggedIn)&&s;return e.jsx("div",{children:o?t:e.jsx(n,{to:"/"})})}export{d as default};