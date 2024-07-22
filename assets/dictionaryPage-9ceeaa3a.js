import{p as D,r as i,u as O,b as r,o as h,g as P,s as T,j as e,L as H,N as V}from"./index-4ee2733a.js";import{s as $,u as Y,l as q,T as G,P as J}from"./table-3c9e7e34.js";import{t as K}from"./confirmationModal-e793beea.js";import{S as Q}from"./index-673db7ee.js";import{M as U}from"./modals-b307e400.js";import"./error-c41fa518.js";const X=D.div`
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
      content: url(${$});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .custom-input {
    position: relative;

    &::after {
      content: url(${K});
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
    text-align: center;
    @media only screen and (min-width: 768px) {
      padding: 18px;
      background: #fcfcfc;
      border-radius: 15px;
      margin-top: 28px;
    }
  }
`,Z=a=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...a},i.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10 4.167v11.666M4.167 10h11.666"}));function ne(){const a=O(),{categories:g,customInputRef:f,inputRef:w,dropdownRef:b,capitalizeFirstLetter:C,toLowerCase:y}=Y(),[s,d]=i.useState({filters:"",statistics:"",isIrregular:void 0,page:1}),[j,l]=i.useState(!1),o=r(t=>t.data.words),v=r(t=>t.data.statistics),I=r(t=>t.data.isLoadingCategories),N=r(t=>t.data.isLoadingStatistics),p=r(t=>t.data.isDeleteWord),c=r(t=>t.data.isAddWord),[k,x]=i.useState(!1),[L,z]=i.useState(!1),[B,W]=i.useState(null);i.useEffect(()=>{a(h(p||c)),a(P()),a(T())},[a,p,c]);const R=i.useRef(q.debounce(t=>{const n={...t,statistics:y(t.statistics)};a(h(n))},300));i.useEffect(()=>{R.current(s)},[s]);const u=t=>{const{name:n,value:F}=t.target;d({...s,[n]:F.trim()})},S=t=>{d(n=>({...n,statistics:C(t.toLowerCase())})),t.toLowerCase()==="verb"?l(!0):l(!1)},m=t=>{d(n=>({...n,isIrregular:t}))},M=()=>{x(!0)},E=()=>{x(!1)},A=t=>{W(t),z(!0)};return e.jsxs(X,{children:[e.jsxs("div",{className:"FilterContainer",children:[e.jsxs("form",{className:"Form",children:[e.jsx("div",{className:"SearchContainer",children:e.jsx("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:s.filters,onChange:u})}),e.jsxs("div",{ref:f,className:"custom-input",children:[e.jsx("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:s.statistics,onChange:u,ref:w}),e.jsx("ul",{ref:b,className:"dropdown",children:I?e.jsx("div",{children:e.jsx(H,{})}):g.map(t=>e.jsx("li",{className:"ListItem",onClick:()=>S(t),children:t},t))})]}),e.jsxs("ul",{className:"RadioButtonList",style:{display:j?"flex":"none"},children:[e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:()=>m(!1),checked:s.isIrregular===!1}),"Regular"]}),e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"irregular",name:"irregular",type:"radio",onChange:()=>m(!0),checked:s.isIrregular===!0}),"Irregular"]})]})]}),e.jsxs("div",{className:"CountContainer",children:[e.jsxs("p",{className:"CountWord",children:["To study:",e.jsx("span",{className:"NumberCountWord",children:!N&&v.totalCount})]}),e.jsxs("ul",{className:"ButtonList",children:[e.jsxs("li",{className:"ButtonItem",onClick:M,children:["Add word ",e.jsx(Z,{className:"IconButton"})]}),e.jsx("li",{children:e.jsxs(V,{className:"ButtonItem",to:"/training",children:["Train oneself ",e.jsx(Q,{className:"IconButton"})]})})]})]})]}),e.jsx("div",{className:"TableContainer",children:o.results&&o.results.length!==0?e.jsx(G,{data:o,openModalEdit:A}):e.jsx("p",{className:"NotFound",children:"You have no words yet"})}),e.jsx("div",{className:"PageButtonContainer",children:o.pageCount&&o.pageCount!==0&&e.jsx(J,{setFormData:d,formData:s,pageCount:o.pageCount})}),e.jsx(U,{isModalOpenAddWord:k,isModalOpenEdit:L,selectedWord:B,onClose:E})]})}export{ne as default};
