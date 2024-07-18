import{p as B,r as o,u as R,b as n,E as m,y as z,F as S,j as t,L as W,C as F,N as D}from"./index-be36d13a.js";import{s as A,u as E,l as P,T,P as M}from"./table-92a812fe.js";import{t as H}from"./toggle-73a2ecbc.js";import{S as V}from"./index-a71a77f8.js";import"./extends-c2e341e7.js";const $=B.div`
  /* height: 100vh; */
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
    display: grid;
    gap: 8px;

    @media only screen and (min-width: 768px) {
      display: flex;
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

    @media only screen and (min-width: 768px) {
      margin-top: 0px;
    }
  }

  .NumberCountWord {
    font-weight: 500;
    font-size: 20px;
    color: #121417;
  }

  .ButtonList {
    margin-top: 8px;
    display: flex;
    gap: 16px;

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
    display: grid;
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
    margin-top: 40px;
    @media only screen and (min-width: 768px) {
      padding: 18px;
      background: #fcfcfc;
      border-radius: 15px;
      margin-top: 28px;
    }
  }
`,Y=i=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...i},o.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10 4.167v11.666M4.167 10h11.666"}));function Q(){const i=R(),{categories:g,customInputRef:h,inputRef:f,dropdownRef:b,capitalizeFirstLetter:w,toLowerCase:y}=E(),[a,d]=o.useState({filters:"",statistics:"",isIrregular:void 0,page:1}),[j,l]=o.useState(!1),r=n(e=>e.data.words),C=n(e=>e.data.statistics),v=n(e=>e.data.isLoadingCategories),I=n(e=>e.data.isLoadingStatistics),p=n(e=>e.data.isDeleteWord),c=n(e=>e.data.isAddWord);o.useEffect(()=>{i(m(p||c)),i(z()),i(S())},[i,p,c]);const N=o.useRef(P.debounce(e=>{const s={...e,statistics:y(e.statistics)};i(m(s))},300));o.useEffect(()=>{N.current(a)},[a]);const x=e=>{const{name:s,value:L}=e.target;d({...a,[s]:L.trim()})},k=e=>{d(s=>({...s,statistics:w(e.toLowerCase())})),e.toLowerCase()==="verb"?l(!0):l(!1)},u=e=>{d(s=>({...s,isIrregular:e}))};return t.jsxs($,{children:[t.jsxs("div",{className:"FilterContainer",children:[t.jsxs("form",{className:"Form",children:[t.jsx("div",{className:"SearchContainer",children:t.jsx("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:a.filters,onChange:x})}),t.jsxs("div",{ref:h,className:"custom-input",children:[t.jsx("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:a.statistics,onChange:x,ref:f}),t.jsx("ul",{ref:b,className:"dropdown",children:v?t.jsx("div",{children:t.jsx(W,{})}):g.map(e=>t.jsx("li",{className:"ListItem",onClick:()=>k(e),children:e},e))})]}),t.jsxs("ul",{className:"RadioButtonList",style:{display:j?"flex":"none"},children:[t.jsxs("li",{className:"RadioButtonItem",children:[t.jsx("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:()=>u(!1),checked:a.isIrregular===!1}),"Regular"]}),t.jsxs("li",{className:"RadioButtonItem",children:[t.jsx("input",{className:"RadioButton",id:"irregular",name:"irregular",type:"radio",onChange:()=>u(!0),checked:a.isIrregular===!0}),"Irregular"]})]})]}),t.jsxs("div",{className:"CountContainer",children:[t.jsxs("p",{className:"CountWord",children:["To study:",t.jsx("span",{className:"NumberCountWord",children:!I&&C.totalCount})]}),t.jsxs("ul",{className:"ButtonList",children:[t.jsxs("li",{className:"ButtonItem",onClick:()=>i(F()),children:["Add word ",t.jsx(Y,{className:"IconButton"})]}),t.jsx("li",{children:t.jsxs(D,{className:"ButtonItem",to:"/training",children:["Train oneself ",t.jsx(V,{className:"IconButton"})]})})]})]})]}),t.jsx("div",{className:"TableContainer",children:r.results&&r.results.length!==0?t.jsx(T,{data:r}):t.jsx("p",{style:{fontSize:"20px",textAlign:"center"},children:"You don't have own words"})}),r.totalPages>1&&t.jsx(M,{data:r,formData:a,setFormData:d})]})}export{Q as default};
