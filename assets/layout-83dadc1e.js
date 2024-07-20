import{r as m,p as ae,u as pe,a as Xt,b as B,j as f,N as de,c as Jt,m as Kn,d as Zn,R as St,e as Qt,f as Xn,o as Jn,g as Qn,h as ei,i as ti,k as ni,l as ii,n as ri,q as ai,s as oi,t as si,v as ui,L as li,O as ci}from"./index-045823e1.js";import{e as nt,c as en,u as tn,A as di,S as nn,E as pi}from"./error-0a4a89bf.js";import{t as fi}from"./toggle-c9fc8ecd.js";import{_ as oe,a as re,b as S,c as hi,d as rn,e as mi,f as gi,g as Fe,h as F,S as an,i as on}from"./extends-1172ab5a.js";const vi=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:40,viewBox:"0 0 40 40",fill:"none",...t},m.createElement("circle",{cx:20,cy:20,r:20,fill:"#85AA9F"}),m.createElement("path",{fill:"#FCFCFC",fillRule:"evenodd",d:"M20.443 19c5.944-4.483 6.206-7.2 0-12-6.325 4.902-5.51 7.501 0 12ZM19 20.557c-4.483-5.944-7.2-6.206-12 0 4.902 6.325 7.5 5.51 12 0Zm15 0c-4.483-5.944-7.2-6.206-12 0 4.902 6.325 7.5 5.51 12 0ZM20.443 34c5.944-4.483 6.206-7.2 0-12-6.325 4.902-5.51 7.501 0 12Z",clipRule:"evenodd"})),bi=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t},m.createElement("path",{fill:"#FCFCFC",fillOpacity:.7,d:"M9.999 3.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Zm0 13.334s6.666 0 6.666-1.667c0-2-3.25-4.167-6.666-4.167C6.582 10.833 3.332 13 3.332 15c0 1.667 6.667 1.667 6.667 1.667Z"})),xi=t=>m.createElement("svg",{width:32,height:22,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("line",{x1:5.86914,y1:3.66663,x2:30.9996,y2:3.66663,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"}),m.createElement("line",{x1:5.86914,y1:17,x2:30.9996,y2:17,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"}),m.createElement("line",{x1:13.5215,y1:10.3334,x2:30.9997,y2:10.3334,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"})),sn=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t},m.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.333 10h13.334m0 0-3.334-3.333M16.667 10l-3.334 3.333"})),Ei=ae.div`
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
`,Ue=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...t},m.createElement("path",{stroke:"#FCFCFC",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M24 8 8 24M8 8l16 16"})),Ci="/VocabBuilder/assets/x-modal-b22a52f5.svg",yi=ae.div`
  background-color: #85aa9f;
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  transition: right 0.5s ease-in-out;
  padding: 16px;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  & > :nth-child(3) {
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .HeaderOfModal {
    display: flex;
    justify-content: space-between;
  }

  .UserContainer {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .UserName {
    font-weight: 500;
    font-size: 16px;
    color: #fcfcfc;
  }

  .UserImag {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 36px;
    height: 36px;
    background: #fcfcfc;
  }

  .user-icon {
    fill: #85aa9f;
  }

  .ButtonClose {
    cursor: pointer;
    background-image: url(${Ci});

    &:hover {
      path {
        stroke: #121417;
      }
    }
  }

  .NavList {
    display: flex;
    gap: 28px;
    margin-top: 150px;
    flex-direction: column;
    margin-bottom: 92px;
  }

  .NavElement {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    color: #fcfcfc;
    transition:
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;

    &:hover,
    &.active {
      padding: 12px 20px;
      border-radius: 15px;
      background-color: #f8f8f8;
      color: #121417;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .Img {
    background-image: url(/VocabBuilder/src/img/registration-mobile.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    height: 435px;
    width: 498px;
    margin-top: auto;
  }

  .ButtonLogOut {
    border: none;
    color: #fcfcfc;
    background: transparent;
    padding-left: 0;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;

    &:hover {
      color: #85aa9f;
      transition: fill 0.3s ease;
    }
  }
`,wi=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t},m.createElement("path",{fill:"#85AA9F",d:"M9.999 3.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Zm0 13.334s6.666 0 6.666-1.667c0-2-3.25-4.167-6.666-4.167C6.582 10.833 3.332 13 3.332 15c0 1.667 6.667 1.667 6.667 1.667Z"}));function Si({handleClickClose:t}){const e=pe(),i=Xt(),r=()=>{e(Jt.logOut()).then(i("/"))},n=B(s=>s.auth.name),a=()=>{t()};return f.jsxs(yi,{children:[f.jsxs("div",{className:"HeaderOfModal",children:[f.jsxs("div",{className:"UserContainer",children:[f.jsx("p",{className:"UserName",children:n}),f.jsx("span",{className:"UserImag",children:f.jsx(wi,{className:"user-icon"})})]}),f.jsx("div",{className:"UserContainer"}),f.jsx(Ue,{className:"ButtonClose",onClick:t})]}),f.jsxs("ul",{className:"NavList",children:[f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/dictionary",onClick:a,children:"Dictionary"})}),f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/recommend",onClick:a,children:"Recommend"})}),f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/training",onClick:a,children:"Training"})}),f.jsxs("button",{className:"ButtonLogOut",onClick:r,children:["Log Out",f.jsx(sn,{className:"SwitchIcon"})]})]}),f.jsx("div",{className:"Img"})]})}const Fi=ae.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;

  .ModalDiv {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`,Oi=ae.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
`,Mi=ae.div`
  position: relative;
  border-radius: 15px;
  max-width: 343px;
  height: 622px;
  background: #85aa9f;
  padding: 48px 16px;
  color: #fcfcfc;
  margin: 0 15px;

  @media only screen and (min-width: 768px) {
    box-sizing: border-box;
    border-radius: 30px;
    max-width: 628px;
    height: 622px;
    padding: 48px 64px;
    overflow: hidden;
    margin: 0px;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
      path {
        stroke: #121417;
      }
    }
  }

  .Title {
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: -0.02em;
    /* color: rgba(248, 248, 248, 0.8); */

    @media only screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 120%;
    }
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* color: rgba(248, 248, 248, 0.8); */
    margin-top: 20px;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .Form {
    margin-top: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media only screen and (max-width: 374px) {
    }

    @media only screen and (min-width: 768px) {
      gap: 20px;
    }
  }

  input[id='ukrainian'],
  input[id='english'] {
    border: 1px solid #d1d5db;
    border-radius: 15px;
    padding: 12px 18px;
    max-width: 311px;
    height: 48px;
    background: none;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #f8f8f8;

    &:focus {
      outline: none;
    }
  }

  input[id='ukrainian'],
  input[id='english'] {
    @media only screen and (max-width: 375px) {
    }
  }

  input[id='ukrainian'],
  input[id='english'] {
    @media only screen and (min-width: 768px) {
      width: 353px;
      height: 52px;
    }
  }

  .custom-inputAdd {
    position: relative;

    &::after {
      content: url(${fi});
      position: absolute;
      top: 14px;
      right: 24px;

      @media only screen and (min-width: 768px) {
        left: 170px;
      }
    }
  }

  .custom-inputAdd::after {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(330deg)
      brightness(91%) contrast(92%);
  }

  .RadioButtonList {
    position: absolute;
    top: 65px;
    display: flex;
    gap: 34px;
    left: 14px;
  }

  .RadioButtonItem {
    position: relative;
    display: flex;
    gap: 8px;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #fcfcfc;
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
      background-color: #85aa9f;
      border: 2px solid #d1d5db;
    }

    &:checked:before {
      border-color: #fcfcfc;
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #fcfcfc;
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }

  .UkrainianContainer[id='ukrainian'] {
    margin-top: 32px;

    @media only screen and (max-width: 375px) {
      /* margin-top: 35px; */
    }

    @media only screen and (min-width: 768px) {
      margin-top: 40px;
    }
  }

  .UkrainianContainer,
  .EnglishContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      gap: 32px;
    }
  }

  .InputImagContainer {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      order: 2;
    }
  }

  .ButtonList {
    margin-top: 30px;
    display: flex;
    gap: 8px;

    @media only screen and (max-width: 375px) {
      /* margin-top: 15px;
      gap: 10px; */
    }
  }

  @media only screen and (min-width: 768px) {
    /* margin-top: 15px; */
  }

  .ButtonAdd {
    cursor: pointer;
    border-radius: 30px;
    /* padding: 12px 63px; */
    width: 100%;
    max-width: 158px;
    height: 48px;
    background: #fcfcfc;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #85aa9f;
      color: #fcfcfc;
      border: 1px solid #d1d5db;
    }

    @media only screen and (min-width: 768px) {
      border-radius: 30px;
      /* padding: 14px 104px; */
      max-width: 245px;
      height: 56px;
      font-size: 18px;
      line-height: 156%;
    }
  }

  .ButtonCancel {
    cursor: pointer;
    border: 1px solid rgba(252, 252, 252, 0.4);
    border-radius: 30px;
    /* padding: 12px 45px; */
    width: 100%;
    max-width: 145px;
    height: 48px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #fcfcfc;
      color: #85aa9f;
    }

    @media only screen and (min-width: 768px) {
      /* padding: 14px 92px; */
      max-width: 245px;
      height: 56px;
      font-size: 18px;
    }
  }

  .ErrorText {
    position: absolute;
    color: red;
    top: 90px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${nt});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }

  .SuccessText {
    position: absolute;
    color: green;
    top: 90px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${en});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }

  .EnInputMistake {
    position: absolute;
    color: red;
    top: 90px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${nt});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }
