import{p as L,r as s,u as B,b as o,E as u,y as R,F as S,j as e,L as W,C as F,N as D}from"./index-239b5d5a.js";import{s as A,u as E,l as P,T,P as M}from"./table-ab9a6282.js";import{t as H}from"./toggle-c5de6f17.js";import{S as V}from"./index-62ca473f.js";import"./extends-a0ac0fb1.js";const $=L.div`
  padding: 32px 16px;

  @media only screen and (min-width: 768px) {
    padding: 64px 32px;
  }

  .FilterContainer {
    @media only screen and (min-width: 1440px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .Form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      margin-top: 16px;
    }
  }

  .CountContainer {
    @media only screen and (min-width: 768px) {
      display: flex;
      align-items: end;
      gap: 16px;
      margin-top: 28px;
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 0;
      align-items: center;
    }
  }

  .SearchContainer {
    position: relative;

    &::after {
      content: url(${A});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .custom-input {
    position: relative;

    &::after {
      content: url(${H});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .Input {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 15px;
    padding: 12px 24px;
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    &:focus {
      border-color: transparent;
      outline: none;
    }
  }

  .Input[id='filters'] {
    @media only screen and (min-width: 768px) {
      width: 274px;
    }
  }

  .Input[id='statistics'] {
    @media only screen and (min-width: 768px) {
      width: 164px;
    }
  }

  .dropdown {
    z-index: 1000;
    position: absolute;
    flex-direction: column;
    margin-top: 5px;
    display: none;
    gap: 8px;
    border-radius: 15px;
    padding: 12px 24px;
    width: 189px;
    box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
    background: #fff;
  }

  .ListItem {
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border-radius: 6px;
    text-transform: capitalize;

    &:hover {
      color: #85aa9f;
    }
  }

  .CountWord {
    margin-top: 40px;
    font-weight: 500;
    font-size: 14px;
    color: rgba(18, 20, 23, 0.5);
    align-items: center;
    display: flex;
    gap: 8px;
    font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (375 - 320)));

    @media only screen and (min-width: 375px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 768px) {
      margin-top: 0px;
    }
  }

  .NumberCountWord {
    font-weight: 500;
    font-size: 20px;
    color: #121417;
    font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (375 - 320)));
    @media only screen and (min-width: 375px) {
      font-size: 20px;
    }
  }

  .ButtonList {
    font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (375 - 320)));
    margin-top: 8px;
    display: flex;
    gap: 16px;

    @media only screen and (min-width: 375px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 1440px) {
      margin-top: 0;
    }
  }

  .ButtonItem {
    text-decoration: none;
    display: flex;
    gap: 8px;
    cursor: pointer;
    color: #121417;

    &:hover {
      color: #85aa9f;
    }

    &:hover .IconButton {
      path {
        stroke: #686868;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .RadioButtonList {
    position: absolute;
    top: 120px;
    display: flex;
    gap: 34px;
    left: 14px;

    @media only screen and (min-width: 768px) {
      position: static;
      margin-left: 20px;
    }
  }

  .RadioButtonItem {
    position: relative;
    display: flex;
    gap: 8px;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    align-items: center;
    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  .RadioButton {
    height: 12px;
    width: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border: 2px solid #8a8a89;
    }

    &:checked:before {
      border-color: #85aa9f;
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #85aa9f;
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }

  .TableContainer {
    margin-top: 32px;
    @media only screen and (min-width: 768px) {
      padding: 18px;
      background: #fcfcfc;
      border-radius: 15px;
      margin-top: 28px;
    }
  }
`,Y=i=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...i},s.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10 4.167v11.666M4.167 10h11.666"}));function Q(){const i=B(),{categories:h,customInputRef:g,inputRef:f,dropdownRef:w,capitalizeFirstLetter:b,toLowerCase:y}=E(),[a,d]=s.useState({filters:"",statistics:"",isIrregular:void 0,page:1}),[j,l]=s.useState(!1),r=o(t=>t.data.words),C=o(t=>t.data.statistics),v=o(t=>t.data.isLoadingCategories),I=o(t=>t.data.isLoadingStatistics),p=o(t=>t.data.isDeleteWord),c=o(t=>t.data.isAddWord);s.useEffect(()=>{i(u(p||c)),i(R()),i(S())},[i,p,c]);const N=s.useRef(P.debounce(t=>{const n={...t,statistics:y(t.statistics)};i(u(n))},300));s.useEffect(()=>{N.current(a)},[a]);const x=t=>{const{name:n,value:z}=t.target;d({...a,[n]:z.trim()})},k=t=>{d(n=>({...n,statistics:b(t.toLowerCase())})),t.toLowerCase()==="verb"?l(!0):l(!1)},m=t=>{d(n=>({...n,isIrregular:t}))};return e.jsxs($,{children:[e.jsxs("div",{className:"FilterContainer",children:[e.jsxs("form",{className:"Form",children:[e.jsx("div",{className:"SearchContainer",children:e.jsx("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:a.filters,onChange:x})}),e.jsxs("div",{ref:g,className:"custom-input",children:[e.jsx("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:a.statistics,onChange:x,ref:f}),e.jsx("ul",{ref:w,className:"dropdown",children:v?e.jsx("div",{children:e.jsx(W,{})}):h.map(t=>e.jsx("li",{className:"ListItem",onClick:()=>k(t),children:t},t))})]}),e.jsxs("ul",{className:"RadioButtonList",style:{display:j?"flex":"none"},children:[e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:()=>m(!1),checked:a.isIrregular===!1}),"Regular"]}),e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"irregular",name:"irregular",type:"radio",onChange:()=>m(!0),checked:a.isIrregular===!0}),"Irregular"]})]})]}),e.jsxs("div",{className:"CountContainer",children:[e.jsxs("p",{className:"CountWord",children:["To study:",e.jsx("span",{className:"NumberCountWord",children:!I&&C.totalCount})]}),e.jsxs("ul",{className:"ButtonList",children:[e.jsxs("li",{className:"ButtonItem",onClick:()=>i(F()),children:["Add word ",e.jsx(Y,{className:"IconButton"})]}),e.jsx("li",{children:e.jsxs(D,{className:"ButtonItem",to:"/training",children:["Train oneself ",e.jsx(V,{className:"IconButton"})]})})]})]})]}),e.jsx("div",{className:"TableContainer",children:r.results&&r.results.length!==0?e.jsx(T,{data:r}):e.jsx("p",{style:{fontSize:"20px",textAlign:"center"},children:"You don't have own words"})}),r.totalPages>1&&e.jsx(M,{data:r,formData:a,setFormData:d})]})}export{Q as default};
