import{p as n,r as t,b as r,j as e,N as l}from"./index-be36d13a.js";const c=n.div`
  background: #85aa9f;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .LogoContainer {
    display: flex;
    gap: 16px;
    align-items: center;
    text-decoration: none;

    &:hover .LogoTitle {
      color: #121417;
    }

    &:hover {
      circle {
        fill: #121417;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .LogoTitle {
    font-size: 22px;
    line-height: 145%;
    color: #f8f8f8;
  }
`,s=o=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:40,fill:"none",...o},t.createElement("circle",{cx:20,cy:20,r:20,fill:"#FCFCFC"}),t.createElement("path",{fill:"#85AA9F",fillRule:"evenodd",d:"M20.443 19c5.944-4.483 6.206-7.2 0-12-6.325 4.902-5.51 7.501 0 12ZM19 20.557c-4.483-5.944-7.2-6.206-12 0 4.902 6.325 7.501 5.51 12 0Zm15 0c-4.483-5.944-7.2-6.206-12 0 4.902 6.325 7.501 5.51 12 0ZM20.443 34c5.944-4.483 6.206-7.2 0-12-6.325 4.902-5.51 7.501 0 12Z",clipRule:"evenodd"}));function g(){const o=r(i=>i.auth.isLoggedIn);return e.jsx(c,{children:e.jsxs(l,{className:"LogoContainer",to:!o&&"register",children:[e.jsx(s,{}),e.jsx("h2",{className:"LogoTitle",children:"VocabBuilder"})]})})}export{g as default};
