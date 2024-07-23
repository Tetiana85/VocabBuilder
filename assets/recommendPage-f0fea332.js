import{p as j,u as C,r as o,b as v,g as I,e as N,j as e,N as z}from"./index-d63682e6.js";import{s as R,u as k,l as B,T as L,P as F}from"./table-329955ce.js";import{t as S}from"./extends-dfebe261.js";import{S as W}from"./index-aabdfbfd.js";const T=j.div`
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
      content: url(${R});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .custom-input {
    position: relative;

    &::after {
      content: url(${S});
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
    font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (375 - 320)));
    color: rgba(18, 20, 23, 0.5);
    align-items: center;
    display: flex;
    gap: 8px;
    @media only screen and (min-width: 375px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 768px) {
      margin-top: 0px;
    }
  }

  .NumberCountWord {
    font-weight: 500;
    font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (375 - 320)));
    color: #121417;
    @media only screen and (min-width: 375px) {
      font-size: 20px;
    }
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
    font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (375 - 320)));
    @media only screen and (min-width: 375px) {
      font-size: 16px;
    }

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
    margin-top: 40px;
    text-align: center;
    @media only screen and (min-width: 768px) {
      padding: 18px;
      background: #fcfcfc;
      border-radius: 15px;
      margin-top: 28px;
    }
  }
`;function H(){const r=C(),{categories:l,customInputRef:x,inputRef:m,dropdownRef:u,capitalizeFirstLetter:h,toLowerCase:g}=k(),[i,s]=o.useState({filters:"",statistics:"",isIrregular:void 0,page:1}),[f,d]=o.useState(!1),a=v(t=>t.data.allWords);o.useEffect(()=>{r(I())},[r]);const b=o.useRef(B.debounce(t=>{const n={...t,statistics:g(t.statistics)};r(N(n))},300));o.useEffect(()=>{b.current(i)},[i]);const p=t=>{const{name:n,value:y}=t.target;s({...i,[n]:y.trim()})},w=t=>{s(n=>({...n,statistics:h(t.toLowerCase())})),t.toLowerCase()==="verb"?d(!0):d(!1)},c=t=>{s(n=>({...n,isIrregular:t}))};return e.jsxs(T,{children:[e.jsxs("div",{className:"FilterContainer",children:[e.jsxs("form",{className:"Form",children:[e.jsx("div",{className:"SearchContainer",children:e.jsx("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:i.filters,onChange:p})}),e.jsxs("div",{ref:x,className:"custom-input",children:[e.jsx("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:i.statistics,onChange:p,ref:m}),e.jsx("ul",{ref:u,className:"dropdown",children:l&&l.map(t=>e.jsx("li",{className:"ListItem",onClick:()=>w(t),children:t},t))})]}),e.jsxs("ul",{className:"RadioButtonList",style:{display:f?"flex":"none"},children:[e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:()=>c(!1),checked:i.isIrregular===!1}),"Regular"]}),e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"reason",name:"reason",type:"radio",onChange:()=>c(!0),checked:i.isIrregular===!0}),"Irregular"]})]})]}),e.jsxs("div",{className:"CountContainer",children:[e.jsxs("p",{className:"CountWord",children:["To study:",e.jsx("span",{className:"NumberCountWord",children:a.results&&a.results.length})]}),e.jsx("ul",{className:"ButtonList",children:e.jsx("li",{children:e.jsxs(z,{className:"ButtonItem",to:"/training",children:["Train oneself ",e.jsx(W,{className:"IconButton"})]})})})]})]}),e.jsx("div",{className:"TableContainer",children:a?e.jsx(L,{data:a}):e.jsx("div",{children:"Oooops samething wrong..."})}),a.totalPages>1&&e.jsx(F,{data:a,formData:i,setFormData:s})]})}export{H as default};