`;var Ii=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Ai(t){var e=t.defaultInputValue,i=e===void 0?"":e,r=t.defaultMenuIsOpen,n=r===void 0?!1:r,a=t.defaultValue,s=a===void 0?null:a,l=t.inputValue,o=t.menuIsOpen,u=t.onChange,c=t.onInputChange,d=t.onMenuClose,v=t.onMenuOpen,b=t.value,x=oe(t,Ii),p=m.useState(l!==void 0?l:i),h=re(p,2),g=h[0],E=h[1],y=m.useState(o!==void 0?o:n),O=re(y,2),A=O[0],M=O[1],C=m.useState(b!==void 0?b:s),I=re(C,2),V=I[0],$=I[1],U=m.useCallback(function(Y,se){typeof u=="function"&&u(Y,se),$(Y)},[u]),z=m.useCallback(function(Y,se){var ue;typeof c=="function"&&(ue=c(Y,se)),E(ue!==void 0?ue:Y)},[c]),ee=m.useCallback(function(){typeof v=="function"&&v(),M(!0)},[v]),te=m.useCallback(function(){typeof d=="function"&&d(),M(!1)},[d]),N=l!==void 0?l:g,R=o!==void 0?o:A,Z=b!==void 0?b:V;return S(S({},x),{},{inputValue:N,menuIsOpen:R,onChange:U,onInputChange:z,onMenuClose:te,onMenuOpen:ee,value:Z})}function Di(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ft(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,hi(r.key),r)}}function ki(t,e,i){return e&&Ft(t.prototype,e),i&&Ft(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t,e){return it=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},it(t,e)}function Vi(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&it(t,e)}function Re(t){return Re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},Re(t)}function Pi(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Li(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ri(t,e){if(e&&(rn(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Li(t)}function Ti(t){var e=Pi();return function(){var r=Re(t),n;if(e){var a=Re(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Ri(this,n)}}function Bi(t){if(Array.isArray(t))return mi(t)}function Ni(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ji(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ct(t){return Bi(t)||Ni(t)||gi(t)||ji()}function $i(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function zi(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Hi=function(){function t(i){var r=this;this._insertTag=function(n){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(n,a),r.tags.push(n)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(zi(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=$i(n);try{a.insertRule(r,a.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),H="-ms-",Te="-moz-",D="-webkit-",un="comm",dt="rule",pt="decl",Ui="@import",ln="@keyframes",Wi="@layer",_i=Math.abs,We=String.fromCharCode,Gi=Object.assign;function Yi(t,e){return j(t,0)^45?(((e<<2^j(t,0))<<2^j(t,1))<<2^j(t,2))<<2^j(t,3):0}function cn(t){return t.trim()}function qi(t,e){return(t=e.exec(t))?t[0]:t}function k(t,e,i){return t.replace(e,i)}function rt(t,e){return t.indexOf(e)}function j(t,e){return t.charCodeAt(e)|0}function xe(t,e,i){return t.slice(e,i)}function X(t){return t.length}function ft(t){return t.length}function Oe(t,e){return e.push(t),t}function Ki(t,e){return t.map(e).join("")}var _e=1,me=1,dn=0,W=0,L=0,ge="";function Ge(t,e,i,r,n,a,s){return{value:t,root:e,parent:i,type:r,props:n,children:a,line:_e,column:me,length:s,return:""}}function ve(t,e){return Gi(Ge("",null,null,"",null,null,0),t,{length:-t.length},e)}function Zi(){return L}function Xi(){return L=W>0?j(ge,--W):0,me--,L===10&&(me=1,_e--),L}function G(){return L=W<dn?j(ge,W++):0,me++,L===10&&(me=1,_e++),L}function Q(){return j(ge,W)}function ke(){return W}function ye(t,e){return xe(ge,t,e)}function Ee(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pn(t){return _e=me=1,dn=X(ge=t),W=0,[]}function fn(t){return ge="",t}function Ve(t){return cn(ye(W-1,at(t===91?t+2:t===40?t+1:t)))}function Ji(t){for(;(L=Q())&&L<33;)G();return Ee(t)>2||Ee(L)>3?"":" "}function Qi(t,e){for(;--e&&G()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return ye(t,ke()+(e<6&&Q()==32&&G()==32))}function at(t){for(;G();)switch(L){case t:return W;case 34:case 39:t!==34&&t!==39&&at(L);break;case 40:t===41&&at(t);break;case 92:G();break}return W}function er(t,e){for(;G()&&t+L!==47+10;)if(t+L===42+42&&Q()===47)break;return"/*"+ye(e,W-1)+"*"+We(t===47?t:G())}function tr(t){for(;!Ee(Q());)G();return ye(t,W)}function nr(t){return fn(Pe("",null,null,null,[""],t=pn(t),0,[0],t))}function Pe(t,e,i,r,n,a,s,l,o){for(var u=0,c=0,d=s,v=0,b=0,x=0,p=1,h=1,g=1,E=0,y="",O=n,A=a,M=r,C=y;h;)switch(x=E,E=G()){case 40:if(x!=108&&j(C,d-1)==58){rt(C+=k(Ve(E),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:C+=Ve(E);break;case 9:case 10:case 13:case 32:C+=Ji(x);break;case 92:C+=Qi(ke()-1,7);continue;case 47:switch(Q()){case 42:case 47:Oe(ir(er(G(),ke()),e,i),o);break;default:C+="/"}break;case 123*p:l[u++]=X(C)*g;case 125*p:case 59:case 0:switch(E){case 0:case 125:h=0;case 59+c:g==-1&&(C=k(C,/\f/g,"")),b>0&&X(C)-d&&Oe(b>32?Mt(C+";",r,i,d-1):Mt(k(C," ","")+";",r,i,d-2),o);break;case 59:C+=";";default:if(Oe(M=Ot(C,e,i,u,c,n,l,y,O=[],A=[],d),a),E===123)if(c===0)Pe(C,e,M,M,O,a,d,l,A);else switch(v===99&&j(C,3)===110?100:v){case 100:case 108:case 109:case 115:Pe(t,M,M,r&&Oe(Ot(t,M,M,0,0,n,l,y,n,O=[],d),A),n,A,d,l,r?O:A);break;default:Pe(C,M,M,M,[""],A,0,l,A)}}u=c=b=0,p=g=1,y=C="",d=s;break;case 58:d=1+X(C),b=x;default:if(p<1){if(E==123)--p;else if(E==125&&p++==0&&Xi()==125)continue}switch(C+=We(E),E*p){case 38:g=c>0?1:(C+="\f",-1);break;case 44:l[u++]=(X(C)-1)*g,g=1;break;case 64:Q()===45&&(C+=Ve(G())),v=Q(),c=d=X(y=C+=tr(ke())),E++;break;case 45:x===45&&X(C)==2&&(p=0)}}return a}function Ot(t,e,i,r,n,a,s,l,o,u,c){for(var d=n-1,v=n===0?a:[""],b=ft(v),x=0,p=0,h=0;x<r;++x)for(var g=0,E=xe(t,d+1,d=_i(p=s[x])),y=t;g<b;++g)(y=cn(p>0?v[g]+" "+E:k(E,/&\f/g,v[g])))&&(o[h++]=y);return Ge(t,e,i,n===0?dt:l,o,u,c)}function ir(t,e,i){return Ge(t,e,i,un,We(Zi()),xe(t,2,-2),0)}function Mt(t,e,i,r){return Ge(t,e,i,pt,xe(t,0,r),xe(t,r+1,-1),r)}function he(t,e){for(var i="",r=ft(t),n=0;n<r;n++)i+=e(t[n],n,t,e)||"";return i}function rr(t,e,i,r){switch(t.type){case Wi:if(t.children.length)break;case Ui:case pt:return t.return=t.return||t.value;case un:return"";case ln:return t.return=t.value+"{"+he(t.children,r)+"}";case dt:t.value=t.props.join(",")}return X(i=he(t.children,r))?t.return=t.value+"{"+i+"}":""}function ar(t){var e=ft(t);return function(i,r,n,a){for(var s="",l=0;l<e;l++)s+=t[l](i,r,n,a)||"";return s}}function or(t){return function(e){e.root||(e=e.return)&&t(e)}}var sr=function(e,i,r){for(var n=0,a=0;n=a,a=Q(),n===38&&a===12&&(i[r]=1),!Ee(a);)G();return ye(e,W)},ur=function(e,i){var r=-1,n=44;do switch(Ee(n)){case 0:n===38&&Q()===12&&(i[r]=1),e[r]+=sr(W-1,i,r);break;case 2:e[r]+=Ve(n);break;case 4:if(n===44){e[++r]=Q()===58?"&\f":"",i[r]=e[r].length;break}default:e[r]+=We(n)}while(n=G());return e},lr=function(e,i){return fn(ur(pn(e),i))},It=new WeakMap,cr=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var i=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&i.charCodeAt(0)!==58&&!It.get(r))&&!n){It.set(e,!0);for(var a=[],s=lr(i,a),l=r.props,o=0,u=0;o<s.length;o++)for(var c=0;c<l.length;c++,u++)e.props[u]=a[o]?s[o].replace(/&\f/g,l[c]):l[c]+" "+s[o]}}},dr=function(e){if(e.type==="decl"){var i=e.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(e.return="",e.value="")}};function hn(t,e){switch(Yi(t,e)){case 5103:return D+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return D+t+Te+t+H+t+t;case 6828:case 4268:return D+t+H+t+t;case 6165:return D+t+H+"flex-"+t+t;case 5187:return D+t+k(t,/(\w+).+(:[^]+)/,D+"box-$1$2"+H+"flex-$1$2")+t;case 5443:return D+t+H+"flex-item-"+k(t,/flex-|-self/,"")+t;case 4675:return D+t+H+"flex-line-pack"+k(t,/align-content|flex-|-self/,"")+t;case 5548:return D+t+H+k(t,"shrink","negative")+t;case 5292:return D+t+H+k(t,"basis","preferred-size")+t;case 6060:return D+"box-"+k(t,"-grow","")+D+t+H+k(t,"grow","positive")+t;case 4554:return D+k(t,/([^-])(transform)/g,"$1"+D+"$2")+t;case 6187:return k(k(k(t,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),t,"")+t;case 5495:case 3959:return k(t,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return k(k(t,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+t+t;case 4095:case 3583:case 4068:case 2532:return k(t,/(.+)-inline(.+)/,D+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(X(t)-1-e>6)switch(j(t,e+1)){case 109:if(j(t,e+4)!==45)break;case 102:return k(t,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Te+(j(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~rt(t,"stretch")?hn(k(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(j(t,e+1)!==115)break;case 6444:switch(j(t,X(t)-3-(~rt(t,"!important")&&10))){case 107:return k(t,":",":"+D)+t;case 101:return k(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(j(t,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+H+"$2box$3")+t}break;case 5936:switch(j(t,e+11)){case 114:return D+t+H+k(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return D+t+H+k(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return D+t+H+k(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return D+t+H+t+t}return t}var pr=function(e,i,r,n){if(e.length>-1&&!e.return)switch(e.type){case pt:e.return=hn(e.value,e.length);break;case ln:return he([ve(e,{value:k(e.value,"@","@"+D)})],n);case dt:if(e.length)return Ki(e.props,function(a){switch(qi(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return he([ve(e,{props:[k(a,/:(read-\w+)/,":"+Te+"$1")]})],n);case"::placeholder":return he([ve(e,{props:[k(a,/:(plac\w+)/,":"+D+"input-$1")]}),ve(e,{props:[k(a,/:(plac\w+)/,":"+Te+"$1")]}),ve(e,{props:[k(a,/:(plac\w+)/,H+"input-$1")]})],n)}return""})}},fr=[pr],hr=function(e){var i=e.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(p){var h=p.getAttribute("data-emotion");h.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var n=e.stylisPlugins||fr,a={},s,l=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(p){for(var h=p.getAttribute("data-emotion").split(" "),g=1;g<h.length;g++)a[h[g]]=!0;l.push(p)});var o,u=[cr,dr];{var c,d=[rr,or(function(p){c.insert(p)})],v=ar(u.concat(n,d)),b=function(h){return he(nr(h),v)};o=function(h,g,E,y){c=E,b(h?h+"{"+g.styles+"}":g.styles),y&&(x.inserted[g.name]=!0)}}var x={key:i,sheet:new Hi({key:i,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:o};return x.sheet.hydrate(l),x},mr=!0;function gr(t,e,i){var r="";return i.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):r+=n+" "}),r}var mn=function(e,i,r){var n=e.key+"-"+i.name;(r===!1||mr===!1)&&e.registered[n]===void 0&&(e.registered[n]=i.styles)},vr=function(e,i,r){mn(e,i,r);var n=e.key+"-"+i.name;if(e.inserted[i.name]===void 0){var a=i;do e.insert(i===a?"."+n:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function br(t){for(var e=0,i,r=0,n=t.length;n>=4;++r,n-=4)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,e=(i&65535)*1540483477+((i>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var xr=/[A-Z]|^ms/g,Er=/_EMO_([^_]+?)_([^]*?)_EMO_/g,gn=function(e){return e.charCodeAt(1)===45},At=function(e){return e!=null&&typeof e!="boolean"},qe=Kn(function(t){return gn(t)?t:t.replace(xr,"-$&").toLowerCase()}),Dt=function(e,i){switch(e){case"animation":case"animationName":if(typeof i=="string")return i.replace(Er,function(r,n,a){return J={name:n,styles:a,next:J},n})}return Zn[e]!==1&&!gn(e)&&typeof i=="number"&&i!==0?i+"px":i};function Ce(t,e,i){if(i==null)return"";if(i.__emotion_styles!==void 0)return i;switch(typeof i){case"boolean":return"";case"object":{if(i.anim===1)return J={name:i.name,styles:i.styles,next:J},i.name;if(i.styles!==void 0){var r=i.next;if(r!==void 0)for(;r!==void 0;)J={name:r.name,styles:r.styles,next:J},r=r.next;var n=i.styles+";";return n}return Cr(t,e,i)}case"function":{if(t!==void 0){var a=J,s=i(t);return J=a,Ce(t,e,s)}break}}if(e==null)return i;var l=e[i];return l!==void 0?l:i}function Cr(t,e,i){var r="";if(Array.isArray(i))for(var n=0;n<i.length;n++)r+=Ce(t,e,i[n])+";";else for(var a in i){var s=i[a];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=a+"{"+e[s]+"}":At(s)&&(r+=qe(a)+":"+Dt(a,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var l=0;l<s.length;l++)At(s[l])&&(r+=qe(a)+":"+Dt(a,s[l])+";");else{var o=Ce(t,e,s);switch(a){case"animation":case"animationName":{r+=qe(a)+":"+o+";";break}default:r+=a+"{"+o+"}"}}}return r}var kt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,J,vn=function(e,i,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";J=void 0;var s=e[0];s==null||s.raw===void 0?(n=!1,a+=Ce(r,i,s)):a+=s[0];for(var l=1;l<e.length;l++)a+=Ce(r,i,e[l]),n&&(a+=s[l]);kt.lastIndex=0;for(var o="",u;(u=kt.exec(a))!==null;)o+="-"+u[1];var c=br(a)+o;return{name:c,styles:a,next:J}},yr=function(e){return e()},wr=St["useInsertionEffect"]?St["useInsertionEffect"]:!1,Sr=wr||yr,ht={}.hasOwnProperty,bn=m.createContext(typeof HTMLElement<"u"?hr({key:"css"}):null);bn.Provider;var Fr=function(e){return m.forwardRef(function(i,r){var n=m.useContext(bn);return e(i,n,r)})},Or=m.createContext({}),ot="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Mr=function(e,i){var r={};for(var n in i)ht.call(i,n)&&(r[n]=i[n]);return r[ot]=e,r},Ir=function(e){var i=e.cache,r=e.serialized,n=e.isStringTag;return mn(i,r,n),Sr(function(){return vr(i,r,n)}),null},Ar=Fr(function(t,e,i){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var n=t[ot],a=[r],s="";typeof t.className=="string"?s=gr(e.registered,a,t.className):t.className!=null&&(s=t.className+" ");var l=vn(a,void 0,m.useContext(Or));s+=e.key+"-"+l.name;var o={};for(var u in t)ht.call(t,u)&&u!=="css"&&u!==ot&&(o[u]=t[u]);return o.ref=i,o.className=s,m.createElement(m.Fragment,null,m.createElement(Ir,{cache:e,serialized:l,isStringTag:typeof n=="string"}),m.createElement(n,o))}),Dr=Ar,w=function(e,i){var r=arguments;if(i==null||!ht.call(i,"css"))return m.createElement.apply(void 0,r);var n=r.length,a=new Array(n);a[0]=Dr,a[1]=Mr(e,i);for(var s=2;s<n;s++)a[s]=r[s];return m.createElement.apply(null,a)};function mt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return vn(e)}var kr=function(){var e=mt.apply(void 0,arguments),i="animation-"+e.name;return{name:i,styles:"@keyframes "+i+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Vr(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const Pr=Math.min,Lr=Math.max,Be=Math.round,Me=Math.floor,Ne=t=>({x:t,y:t});function Rr(t){const{x:e,y:i,width:r,height:n}=t;return{width:r,height:n,top:i,left:e,right:e+r,bottom:i+n,x:e,y:i}}function xn(t){return Cn(t)?(t.nodeName||"").toLowerCase():"#document"}function K(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function En(t){var e;return(e=(Cn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Cn(t){return t instanceof Node||t instanceof K(t).Node}function st(t){return t instanceof Element||t instanceof K(t).Element}function gt(t){return t instanceof HTMLElement||t instanceof K(t).HTMLElement}function Vt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof K(t).ShadowRoot}function yn(t){const{overflow:e,overflowX:i,overflowY:r,display:n}=vt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(n)}function Tr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Br(t){return["html","body","#document"].includes(xn(t))}function vt(t){return K(t).getComputedStyle(t)}function Nr(t){if(xn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Vt(t)&&t.host||En(t);return Vt(e)?e.host:e}function wn(t){const e=Nr(t);return Br(e)?t.ownerDocument?t.ownerDocument.body:t.body:gt(e)&&yn(e)?e:wn(e)}function je(t,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const n=wn(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),s=K(n);return a?e.concat(s,s.visualViewport||[],yn(n)?n:[],s.frameElement&&i?je(s.frameElement):[]):e.concat(n,je(n,[],i))}function jr(t){const e=vt(t);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const n=gt(t),a=n?t.offsetWidth:i,s=n?t.offsetHeight:r,l=Be(i)!==a||Be(r)!==s;return l&&(i=a,r=s),{width:i,height:r,$:l}}function bt(t){return st(t)?t:t.contextElement}function Ke(t){const e=bt(t);if(!gt(e))return Ne(1);const i=e.getBoundingClientRect(),{width:r,height:n,$:a}=jr(e);let s=(a?Be(i.width):i.width)/r,l=(a?Be(i.height):i.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const $r=Ne(0);function zr(t){const e=K(t);return!Tr()||!e.visualViewport?$r:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Hr(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==K(t)?!1:e}function Pt(t,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const n=t.getBoundingClientRect(),a=bt(t);let s=Ne(1);e&&(r?st(r)&&(s=Ke(r)):s=Ke(t));const l=Hr(a,i,r)?zr(a):Ne(0);let o=(n.left+l.x)/s.x,u=(n.top+l.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(a){const v=K(a),b=r&&st(r)?K(r):r;let x=v,p=x.frameElement;for(;p&&r&&b!==x;){const h=Ke(p),g=p.getBoundingClientRect(),E=vt(p),y=g.left+(p.clientLeft+parseFloat(E.paddingLeft))*h.x,O=g.top+(p.clientTop+parseFloat(E.paddingTop))*h.y;o*=h.x,u*=h.y,c*=h.x,d*=h.y,o+=y,u+=O,x=K(p),p=x.frameElement}}return Rr({width:c,height:d,x:o,y:u})}function Ur(t,e){let i=null,r;const n=En(t);function a(){var l;clearTimeout(r),(l=i)==null||l.disconnect(),i=null}function s(l,o){l===void 0&&(l=!1),o===void 0&&(o=1),a();const{left:u,top:c,width:d,height:v}=t.getBoundingClientRect();if(l||e(),!d||!v)return;const b=Me(c),x=Me(n.clientWidth-(u+d)),p=Me(n.clientHeight-(c+v)),h=Me(u),E={rootMargin:-b+"px "+-x+"px "+-p+"px "+-h+"px",threshold:Lr(0,Pr(1,o))||1};let y=!0;function O(A){const M=A[0].intersectionRatio;if(M!==o){if(!y)return s();M?s(!1,M):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{i=new IntersectionObserver(O,{...E,root:n.ownerDocument})}catch{i=new IntersectionObserver(O,E)}i.observe(t)}return s(!0),a}function Wr(t,e,i,r){r===void 0&&(r={});const{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,u=bt(t),c=n||a?[...u?je(u):[],...je(e)]:[];c.forEach(g=>{n&&g.addEventListener("scroll",i,{passive:!0}),a&&g.addEventListener("resize",i)});const d=u&&l?Ur(u,i):null;let v=-1,b=null;s&&(b=new ResizeObserver(g=>{let[E]=g;E&&E.target===u&&b&&(b.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var y;(y=b)==null||y.observe(e)})),i()}),u&&!o&&b.observe(u),b.observe(e));let x,p=o?Pt(t):null;o&&h();function h(){const g=Pt(t);p&&(g.x!==p.x||g.y!==p.y||g.width!==p.width||g.height!==p.height)&&i(),p=g,x=requestAnimationFrame(h)}return i(),()=>{var g;c.forEach(E=>{n&&E.removeEventListener("scroll",i),a&&E.removeEventListener("resize",i)}),d==null||d(),(g=b)==null||g.disconnect(),b=null,o&&cancelAnimationFrame(x)}}var ut=m.useLayoutEffect,_r=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],$e=function(){};function Gr(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function Yr(t,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),n=2;n<i;n++)r[n-2]=arguments[n];var a=[].concat(r);if(e&&t)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(Gr(t,s)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Lt=function(e){return na(e)?e.filter(Boolean):rn(e)==="object"&&e!==null?[e]:[]},Sn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=oe(e,_r);return S({},i)},P=function(e,i,r){var n=e.cx,a=e.getStyles,s=e.getClassNames,l=e.className;return{css:a(i,e),className:n(r??{},s(i,e),l)}};function Ye(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function qr(t){return Ye(t)?window.innerHeight:t.clientHeight}function Fn(t){return Ye(t)?window.pageYOffset:t.scrollTop}function ze(t,e){if(Ye(t)){window.scrollTo(0,e);return}t.scrollTop=e}function Kr(t){var e=getComputedStyle(t),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function Zr(t,e,i,r){return i*((t=t/r-1)*t*t+1)+e}function Ie(t,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:$e,n=Fn(t),a=e-n,s=10,l=0;function o(){l+=s;var u=Zr(l,n,a,i);ze(t,u),l<i?window.requestAnimationFrame(o):r(t)}o()}function Rt(t,e){var i=t.getBoundingClientRect(),r=e.getBoundingClientRect(),n=e.offsetHeight/3;r.bottom+n>i.bottom?ze(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):r.top-n<i.top&&ze(t,Math.max(e.offsetTop-n,0))}function Xr(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Tt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Jr(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var On=!1,Qr={get passive(){return On=!0}},Ae=typeof window<"u"?window:{};Ae.addEventListener&&Ae.removeEventListener&&(Ae.addEventListener("p",$e,Qr),Ae.removeEventListener("p",$e,!1));var ea=On;function ta(t){return t!=null}function na(t){return Array.isArray(t)}function De(t,e,i){return t?e:i}var ia=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];var a=Object.entries(e).filter(function(s){var l=re(s,1),o=l[0];return!r.includes(o)});return a.reduce(function(s,l){var o=re(l,2),u=o[0],c=o[1];return s[u]=c,s},{})},ra=["children","innerProps"],aa=["children","innerProps"];function oa(t){var e=t.maxHeight,i=t.menuEl,r=t.minHeight,n=t.placement,a=t.shouldScroll,s=t.isFixedPosition,l=t.controlHeight,o=Kr(i),u={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return u;var c=o.getBoundingClientRect(),d=c.height,v=i.getBoundingClientRect(),b=v.bottom,x=v.height,p=v.top,h=i.offsetParent.getBoundingClientRect(),g=h.top,E=s?window.innerHeight:qr(o),y=Fn(o),O=parseInt(getComputedStyle(i).marginBottom,10),A=parseInt(getComputedStyle(i).marginTop,10),M=g-A,C=E-p,I=M+y,V=d-y-p,$=b-E+y+O,U=y+p-A,z=160;switch(n){case"auto":case"bottom":if(C>=x)return{placement:"bottom",maxHeight:e};if(V>=x&&!s)return a&&Ie(o,$,z),{placement:"bottom",maxHeight:e};if(!s&&V>=r||s&&C>=r){a&&Ie(o,$,z);var ee=s?C-O:V-O;return{placement:"bottom",maxHeight:ee}}if(n==="auto"||s){var te=e,N=s?M:I;return N>=r&&(te=Math.min(N-O-l,e)),{placement:"top",maxHeight:te}}if(n==="bottom")return a&&ze(o,$),{placement:"bottom",maxHeight:e};break;case"top":if(M>=x)return{placement:"top",maxHeight:e};if(I>=x&&!s)return a&&Ie(o,U,z),{placement:"top",maxHeight:e};if(!s&&I>=r||s&&M>=r){var R=e;return(!s&&I>=r||s&&M>=r)&&(R=s?M-A:I-A),a&&Ie(o,U,z),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return u}function sa(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var Mn=function(e){return e==="auto"?"bottom":e},ua=function(e,i){var r,n=e.placement,a=e.theme,s=a.borderRadius,l=a.spacing,o=a.colors;return S((r={label:"menu"},Fe(r,sa(n),"100%"),Fe(r,"position","absolute"),Fe(r,"width","100%"),Fe(r,"zIndex",1),r),i?{}:{backgroundColor:o.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},In=m.createContext(null),la=function(e){var i=e.children,r=e.minMenuHeight,n=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,l=e.menuShouldScrollIntoView,o=e.theme,u=m.useContext(In)||{},c=u.setPortalPlacement,d=m.useRef(null),v=m.useState(n),b=re(v,2),x=b[0],p=b[1],h=m.useState(null),g=re(h,2),E=g[0],y=g[1],O=o.spacing.controlHeight;return ut(function(){var A=d.current;if(A){var M=s==="fixed",C=l&&!M,I=oa({maxHeight:n,menuEl:A,minHeight:r,placement:a,shouldScroll:C,isFixedPosition:M,controlHeight:O});p(I.maxHeight),y(I.placement),c==null||c(I.placement)}},[n,a,s,l,r,c,O]),i({ref:d,placerProps:S(S({},e),{},{placement:E||Mn(a),maxHeight:x})})},ca=function(e){var i=e.children,r=e.innerRef,n=e.innerProps;return w("div",F({},P(e,"menu",{menu:!0}),{ref:r},n),i)},da=ca,pa=function(e,i){var r=e.maxHeight,n=e.theme.spacing.baseUnit;return S({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:n,paddingTop:n})},fa=function(e){var i=e.children,r=e.innerProps,n=e.innerRef,a=e.isMulti;return w("div",F({},P(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},r),i)},An=function(e,i){var r=e.theme,n=r.spacing.baseUnit,a=r.colors;return S({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},ha=An,ma=An,ga=function(e){var i=e.children,r=i===void 0?"No options":i,n=e.innerProps,a=oe(e,ra);return w("div",F({},P(S(S({},a),{},{children:r,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),r)},va=function(e){var i=e.children,r=i===void 0?"Loading...":i,n=e.innerProps,a=oe(e,aa);return w("div",F({},P(S(S({},a),{},{children:r,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),r)},ba=function(e){var i=e.rect,r=e.offset,n=e.position;return{left:i.left,position:n,top:r,width:i.width,zIndex:1}},xa=function(e){var i=e.appendTo,r=e.children,n=e.controlElement,a=e.innerProps,s=e.menuPlacement,l=e.menuPosition,o=m.useRef(null),u=m.useRef(null),c=m.useState(Mn(s)),d=re(c,2),v=d[0],b=d[1],x=m.useMemo(function(){return{setPortalPlacement:b}},[]),p=m.useState(null),h=re(p,2),g=h[0],E=h[1],y=m.useCallback(function(){if(n){var C=Xr(n),I=l==="fixed"?0:window.pageYOffset,V=C[v]+I;(V!==(g==null?void 0:g.offset)||C.left!==(g==null?void 0:g.rect.left)||C.width!==(g==null?void 0:g.rect.width))&&E({offset:V,rect:C})}},[n,l,v,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);ut(function(){y()},[y]);var O=m.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),n&&o.current&&(u.current=Wr(n,o.current,y,{elementResize:"ResizeObserver"in window}))},[n,y]);ut(function(){O()},[O]);var A=m.useCallback(function(C){o.current=C,O()},[O]);if(!i&&l!=="fixed"||!g)return null;var M=w("div",F({ref:A},P(S(S({},e),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),r);return w(In.Provider,{value:x},i?Qt.createPortal(M,i):M)},Ea=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Ca=function(e){var i=e.children,r=e.innerProps,n=e.isDisabled,a=e.isRtl;return w("div",F({},P(e,"container",{"--is-disabled":n,"--is-rtl":a}),r),i)},ya=function(e,i){var r=e.theme.spacing,n=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:n&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},wa=function(e){var i=e.children,r=e.innerProps,n=e.isMulti,a=e.hasValue;return w("div",F({},P(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),r),i)},Sa=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Fa=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"indicatorsContainer",{indicators:!0}),r),i)},Bt,Oa=["size"],Ma=["innerProps","isRtl","size"],Ia={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Dn=function(e){var i=e.size,r=oe(e,Oa);return w("svg",F({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ia},r))},xt=function(e){return w(Dn,F({size:20},e),w("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},kn=function(e){return w(Dn,F({size:20},e),w("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Vn=function(e,i){var r=e.isFocused,n=e.theme,a=n.spacing.baseUnit,s=n.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},Aa=Vn,Da=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||w(kn,null))},ka=Vn,Va=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||w(xt,null))},Pa=function(e,i){var r=e.isDisabled,n=e.theme,a=n.spacing.baseUnit,s=n.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},La=function(e){var i=e.innerProps;return w("span",F({},i,P(e,"indicatorSeparator",{"indicator-separator":!0})))},Ra=kr(Bt||(Bt=Vr([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ta=function(e,i){var r=e.isFocused,n=e.size,a=e.theme,s=a.colors,l=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?s.neutral60:s.neutral20,padding:l*2})},Ze=function(e){var i=e.delay,r=e.offset;return w("span",{css:mt({animation:"".concat(Ra," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ba=function(e){var i=e.innerProps,r=e.isRtl,n=e.size,a=n===void 0?4:n,s=oe(e,Ma);return w("div",F({},P(S(S({},s),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),w(Ze,{delay:0,offset:r}),w(Ze,{delay:160,offset:!0}),w(Ze,{delay:320,offset:!r}))},Na=function(e,i){var r=e.isDisabled,n=e.isFocused,a=e.theme,s=a.colors,l=a.borderRadius,o=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:n?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},ja=function(e){var i=e.children,r=e.isDisabled,n=e.isFocused,a=e.innerRef,s=e.innerProps,l=e.menuIsOpen;return w("div",F({ref:a},P(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":n,"control--menu-is-open":l}),s,{"aria-disabled":r||void 0}),i)},$a=ja,za=["data"],Ha=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Ua=function(e){var i=e.children,r=e.cx,n=e.getStyles,a=e.getClassNames,s=e.Heading,l=e.headingProps,o=e.innerProps,u=e.label,c=e.theme,d=e.selectProps;return w("div",F({},P(e,"group",{group:!0}),o),w(s,F({},l,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:r}),u),w("div",null,i))},Wa=function(e,i){var r=e.theme,n=r.colors,a=r.spacing;return S({label:"group",cursor:"default",display:"block"},i?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},_a=function(e){var i=Sn(e);i.data;var r=oe(i,za);return w("div",F({},P(e,"groupHeading",{"group-heading":!0}),r))},Ga=Ua,Ya=["innerRef","isDisabled","isHidden","inputClassName"],qa=function(e,i){var r=e.isDisabled,n=e.value,a=e.theme,s=a.spacing,l=a.colors;return S(S({visibility:r?"hidden":"visible",transform:n?"translateZ(0)":""},Ka),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},Pn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ka={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Pn)},Za=function(e){return S({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Pn)},Xa=function(e){var i=e.cx,r=e.value,n=Sn(e),a=n.innerRef,s=n.isDisabled,l=n.isHidden,o=n.inputClassName,u=oe(n,Ya);return w("div",F({},P(e,"input",{"input-container":!0}),{"data-value":r||""}),w("input",F({className:i({input:!0},o),ref:a,style:Za(l),disabled:s},u)))},Ja=Xa,Qa=function(e,i){var r=e.theme,n=r.spacing,a=r.borderRadius,s=r.colors;return S({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},eo=function(e,i){var r=e.theme,n=r.borderRadius,a=r.colors,s=e.cropWithEllipsis;return S({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},to=function(e,i){var r=e.theme,n=r.spacing,a=r.borderRadius,s=r.colors,l=e.isFocused;return S({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Ln=function(e){var i=e.children,r=e.innerProps;return w("div",r,i)},no=Ln,io=Ln;function ro(t){var e=t.children,i=t.innerProps;return w("div",F({role:"button"},i),e||w(xt,{size:14}))}var ao=function(e){var i=e.children,r=e.components,n=e.data,a=e.innerProps,s=e.isDisabled,l=e.removeProps,o=e.selectProps,u=r.Container,c=r.Label,d=r.Remove;return w(u,{data:n,innerProps:S(S({},P(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:o},w(c,{data:n,innerProps:S({},P(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},i),w(d,{data:n,innerProps:S(S({},P(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:o}))},oo=ao,so=function(e,i){var r=e.isDisabled,n=e.isFocused,a=e.isSelected,s=e.theme,l=s.spacing,o=s.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?o.primary:n?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},uo=function(e){var i=e.children,r=e.isDisabled,n=e.isFocused,a=e.isSelected,s=e.innerRef,l=e.innerProps;return w("div",F({},P(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":n,"option--is-selected":a}),{ref:s,"aria-disabled":r},l),i)},lo=uo,co=function(e,i){var r=e.theme,n=r.spacing,a=r.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},po=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"placeholder",{placeholder:!0}),r),i)},fo=po,ho=function(e,i){var r=e.isDisabled,n=e.theme,a=n.spacing,s=n.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},mo=function(e){var i=e.children,r=e.isDisabled,n=e.innerProps;return w("div",F({},P(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),n),i)},go=mo,vo={ClearIndicator:Va,Control:$a,DropdownIndicator:Da,DownChevron:kn,CrossIcon:xt,Group:Ga,GroupHeading:_a,IndicatorsContainer:Fa,IndicatorSeparator:La,Input:Ja,LoadingIndicator:Ba,Menu:da,MenuList:fa,MenuPortal:xa,LoadingMessage:va,NoOptionsMessage:ga,MultiValue:oo,MultiValueContainer:no,MultiValueLabel:io,MultiValueRemove:ro,Option:lo,Placeholder:fo,SelectContainer:Ca,SingleValue:go,ValueContainer:wa},bo=function(e){return S(S({},vo),e.components)},Nt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function xo(t,e){return!!(t===e||Nt(t)&&Nt(e))}function Eo(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!xo(t[i],e[i]))return!1;return!0}function Co(t,e){e===void 0&&(e=Eo);var i=null;function r(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var s=t.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return r.clear=function(){i=null},r}var yo={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},wo=function(e){return w("span",F({css:yo},e))},jt=wo,So={guidance:function(e){var i=e.isSearchable,r=e.isMulti,n=e.tabSelectsValue,a=e.context,s=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,n=r===void 0?"":r,a=e.labels,s=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,n=e.options,a=e.label,s=a===void 0?"":a,l=e.selectValue,o=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,d=function(p,h){return p&&p.length?"".concat(p.indexOf(h)+1," of ").concat(p.length):""};if(i==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,r),".");if(i==="menu"&&c){var v=o?" disabled":"",b="".concat(u?" selected":"").concat(v);return"".concat(s).concat(b,", ").concat(d(n,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},Fo=function(e){var i=e.ariaSelection,r=e.focusedOption,n=e.focusedValue,a=e.focusableOptions,s=e.isFocused,l=e.selectValue,o=e.selectProps,u=e.id,c=e.isAppleDevice,d=o.ariaLiveMessages,v=o.getOptionLabel,b=o.inputValue,x=o.isMulti,p=o.isOptionDisabled,h=o.isSearchable,g=o.menuIsOpen,E=o.options,y=o.screenReaderStatus,O=o.tabSelectsValue,A=o.isLoading,M=o["aria-label"],C=o["aria-live"],I=m.useMemo(function(){return S(S({},So),d||{})},[d]),V=m.useMemo(function(){var N="";if(i&&I.onChange){var R=i.option,Z=i.options,Y=i.removedValue,se=i.removedValues,ue=i.value,we=function(ie){return Array.isArray(ie)?null:ie},T=Y||R||we(ue),_=T?v(T):"",ne=Z||se||void 0,le=ne?ne.map(v):[],q=S({isDisabled:T&&p(T,l),label:_,labels:le},i);N=I.onChange(q)}return N},[i,I,p,l,v]),$=m.useMemo(function(){var N="",R=r||n,Z=!!(r&&l&&l.includes(r));if(R&&I.onFocus){var Y={focused:R,label:v(R),isDisabled:p(R,l),isSelected:Z,options:a,context:R===r?"menu":"value",selectValue:l,isAppleDevice:c};N=I.onFocus(Y)}return N},[r,n,v,p,I,a,l,c]),U=m.useMemo(function(){var N="";if(g&&E.length&&!A&&I.onFilter){var R=y({count:a.length});N=I.onFilter({inputValue:b,resultsMessage:R})}return N},[a,b,g,I,E,y,A]),z=(i==null?void 0:i.action)==="initial-input-focus",ee=m.useMemo(function(){var N="";if(I.guidance){var R=n?"value":g?"menu":"input";N=I.guidance({"aria-label":M,context:R,isDisabled:r&&p(r,l),isMulti:x,isSearchable:h,tabSelectsValue:O,isInitialFocus:z})}return N},[M,r,n,x,p,h,g,I,l,O,z]),te=w(m.Fragment,null,w("span",{id:"aria-selection"},V),w("span",{id:"aria-focused"},$),w("span",{id:"aria-results"},U),w("span",{id:"aria-guidance"},ee));return w(m.Fragment,null,w(jt,{id:u},z&&te),w(jt,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!z&&te))},Oo=Fo,lt=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Mo=new RegExp("["+lt.map(function(t){return t.letters}).join("")+"]","g"),Rn={};for(var Xe=0;Xe<lt.length;Xe++)for(var Je=lt[Xe],Qe=0;Qe<Je.letters.length;Qe++)Rn[Je.letters[Qe]]=Je.base;var Tn=function(e){return e.replace(Mo,function(i){return Rn[i]})},Io=Co(Tn),$t=function(e){return e.replace(/^\s+|\s+$/g,"")},Ao=function(e){return"".concat(e.label," ").concat(e.value)},Do=function(e){return function(i,r){if(i.data.__isNew__)return!0;var n=S({ignoreCase:!0,ignoreAccents:!0,stringify:Ao,trim:!0,matchFrom:"any"},e),a=n.ignoreCase,s=n.ignoreAccents,l=n.stringify,o=n.trim,u=n.matchFrom,c=o?$t(r):r,d=o?$t(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Io(c),d=Tn(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},ko=["innerRef"];function Vo(t){var e=t.innerRef,i=oe(t,ko),r=ia(i,"onExited","in","enter","exit","appear");return w("input",F({ref:e},r,{css:mt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Po=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Lo(t){var e=t.isEnabled,i=t.onBottomArrive,r=t.onBottomLeave,n=t.onTopArrive,a=t.onTopLeave,s=m.useRef(!1),l=m.useRef(!1),o=m.useRef(0),u=m.useRef(null),c=m.useCallback(function(h,g){if(u.current!==null){var E=u.current,y=E.scrollTop,O=E.scrollHeight,A=E.clientHeight,M=u.current,C=g>0,I=O-A-y,V=!1;I>g&&s.current&&(r&&r(h),s.current=!1),C&&l.current&&(a&&a(h),l.current=!1),C&&g>I?(i&&!s.current&&i(h),M.scrollTop=O,V=!0,s.current=!0):!C&&-g>y&&(n&&!l.current&&n(h),M.scrollTop=0,V=!0,l.current=!0),V&&Po(h)}},[i,r,n,a]),d=m.useCallback(function(h){c(h,h.deltaY)},[c]),v=m.useCallback(function(h){o.current=h.changedTouches[0].clientY},[]),b=m.useCallback(function(h){var g=o.current-h.changedTouches[0].clientY;c(h,g)},[c]),x=m.useCallback(function(h){if(h){var g=ea?{passive:!1}:!1;h.addEventListener("wheel",d,g),h.addEventListener("touchstart",v,g),h.addEventListener("touchmove",b,g)}},[b,v,d]),p=m.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",v,!1),h.removeEventListener("touchmove",b,!1))},[b,v,d]);return m.useEffect(function(){if(e){var h=u.current;return x(h),function(){p(h)}}},[e,x,p]),function(h){u.current=h}}var zt=["boxSizing","height","overflow","paddingRight","position"],Ht={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ut(t){t.preventDefault()}function Wt(t){t.stopPropagation()}function _t(){var t=this.scrollTop,e=this.scrollHeight,i=t+this.offsetHeight;t===0?this.scrollTop=1:i===e&&(this.scrollTop=t-1)}function Gt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Yt=!!(typeof window<"u"&&window.document&&window.document.createElement),be=0,fe={capture:!1,passive:!1};function Ro(t){var e=t.isEnabled,i=t.accountForScrollbars,r=i===void 0?!0:i,n=m.useRef({}),a=m.useRef(null),s=m.useCallback(function(o){if(Yt){var u=document.body,c=u&&u.style;if(r&&zt.forEach(function(x){var p=c&&c[x];n.current[x]=p}),r&&be<1){var d=parseInt(n.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,b=window.innerWidth-v+d||0;Object.keys(Ht).forEach(function(x){var p=Ht[x];c&&(c[x]=p)}),c&&(c.paddingRight="".concat(b,"px"))}u&&Gt()&&(u.addEventListener("touchmove",Ut,fe),o&&(o.addEventListener("touchstart",_t,fe),o.addEventListener("touchmove",Wt,fe))),be+=1}},[r]),l=m.useCallback(function(o){if(Yt){var u=document.body,c=u&&u.style;be=Math.max(be-1,0),r&&be<1&&zt.forEach(function(d){var v=n.current[d];c&&(c[d]=v)}),u&&Gt()&&(u.removeEventListener("touchmove",Ut,fe),o&&(o.removeEventListener("touchstart",_t,fe),o.removeEventListener("touchmove",Wt,fe)))}},[r]);return m.useEffect(function(){if(e){var o=a.current;return s(o),function(){l(o)}}},[e,s,l]),function(o){a.current=o}}var To=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Bo={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function No(t){var e=t.children,i=t.lockEnabled,r=t.captureEnabled,n=r===void 0?!0:r,a=t.onBottomArrive,s=t.onBottomLeave,l=t.onTopArrive,o=t.onTopLeave,u=Lo({isEnabled:n,onBottomArrive:a,onBottomLeave:s,onTopArrive:l,onTopLeave:o}),c=Ro({isEnabled:i}),d=function(b){u(b),c(b)};return w(m.Fragment,null,i&&w("div",{onClick:To,css:Bo}),e(d))}var jo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},$o=function(e){var i=e.name,r=e.onFocus;return w("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:jo,value:"",onChange:function(){}})},zo=$o;function Et(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ho(){return Et(/^iPhone/i)}function Bn(){return Et(/^Mac/i)}function Uo(){return Et(/^iPad/i)||Bn()&&navigator.maxTouchPoints>1}function Wo(){return Ho()||Uo()}function _o(){return Bn()||Wo()}var Go=function(e){return e.label},Yo=function(e){return e.label},qo=function(e){return e.value},Ko=function(e){return!!e.isDisabled},Zo={clearIndicator:ka,container:Ea,control:Na,dropdownIndicator:Aa,group:Ha,groupHeading:Wa,indicatorsContainer:Sa,indicatorSeparator:Pa,input:qa,loadingIndicator:Ta,loadingMessage:ma,menu:ua,menuList:pa,menuPortal:ba,multiValue:Qa,multiValueLabel:eo,multiValueRemove:to,noOptionsMessage:ha,option:so,placeholder:co,singleValue:ho,valueContainer:ya},Xo={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Jo=4,Nn=4,Qo=38,es=Nn*2,ts={baseUnit:Nn,controlHeight:Qo,menuGutter:es},et={borderRadius:Jo,colors:Xo,spacing:ts},ns={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Tt(),captureMenuScroll:!Tt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Do(),formatGroupLabel:Go,getOptionLabel:Yo,getOptionValue:qo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Ko,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Jr(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function qt(t,e,i,r){var n=zn(t,e,i),a=Hn(t,e,i),s=$n(t,e),l=He(t,e);return{type:"option",data:e,isDisabled:n,isSelected:a,label:s,value:l,index:r}}function Le(t,e){return t.options.map(function(i,r){if("options"in i){var n=i.options.map(function(s,l){return qt(t,s,e,l)}).filter(function(s){return Zt(t,s)});return n.length>0?{type:"group",data:i,options:n,index:r}:void 0}var a=qt(t,i,e,r);return Zt(t,a)?a:void 0}).filter(ta)}function jn(t){return t.reduce(function(e,i){return i.type==="group"?e.push.apply(e,ct(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function Kt(t,e){return t.reduce(function(i,r){return r.type==="group"?i.push.apply(i,ct(r.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(r.index,"-").concat(n.index)}}))):i.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),i},[])}function is(t,e){return jn(Le(t,e))}function Zt(t,e){var i=t.inputValue,r=i===void 0?"":i,n=e.data,a=e.isSelected,s=e.label,l=e.value;return(!Wn(t)||!a)&&Un(t,{label:s,value:l,data:n},r)}function rs(t,e){var i=t.focusedValue,r=t.selectValue,n=r.indexOf(i);if(n>-1){var a=e.indexOf(i);if(a>-1)return i;if(n<e.length)return e[n]}return null}function as(t,e){var i=t.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var tt=function(e,i){var r,n=(r=e.find(function(a){return a.data===i}))===null||r===void 0?void 0:r.id;return n||null},$n=function(e,i){return e.getOptionLabel(i)},He=function(e,i){return e.getOptionValue(i)};function zn(t,e,i){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,i):!1}function Hn(t,e,i){if(i.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,i);var r=He(t,e);return i.some(function(n){return He(t,n)===r})}function Un(t,e,i){return t.filterOption?t.filterOption(e,i):!0}var Wn=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},os=1,_n=function(t){Vi(i,t);var e=Ti(i);function i(r){var n;if(Di(this,i),n=e.call(this,r),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.isAppleDevice=_o(),n.controlRef=null,n.getControlRef=function(o){n.controlRef=o},n.focusedOptionRef=null,n.getFocusedOptionRef=function(o){n.focusedOptionRef=o},n.menuListRef=null,n.getMenuListRef=function(o){n.menuListRef=o},n.inputRef=null,n.getInputRef=function(o){n.inputRef=o},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(o,u){var c=n.props,d=c.onChange,v=c.name;u.name=v,n.ariaOnChange(o,u),d(o,u)},n.setValue=function(o,u,c){var d=n.props,v=d.closeMenuOnSelect,b=d.isMulti,x=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:x}),v&&(n.setState({inputIsHiddenAfterUpdate:!b}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(o,{action:u,option:c})},n.selectOption=function(o){var u=n.props,c=u.blurInputOnSelect,d=u.isMulti,v=u.name,b=n.state.selectValue,x=d&&n.isOptionSelected(o,b),p=n.isOptionDisabled(o,b);if(x){var h=n.getOptionValue(o);n.setValue(b.filter(function(g){return n.getOptionValue(g)!==h}),"deselect-option",o)}else if(!p)d?n.setValue([].concat(ct(b),[o]),"select-option",o):n.setValue(o,"select-option");else{n.ariaOnChange(o,{action:"select-option",option:o,name:v});return}c&&n.blurInput()},n.removeValue=function(o){var u=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(o),v=c.filter(function(x){return n.getOptionValue(x)!==d}),b=De(u,v,v[0]||null);n.onChange(b,{action:"remove-value",removedValue:o}),n.focusInput()},n.clearValue=function(){var o=n.state.selectValue;n.onChange(De(n.props.isMulti,[],null),{action:"clear",removedValues:o})},n.popValue=function(){var o=n.props.isMulti,u=n.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),v=De(o,d,d[0]||null);n.onChange(v,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(o){return tt(n.state.focusableOptionsWithIds,o)},n.getFocusableOptionsWithIds=function(){return Kt(Le(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var o=arguments.length,u=new Array(o),c=0;c<o;c++)u[c]=arguments[c];return Yr.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(o){return $n(n.props,o)},n.getOptionValue=function(o){return He(n.props,o)},n.getStyles=function(o,u){var c=n.props.unstyled,d=Zo[o](u,c);d.boxSizing="border-box";var v=n.props.styles[o];return v?v(d,u):d},n.getClassNames=function(o,u){var c,d;return(c=(d=n.props.classNames)[o])===null||c===void 0?void 0:c.call(d,u)},n.getElementId=function(o){return"".concat(n.state.instancePrefix,"-").concat(o)},n.getComponents=function(){return bo(n.props)},n.buildCategorizedOptions=function(){return Le(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return jn(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(o,u){n.setState({ariaSelection:S({value:o},u)})},n.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(o){n.blockOptionHover=!1},n.onControlMouseDown=function(o){if(!o.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},n.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!n.props.isDisabled){var u=n.props,c=u.isMulti,d=u.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),o.preventDefault()}},n.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(n.clearValue(),o.preventDefault(),n.openAfterFocus=!1,o.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(o){typeof n.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ye(o.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(o)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(o){var u=o.touches,c=u&&u.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(o){var u=o.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),v=Math.abs(c.clientY-n.initialTouchY),b=5;n.userIsDragging=d>b||v>b}},n.onTouchEnd=function(o){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(o.target)&&n.menuListRef&&!n.menuListRef.contains(o.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(o){n.userIsDragging||n.onControlMouseDown(o)},n.onClearIndicatorTouchEnd=function(o){n.userIsDragging||n.onClearIndicatorMouseDown(o)},n.onDropdownIndicatorTouchEnd=function(o){n.userIsDragging||n.onDropdownIndicatorMouseDown(o)},n.handleInputChange=function(o){var u=n.props.inputValue,c=o.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(o){n.props.onFocus&&n.props.onFocus(o),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(o){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(o),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(o){if(!(n.blockOptionHover||n.state.focusedOption===o)){var u=n.getFocusableOptions(),c=u.indexOf(o);n.setState({focusedOption:o,focusedOptionId:c>-1?n.getFocusedOptionId(o):null})}},n.shouldHideSelectedOptions=function(){return Wn(n.props)},n.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),n.focus()},n.onKeyDown=function(o){var u=n.props,c=u.isMulti,d=u.backspaceRemovesValue,v=u.escapeClearsValue,b=u.inputValue,x=u.isClearable,p=u.isDisabled,h=u.menuIsOpen,g=u.onKeyDown,E=u.tabSelectsValue,y=u.openMenuOnFocus,O=n.state,A=O.focusedOption,M=O.focusedValue,C=O.selectValue;if(!p&&!(typeof g=="function"&&(g(o),o.defaultPrevented))){switch(n.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||b)return;n.focusValue("previous");break;case"ArrowRight":if(!c||b)return;n.focusValue("next");break;case"Delete":case"Backspace":if(b)return;if(M)n.removeValue(M);else{if(!d)return;c?n.popValue():x&&n.clearValue()}break;case"Tab":if(n.isComposing||o.shiftKey||!h||!E||!A||y&&n.isOptionSelected(A,C))return;n.selectOption(A);break;case"Enter":if(o.keyCode===229)break;if(h){if(!A||n.isComposing)return;n.selectOption(A);break}return;case"Escape":h?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:b}),n.onMenuClose()):x&&v&&n.clearValue();break;case" ":if(b)return;if(!h){n.openMenu("first");break}if(!A)return;n.selectOption(A);break;case"ArrowUp":h?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":h?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!h)return;n.focusOption("pageup");break;case"PageDown":if(!h)return;n.focusOption("pagedown");break;case"Home":if(!h)return;n.focusOption("first");break;case"End":if(!h)return;n.focusOption("last");break;default:return}o.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++os),n.state.selectValue=Lt(r.value),r.menuIsOpen&&n.state.selectValue.length){var a=n.getFocusableOptionsWithIds(),s=n.buildFocusableOptions(),l=s.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=a,n.state.focusedOption=s[l],n.state.focusedOptionId=tt(a,s[l])}return n}return ki(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Rt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var a=this.props,s=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!s&&n.isDisabled||o&&l&&!n.menuIsOpen)&&this.focusInput(),o&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Rt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,s=this.state,l=s.selectValue,o=s.isFocused,u=this.buildFocusableOptions(),c=n==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,s=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=s.indexOf(l);l||(o=-1);var u=s.length-1,c=-1;if(s.length){switch(n){case"previous":o===0?c=0:o===-1?c=u:c=o-1;break;case"next":o>-1&&o<u&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,u=l.indexOf(s);s||(u=-1),n==="up"?o=u>0?u-1:l.length-1:n==="down"?o=(u+1)%l.length:n==="pageup"?(o=u-a,o<0&&(o=0)):n==="pagedown"?(o=u+a,o>l.length-1&&(o=l.length-1)):n==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(et):S(S({},et),this.props.theme):et}},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,s=this.getStyles,l=this.getClassNames,o=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,b=d.isRtl,x=d.options,p=this.hasValue();return{clearValue:n,cx:a,getStyles:s,getClassNames:l,getValue:o,hasValue:p,isMulti:v,isRtl:b,options:x,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,s=n.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(n,a){return zn(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return Hn(this.props,n,a)}},{key:"filterOption",value:function(n,a){return Un(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:s,selectValue:l})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,a=n.isDisabled,s=n.isSearchable,l=n.inputId,o=n.inputValue,u=n.tabIndex,c=n.form,d=n.menuIsOpen,v=n.required,b=this.getComponents(),x=b.Input,p=this.state,h=p.inputIsHidden,g=p.ariaSelection,E=this.commonProps,y=l||this.getElementId("input"),O=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?m.createElement(x,F({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:o},O)):m.createElement(Vo,F({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:$e,onFocus:this.onInputFocus,disabled:a,tabIndex:u,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),s=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,u=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,b=this.props,x=b.controlShouldRenderValue,p=b.isDisabled,h=b.isMulti,g=b.inputValue,E=b.placeholder,y=this.state,O=y.selectValue,A=y.focusedValue,M=y.isFocused;if(!this.hasValue()||!x)return g?null:m.createElement(d,F({},v,{key:"placeholder",isDisabled:p,isFocused:M,innerProps:{id:this.getElementId("placeholder")}}),E);if(h)return O.map(function(I,V){var $=I===A,U="".concat(n.getOptionLabel(I),"-").concat(n.getOptionValue(I));return m.createElement(s,F({},v,{components:{Container:l,Label:o,Remove:u},isFocused:$,isDisabled:p,key:U,index:V,removeProps:{onClick:function(){return n.removeValue(I)},onTouchEnd:function(){return n.removeValue(I)},onMouseDown:function(ee){ee.preventDefault()}},data:I}),n.formatOptionLabel(I,"value"))});if(g)return null;var C=O[0];return m.createElement(c,F({},v,{data:C,isDisabled:p}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,s=this.commonProps,l=this.props,o=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(a,F({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,s=this.commonProps,l=this.props,o=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!a||!u)return null;var d={"aria-hidden":"true"};return m.createElement(a,F({},s,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,s=n.IndicatorSeparator;if(!a||!s)return null;var l=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused;return m.createElement(s,F({},l,{isDisabled:o,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var s=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(a,F({},s,{innerProps:u,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),s=a.Group,l=a.GroupHeading,o=a.Menu,u=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,b=a.Option,x=this.commonProps,p=this.state.focusedOption,h=this.props,g=h.captureMenuScroll,E=h.inputValue,y=h.isLoading,O=h.loadingMessage,A=h.minMenuHeight,M=h.maxMenuHeight,C=h.menuIsOpen,I=h.menuPlacement,V=h.menuPosition,$=h.menuPortalTarget,U=h.menuShouldBlockScroll,z=h.menuShouldScrollIntoView,ee=h.noOptionsMessage,te=h.onMenuScrollToTop,N=h.onMenuScrollToBottom;if(!C)return null;var R=function(_,ne){var le=_.type,q=_.data,ce=_.isDisabled,ie=_.isSelected,Se=_.label,Gn=_.value,Ct=p===q,yt=ce?void 0:function(){return n.onOptionHover(q)},Yn=ce?void 0:function(){return n.selectOption(q)},wt="".concat(n.getElementId("option"),"-").concat(ne),qn={id:wt,onClick:Yn,onMouseMove:yt,onMouseOver:yt,tabIndex:-1,role:"option","aria-selected":n.isAppleDevice?void 0:ie};return m.createElement(b,F({},x,{innerProps:qn,data:q,isDisabled:ce,isSelected:ie,key:wt,label:Se,type:le,value:Gn,isFocused:Ct,innerRef:Ct?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(_.data,"menu"))},Z;if(this.hasOptions())Z=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var _=T.data,ne=T.options,le=T.index,q="".concat(n.getElementId("group"),"-").concat(le),ce="".concat(q,"-heading");return m.createElement(s,F({},x,{key:q,data:_,options:ne,Heading:l,headingProps:{id:ce,data:T.data},label:n.formatGroupLabel(T.data)}),T.options.map(function(ie){return R(ie,"".concat(le,"-").concat(ie.index))}))}else if(T.type==="option")return R(T,"".concat(T.index))});else if(y){var Y=O({inputValue:E});if(Y===null)return null;Z=m.createElement(d,x,Y)}else{var se=ee({inputValue:E});if(se===null)return null;Z=m.createElement(v,x,se)}var ue={minMenuHeight:A,maxMenuHeight:M,menuPlacement:I,menuPosition:V,menuShouldScrollIntoView:z},we=m.createElement(la,F({},x,ue),function(T){var _=T.ref,ne=T.placerProps,le=ne.placement,q=ne.maxHeight;return m.createElement(o,F({},x,ue,{innerRef:_,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:y,placement:le}),m.createElement(No,{captureEnabled:g,onTopArrive:te,onBottomArrive:N,lockEnabled:U},function(ce){return m.createElement(u,F({},x,{innerRef:function(Se){n.getMenuListRef(Se),ce(Se)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:n.getElementId("listbox")},isLoading:y,maxHeight:q,focusedOption:p}),Z)}))});return $||V==="fixed"?m.createElement(c,F({},x,{appendTo:$,controlElement:this.controlRef,menuPlacement:I,menuPosition:V}),we):we}},{key:"renderFormField",value:function(){var n=this,a=this.props,s=a.delimiter,l=a.isDisabled,o=a.isMulti,u=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return m.createElement(zo,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(o)if(s){var v=d.map(function(p){return n.getOptionValue(p)}).join(s);return m.createElement("input",{name:u,type:"hidden",value:v})}else{var b=d.length>0?d.map(function(p,h){return m.createElement("input",{key:"i-".concat(h),name:u,type:"hidden",value:n.getOptionValue(p)})}):m.createElement("input",{name:u,type:"hidden",value:""});return m.createElement("div",null,b)}else{var x=d[0]?this.getOptionValue(d[0]):"";return m.createElement("input",{name:u,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,s=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,u=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return m.createElement(Oo,F({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:o,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,s=n.IndicatorsContainer,l=n.SelectContainer,o=n.ValueContainer,u=this.props,c=u.className,d=u.id,v=u.isDisabled,b=u.menuIsOpen,x=this.state.isFocused,p=this.commonProps=this.getCommonProps();return m.createElement(l,F({},p,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:x}),this.renderLiveRegion(),m.createElement(a,F({},p,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:x,menuIsOpen:b}),m.createElement(o,F({},p,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),m.createElement(s,F({},p,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var s=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,u=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=a.instancePrefix,b=n.options,x=n.value,p=n.menuIsOpen,h=n.inputValue,g=n.isMulti,E=Lt(x),y={};if(s&&(x!==s.value||b!==s.options||p!==s.menuIsOpen||h!==s.inputValue)){var O=p?is(n,E):[],A=p?Kt(Le(n,E),"".concat(v,"-option")):[],M=l?rs(a,E):null,C=as(a,O),I=tt(A,C);y={selectValue:E,focusedOption:C,focusedOptionId:I,focusableOptionsWithIds:A,focusedValue:M,clearFocusValueOnUpdate:!1}}var V=o!=null&&n!==s?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},$=u,U=c&&d;return c&&!U&&($={value:De(g,E,E[0]||null),options:E,action:"initial-input-focus"},U=!d),(u==null?void 0:u.action)==="initial-input-focus"&&($=null),S(S(S({},y),V),{},{prevProps:n,ariaSelection:$,prevWasFocused:U})}}]),i}(m.Component);_n.defaultProps=ns;var ss=m.forwardRef(function(t,e){var i=Ai(t);return m.createElement(_n,F({ref:e},i))}),us=ss;function ls({handleClickClose:t}){const e=pe(),i=B(p=>p.data.categories),{values:r,errors:n,touched:a,isValid:s,handleChange:l,setFieldValue:o,handleSubmit:u}=tn({initialValues:{en:"",ua:"",category:"",isIrregular:void 0},validationSchema:di,onSubmit:p=>{e(Xn(p)).then(h=>{isNaN(h.payload)&&t()})}}),c=p=>{o("category",p?p.value:"")},d=()=>{if(r.isIrregular&&r.category==="verb"&&!/^\w+-\w+-\w+$/.test(r.en))return f.jsx("p",{className:"EnInputMistake",children:"Must be example: “know-knew-known”"})},{getInputAlert:v,getInputClass:b}=nn(r,a,n),x={control:(p,h)=>({...p,borderRadius:"15px",paddingLeft:"12px",paddingRight:"16px",background:"none",borderColor:h.isFocused?"#d1d5db":p.borderColor,color:"#f8f8f8",boxShadow:h.isFocused?"none":p.boxShadow,width:"204px",height:"48px","&:hover":{borderColor:"#d1d5db"}}),menu:p=>({...p,textTransform:"capitalize",borderRadius:"15px",boxShadow:"0 4px 47px 0 rgba(18, 20, 23, 0.08)",width:"205px",overflowY:"auto",paddingLeft:"24px","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:"#f8f8f8",borderRadius:"12px",height:"101px"},"::-webkit-scrollbar-thumb:hover":{background:"#d1d5db"}}),option:p=>({...p,color:"rgba(18, 20, 23, 0.5)",backgroundColor:"transparent","&:hover":{color:"#85AA9F"}}),singleValue:p=>({...p,color:"#f8f8f8"}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:p=>({...p,color:"#f8f8f8","&:hover":{color:"#f8f8f8"}})};return f.jsxs(Mi,{children:[f.jsx(Ue,{className:"ButtonClose",onClick:t}),f.jsxs("div",{className:"TextContainer",children:[f.jsx("h2",{className:"Title",children:"Add word"}),f.jsx("p",{className:"Text",children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."})]}),f.jsxs("form",{className:"Form",onSubmit:u,children:[f.jsx(us,{id:"category",name:"category",styles:x,options:i.map(p=>({value:p,label:p})),onChange:c,placeholder:"Categories"}),f.jsxs("ul",{className:"RadioButtonList",style:{display:r.category==="verb"?"flex":"none"},children:[f.jsxs("li",{className:"RadioButtonItem",children:[f.jsx("input",{className:"RadioButton",id:"regular",name:"isIrregular",type:"radio",onChange:()=>l({target:{name:"isIrregular",value:!1}}),value:!1,checked:r.isIrregular===!1}),"Regular"]}),f.jsxs("li",{className:"RadioButtonItem",children:[f.jsx("input",{className:"RadioButton",id:"reason",name:"isIrregular",type:"radio",onChange:()=>l({target:{name:"isIrregular",value:!0}}),value:!0,checked:r.isIrregular===!0}),"Irregular"]})]}),f.jsxs("div",{className:"UkrainianContainer",id:"ukrainian",children:[f.jsxs("div",{className:"InputImagContainer",children:[f.jsx(an,{className:"IconCountry"})," Ukrainian"]}),f.jsx("input",{id:"ukrainian",className:b("Ua"),type:"text",placeholder:"Слово Українською",name:"ua",value:r.ua,onChange:l,required:!0}),v("ua")]}),f.jsxs("div",{className:"EnglishContainer",children:[f.jsxs("div",{className:"InputImagContainer",children:[f.jsx(on,{className:"IconCountry"})," English"]}),f.jsx("input",{id:"english",className:b("En"),type:"text",placeholder:"Word in English",name:"en",value:r.en,onChange:l,required:!0}),d()?d():v("en")]}),f.jsxs("ul",{className:"ButtonList",children:[f.jsx("li",{className:"ButtonAdd",type:"submit",disabled:!s,onClick:u,children:"Add"}),f.jsx("li",{className:"ButtonCancel",onClick:t,children:"Cancel"})]})]})]})}const cs=ae.ul`
  border-radius: 15px;
  padding: 12px 24px;
  width: 117px;
  height: 70px;

  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
  background: #fff;
  box-sizing: border-box;

  position: absolute;
  top: ${t=>t.y}px;
  left: ${t=>t.x}px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 374px) {
    top: ${t=>t.y+0}px;
    left: ${t=>t.x-120}px;
  }

  @media (min-width: 375px) {
    top: ${t=>t.y+0}px;
    left: ${t=>t.x-145}px;
  }

  @media (min-width: 768px) {
    top: ${t=>t.y+0}px;
    left: ${t=>t.x-80}px;
  }

  .Element {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;

    &:hover {
      color: #85aa9f;
      path {
        stroke: #121417;
      }
    }
  }
