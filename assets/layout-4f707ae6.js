import{r as n,p as j,u as k,a as N,b as M,j as e,N as i,L as C,O,c as z}from"./index-f1fa268b.js";import{S,M as E}from"./modals-f1d2bf96.js";import"./error-ca5a6836.js";import"./extends-09a7e574.js";const L=t=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:40,viewBox:"0 0 40 40",fill:"none",...t},n.createElement("circle",{cx:20,cy:20,r:20,fill:"#85AA9F"}),n.createElement("path",{fill:"#FCFCFC",fillRule:"evenodd",d:"M20.443 19c5.944-4.483 6.206-7.2 0-12-6.325 4.902-5.51 7.501 0 12ZM19 20.557c-4.483-5.944-7.2-6.206-12 0 4.902 6.325 7.5 5.51 12 0Zm15 0c-4.483-5.944-7.2-6.206-12 0 4.902 6.325 7.5 5.51 12 0ZM20.443 34c5.944-4.483 6.206-7.2 0-12-6.325 4.902-5.51 7.501 0 12Z",clipRule:"evenodd"})),B=t=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t},n.createElement("path",{fill:"#FCFCFC",fillOpacity:.7,d:"M9.999 3.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Zm0 13.334s6.666 0 6.666-1.667c0-2-3.25-4.167-6.666-4.167C6.582 10.833 3.332 13 3.332 15c0 1.667 6.667 1.667 6.667 1.667Z"})),I=t=>n.createElement("svg",{width:32,height:22,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("line",{x1:5.86914,y1:3.66663,x2:30.9996,y2:3.66663,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"}),n.createElement("line",{x1:5.86914,y1:17,x2:30.9996,y2:17,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"}),n.createElement("line",{x1:13.5215,y1:10.3334,x2:30.9997,y2:10.3334,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"})),W=j.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    padding: 20px;
  }

  .NavigationContainer {
    display: none;

    @media only screen and (min-width: 1440px) {
      display: flex;
      gap: 28px;
    }
  }

  .NavElement {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    color: #121417;
    transition:
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;
    padding: 12px 20px;
    display: inline-block;

    &:hover {
      color: #85aa9f;
    }

    &.active {
      color: #f8f8f8;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.active::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      border-radius: 15px;
      background-color: #85aa9f;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .RightSideHeader {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .LogoContainer {
    display: flex;
    gap: 16px;
    align-items: center;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #85aa9f;
    }

    &:hover {
      path {
        stroke: #85aa9f;
        fill: #85aa9f;
      }
      circle {
        stroke: #85aa9f;
        fill: none;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .Logo {
    width: 36px;
    height: 36px;
    @media only screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }

  .LogoTitle {
    font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (375 - 320)));
    @media only screen and (min-width: 375px) {
      font-size: 18px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 22px;
    }
  }

  .UserContainer {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .UserName {
    font-weight: 500;
    font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (375 - 320)));
    color: #121417;

    @media only screen and (min-width: 375px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .UserImag {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 36px;
    height: 36px;
    background: #85aa9f;

    @media only screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  .ButtonBurger {
    cursor: pointer;
    margin-left: 8px;

    &:hover {
      line {
        stroke: #85aa9f;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media only screen and (max-width: 374px) {
      margin-left: 0px;
    }
    @media only screen and (min-width: 1440px) {
      display: none;
    }
  }

  .ButtonLogOut {
    display: none;
  }

  @media only screen and (min-width: 1440px) {
    .ButtonLogOut {
      display: flex;
      align-items: center;
      gap: 6px;
      border: none;
      color: #121417;
      background: transparent;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      &:hover {
        color: #85aa9f;
        transition: fill 0.3s ease;
      }
    }
  }
`;function A(){const t=k(),x=N(),[o,s]=n.useState(!1),[l,m]=n.useState(!1),[r,h]=n.useState(!1),[c,g]=n.useState(!1),[d,f]=n.useState(!1),[p,u]=n.useState(!1),a=M(y=>y.auth.name),w=()=>{t(z.logOut()).then(()=>x("/"))},v=()=>s(!0),b=()=>{s(!1),m(!1),h(!1),g(!1),f(!1),u(!1)};return e.jsxs("div",{className:"container",children:[e.jsxs(W,{children:[e.jsxs(i,{to:"/",className:"LogoContainer",children:[e.jsx(L,{className:"Logo"}),e.jsx("h2",{className:"LogoTitle",children:"VocabBuilder"})]}),a&&e.jsxs("ul",{className:"NavigationContainer",children:[e.jsx("li",{children:e.jsx(i,{className:"NavElement",to:"/dictionary",children:"Dictionary"})}),e.jsx("li",{children:e.jsx(i,{className:"NavElement",to:"/recommend",children:"Recommend"})}),e.jsx("li",{children:e.jsx(i,{className:"NavElement",to:"/training",children:"Training"})})]}),a&&e.jsxs("div",{className:"RightSideHeader",children:[e.jsxs("div",{className:"UserContainer",children:[e.jsx("p",{className:"UserName",children:a}),e.jsx("span",{className:"UserImag",children:e.jsx(B,{})})]}),e.jsxs("button",{className:"ButtonLogOut",onClick:w,children:["Log Out",e.jsx(S,{className:"SwitchIcon"})]}),e.jsx(I,{className:"ButtonBurger",onClick:v})]})]}),e.jsx(n.Suspense,{fallback:e.jsx("div",{children:e.jsx(C,{})}),children:e.jsx(O,{})}),(o||l||r||c||d||p)&&e.jsx(E,{isMobileModalOpen:o,isModalOpenAddWord:l,isModalOpenClickWord:r,isModalOpenConfirmation:c,isModalOpenEdit:d,isModalOpenWellDone:p,onClose:b})]})}export{A as default};
