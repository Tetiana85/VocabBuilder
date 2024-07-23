import{p as q,r as o,u as G,b as r,o as C,g as J,s as K,j as t,L as Q,N as U,h as X}from"./index-f1fa268b.js";import{s as Z,u as _,l as ee,T as te,P as oe}from"./table-a55fbf6b.js";import{t as ae}from"./extends-09a7e574.js";import{S as ne}from"./index-6008286f.js";import{M as se}from"./modals-f1d2bf96.js";import"./error-ca5a6836.js";const ie=q.div`
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
      content: url(${Z});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .custom-input {
    position: relative;

    &::after {
      content: url(${ae});
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
`,re=n=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...n},o.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10 4.167v11.666M4.167 10h11.666"}));function me(){const n=G(),{categories:y,customInputRef:j,inputRef:v,dropdownRef:I,capitalizeFirstLetter:N,toLowerCase:k}=_(),[s,d]=o.useState({filters:"",statistics:"",isIrregular:void 0,page:1}),[M,x]=o.useState(!1),i=r(e=>e.data.words),W=r(e=>e.data.statistics),L=r(e=>e.data.isLoadingCategories),z=r(e=>e.data.isLoadingStatistics),u=r(e=>e.data.isDeleteWord),m=r(e=>e.data.isAddWord),[B,h]=o.useState(!1),[S,l]=o.useState(!1),[R,p]=o.useState(!1),[O,f]=o.useState(!1),[D,c]=o.useState(null),[E,F]=o.useState({x:0,y:0});o.useEffect(()=>{n(C(u||m)),n(J()),n(K())},[n,u,m]);const A=o.useRef(ee.debounce(e=>{const a={...e,statistics:k(e.statistics)};n(C(a))},300));o.useEffect(()=>{A.current(s)},[s]);const g=e=>{const{name:a,value:Y}=e.target;d({...s,[a]:Y.trim()})},P=e=>{d(a=>({...a,statistics:N(e.toLowerCase())})),e.toLowerCase()==="verb"?x(!0):x(!1)},w=e=>{d(a=>({...a,isIrregular:e}))},T=()=>{h(!0)},H=e=>{c(e),l(!0)},V=(e,a)=>{c(e),F(a),p(!0)},b=e=>{c(e),f(!0)},$=e=>n(X(e)).then(a=>{a.payload});return t.jsxs(ie,{children:[t.jsxs("div",{className:"FilterContainer",children:[t.jsxs("form",{className:"Form",children:[t.jsx("div",{className:"SearchContainer",children:t.jsx("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:s.filters,onChange:g})}),t.jsxs("div",{ref:j,className:"custom-input",children:[t.jsx("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:s.statistics,onChange:g,ref:v}),t.jsx("ul",{ref:I,className:"dropdown",children:L?t.jsx("div",{children:t.jsx(Q,{})}):y.map(e=>t.jsx("li",{className:"ListItem",onClick:()=>P(e),children:e},e))})]}),t.jsxs("ul",{className:"RadioButtonList",style:{display:M?"flex":"none"},children:[t.jsxs("li",{className:"RadioButtonItem",children:[t.jsx("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:()=>w(!1),checked:s.isIrregular===!1}),"Regular"]}),t.jsxs("li",{className:"RadioButtonItem",children:[t.jsx("input",{className:"RadioButton",id:"irregular",name:"irregular",type:"radio",onChange:()=>w(!0),checked:s.isIrregular===!0}),"Irregular"]})]})]}),t.jsxs("div",{className:"CountContainer",children:[t.jsxs("p",{className:"CountWord",children:["To study:",t.jsx("span",{className:"NumberCountWord",children:!z&&W.totalCount})]}),t.jsxs("ul",{className:"ButtonList",children:[t.jsxs("li",{className:"ButtonItem",onClick:T,children:["Add word ",t.jsx(re,{className:"IconButton"})]}),t.jsx("li",{children:t.jsxs(U,{className:"ButtonItem",to:"/training",children:["Train oneself ",t.jsx(ne,{className:"IconButton"})]})})]})]})]}),t.jsx("div",{className:"TableContainer",children:i.results&&i.results.length!==0?t.jsx(te,{data:i,openModalEdit:H,openModalClickWord:V,openModalConfirmation:b}):t.jsx("p",{className:"NotFound",children:"You have no words yet"})}),t.jsx("div",{className:"PageButtonContainer",children:i.pageCount&&i.pageCount!==0&&t.jsx(oe,{setFormData:d,formData:s,pageCount:i.pageCount})}),t.jsx(se,{isMobileModalOpen:!1,isModalOpenAddWord:B,isModalOpenEdit:S,isModalOpenClickWord:R,isModalOpenConfirmation:O,isModalOpenWellDone:!1,selectedWord:D,coordinates:E,onClose:()=>{h(!1),l(!1),p(!1),f(!1)},onEdit:()=>{l(!0),p(!1)},onDelete:$,handleOpenModalConfirmation:b})]})}export{me as default};