`,ds=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:17,fill:"none",...t},m.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,d:"M11.334 2.5a1.885 1.885 0 1 1 2.667 2.667l-9 9-3.667 1 1-3.667 9-9Z"})),ps=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:17,fill:"none",...t},m.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.94,strokeWidth:1.3,d:"M2 4.5h12M12.667 4.5v9.333a1.333 1.333 0 0 1-1.333 1.334H4.667a1.333 1.333 0 0 1-1.333-1.334V4.5m2 0V3.167a1.333 1.333 0 0 1 1.333-1.334h2.667a1.333 1.333 0 0 1 1.333 1.334V4.5M6.666 7.833v4M9.334 7.833v4"}));function fs({handleClickClose:t}){const e=pe(),i=B(a=>a.modal.clickWordCoordinates),r=()=>{t(),e(Jn())},n=()=>{t(),e(Qn())};return f.jsxs(cs,{x:i.x,y:i.y,children:[f.jsxs("li",{className:"Element",onClick:n,children:[f.jsx(ds,{}),"Edit"]}),f.jsxs("li",{className:"Element",onClick:r,children:[f.jsx(ps,{}),"Delete"]})]})}const hs=ae.div`
  position: relative;
  border-radius: 15px;
  width: 342px;
  height: 359px;
  padding: 16px;

  background: #85aa9f;
  box-sizing: border-box;

  @media only screen and (max-width: 374px) {
    width: 288px;
  }

  @media only screen and (min-width: 768px) {
    width: 627px;
    height: 345px;
    padding: 30px 60px;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
      path {
        stroke: #121417;
      }
    }
  }

  .Form {
    margin-top: 30px;
    position: relative;
    display: grid;
    gap: 15px;
    @media only screen and (min-width: 768px) {
      gap: 20px;
    }
  }

  input[id='ukrainian'],
  input[id='english'] {
    border: 1px solid #d1d5db;
    border-radius: 15px;
    padding: 12px 176px 12px 24px;
    width: 311px;
    height: 48px;
    background: none;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #f8f8f8;

    &:focus {
      outline: none;
    }
  }

  input[id='ukrainian'],
  input[id='english'] {
    @media only screen and (max-width: 374px) {
      width: 256px;
    }
  }

  input[id='ukrainian'],
  input[id='english'] {
    @media only screen and (min-width: 768px) {
      padding: 16px 227px 16px 18px;
      width: 354px;
      height: 56px;
    }
  }

  .UkrainianContainer,
  .EnglishContainer {
    display: grid;
    gap: 8px;
    position: relative;

    @media only screen and (min-width: 768px) {
      display: flex;
      gap: 32px;
    }
  }
  .InputImagContainer {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #fcfcfc;
    @media only screen and (min-width: 768px) {
      order: 2;
    }
  }

  .ButtonList {
    /* margin-top: 30px; */
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      /* margin-top: 15px; */
    }
  }

  .ButtonAdd {
    cursor: pointer;
    border-radius: 30px;
    /* padding: 12px 60px; */
    width: 100%;
    max-width: 158px;
    height: 48px;
    background: #fcfcfc;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: #fcfcfc;
      background: #85aa9f;
      border: 1px solid #d1d5db;
    }

    @media only screen and (min-width: 768px) {
      /* padding: 14px 101px; */
      max-width: 245px;
      height: 56px;

      font-size: 23px;
      line-height: 156%;
    }
  }

  .ButtonCancel {
    border: 1px solid rgba(252, 252, 252, 0.4);
    border-radius: 30px;
    /* padding: 12px 45px; */
    width: 100%;
    max-width: 145px;
    height: 48px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: #85aa9f;
      background: #fcfcfc;
    }

    @media only screen and (min-width: 768px) {
      /* padding: 14px 92px; */
      max-width: 245px;
      height: 56px;
    }
  }

  .ErrorText {
    position: absolute;
    color: red;
    top: 90px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${nt});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 58px;
    }
  }

  .SuccessText {
    position: absolute;
    color: green;
    top: 90px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${en});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 58px;
    }
  }
