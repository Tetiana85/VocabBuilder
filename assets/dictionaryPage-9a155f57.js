import{p as k,r as s,u as B,b as n,E as m,y as L,F as R,j as e,L as z,C as S,N as W}from"./index-ac66f443.js";import{s as D,u as A,l as E,T as F,P}from"./table-5343e953.js";import{t as T}from"./toggle-25f8bf64.js";import{S as M}from"./index-627b7736.js";import"./extends-05553f16.js";const H=k.div`
  height: 100vh;
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
    }
  }

  .CountContainer {
    @media only screen and (min-width: 768px) {
      display: flex;
      align-items: end;
      gap: 16px;

      margin-top: 30px;
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 0;
      align-items: center;
    }
  }

  .SearchContainer {
    position: relative;

    &::after {
      content: url(${D});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .custom-input {
    position: relative;

    &::after {
      content: url(${T});
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
    margin-top: 50px;
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
    margin-top: 16px;
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
    /* height: 457px; */
    @media only screen and (min-width: 768px) {
      padding: 18px;
      background: #fcfcfc;
      border-radius: 15px;
      margin-top: 24px;
    }
  }
`,V=i=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...i},s.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10 4.167v11.666M4.167 10h11.666"}));function K(){const i=B(),{categories:h,customInputRef:g,inputRef:f,dropdownRef:b}=A(),[a,d]=s.useState({filters:"",statistics:"",isIrregular:void 0,page:1}),[w,l]=s.useState(!1),o=n(t=>t.data.words),y=n(t=>t.data.statistics),j=n(t=>t.data.isLoadingCategories),C=n(t=>t.data.isLoadingStatistics),p=n(t=>t.data.isDeleteWord),c=n(t=>t.data.isAddWord);s.useEffect(()=>{i(m(p||c)),i(L()),i(R())},[i,p,c]);const v=s.useRef(E.debounce(t=>{i(m(t))},300));s.useEffect(()=>{v.current(a)},[a]);const x=t=>{const{name:r,value:N}=t.target;d({...a,[r]:N.trim()})},I=t=>{d(r=>({...r,statistics:t})),l(t==="verb")},u=t=>{d(r=>({...r,isIrregular:t}))};return e.jsxs(H,{children:[e.jsxs("div",{className:"FilterContainer",children:[e.jsxs("form",{className:"Form",children:[e.jsx("div",{className:"SearchContainer",children:e.jsx("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:a.filters,onChange:x})}),e.jsxs("div",{ref:g,className:"custom-input",children:[e.jsx("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:a.statistics,onChange:x,ref:f}),e.jsx("ul",{ref:b,className:"dropdown",children:j?e.jsx("div",{children:e.jsx(z,{})}):h.map(t=>e.jsx("li",{className:"ListItem",onClick:()=>I(t),children:t},t))})]}),e.jsxs("ul",{className:"RadioButtonList",style:{display:w?"flex":"none"},children:[e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:()=>u(!1),checked:a.isIrregular===!1}),"Regular"]}),e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"irregular",name:"irregular",type:"radio",onChange:()=>u(!0),checked:a.isIrregular===!0}),"Irregular"]})]})]}),e.jsxs("div",{className:"CountContainer",children:[e.jsxs("p",{className:"CountWord",children:["To study:",e.jsx("span",{className:"NumberCountWord",children:!C&&y.totalCount})]}),e.jsxs("ul",{className:"ButtonList",children:[e.jsxs("li",{className:"ButtonItem",onClick:()=>i(S()),children:["Add word ",e.jsx(V,{className:"IconButton"})]}),e.jsx("li",{children:e.jsxs(W,{className:"ButtonItem",to:"/training",children:["Train oneself ",e.jsx(M,{className:"IconButton"})]})})]})]})]}),e.jsx("div",{className:"TableContainer",children:o.results&&o.results.length!==0?e.jsx(F,{data:o}):e.jsx("p",{style:{fontSize:"20px",textAlign:"center"},children:"You dont have own words"})}),o.totalPages>1&&e.jsx(P,{data:o,formData:a,setFormData:d})]})}export{K as default};