`;function ms({handleClickClose:t}){const e=pe(),i=B(d=>d.modal.clickWordId),{values:r,errors:n,touched:a,isValid:s,handleChange:l,handleSubmit:o}=tn({initialValues:{en:`${i.en}`,ua:`${i.ua}`,category:i.category,isIrregular:i.isIrregular},validationSchema:pi,onSubmit:d=>{e(ei({edit:d,id:i._id})).then(v=>{!v.error&&t(),console.log("Слово обновлено:",v.payload)})}}),{getInputAlert:u,getInputClass:c}=nn(r,a,n);return f.jsxs(hs,{children:[f.jsx(Ue,{className:"ButtonClose",onClick:t}),f.jsxs("form",{className:"Form",children:[f.jsxs("div",{className:"UkrainianContainer",id:"ukrainian",children:[f.jsxs("div",{className:"InputImagContainer",children:[f.jsx(an,{className:"IconCountry"})," Ukrainian"]}),f.jsx("input",{id:"ukrainian",className:c("Ua"),type:"text",placeholder:"Слово Українською",name:"ua",value:r.ua,onChange:l,required:!0}),u("ua")]}),f.jsxs("div",{className:"EnglishContainer",children:[f.jsxs("div",{className:"InputImagContainer",children:[f.jsx(on,{className:"IconCountry"})," English"]}),f.jsx("input",{id:"english",className:c("En"),type:"text",placeholder:"Word in English",name:"en",value:r.en,onChange:l,required:!0}),u("en")]}),f.jsxs("ul",{className:"ButtonList",children:[f.jsx("li",{className:"ButtonAdd",type:"submit",disabled:!s,onClick:o,children:"Save"}),f.jsx("li",{className:"ButtonCancel",onClick:t,children:"Cancel"})]})]})]})}const gs=ae.div`
  border-radius: 15px;
  padding: 30px;
  display: grid;
  gap: 50px;

  background: #85aa9f;
  box-sizing: border-box;

  @media only screen and (max-width: 374px) {
    width: 288px;
    padding: 40px 20px;
  }

  .Title {
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #fff;
    @media only screen and (max-width: 374px) {
      width: 248px;
      text-align: center;
      font-size: 22px;
    }
  }

  .ListButton {
    display: flex;
    gap: 20px;
    justify-content: center;
    @media only screen and (max-width: 374px) {
      gap: 10px;
    }
  }

  .ButtonYes {
    cursor: pointer;
    text-align: center;
    border-radius: 30px;
    padding: 14px 65px;
    background: #fcfcfc;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    &:hover {
      color: #fcfcfc;
      background: #85aa9f;
      border: 1px solid #d1d5db;
    }

    @media only screen and (max-width: 374px) {
      width: 120px;
      padding: 14px 45px;
    }
  }

  .ButtonNo {
    cursor: pointer;
    text-align: center;
    border: 1px solid rgba(252, 252, 252, 0.4);
    border-radius: 30px;
    padding: 12px 45px;
    width: 155px;
    height: 48px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    &:hover {
      color: #85aa9f;
      background: #fcfcfc;
    }
    @media only screen and (max-width: 374px) {
      width: 120px;
    }
  }
`;function vs({handleClickClose:t}){const e=pe(),i=B(n=>n.modal.clickWordId),r=()=>{e(ti(i)).then(n=>{isNaN(n.payload)&&t()})};return f.jsxs(gs,{children:[f.jsxs("h2",{className:"Title",children:["Are you sure you want to delete ",i.en,"?"]}),f.jsxs("ul",{className:"ListButton",children:[f.jsx("li",{className:"ButtonYes",onClick:r,children:"Yes"}),f.jsx("li",{className:"ButtonNo",onClick:()=>t(),children:"No"})]})]})}const bs="/VocabBuilder/assets/open-orange-book-mobile-min-c1af7270.png",xs="/VocabBuilder/assets/open-orange-book-desctop-min-45107eed.png",Es=ae.div`
  border-radius: 15px;
  width: 342px;
  height: 458px;
  padding: 18px;
  background: #85aa9f;
  position: relative;
  box-sizing: border-box;

  @media only screen and (max-width: 374px) {
    width: 288px;
  }

  @media only screen and (min-width: 768px) {
    border-radius: 30px;
    width: 528px;
    height: 520px;
    padding: 18px 64px;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
      path {
        stroke: #121417;
      }
    }
  }

  .Title {
    margin-top: 30px;
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 120%;
      letter-spacing: -0.02em;
    }
  }

  .ContentContainer {
    margin-top: 20px;
    display: flex;
    gap: 30px;
    justify-content: start;

    @media only screen and (min-width: 768px) {
      gap: 75px;
    }
  }

  .TitleCorrectAnswer,
  .TitleMistakes {
    font-weight: 400;
    font-size: 14px;
    color: rgba(252, 252, 252, 0.5);

    @media only screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }

  .CorrectAnswerList,
  .MistakesList {
    margin-top: 10px;
    display: grid;
    gap: 8px;
  }

  .CorrectAnswerList {
    overflow: scroll;
    max-height: 300px;

    @media only screen and (min-width: 768px) {
      max-height: 350px;
    }
  }

  .MistakesList {
    max-height: 170px;
    overflow: auto;
  }

  .MistakesItem,
  .CorrectAnswerItem {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .Img {
    width: 152px;
    height: 121px;
    background-image: url(${bs});
    position: absolute;
    bottom: 40px;
    right: 0;

    @media only screen and (min-width: 768px) {
      width: 212px;
      height: 179px;
      background-image: url(${xs});
    }
  }
`;function Cs({handleClickClose:t}){const e=B(i=>i.data.answers);return e&&f.jsxs(Es,{children:[f.jsx(Ue,{className:"ButtonClose",onClick:t}),f.jsx("h2",{className:"Title",children:"Well done"}),f.jsxs("div",{className:"ContentContainer",children:[f.jsxs("div",{className:"CorrectAnswerContainer",children:[f.jsx("p",{className:"TitleCorrectAnswer",children:"Сorrect answers: "}),f.jsx("ul",{className:"CorrectAnswerList",children:e.map((i,r)=>i.isDone===!0&&f.jsx("li",{className:"CorrectAnswerItem",children:i[i.task]},r))})]}),f.jsxs("div",{className:"MistakesContainer",children:[f.jsx("p",{className:"TitleMistakes",children:"Mistakes: "}),f.jsx("ul",{className:"MistakesList",children:e.map((i,r)=>i.isDone===!1&&f.jsx("li",{className:"MistakesItem",children:i.task==="en"?i.en:i.ua},r))})]}),f.jsx("div",{className:"Img"})]})]})}const ys=document.querySelector("#modal-root");function ws(){const t=pe(),e=B(u=>u.modal.isModalOpenMobile),i=B(u=>u.modal.isModalOpenAddWord),r=B(u=>u.modal.isModalOpenClickWord),n=B(u=>u.modal.isModalOpenConfirmation),a=B(u=>u.modal.isModalOpenEdit),s=B(u=>u.modal.isModalOpenWellDone),l=m.useCallback(()=>{t(ni()),t(ii()),t(ri()),t(ai()),t(oi()),t(si())},[t]),o=u=>{u.target===u.currentTarget&&l()};return m.useEffect(()=>{const u=c=>{c.code==="Escape"&&l()};return document.addEventListener("keydown",u),document.body.style.cssText="overflow: hidden; ",()=>{document.removeEventListener("keydown",u),document.body.style.cssText="overflow: auto; "}},[e,i,r,n,a,s,l,t]),Qt.createPortal(f.jsxs(f.Fragment,{children:[(e||i||a||n||s)&&f.jsxs(Fi,{onClick:o,children:[e&&f.jsx(Si,{handleClickClose:l}),i&&f.jsx(ls,{handleClickClose:l}),n&&f.jsx(vs,{handleClickClose:l}),a&&f.jsx(ms,{handleClickClose:l}),s&&f.jsx(Cs,{handleClickClose:l})]}),r&&f.jsx(Oi,{onClick:o,children:f.jsx(fs,{handleClickClose:l})})]}),ys)}function Is(){const t=pe(),e=Xt(),i=B(c=>c.modal.isModalOpenMobile),r=B(c=>c.modal.isModalOpenAddWord),n=B(c=>c.modal.isModalOpenClickWord),a=B(c=>c.modal.isModalOpenConfirmation),s=B(c=>c.modal.isModalOpenEdit),l=B(c=>c.modal.isModalOpenWellDone),o=B(c=>c.auth.name),u=()=>{t(Jt.logOut()).then(e("/"))};return f.jsxs("div",{className:"container",children:[f.jsxs(Ei,{children:[f.jsxs(de,{to:"/",className:"LogoContainer",children:[f.jsx(vi,{className:"Logo"}),f.jsx("h2",{className:"LogoTitle",children:"VocabBuilder"})]}),o&&f.jsxs("ul",{className:"NavigationContainer",children:[f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/dictionary",children:"Dictionary"})}),f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/recommend",children:"Recommend"})}),f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/training",children:"Training"})})]}),o&&f.jsxs("div",{className:"RightSideHeader",children:[f.jsxs("div",{className:"UserContainer",children:[f.jsx("p",{className:"UserName",children:o}),f.jsx("span",{className:"UserImag",children:f.jsx(bi,{})})]}),f.jsxs("button",{className:"ButtonLogOut",onClick:u,children:["Log Out",f.jsx(sn,{className:"SwitchIcon"})]}),f.jsx(xi,{className:"ButtonBurger",onClick:()=>t(ui())})]})]}),f.jsx(m.Suspense,{fallback:f.jsx("div",{children:f.jsx(li,{})}),children:f.jsx(ci,{})}),(i||r||n||a||s||l)&&f.jsx(ws,{})]})}export{Is as default};
