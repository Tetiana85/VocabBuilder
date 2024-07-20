import{r as m,p as oe,u as pe,a as Xt,b as L,j as f,N as de,c as Jt,m as Kn,d as Zn,R as St,e as Qt,f as Xn,o as Jn,g as Qn,h as ei,i as ti,k as ni,l as ii,n as ri,q as oi,s as ai,t as si,v as ui,L as li,O as ci}from"./index-239b5d5a.js";import{e as nt,c as en,u as tn,A as di,S as nn,E as pi}from"./error-f092eaff.js";import{t as fi}from"./toggle-c5de6f17.js";import{_ as ae,a as re,b as S,c as hi,d as rn,e as mi,f as gi,g as Fe,h as F,S as on,i as an}from"./extends-a0ac0fb1.js";const vi=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:40,viewBox:"0 0 40 40",fill:"none",...t},m.createElement("circle",{cx:20,cy:20,r:20,fill:"#85AA9F"}),m.createElement("path",{fill:"#FCFCFC",fillRule:"evenodd",d:"M20.443 19c5.944-4.483 6.206-7.2 0-12-6.325 4.902-5.51 7.501 0 12ZM19 20.557c-4.483-5.944-7.2-6.206-12 0 4.902 6.325 7.5 5.51 12 0Zm15 0c-4.483-5.944-7.2-6.206-12 0 4.902 6.325 7.5 5.51 12 0ZM20.443 34c5.944-4.483 6.206-7.2 0-12-6.325 4.902-5.51 7.501 0 12Z",clipRule:"evenodd"})),bi=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t},m.createElement("path",{fill:"#FCFCFC",fillOpacity:.7,d:"M9.999 3.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Zm0 13.334s6.666 0 6.666-1.667c0-2-3.25-4.167-6.666-4.167C6.582 10.833 3.332 13 3.332 15c0 1.667 6.667 1.667 6.667 1.667Z"})),xi=t=>m.createElement("svg",{width:32,height:22,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("line",{x1:5.86914,y1:3.66663,x2:30.9996,y2:3.66663,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"}),m.createElement("line",{x1:5.86914,y1:17,x2:30.9996,y2:17,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"}),m.createElement("line",{x1:13.5215,y1:10.3334,x2:30.9997,y2:10.3334,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"})),sn=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t},m.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.333 10h13.334m0 0-3.334-3.333M16.667 10l-3.334 3.333"})),Ei=oe.div`
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
`,Ue=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...t},m.createElement("path",{stroke:"#FCFCFC",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M24 8 8 24M8 8l16 16"})),Ci="/VocabBuilder/assets/x-modal-b22a52f5.svg",yi=oe.div`
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
`,wi=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t},m.createElement("path",{fill:"#85AA9F",d:"M9.999 3.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Zm0 13.334s6.666 0 6.666-1.667c0-2-3.25-4.167-6.666-4.167C6.582 10.833 3.332 13 3.332 15c0 1.667 6.667 1.667 6.667 1.667Z"}));function Si({handleClickClose:t}){const e=pe(),i=Xt(),r=L(l=>l.auth.name),n=L(l=>l.auth.isLoggedIn),o=()=>{e(Jt.logOut())};m.useEffect(()=>{n||(t(),i("/"))},[n,i,t]);const s=()=>{t()};return f.jsxs(yi,{children:[f.jsxs("div",{className:"HeaderOfModal",children:[f.jsxs("div",{className:"UserContainer",children:[f.jsx("p",{className:"UserName",children:r}),f.jsx("span",{className:"UserImag",children:f.jsx(wi,{className:"user-icon"})})]}),f.jsx("div",{className:"UserContainer"}),f.jsx(Ue,{className:"ButtonClose",onClick:t})]}),f.jsxs("ul",{className:"NavList",children:[f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/dictionary",onClick:s,children:"Dictionary"})}),f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/recommend",onClick:s,children:"Recommend"})}),f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/training",onClick:s,children:"Training"})}),f.jsxs("button",{className:"ButtonLogOut",onClick:o,children:["Log Out",f.jsx(sn,{className:"SwitchIcon"})]})]}),f.jsx("div",{className:"Img"})]})}const Fi=oe.div`
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
  padding: 0 16px;

  .ModalDiv {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`,Oi=oe.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
`,Mi=oe.div`
  position: relative;
  border-radius: 15px;
  max-width: 343px;
  height: 622px;
  background: #85aa9f;
  padding: 48px 16px;
  color: #fcfcfc;

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

    @media only screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 120%;
    }
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
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

    @media only screen and (max-width: 375px) {
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
  }

  .ButtonAdd {
    cursor: pointer;
    border-radius: 30px;
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
`;var Ii=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Ai(t){var e=t.defaultInputValue,i=e===void 0?"":e,r=t.defaultMenuIsOpen,n=r===void 0?!1:r,o=t.defaultValue,s=o===void 0?null:o,l=t.inputValue,a=t.menuIsOpen,u=t.onChange,c=t.onInputChange,d=t.onMenuClose,v=t.onMenuOpen,b=t.value,x=ae(t,Ii),p=m.useState(l!==void 0?l:i),h=re(p,2),g=h[0],E=h[1],y=m.useState(a!==void 0?a:n),O=re(y,2),A=O[0],M=O[1],C=m.useState(b!==void 0?b:s),I=re(C,2),V=I[0],$=I[1],U=m.useCallback(function(G,se){typeof u=="function"&&u(G,se),$(G)},[u]),z=m.useCallback(function(G,se){var ue;typeof c=="function"&&(ue=c(G,se)),E(ue!==void 0?ue:G)},[c]),ee=m.useCallback(function(){typeof v=="function"&&v(),M(!0)},[v]),te=m.useCallback(function(){typeof d=="function"&&d(),M(!1)},[d]),N=l!==void 0?l:g,T=a!==void 0?a:A,Z=b!==void 0?b:V;return S(S({},x),{},{inputValue:N,menuIsOpen:T,onChange:U,onInputChange:z,onMenuClose:te,onMenuOpen:ee,value:Z})}function Di(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ft(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,hi(r.key),r)}}function ki(t,e,i){return e&&Ft(t.prototype,e),i&&Ft(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t,e){return it=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},it(t,e)}function Vi(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&it(t,e)}function Re(t){return Re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},Re(t)}function Pi(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Li(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ri(t,e){if(e&&(rn(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Li(t)}function Ti(t){var e=Pi();return function(){var r=Re(t),n;if(e){var o=Re(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ri(this,n)}}function Bi(t){if(Array.isArray(t))return mi(t)}function Ni(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ji(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ct(t){return Bi(t)||Ni(t)||gi(t)||ji()}function $i(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function zi(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Hi=function(){function t(i){var r=this;this._insertTag=function(n){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(n,o),r.tags.push(n)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(zi(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var o=$i(n);try{o.insertRule(r,o.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),H="-ms-",Te="-moz-",D="-webkit-",un="comm",dt="rule",pt="decl",Ui="@import",ln="@keyframes",Wi="@layer",_i=Math.abs,We=String.fromCharCode,Yi=Object.assign;function Gi(t,e){return j(t,0)^45?(((e<<2^j(t,0))<<2^j(t,1))<<2^j(t,2))<<2^j(t,3):0}function cn(t){return t.trim()}function qi(t,e){return(t=e.exec(t))?t[0]:t}function k(t,e,i){return t.replace(e,i)}function rt(t,e){return t.indexOf(e)}function j(t,e){return t.charCodeAt(e)|0}function xe(t,e,i){return t.slice(e,i)}function X(t){return t.length}function ft(t){return t.length}function Oe(t,e){return e.push(t),t}function Ki(t,e){return t.map(e).join("")}var _e=1,me=1,dn=0,W=0,R=0,ge="";function Ye(t,e,i,r,n,o,s){return{value:t,root:e,parent:i,type:r,props:n,children:o,line:_e,column:me,length:s,return:""}}function ve(t,e){return Yi(Ye("",null,null,"",null,null,0),t,{length:-t.length},e)}function Zi(){return R}function Xi(){return R=W>0?j(ge,--W):0,me--,R===10&&(me=1,_e--),R}function Y(){return R=W<dn?j(ge,W++):0,me++,R===10&&(me=1,_e++),R}function Q(){return j(ge,W)}function ke(){return W}function ye(t,e){return xe(ge,t,e)}function Ee(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pn(t){return _e=me=1,dn=X(ge=t),W=0,[]}function fn(t){return ge="",t}function Ve(t){return cn(ye(W-1,ot(t===91?t+2:t===40?t+1:t)))}function Ji(t){for(;(R=Q())&&R<33;)Y();return Ee(t)>2||Ee(R)>3?"":" "}function Qi(t,e){for(;--e&&Y()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return ye(t,ke()+(e<6&&Q()==32&&Y()==32))}function ot(t){for(;Y();)switch(R){case t:return W;case 34:case 39:t!==34&&t!==39&&ot(R);break;case 40:t===41&&ot(t);break;case 92:Y();break}return W}function er(t,e){for(;Y()&&t+R!==47+10;)if(t+R===42+42&&Q()===47)break;return"/*"+ye(e,W-1)+"*"+We(t===47?t:Y())}function tr(t){for(;!Ee(Q());)Y();return ye(t,W)}function nr(t){return fn(Pe("",null,null,null,[""],t=pn(t),0,[0],t))}function Pe(t,e,i,r,n,o,s,l,a){for(var u=0,c=0,d=s,v=0,b=0,x=0,p=1,h=1,g=1,E=0,y="",O=n,A=o,M=r,C=y;h;)switch(x=E,E=Y()){case 40:if(x!=108&&j(C,d-1)==58){rt(C+=k(Ve(E),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:C+=Ve(E);break;case 9:case 10:case 13:case 32:C+=Ji(x);break;case 92:C+=Qi(ke()-1,7);continue;case 47:switch(Q()){case 42:case 47:Oe(ir(er(Y(),ke()),e,i),a);break;default:C+="/"}break;case 123*p:l[u++]=X(C)*g;case 125*p:case 59:case 0:switch(E){case 0:case 125:h=0;case 59+c:g==-1&&(C=k(C,/\f/g,"")),b>0&&X(C)-d&&Oe(b>32?Mt(C+";",r,i,d-1):Mt(k(C," ","")+";",r,i,d-2),a);break;case 59:C+=";";default:if(Oe(M=Ot(C,e,i,u,c,n,l,y,O=[],A=[],d),o),E===123)if(c===0)Pe(C,e,M,M,O,o,d,l,A);else switch(v===99&&j(C,3)===110?100:v){case 100:case 108:case 109:case 115:Pe(t,M,M,r&&Oe(Ot(t,M,M,0,0,n,l,y,n,O=[],d),A),n,A,d,l,r?O:A);break;default:Pe(C,M,M,M,[""],A,0,l,A)}}u=c=b=0,p=g=1,y=C="",d=s;break;case 58:d=1+X(C),b=x;default:if(p<1){if(E==123)--p;else if(E==125&&p++==0&&Xi()==125)continue}switch(C+=We(E),E*p){case 38:g=c>0?1:(C+="\f",-1);break;case 44:l[u++]=(X(C)-1)*g,g=1;break;case 64:Q()===45&&(C+=Ve(Y())),v=Q(),c=d=X(y=C+=tr(ke())),E++;break;case 45:x===45&&X(C)==2&&(p=0)}}return o}function Ot(t,e,i,r,n,o,s,l,a,u,c){for(var d=n-1,v=n===0?o:[""],b=ft(v),x=0,p=0,h=0;x<r;++x)for(var g=0,E=xe(t,d+1,d=_i(p=s[x])),y=t;g<b;++g)(y=cn(p>0?v[g]+" "+E:k(E,/&\f/g,v[g])))&&(a[h++]=y);return Ye(t,e,i,n===0?dt:l,a,u,c)}function ir(t,e,i){return Ye(t,e,i,un,We(Zi()),xe(t,2,-2),0)}function Mt(t,e,i,r){return Ye(t,e,i,pt,xe(t,0,r),xe(t,r+1,-1),r)}function he(t,e){for(var i="",r=ft(t),n=0;n<r;n++)i+=e(t[n],n,t,e)||"";return i}function rr(t,e,i,r){switch(t.type){case Wi:if(t.children.length)break;case Ui:case pt:return t.return=t.return||t.value;case un:return"";case ln:return t.return=t.value+"{"+he(t.children,r)+"}";case dt:t.value=t.props.join(",")}return X(i=he(t.children,r))?t.return=t.value+"{"+i+"}":""}function or(t){var e=ft(t);return function(i,r,n,o){for(var s="",l=0;l<e;l++)s+=t[l](i,r,n,o)||"";return s}}function ar(t){return function(e){e.root||(e=e.return)&&t(e)}}var sr=function(e,i,r){for(var n=0,o=0;n=o,o=Q(),n===38&&o===12&&(i[r]=1),!Ee(o);)Y();return ye(e,W)},ur=function(e,i){var r=-1,n=44;do switch(Ee(n)){case 0:n===38&&Q()===12&&(i[r]=1),e[r]+=sr(W-1,i,r);break;case 2:e[r]+=Ve(n);break;case 4:if(n===44){e[++r]=Q()===58?"&\f":"",i[r]=e[r].length;break}default:e[r]+=We(n)}while(n=Y());return e},lr=function(e,i){return fn(ur(pn(e),i))},It=new WeakMap,cr=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var i=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&i.charCodeAt(0)!==58&&!It.get(r))&&!n){It.set(e,!0);for(var o=[],s=lr(i,o),l=r.props,a=0,u=0;a<s.length;a++)for(var c=0;c<l.length;c++,u++)e.props[u]=o[a]?s[a].replace(/&\f/g,l[c]):l[c]+" "+s[a]}}},dr=function(e){if(e.type==="decl"){var i=e.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(e.return="",e.value="")}};function hn(t,e){switch(Gi(t,e)){case 5103:return D+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return D+t+Te+t+H+t+t;case 6828:case 4268:return D+t+H+t+t;case 6165:return D+t+H+"flex-"+t+t;case 5187:return D+t+k(t,/(\w+).+(:[^]+)/,D+"box-$1$2"+H+"flex-$1$2")+t;case 5443:return D+t+H+"flex-item-"+k(t,/flex-|-self/,"")+t;case 4675:return D+t+H+"flex-line-pack"+k(t,/align-content|flex-|-self/,"")+t;case 5548:return D+t+H+k(t,"shrink","negative")+t;case 5292:return D+t+H+k(t,"basis","preferred-size")+t;case 6060:return D+"box-"+k(t,"-grow","")+D+t+H+k(t,"grow","positive")+t;case 4554:return D+k(t,/([^-])(transform)/g,"$1"+D+"$2")+t;case 6187:return k(k(k(t,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),t,"")+t;case 5495:case 3959:return k(t,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return k(k(t,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+t+t;case 4095:case 3583:case 4068:case 2532:return k(t,/(.+)-inline(.+)/,D+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(X(t)-1-e>6)switch(j(t,e+1)){case 109:if(j(t,e+4)!==45)break;case 102:return k(t,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Te+(j(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~rt(t,"stretch")?hn(k(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(j(t,e+1)!==115)break;case 6444:switch(j(t,X(t)-3-(~rt(t,"!important")&&10))){case 107:return k(t,":",":"+D)+t;case 101:return k(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(j(t,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+H+"$2box$3")+t}break;case 5936:switch(j(t,e+11)){case 114:return D+t+H+k(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return D+t+H+k(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return D+t+H+k(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return D+t+H+t+t}return t}var pr=function(e,i,r,n){if(e.length>-1&&!e.return)switch(e.type){case pt:e.return=hn(e.value,e.length);break;case ln:return he([ve(e,{value:k(e.value,"@","@"+D)})],n);case dt:if(e.length)return Ki(e.props,function(o){switch(qi(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return he([ve(e,{props:[k(o,/:(read-\w+)/,":"+Te+"$1")]})],n);case"::placeholder":return he([ve(e,{props:[k(o,/:(plac\w+)/,":"+D+"input-$1")]}),ve(e,{props:[k(o,/:(plac\w+)/,":"+Te+"$1")]}),ve(e,{props:[k(o,/:(plac\w+)/,H+"input-$1")]})],n)}return""})}},fr=[pr],hr=function(e){var i=e.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(p){var h=p.getAttribute("data-emotion");h.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var n=e.stylisPlugins||fr,o={},s,l=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(p){for(var h=p.getAttribute("data-emotion").split(" "),g=1;g<h.length;g++)o[h[g]]=!0;l.push(p)});var a,u=[cr,dr];{var c,d=[rr,ar(function(p){c.insert(p)})],v=or(u.concat(n,d)),b=function(h){return he(nr(h),v)};a=function(h,g,E,y){c=E,b(h?h+"{"+g.styles+"}":g.styles),y&&(x.inserted[g.name]=!0)}}var x={key:i,sheet:new Hi({key:i,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return x.sheet.hydrate(l),x},mr=!0;function gr(t,e,i){var r="";return i.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):r+=n+" "}),r}var mn=function(e,i,r){var n=e.key+"-"+i.name;(r===!1||mr===!1)&&e.registered[n]===void 0&&(e.registered[n]=i.styles)},vr=function(e,i,r){mn(e,i,r);var n=e.key+"-"+i.name;if(e.inserted[i.name]===void 0){var o=i;do e.insert(i===o?"."+n:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function br(t){for(var e=0,i,r=0,n=t.length;n>=4;++r,n-=4)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,e=(i&65535)*1540483477+((i>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var xr=/[A-Z]|^ms/g,Er=/_EMO_([^_]+?)_([^]*?)_EMO_/g,gn=function(e){return e.charCodeAt(1)===45},At=function(e){return e!=null&&typeof e!="boolean"},qe=Kn(function(t){return gn(t)?t:t.replace(xr,"-$&").toLowerCase()}),Dt=function(e,i){switch(e){case"animation":case"animationName":if(typeof i=="string")return i.replace(Er,function(r,n,o){return J={name:n,styles:o,next:J},n})}return Zn[e]!==1&&!gn(e)&&typeof i=="number"&&i!==0?i+"px":i};function Ce(t,e,i){if(i==null)return"";if(i.__emotion_styles!==void 0)return i;switch(typeof i){case"boolean":return"";case"object":{if(i.anim===1)return J={name:i.name,styles:i.styles,next:J},i.name;if(i.styles!==void 0){var r=i.next;if(r!==void 0)for(;r!==void 0;)J={name:r.name,styles:r.styles,next:J},r=r.next;var n=i.styles+";";return n}return Cr(t,e,i)}case"function":{if(t!==void 0){var o=J,s=i(t);return J=o,Ce(t,e,s)}break}}if(e==null)return i;var l=e[i];return l!==void 0?l:i}function Cr(t,e,i){var r="";if(Array.isArray(i))for(var n=0;n<i.length;n++)r+=Ce(t,e,i[n])+";";else for(var o in i){var s=i[o];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=o+"{"+e[s]+"}":At(s)&&(r+=qe(o)+":"+Dt(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var l=0;l<s.length;l++)At(s[l])&&(r+=qe(o)+":"+Dt(o,s[l])+";");else{var a=Ce(t,e,s);switch(o){case"animation":case"animationName":{r+=qe(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var kt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,J,vn=function(e,i,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,o="";J=void 0;var s=e[0];s==null||s.raw===void 0?(n=!1,o+=Ce(r,i,s)):o+=s[0];for(var l=1;l<e.length;l++)o+=Ce(r,i,e[l]),n&&(o+=s[l]);kt.lastIndex=0;for(var a="",u;(u=kt.exec(o))!==null;)a+="-"+u[1];var c=br(o)+a;return{name:c,styles:o,next:J}},yr=function(e){return e()},wr=St["useInsertionEffect"]?St["useInsertionEffect"]:!1,Sr=wr||yr,ht={}.hasOwnProperty,bn=m.createContext(typeof HTMLElement<"u"?hr({key:"css"}):null);bn.Provider;var Fr=function(e){return m.forwardRef(function(i,r){var n=m.useContext(bn);return e(i,n,r)})},Or=m.createContext({}),at="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Mr=function(e,i){var r={};for(var n in i)ht.call(i,n)&&(r[n]=i[n]);return r[at]=e,r},Ir=function(e){var i=e.cache,r=e.serialized,n=e.isStringTag;return mn(i,r,n),Sr(function(){return vr(i,r,n)}),null},Ar=Fr(function(t,e,i){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var n=t[at],o=[r],s="";typeof t.className=="string"?s=gr(e.registered,o,t.className):t.className!=null&&(s=t.className+" ");var l=vn(o,void 0,m.useContext(Or));s+=e.key+"-"+l.name;var a={};for(var u in t)ht.call(t,u)&&u!=="css"&&u!==at&&(a[u]=t[u]);return a.ref=i,a.className=s,m.createElement(m.Fragment,null,m.createElement(Ir,{cache:e,serialized:l,isStringTag:typeof n=="string"}),m.createElement(n,a))}),Dr=Ar,w=function(e,i){var r=arguments;if(i==null||!ht.call(i,"css"))return m.createElement.apply(void 0,r);var n=r.length,o=new Array(n);o[0]=Dr,o[1]=Mr(e,i);for(var s=2;s<n;s++)o[s]=r[s];return m.createElement.apply(null,o)};function mt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return vn(e)}var kr=function(){var e=mt.apply(void 0,arguments),i="animation-"+e.name;return{name:i,styles:"@keyframes "+i+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Vr(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const Pr=Math.min,Lr=Math.max,Be=Math.round,Me=Math.floor,Ne=t=>({x:t,y:t});function Rr(t){const{x:e,y:i,width:r,height:n}=t;return{width:r,height:n,top:i,left:e,right:e+r,bottom:i+n,x:e,y:i}}function xn(t){return Cn(t)?(t.nodeName||"").toLowerCase():"#document"}function K(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function En(t){var e;return(e=(Cn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Cn(t){return t instanceof Node||t instanceof K(t).Node}function st(t){return t instanceof Element||t instanceof K(t).Element}function gt(t){return t instanceof HTMLElement||t instanceof K(t).HTMLElement}function Vt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof K(t).ShadowRoot}function yn(t){const{overflow:e,overflowX:i,overflowY:r,display:n}=vt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(n)}function Tr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Br(t){return["html","body","#document"].includes(xn(t))}function vt(t){return K(t).getComputedStyle(t)}function Nr(t){if(xn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Vt(t)&&t.host||En(t);return Vt(e)?e.host:e}function wn(t){const e=Nr(t);return Br(e)?t.ownerDocument?t.ownerDocument.body:t.body:gt(e)&&yn(e)?e:wn(e)}function je(t,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const n=wn(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),s=K(n);return o?e.concat(s,s.visualViewport||[],yn(n)?n:[],s.frameElement&&i?je(s.frameElement):[]):e.concat(n,je(n,[],i))}function jr(t){const e=vt(t);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const n=gt(t),o=n?t.offsetWidth:i,s=n?t.offsetHeight:r,l=Be(i)!==o||Be(r)!==s;return l&&(i=o,r=s),{width:i,height:r,$:l}}function bt(t){return st(t)?t:t.contextElement}function Ke(t){const e=bt(t);if(!gt(e))return Ne(1);const i=e.getBoundingClientRect(),{width:r,height:n,$:o}=jr(e);let s=(o?Be(i.width):i.width)/r,l=(o?Be(i.height):i.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const $r=Ne(0);function zr(t){const e=K(t);return!Tr()||!e.visualViewport?$r:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Hr(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==K(t)?!1:e}function Pt(t,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const n=t.getBoundingClientRect(),o=bt(t);let s=Ne(1);e&&(r?st(r)&&(s=Ke(r)):s=Ke(t));const l=Hr(o,i,r)?zr(o):Ne(0);let a=(n.left+l.x)/s.x,u=(n.top+l.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(o){const v=K(o),b=r&&st(r)?K(r):r;let x=v,p=x.frameElement;for(;p&&r&&b!==x;){const h=Ke(p),g=p.getBoundingClientRect(),E=vt(p),y=g.left+(p.clientLeft+parseFloat(E.paddingLeft))*h.x,O=g.top+(p.clientTop+parseFloat(E.paddingTop))*h.y;a*=h.x,u*=h.y,c*=h.x,d*=h.y,a+=y,u+=O,x=K(p),p=x.frameElement}}return Rr({width:c,height:d,x:a,y:u})}function Ur(t,e){let i=null,r;const n=En(t);function o(){var l;clearTimeout(r),(l=i)==null||l.disconnect(),i=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:u,top:c,width:d,height:v}=t.getBoundingClientRect();if(l||e(),!d||!v)return;const b=Me(c),x=Me(n.clientWidth-(u+d)),p=Me(n.clientHeight-(c+v)),h=Me(u),E={rootMargin:-b+"px "+-x+"px "+-p+"px "+-h+"px",threshold:Lr(0,Pr(1,a))||1};let y=!0;function O(A){const M=A[0].intersectionRatio;if(M!==a){if(!y)return s();M?s(!1,M):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{i=new IntersectionObserver(O,{...E,root:n.ownerDocument})}catch{i=new IntersectionObserver(O,E)}i.observe(t)}return s(!0),o}function Wr(t,e,i,r){r===void 0&&(r={});const{ancestorScroll:n=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=bt(t),c=n||o?[...u?je(u):[],...je(e)]:[];c.forEach(g=>{n&&g.addEventListener("scroll",i,{passive:!0}),o&&g.addEventListener("resize",i)});const d=u&&l?Ur(u,i):null;let v=-1,b=null;s&&(b=new ResizeObserver(g=>{let[E]=g;E&&E.target===u&&b&&(b.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var y;(y=b)==null||y.observe(e)})),i()}),u&&!a&&b.observe(u),b.observe(e));let x,p=a?Pt(t):null;a&&h();function h(){const g=Pt(t);p&&(g.x!==p.x||g.y!==p.y||g.width!==p.width||g.height!==p.height)&&i(),p=g,x=requestAnimationFrame(h)}return i(),()=>{var g;c.forEach(E=>{n&&E.removeEventListener("scroll",i),o&&E.removeEventListener("resize",i)}),d==null||d(),(g=b)==null||g.disconnect(),b=null,a&&cancelAnimationFrame(x)}}var ut=m.useLayoutEffect,_r=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],$e=function(){};function Yr(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function Gr(t,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),n=2;n<i;n++)r[n-2]=arguments[n];var o=[].concat(r);if(e&&t)for(var s in e)e.hasOwnProperty(s)&&e[s]&&o.push("".concat(Yr(t,s)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Lt=function(e){return no(e)?e.filter(Boolean):rn(e)==="object"&&e!==null?[e]:[]},Sn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=ae(e,_r);return S({},i)},P=function(e,i,r){var n=e.cx,o=e.getStyles,s=e.getClassNames,l=e.className;return{css:o(i,e),className:n(r??{},s(i,e),l)}};function Ge(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function qr(t){return Ge(t)?window.innerHeight:t.clientHeight}function Fn(t){return Ge(t)?window.pageYOffset:t.scrollTop}function ze(t,e){if(Ge(t)){window.scrollTo(0,e);return}t.scrollTop=e}function Kr(t){var e=getComputedStyle(t),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function Zr(t,e,i,r){return i*((t=t/r-1)*t*t+1)+e}function Ie(t,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:$e,n=Fn(t),o=e-n,s=10,l=0;function a(){l+=s;var u=Zr(l,n,o,i);ze(t,u),l<i?window.requestAnimationFrame(a):r(t)}a()}function Rt(t,e){var i=t.getBoundingClientRect(),r=e.getBoundingClientRect(),n=e.offsetHeight/3;r.bottom+n>i.bottom?ze(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):r.top-n<i.top&&ze(t,Math.max(e.offsetTop-n,0))}function Xr(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Tt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Jr(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var On=!1,Qr={get passive(){return On=!0}},Ae=typeof window<"u"?window:{};Ae.addEventListener&&Ae.removeEventListener&&(Ae.addEventListener("p",$e,Qr),Ae.removeEventListener("p",$e,!1));var eo=On;function to(t){return t!=null}function no(t){return Array.isArray(t)}function De(t,e,i){return t?e:i}var io=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];var o=Object.entries(e).filter(function(s){var l=re(s,1),a=l[0];return!r.includes(a)});return o.reduce(function(s,l){var a=re(l,2),u=a[0],c=a[1];return s[u]=c,s},{})},ro=["children","innerProps"],oo=["children","innerProps"];function ao(t){var e=t.maxHeight,i=t.menuEl,r=t.minHeight,n=t.placement,o=t.shouldScroll,s=t.isFixedPosition,l=t.controlHeight,a=Kr(i),u={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return u;var c=a.getBoundingClientRect(),d=c.height,v=i.getBoundingClientRect(),b=v.bottom,x=v.height,p=v.top,h=i.offsetParent.getBoundingClientRect(),g=h.top,E=s?window.innerHeight:qr(a),y=Fn(a),O=parseInt(getComputedStyle(i).marginBottom,10),A=parseInt(getComputedStyle(i).marginTop,10),M=g-A,C=E-p,I=M+y,V=d-y-p,$=b-E+y+O,U=y+p-A,z=160;switch(n){case"auto":case"bottom":if(C>=x)return{placement:"bottom",maxHeight:e};if(V>=x&&!s)return o&&Ie(a,$,z),{placement:"bottom",maxHeight:e};if(!s&&V>=r||s&&C>=r){o&&Ie(a,$,z);var ee=s?C-O:V-O;return{placement:"bottom",maxHeight:ee}}if(n==="auto"||s){var te=e,N=s?M:I;return N>=r&&(te=Math.min(N-O-l,e)),{placement:"top",maxHeight:te}}if(n==="bottom")return o&&ze(a,$),{placement:"bottom",maxHeight:e};break;case"top":if(M>=x)return{placement:"top",maxHeight:e};if(I>=x&&!s)return o&&Ie(a,U,z),{placement:"top",maxHeight:e};if(!s&&I>=r||s&&M>=r){var T=e;return(!s&&I>=r||s&&M>=r)&&(T=s?M-A:I-A),o&&Ie(a,U,z),{placement:"top",maxHeight:T}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return u}function so(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var Mn=function(e){return e==="auto"?"bottom":e},uo=function(e,i){var r,n=e.placement,o=e.theme,s=o.borderRadius,l=o.spacing,a=o.colors;return S((r={label:"menu"},Fe(r,so(n),"100%"),Fe(r,"position","absolute"),Fe(r,"width","100%"),Fe(r,"zIndex",1),r),i?{}:{backgroundColor:a.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},In=m.createContext(null),lo=function(e){var i=e.children,r=e.minMenuHeight,n=e.maxMenuHeight,o=e.menuPlacement,s=e.menuPosition,l=e.menuShouldScrollIntoView,a=e.theme,u=m.useContext(In)||{},c=u.setPortalPlacement,d=m.useRef(null),v=m.useState(n),b=re(v,2),x=b[0],p=b[1],h=m.useState(null),g=re(h,2),E=g[0],y=g[1],O=a.spacing.controlHeight;return ut(function(){var A=d.current;if(A){var M=s==="fixed",C=l&&!M,I=ao({maxHeight:n,menuEl:A,minHeight:r,placement:o,shouldScroll:C,isFixedPosition:M,controlHeight:O});p(I.maxHeight),y(I.placement),c==null||c(I.placement)}},[n,o,s,l,r,c,O]),i({ref:d,placerProps:S(S({},e),{},{placement:E||Mn(o),maxHeight:x})})},co=function(e){var i=e.children,r=e.innerRef,n=e.innerProps;return w("div",F({},P(e,"menu",{menu:!0}),{ref:r},n),i)},po=co,fo=function(e,i){var r=e.maxHeight,n=e.theme.spacing.baseUnit;return S({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:n,paddingTop:n})},ho=function(e){var i=e.children,r=e.innerProps,n=e.innerRef,o=e.isMulti;return w("div",F({},P(e,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:n},r),i)},An=function(e,i){var r=e.theme,n=r.spacing.baseUnit,o=r.colors;return S({textAlign:"center"},i?{}:{color:o.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},mo=An,go=An,vo=function(e){var i=e.children,r=i===void 0?"No options":i,n=e.innerProps,o=ae(e,ro);return w("div",F({},P(S(S({},o),{},{children:r,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),r)},bo=function(e){var i=e.children,r=i===void 0?"Loading...":i,n=e.innerProps,o=ae(e,oo);return w("div",F({},P(S(S({},o),{},{children:r,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),r)},xo=function(e){var i=e.rect,r=e.offset,n=e.position;return{left:i.left,position:n,top:r,width:i.width,zIndex:1}},Eo=function(e){var i=e.appendTo,r=e.children,n=e.controlElement,o=e.innerProps,s=e.menuPlacement,l=e.menuPosition,a=m.useRef(null),u=m.useRef(null),c=m.useState(Mn(s)),d=re(c,2),v=d[0],b=d[1],x=m.useMemo(function(){return{setPortalPlacement:b}},[]),p=m.useState(null),h=re(p,2),g=h[0],E=h[1],y=m.useCallback(function(){if(n){var C=Xr(n),I=l==="fixed"?0:window.pageYOffset,V=C[v]+I;(V!==(g==null?void 0:g.offset)||C.left!==(g==null?void 0:g.rect.left)||C.width!==(g==null?void 0:g.rect.width))&&E({offset:V,rect:C})}},[n,l,v,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);ut(function(){y()},[y]);var O=m.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),n&&a.current&&(u.current=Wr(n,a.current,y,{elementResize:"ResizeObserver"in window}))},[n,y]);ut(function(){O()},[O]);var A=m.useCallback(function(C){a.current=C,O()},[O]);if(!i&&l!=="fixed"||!g)return null;var M=w("div",F({ref:A},P(S(S({},e),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),o),r);return w(In.Provider,{value:x},i?Qt.createPortal(M,i):M)},Co=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},yo=function(e){var i=e.children,r=e.innerProps,n=e.isDisabled,o=e.isRtl;return w("div",F({},P(e,"container",{"--is-disabled":n,"--is-rtl":o}),r),i)},wo=function(e,i){var r=e.theme.spacing,n=e.isMulti,o=e.hasValue,s=e.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:n&&o&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},So=function(e){var i=e.children,r=e.innerProps,n=e.isMulti,o=e.hasValue;return w("div",F({},P(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":o}),r),i)},Fo=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Oo=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"indicatorsContainer",{indicators:!0}),r),i)},Bt,Mo=["size"],Io=["innerProps","isRtl","size"],Ao={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Dn=function(e){var i=e.size,r=ae(e,Mo);return w("svg",F({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ao},r))},xt=function(e){return w(Dn,F({size:20},e),w("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},kn=function(e){return w(Dn,F({size:20},e),w("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Vn=function(e,i){var r=e.isFocused,n=e.theme,o=n.spacing.baseUnit,s=n.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?s.neutral60:s.neutral20,padding:o*2,":hover":{color:r?s.neutral80:s.neutral40}})},Do=Vn,ko=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||w(kn,null))},Vo=Vn,Po=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||w(xt,null))},Lo=function(e,i){var r=e.isDisabled,n=e.theme,o=n.spacing.baseUnit,s=n.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:o*2,marginTop:o*2})},Ro=function(e){var i=e.innerProps;return w("span",F({},i,P(e,"indicatorSeparator",{"indicator-separator":!0})))},To=kr(Bt||(Bt=Vr([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Bo=function(e,i){var r=e.isFocused,n=e.size,o=e.theme,s=o.colors,l=o.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?s.neutral60:s.neutral20,padding:l*2})},Ze=function(e){var i=e.delay,r=e.offset;return w("span",{css:mt({animation:"".concat(To," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},No=function(e){var i=e.innerProps,r=e.isRtl,n=e.size,o=n===void 0?4:n,s=ae(e,Io);return w("div",F({},P(S(S({},s),{},{innerProps:i,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),w(Ze,{delay:0,offset:r}),w(Ze,{delay:160,offset:!0}),w(Ze,{delay:320,offset:!r}))},jo=function(e,i){var r=e.isDisabled,n=e.isFocused,o=e.theme,s=o.colors,l=o.borderRadius,a=o.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:n?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},$o=function(e){var i=e.children,r=e.isDisabled,n=e.isFocused,o=e.innerRef,s=e.innerProps,l=e.menuIsOpen;return w("div",F({ref:o},P(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":n,"control--menu-is-open":l}),s,{"aria-disabled":r||void 0}),i)},zo=$o,Ho=["data"],Uo=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Wo=function(e){var i=e.children,r=e.cx,n=e.getStyles,o=e.getClassNames,s=e.Heading,l=e.headingProps,a=e.innerProps,u=e.label,c=e.theme,d=e.selectProps;return w("div",F({},P(e,"group",{group:!0}),a),w(s,F({},l,{selectProps:d,theme:c,getStyles:n,getClassNames:o,cx:r}),u),w("div",null,i))},_o=function(e,i){var r=e.theme,n=r.colors,o=r.spacing;return S({label:"group",cursor:"default",display:"block"},i?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},Yo=function(e){var i=Sn(e);i.data;var r=ae(i,Ho);return w("div",F({},P(e,"groupHeading",{"group-heading":!0}),r))},Go=Wo,qo=["innerRef","isDisabled","isHidden","inputClassName"],Ko=function(e,i){var r=e.isDisabled,n=e.value,o=e.theme,s=o.spacing,l=o.colors;return S(S({visibility:r?"hidden":"visible",transform:n?"translateZ(0)":""},Zo),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},Pn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Zo={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Pn)},Xo=function(e){return S({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Pn)},Jo=function(e){var i=e.cx,r=e.value,n=Sn(e),o=n.innerRef,s=n.isDisabled,l=n.isHidden,a=n.inputClassName,u=ae(n,qo);return w("div",F({},P(e,"input",{"input-container":!0}),{"data-value":r||""}),w("input",F({className:i({input:!0},a),ref:o,style:Xo(l),disabled:s},u)))},Qo=Jo,ea=function(e,i){var r=e.theme,n=r.spacing,o=r.borderRadius,s=r.colors;return S({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:o/2,margin:n.baseUnit/2})},ta=function(e,i){var r=e.theme,n=r.borderRadius,o=r.colors,s=e.cropWithEllipsis;return S({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:n/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},na=function(e,i){var r=e.theme,n=r.spacing,o=r.borderRadius,s=r.colors,l=e.isFocused;return S({alignItems:"center",display:"flex"},i?{}:{borderRadius:o/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Ln=function(e){var i=e.children,r=e.innerProps;return w("div",r,i)},ia=Ln,ra=Ln;function oa(t){var e=t.children,i=t.innerProps;return w("div",F({role:"button"},i),e||w(xt,{size:14}))}var aa=function(e){var i=e.children,r=e.components,n=e.data,o=e.innerProps,s=e.isDisabled,l=e.removeProps,a=e.selectProps,u=r.Container,c=r.Label,d=r.Remove;return w(u,{data:n,innerProps:S(S({},P(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),o),selectProps:a},w(c,{data:n,innerProps:S({},P(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},i),w(d,{data:n,innerProps:S(S({},P(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:a}))},sa=aa,ua=function(e,i){var r=e.isDisabled,n=e.isFocused,o=e.isSelected,s=e.theme,l=s.spacing,a=s.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:o?a.primary:n?a.primary25:"transparent",color:r?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?a.primary:a.primary50}})},la=function(e){var i=e.children,r=e.isDisabled,n=e.isFocused,o=e.isSelected,s=e.innerRef,l=e.innerProps;return w("div",F({},P(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":n,"option--is-selected":o}),{ref:s,"aria-disabled":r},l),i)},ca=la,da=function(e,i){var r=e.theme,n=r.spacing,o=r.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:o.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},pa=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"placeholder",{placeholder:!0}),r),i)},fa=pa,ha=function(e,i){var r=e.isDisabled,n=e.theme,o=n.spacing,s=n.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?s.neutral40:s.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},ma=function(e){var i=e.children,r=e.isDisabled,n=e.innerProps;return w("div",F({},P(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),n),i)},ga=ma,va={ClearIndicator:Po,Control:zo,DropdownIndicator:ko,DownChevron:kn,CrossIcon:xt,Group:Go,GroupHeading:Yo,IndicatorsContainer:Oo,IndicatorSeparator:Ro,Input:Qo,LoadingIndicator:No,Menu:po,MenuList:ho,MenuPortal:Eo,LoadingMessage:bo,NoOptionsMessage:vo,MultiValue:sa,MultiValueContainer:ia,MultiValueLabel:ra,MultiValueRemove:oa,Option:ca,Placeholder:fa,SelectContainer:yo,SingleValue:ga,ValueContainer:So},ba=function(e){return S(S({},va),e.components)},Nt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function xa(t,e){return!!(t===e||Nt(t)&&Nt(e))}function Ea(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!xa(t[i],e[i]))return!1;return!0}function Ca(t,e){e===void 0&&(e=Ea);var i=null;function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var s=t.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return r.clear=function(){i=null},r}var ya={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},wa=function(e){return w("span",F({css:ya},e))},jt=wa,Sa={guidance:function(e){var i=e.isSearchable,r=e.isMulti,n=e.tabSelectsValue,o=e.context,s=e.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,n=r===void 0?"":r,o=e.labels,s=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,n=e.options,o=e.label,s=o===void 0?"":o,l=e.selectValue,a=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,d=function(p,h){return p&&p.length?"".concat(p.indexOf(h)+1," of ").concat(p.length):""};if(i==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,r),".");if(i==="menu"&&c){var v=a?" disabled":"",b="".concat(u?" selected":"").concat(v);return"".concat(s).concat(b,", ").concat(d(n,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},Fa=function(e){var i=e.ariaSelection,r=e.focusedOption,n=e.focusedValue,o=e.focusableOptions,s=e.isFocused,l=e.selectValue,a=e.selectProps,u=e.id,c=e.isAppleDevice,d=a.ariaLiveMessages,v=a.getOptionLabel,b=a.inputValue,x=a.isMulti,p=a.isOptionDisabled,h=a.isSearchable,g=a.menuIsOpen,E=a.options,y=a.screenReaderStatus,O=a.tabSelectsValue,A=a.isLoading,M=a["aria-label"],C=a["aria-live"],I=m.useMemo(function(){return S(S({},Sa),d||{})},[d]),V=m.useMemo(function(){var N="";if(i&&I.onChange){var T=i.option,Z=i.options,G=i.removedValue,se=i.removedValues,ue=i.value,we=function(ie){return Array.isArray(ie)?null:ie},B=G||T||we(ue),_=B?v(B):"",ne=Z||se||void 0,le=ne?ne.map(v):[],q=S({isDisabled:B&&p(B,l),label:_,labels:le},i);N=I.onChange(q)}return N},[i,I,p,l,v]),$=m.useMemo(function(){var N="",T=r||n,Z=!!(r&&l&&l.includes(r));if(T&&I.onFocus){var G={focused:T,label:v(T),isDisabled:p(T,l),isSelected:Z,options:o,context:T===r?"menu":"value",selectValue:l,isAppleDevice:c};N=I.onFocus(G)}return N},[r,n,v,p,I,o,l,c]),U=m.useMemo(function(){var N="";if(g&&E.length&&!A&&I.onFilter){var T=y({count:o.length});N=I.onFilter({inputValue:b,resultsMessage:T})}return N},[o,b,g,I,E,y,A]),z=(i==null?void 0:i.action)==="initial-input-focus",ee=m.useMemo(function(){var N="";if(I.guidance){var T=n?"value":g?"menu":"input";N=I.guidance({"aria-label":M,context:T,isDisabled:r&&p(r,l),isMulti:x,isSearchable:h,tabSelectsValue:O,isInitialFocus:z})}return N},[M,r,n,x,p,h,g,I,l,O,z]),te=w(m.Fragment,null,w("span",{id:"aria-selection"},V),w("span",{id:"aria-focused"},$),w("span",{id:"aria-results"},U),w("span",{id:"aria-guidance"},ee));return w(m.Fragment,null,w(jt,{id:u},z&&te),w(jt,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!z&&te))},Oa=Fa,lt=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Ma=new RegExp("["+lt.map(function(t){return t.letters}).join("")+"]","g"),Rn={};for(var Xe=0;Xe<lt.length;Xe++)for(var Je=lt[Xe],Qe=0;Qe<Je.letters.length;Qe++)Rn[Je.letters[Qe]]=Je.base;var Tn=function(e){return e.replace(Ma,function(i){return Rn[i]})},Ia=Ca(Tn),$t=function(e){return e.replace(/^\s+|\s+$/g,"")},Aa=function(e){return"".concat(e.label," ").concat(e.value)},Da=function(e){return function(i,r){if(i.data.__isNew__)return!0;var n=S({ignoreCase:!0,ignoreAccents:!0,stringify:Aa,trim:!0,matchFrom:"any"},e),o=n.ignoreCase,s=n.ignoreAccents,l=n.stringify,a=n.trim,u=n.matchFrom,c=a?$t(r):r,d=a?$t(l(i)):l(i);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Ia(c),d=Tn(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},ka=["innerRef"];function Va(t){var e=t.innerRef,i=ae(t,ka),r=io(i,"onExited","in","enter","exit","appear");return w("input",F({ref:e},r,{css:mt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Pa=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function La(t){var e=t.isEnabled,i=t.onBottomArrive,r=t.onBottomLeave,n=t.onTopArrive,o=t.onTopLeave,s=m.useRef(!1),l=m.useRef(!1),a=m.useRef(0),u=m.useRef(null),c=m.useCallback(function(h,g){if(u.current!==null){var E=u.current,y=E.scrollTop,O=E.scrollHeight,A=E.clientHeight,M=u.current,C=g>0,I=O-A-y,V=!1;I>g&&s.current&&(r&&r(h),s.current=!1),C&&l.current&&(o&&o(h),l.current=!1),C&&g>I?(i&&!s.current&&i(h),M.scrollTop=O,V=!0,s.current=!0):!C&&-g>y&&(n&&!l.current&&n(h),M.scrollTop=0,V=!0,l.current=!0),V&&Pa(h)}},[i,r,n,o]),d=m.useCallback(function(h){c(h,h.deltaY)},[c]),v=m.useCallback(function(h){a.current=h.changedTouches[0].clientY},[]),b=m.useCallback(function(h){var g=a.current-h.changedTouches[0].clientY;c(h,g)},[c]),x=m.useCallback(function(h){if(h){var g=eo?{passive:!1}:!1;h.addEventListener("wheel",d,g),h.addEventListener("touchstart",v,g),h.addEventListener("touchmove",b,g)}},[b,v,d]),p=m.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",v,!1),h.removeEventListener("touchmove",b,!1))},[b,v,d]);return m.useEffect(function(){if(e){var h=u.current;return x(h),function(){p(h)}}},[e,x,p]),function(h){u.current=h}}var zt=["boxSizing","height","overflow","paddingRight","position"],Ht={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ut(t){t.preventDefault()}function Wt(t){t.stopPropagation()}function _t(){var t=this.scrollTop,e=this.scrollHeight,i=t+this.offsetHeight;t===0?this.scrollTop=1:i===e&&(this.scrollTop=t-1)}function Yt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Gt=!!(typeof window<"u"&&window.document&&window.document.createElement),be=0,fe={capture:!1,passive:!1};function Ra(t){var e=t.isEnabled,i=t.accountForScrollbars,r=i===void 0?!0:i,n=m.useRef({}),o=m.useRef(null),s=m.useCallback(function(a){if(Gt){var u=document.body,c=u&&u.style;if(r&&zt.forEach(function(x){var p=c&&c[x];n.current[x]=p}),r&&be<1){var d=parseInt(n.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,b=window.innerWidth-v+d||0;Object.keys(Ht).forEach(function(x){var p=Ht[x];c&&(c[x]=p)}),c&&(c.paddingRight="".concat(b,"px"))}u&&Yt()&&(u.addEventListener("touchmove",Ut,fe),a&&(a.addEventListener("touchstart",_t,fe),a.addEventListener("touchmove",Wt,fe))),be+=1}},[r]),l=m.useCallback(function(a){if(Gt){var u=document.body,c=u&&u.style;be=Math.max(be-1,0),r&&be<1&&zt.forEach(function(d){var v=n.current[d];c&&(c[d]=v)}),u&&Yt()&&(u.removeEventListener("touchmove",Ut,fe),a&&(a.removeEventListener("touchstart",_t,fe),a.removeEventListener("touchmove",Wt,fe)))}},[r]);return m.useEffect(function(){if(e){var a=o.current;return s(a),function(){l(a)}}},[e,s,l]),function(a){o.current=a}}var Ta=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Ba={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Na(t){var e=t.children,i=t.lockEnabled,r=t.captureEnabled,n=r===void 0?!0:r,o=t.onBottomArrive,s=t.onBottomLeave,l=t.onTopArrive,a=t.onTopLeave,u=La({isEnabled:n,onBottomArrive:o,onBottomLeave:s,onTopArrive:l,onTopLeave:a}),c=Ra({isEnabled:i}),d=function(b){u(b),c(b)};return w(m.Fragment,null,i&&w("div",{onClick:Ta,css:Ba}),e(d))}var ja={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},$a=function(e){var i=e.name,r=e.onFocus;return w("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:ja,value:"",onChange:function(){}})},za=$a;function Et(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ha(){return Et(/^iPhone/i)}function Bn(){return Et(/^Mac/i)}function Ua(){return Et(/^iPad/i)||Bn()&&navigator.maxTouchPoints>1}function Wa(){return Ha()||Ua()}function _a(){return Bn()||Wa()}var Ya=function(e){return e.label},Ga=function(e){return e.label},qa=function(e){return e.value},Ka=function(e){return!!e.isDisabled},Za={clearIndicator:Vo,container:Co,control:jo,dropdownIndicator:Do,group:Uo,groupHeading:_o,indicatorsContainer:Fo,indicatorSeparator:Lo,input:Ko,loadingIndicator:Bo,loadingMessage:go,menu:uo,menuList:fo,menuPortal:xo,multiValue:ea,multiValueLabel:ta,multiValueRemove:na,noOptionsMessage:mo,option:ua,placeholder:da,singleValue:ha,valueContainer:wo},Xa={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Ja=4,Nn=4,Qa=38,es=Nn*2,ts={baseUnit:Nn,controlHeight:Qa,menuGutter:es},et={borderRadius:Ja,colors:Xa,spacing:ts},ns={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Tt(),captureMenuScroll:!Tt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Da(),formatGroupLabel:Ya,getOptionLabel:Ga,getOptionValue:qa,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Ka,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Jr(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function qt(t,e,i,r){var n=zn(t,e,i),o=Hn(t,e,i),s=$n(t,e),l=He(t,e);return{type:"option",data:e,isDisabled:n,isSelected:o,label:s,value:l,index:r}}function Le(t,e){return t.options.map(function(i,r){if("options"in i){var n=i.options.map(function(s,l){return qt(t,s,e,l)}).filter(function(s){return Zt(t,s)});return n.length>0?{type:"group",data:i,options:n,index:r}:void 0}var o=qt(t,i,e,r);return Zt(t,o)?o:void 0}).filter(to)}function jn(t){return t.reduce(function(e,i){return i.type==="group"?e.push.apply(e,ct(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function Kt(t,e){return t.reduce(function(i,r){return r.type==="group"?i.push.apply(i,ct(r.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(r.index,"-").concat(n.index)}}))):i.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),i},[])}function is(t,e){return jn(Le(t,e))}function Zt(t,e){var i=t.inputValue,r=i===void 0?"":i,n=e.data,o=e.isSelected,s=e.label,l=e.value;return(!Wn(t)||!o)&&Un(t,{label:s,value:l,data:n},r)}function rs(t,e){var i=t.focusedValue,r=t.selectValue,n=r.indexOf(i);if(n>-1){var o=e.indexOf(i);if(o>-1)return i;if(n<e.length)return e[n]}return null}function os(t,e){var i=t.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var tt=function(e,i){var r,n=(r=e.find(function(o){return o.data===i}))===null||r===void 0?void 0:r.id;return n||null},$n=function(e,i){return e.getOptionLabel(i)},He=function(e,i){return e.getOptionValue(i)};function zn(t,e,i){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,i):!1}function Hn(t,e,i){if(i.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,i);var r=He(t,e);return i.some(function(n){return He(t,n)===r})}function Un(t,e,i){return t.filterOption?t.filterOption(e,i):!0}var Wn=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},as=1,_n=function(t){Vi(i,t);var e=Ti(i);function i(r){var n;if(Di(this,i),n=e.call(this,r),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.isAppleDevice=_a(),n.controlRef=null,n.getControlRef=function(a){n.controlRef=a},n.focusedOptionRef=null,n.getFocusedOptionRef=function(a){n.focusedOptionRef=a},n.menuListRef=null,n.getMenuListRef=function(a){n.menuListRef=a},n.inputRef=null,n.getInputRef=function(a){n.inputRef=a},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(a,u){var c=n.props,d=c.onChange,v=c.name;u.name=v,n.ariaOnChange(a,u),d(a,u)},n.setValue=function(a,u,c){var d=n.props,v=d.closeMenuOnSelect,b=d.isMulti,x=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:x}),v&&(n.setState({inputIsHiddenAfterUpdate:!b}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(a,{action:u,option:c})},n.selectOption=function(a){var u=n.props,c=u.blurInputOnSelect,d=u.isMulti,v=u.name,b=n.state.selectValue,x=d&&n.isOptionSelected(a,b),p=n.isOptionDisabled(a,b);if(x){var h=n.getOptionValue(a);n.setValue(b.filter(function(g){return n.getOptionValue(g)!==h}),"deselect-option",a)}else if(!p)d?n.setValue([].concat(ct(b),[a]),"select-option",a):n.setValue(a,"select-option");else{n.ariaOnChange(a,{action:"select-option",option:a,name:v});return}c&&n.blurInput()},n.removeValue=function(a){var u=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(a),v=c.filter(function(x){return n.getOptionValue(x)!==d}),b=De(u,v,v[0]||null);n.onChange(b,{action:"remove-value",removedValue:a}),n.focusInput()},n.clearValue=function(){var a=n.state.selectValue;n.onChange(De(n.props.isMulti,[],null),{action:"clear",removedValues:a})},n.popValue=function(){var a=n.props.isMulti,u=n.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),v=De(a,d,d[0]||null);n.onChange(v,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(a){return tt(n.state.focusableOptionsWithIds,a)},n.getFocusableOptionsWithIds=function(){return Kt(Le(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return Gr.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(a){return $n(n.props,a)},n.getOptionValue=function(a){return He(n.props,a)},n.getStyles=function(a,u){var c=n.props.unstyled,d=Za[a](u,c);d.boxSizing="border-box";var v=n.props.styles[a];return v?v(d,u):d},n.getClassNames=function(a,u){var c,d;return(c=(d=n.props.classNames)[a])===null||c===void 0?void 0:c.call(d,u)},n.getElementId=function(a){return"".concat(n.state.instancePrefix,"-").concat(a)},n.getComponents=function(){return ba(n.props)},n.buildCategorizedOptions=function(){return Le(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return jn(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(a,u){n.setState({ariaSelection:S({value:a},u)})},n.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(a){n.blockOptionHover=!1},n.onControlMouseDown=function(a){if(!a.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},n.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!n.props.isDisabled){var u=n.props,c=u.isMulti,d=u.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),a.preventDefault()}},n.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(n.clearValue(),a.preventDefault(),n.openAfterFocus=!1,a.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(a){typeof n.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&Ge(a.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(a)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(a){var u=a.touches,c=u&&u.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(a){var u=a.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),v=Math.abs(c.clientY-n.initialTouchY),b=5;n.userIsDragging=d>b||v>b}},n.onTouchEnd=function(a){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(a.target)&&n.menuListRef&&!n.menuListRef.contains(a.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(a){n.userIsDragging||n.onControlMouseDown(a)},n.onClearIndicatorTouchEnd=function(a){n.userIsDragging||n.onClearIndicatorMouseDown(a)},n.onDropdownIndicatorTouchEnd=function(a){n.userIsDragging||n.onDropdownIndicatorMouseDown(a)},n.handleInputChange=function(a){var u=n.props.inputValue,c=a.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(a){n.props.onFocus&&n.props.onFocus(a),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(a){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(a),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(a){if(!(n.blockOptionHover||n.state.focusedOption===a)){var u=n.getFocusableOptions(),c=u.indexOf(a);n.setState({focusedOption:a,focusedOptionId:c>-1?n.getFocusedOptionId(a):null})}},n.shouldHideSelectedOptions=function(){return Wn(n.props)},n.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),n.focus()},n.onKeyDown=function(a){var u=n.props,c=u.isMulti,d=u.backspaceRemovesValue,v=u.escapeClearsValue,b=u.inputValue,x=u.isClearable,p=u.isDisabled,h=u.menuIsOpen,g=u.onKeyDown,E=u.tabSelectsValue,y=u.openMenuOnFocus,O=n.state,A=O.focusedOption,M=O.focusedValue,C=O.selectValue;if(!p&&!(typeof g=="function"&&(g(a),a.defaultPrevented))){switch(n.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||b)return;n.focusValue("previous");break;case"ArrowRight":if(!c||b)return;n.focusValue("next");break;case"Delete":case"Backspace":if(b)return;if(M)n.removeValue(M);else{if(!d)return;c?n.popValue():x&&n.clearValue()}break;case"Tab":if(n.isComposing||a.shiftKey||!h||!E||!A||y&&n.isOptionSelected(A,C))return;n.selectOption(A);break;case"Enter":if(a.keyCode===229)break;if(h){if(!A||n.isComposing)return;n.selectOption(A);break}return;case"Escape":h?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:b}),n.onMenuClose()):x&&v&&n.clearValue();break;case" ":if(b)return;if(!h){n.openMenu("first");break}if(!A)return;n.selectOption(A);break;case"ArrowUp":h?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":h?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!h)return;n.focusOption("pageup");break;case"PageDown":if(!h)return;n.focusOption("pagedown");break;case"Home":if(!h)return;n.focusOption("first");break;case"End":if(!h)return;n.focusOption("last");break;default:return}a.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++as),n.state.selectValue=Lt(r.value),r.menuIsOpen&&n.state.selectValue.length){var o=n.getFocusableOptionsWithIds(),s=n.buildFocusableOptions(),l=s.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=o,n.state.focusedOption=s[l],n.state.focusedOptionId=tt(o,s[l])}return n}return ki(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Rt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var o=this.props,s=o.isDisabled,l=o.menuIsOpen,a=this.state.isFocused;(a&&!s&&n.isDisabled||a&&l&&!n.menuIsOpen)&&this.focusInput(),a&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Rt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,o){this.props.onInputChange(n,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var o=this,s=this.state,l=s.selectValue,a=s.isFocused,u=this.buildFocusableOptions(),c=n==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(n){var o=this.state,s=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=s.indexOf(l);l||(a=-1);var u=s.length-1,c=-1;if(s.length){switch(n){case"previous":a===0?c=0:a===-1?c=u:c=a-1;break;case"next":a>-1&&a<u&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,u=l.indexOf(s);s||(u=-1),n==="up"?a=u>0?u-1:l.length-1:n==="down"?a=(u+1)%l.length:n==="pageup"?(a=u-o,a<0&&(a=0)):n==="pagedown"?(a=u+o,a>l.length-1&&(a=l.length-1)):n==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(et):S(S({},et),this.props.theme):et}},{key:"getCommonProps",value:function(){var n=this.clearValue,o=this.cx,s=this.getStyles,l=this.getClassNames,a=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,b=d.isRtl,x=d.options,p=this.hasValue();return{clearValue:n,cx:o,getStyles:s,getClassNames:l,getValue:a,hasValue:p,isMulti:v,isRtl:b,options:x,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,o=n.isClearable,s=n.isMulti;return o===void 0?s:o}},{key:"isOptionDisabled",value:function(n,o){return zn(this.props,n,o)}},{key:"isOptionSelected",value:function(n,o){return Hn(this.props,n,o)}},{key:"filterOption",value:function(n,o){return Un(this.props,n,o)}},{key:"formatOptionLabel",value:function(n,o){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(n,{context:o,inputValue:s,selectValue:l})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,o=n.isDisabled,s=n.isSearchable,l=n.inputId,a=n.inputValue,u=n.tabIndex,c=n.form,d=n.menuIsOpen,v=n.required,b=this.getComponents(),x=b.Input,p=this.state,h=p.inputIsHidden,g=p.ariaSelection,E=this.commonProps,y=l||this.getElementId("input"),O=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?m.createElement(x,F({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:o,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:a},O)):m.createElement(Va,F({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:$e,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,o=this.getComponents(),s=o.MultiValue,l=o.MultiValueContainer,a=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,v=this.commonProps,b=this.props,x=b.controlShouldRenderValue,p=b.isDisabled,h=b.isMulti,g=b.inputValue,E=b.placeholder,y=this.state,O=y.selectValue,A=y.focusedValue,M=y.isFocused;if(!this.hasValue()||!x)return g?null:m.createElement(d,F({},v,{key:"placeholder",isDisabled:p,isFocused:M,innerProps:{id:this.getElementId("placeholder")}}),E);if(h)return O.map(function(I,V){var $=I===A,U="".concat(n.getOptionLabel(I),"-").concat(n.getOptionValue(I));return m.createElement(s,F({},v,{components:{Container:l,Label:a,Remove:u},isFocused:$,isDisabled:p,key:U,index:V,removeProps:{onClick:function(){return n.removeValue(I)},onTouchEnd:function(){return n.removeValue(I)},onMouseDown:function(ee){ee.preventDefault()}},data:I}),n.formatOptionLabel(I,"value"))});if(g)return null;var C=O[0];return m.createElement(c,F({},v,{data:C,isDisabled:p}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),o=n.ClearIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(o,F({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),o=n.LoadingIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return m.createElement(o,F({},s,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),o=n.DropdownIndicator,s=n.IndicatorSeparator;if(!o||!s)return null;var l=this.commonProps,a=this.props.isDisabled,u=this.state.isFocused;return m.createElement(s,F({},l,{isDisabled:a,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),o=n.DropdownIndicator;if(!o)return null;var s=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(o,F({},s,{innerProps:u,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var n=this,o=this.getComponents(),s=o.Group,l=o.GroupHeading,a=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,v=o.NoOptionsMessage,b=o.Option,x=this.commonProps,p=this.state.focusedOption,h=this.props,g=h.captureMenuScroll,E=h.inputValue,y=h.isLoading,O=h.loadingMessage,A=h.minMenuHeight,M=h.maxMenuHeight,C=h.menuIsOpen,I=h.menuPlacement,V=h.menuPosition,$=h.menuPortalTarget,U=h.menuShouldBlockScroll,z=h.menuShouldScrollIntoView,ee=h.noOptionsMessage,te=h.onMenuScrollToTop,N=h.onMenuScrollToBottom;if(!C)return null;var T=function(_,ne){var le=_.type,q=_.data,ce=_.isDisabled,ie=_.isSelected,Se=_.label,Yn=_.value,Ct=p===q,yt=ce?void 0:function(){return n.onOptionHover(q)},Gn=ce?void 0:function(){return n.selectOption(q)},wt="".concat(n.getElementId("option"),"-").concat(ne),qn={id:wt,onClick:Gn,onMouseMove:yt,onMouseOver:yt,tabIndex:-1,role:"option","aria-selected":n.isAppleDevice?void 0:ie};return m.createElement(b,F({},x,{innerProps:qn,data:q,isDisabled:ce,isSelected:ie,key:wt,label:Se,type:le,value:Yn,isFocused:Ct,innerRef:Ct?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(_.data,"menu"))},Z;if(this.hasOptions())Z=this.getCategorizedOptions().map(function(B){if(B.type==="group"){var _=B.data,ne=B.options,le=B.index,q="".concat(n.getElementId("group"),"-").concat(le),ce="".concat(q,"-heading");return m.createElement(s,F({},x,{key:q,data:_,options:ne,Heading:l,headingProps:{id:ce,data:B.data},label:n.formatGroupLabel(B.data)}),B.options.map(function(ie){return T(ie,"".concat(le,"-").concat(ie.index))}))}else if(B.type==="option")return T(B,"".concat(B.index))});else if(y){var G=O({inputValue:E});if(G===null)return null;Z=m.createElement(d,x,G)}else{var se=ee({inputValue:E});if(se===null)return null;Z=m.createElement(v,x,se)}var ue={minMenuHeight:A,maxMenuHeight:M,menuPlacement:I,menuPosition:V,menuShouldScrollIntoView:z},we=m.createElement(lo,F({},x,ue),function(B){var _=B.ref,ne=B.placerProps,le=ne.placement,q=ne.maxHeight;return m.createElement(a,F({},x,ue,{innerRef:_,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:y,placement:le}),m.createElement(Na,{captureEnabled:g,onTopArrive:te,onBottomArrive:N,lockEnabled:U},function(ce){return m.createElement(u,F({},x,{innerRef:function(Se){n.getMenuListRef(Se),ce(Se)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:n.getElementId("listbox")},isLoading:y,maxHeight:q,focusedOption:p}),Z)}))});return $||V==="fixed"?m.createElement(c,F({},x,{appendTo:$,controlElement:this.controlRef,menuPlacement:I,menuPosition:V}),we):we}},{key:"renderFormField",value:function(){var n=this,o=this.props,s=o.delimiter,l=o.isDisabled,a=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return m.createElement(za,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(a)if(s){var v=d.map(function(p){return n.getOptionValue(p)}).join(s);return m.createElement("input",{name:u,type:"hidden",value:v})}else{var b=d.length>0?d.map(function(p,h){return m.createElement("input",{key:"i-".concat(h),name:u,type:"hidden",value:n.getOptionValue(p)})}):m.createElement("input",{name:u,type:"hidden",value:""});return m.createElement("div",null,b)}else{var x=d[0]?this.getOptionValue(d[0]):"";return m.createElement("input",{name:u,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,o=this.state,s=o.ariaSelection,l=o.focusedOption,a=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return m.createElement(Oa,F({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:a,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),o=n.Control,s=n.IndicatorsContainer,l=n.SelectContainer,a=n.ValueContainer,u=this.props,c=u.className,d=u.id,v=u.isDisabled,b=u.menuIsOpen,x=this.state.isFocused,p=this.commonProps=this.getCommonProps();return m.createElement(l,F({},p,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:x}),this.renderLiveRegion(),m.createElement(o,F({},p,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:x,menuIsOpen:b}),m.createElement(a,F({},p,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),m.createElement(s,F({},p,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,o){var s=o.prevProps,l=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,v=o.instancePrefix,b=n.options,x=n.value,p=n.menuIsOpen,h=n.inputValue,g=n.isMulti,E=Lt(x),y={};if(s&&(x!==s.value||b!==s.options||p!==s.menuIsOpen||h!==s.inputValue)){var O=p?is(n,E):[],A=p?Kt(Le(n,E),"".concat(v,"-option")):[],M=l?rs(o,E):null,C=os(o,O),I=tt(A,C);y={selectValue:E,focusedOption:C,focusedOptionId:I,focusableOptionsWithIds:A,focusedValue:M,clearFocusValueOnUpdate:!1}}var V=a!=null&&n!==s?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},$=u,U=c&&d;return c&&!U&&($={value:De(g,E,E[0]||null),options:E,action:"initial-input-focus"},U=!d),(u==null?void 0:u.action)==="initial-input-focus"&&($=null),S(S(S({},y),V),{},{prevProps:n,ariaSelection:$,prevWasFocused:U})}}]),i}(m.Component);_n.defaultProps=ns;var ss=m.forwardRef(function(t,e){var i=Ai(t);return m.createElement(_n,F({ref:e},i))}),us=ss;function ls({handleClickClose:t}){const e=pe(),i=L(p=>p.data.categories),{values:r,errors:n,touched:o,isValid:s,handleChange:l,setFieldValue:a,handleSubmit:u}=tn({initialValues:{en:"",ua:"",category:"",isIrregular:void 0},validationSchema:di,onSubmit:p=>{e(Xn(p)).then(h=>{isNaN(h.payload)&&t()})}}),c=p=>{a("category",p?p.value:"")},d=()=>{if(r.isIrregular&&r.category==="verb"&&!/^\w+-\w+-\w+$/.test(r.en))return f.jsx("p",{className:"EnInputMistake",children:"Must be example: “know-knew-known”"})},{getInputAlert:v,getInputClass:b}=nn(r,o,n),x={control:(p,h)=>({...p,borderRadius:"15px",paddingLeft:"12px",paddingRight:"16px",background:"none",borderColor:h.isFocused?"#d1d5db":p.borderColor,color:"#f8f8f8",boxShadow:h.isFocused?"none":p.boxShadow,width:"204px",height:"48px","&:hover":{borderColor:"#d1d5db"}}),menu:p=>({...p,textTransform:"capitalize",borderRadius:"15px",boxShadow:"0 4px 47px 0 rgba(18, 20, 23, 0.08)",width:"205px",overflowY:"auto",paddingLeft:"24px","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:"#f8f8f8",borderRadius:"12px",height:"101px"},"::-webkit-scrollbar-thumb:hover":{background:"#d1d5db"}}),option:p=>({...p,color:"rgba(18, 20, 23, 0.5)",backgroundColor:"transparent","&:hover":{color:"#85AA9F"}}),singleValue:p=>({...p,color:"#f8f8f8"}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:p=>({...p,color:"#f8f8f8","&:hover":{color:"#f8f8f8"}})};return f.jsxs(Mi,{children:[f.jsx(Ue,{className:"ButtonClose",onClick:t}),f.jsxs("div",{className:"TextContainer",children:[f.jsx("h2",{className:"Title",children:"Add word"}),f.jsx("p",{className:"Text",children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."})]}),f.jsxs("form",{className:"Form",onSubmit:u,children:[f.jsx(us,{id:"category",name:"category",styles:x,options:i.map(p=>({value:p,label:p})),onChange:c,placeholder:"Categories"}),f.jsxs("ul",{className:"RadioButtonList",style:{display:r.category==="verb"?"flex":"none"},children:[f.jsxs("li",{className:"RadioButtonItem",children:[f.jsx("input",{className:"RadioButton",id:"regular",name:"isIrregular",type:"radio",onChange:()=>l({target:{name:"isIrregular",value:!1}}),value:!1,checked:r.isIrregular===!1}),"Regular"]}),f.jsxs("li",{className:"RadioButtonItem",children:[f.jsx("input",{className:"RadioButton",id:"reason",name:"isIrregular",type:"radio",onChange:()=>l({target:{name:"isIrregular",value:!0}}),value:!0,checked:r.isIrregular===!0}),"Irregular"]})]}),f.jsxs("div",{className:"UkrainianContainer",id:"ukrainian",children:[f.jsxs("div",{className:"InputImagContainer",children:[f.jsx(on,{className:"IconCountry"})," Ukrainian"]}),f.jsx("input",{id:"ukrainian",className:b("Ua"),type:"text",placeholder:"Слово Українською",name:"ua",value:r.ua,onChange:l,required:!0}),v("ua")]}),f.jsxs("div",{className:"EnglishContainer",children:[f.jsxs("div",{className:"InputImagContainer",children:[f.jsx(an,{className:"IconCountry"})," English"]}),f.jsx("input",{id:"english",className:b("En"),type:"text",placeholder:"Word in English",name:"en",value:r.en,onChange:l,required:!0}),d()?d():v("en")]}),f.jsxs("ul",{className:"ButtonList",children:[f.jsx("li",{className:"ButtonAdd",type:"submit",disabled:!s,onClick:u,children:"Add"}),f.jsx("li",{className:"ButtonCancel",onClick:t,children:"Cancel"})]})]})]})}const cs=oe.ul`
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
`,ds=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:17,fill:"none",...t},m.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,d:"M11.334 2.5a1.885 1.885 0 1 1 2.667 2.667l-9 9-3.667 1 1-3.667 9-9Z"})),ps=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:17,fill:"none",...t},m.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.94,strokeWidth:1.3,d:"M2 4.5h12M12.667 4.5v9.333a1.333 1.333 0 0 1-1.333 1.334H4.667a1.333 1.333 0 0 1-1.333-1.334V4.5m2 0V3.167a1.333 1.333 0 0 1 1.333-1.334h2.667a1.333 1.333 0 0 1 1.333 1.334V4.5M6.666 7.833v4M9.334 7.833v4"}));function fs({handleClickClose:t}){const e=pe(),i=L(o=>o.modal.clickWordCoordinates),r=()=>{t(),e(Jn())},n=()=>{t(),e(Qn())};return f.jsxs(cs,{x:i.x,y:i.y,children:[f.jsxs("li",{className:"Element",onClick:n,children:[f.jsx(ds,{}),"Edit"]}),f.jsxs("li",{className:"Element",onClick:r,children:[f.jsx(ps,{}),"Delete"]})]})}const hs=oe.div`
  position: relative;
  border-radius: 15px;
  width: 100%;
  max-width: 343px;
  height: 359px;
  padding: 16px;
  background: #85aa9f;
  box-sizing: border-box;

  @media only screen and (max-width: 375px) {
  }

  @media only screen and (min-width: 768px) {
    max-width: 628px;
    height: 346px;
    padding: 30px 64px 64px 64px;
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
    width: 100%;
    max-width: 343px;
    margin-top: 34px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media only screen and (min-width: 768px) {
      gap: 32px;
      max-width: 100%;
    }
  }

  input[id='ukrainian'],
  input[id='english'] {
    border: 1px solid #d1d5db;
    border-radius: 15px;
    padding: 12px 24px 12px 24px;
    width: 100%;
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
    @media only screen and (min-width: 768px) {
      padding: 16px 18px 16px 18px;
      max-width: 354px;
      height: 56px;
    }
  }

  .UkrainianContainer,
  .EnglishContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      gap: 0;
      justify-content: space-between;
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
    display: flex;
    justify-content: space-between;
    gap: 8px;

    @media only screen and (min-width: 768px) {
      gap: 10px;
    }
  }

  .ButtonAdd {
    cursor: pointer;
    border-radius: 30px;
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
      max-width: 245px;
      height: 56px;

      font-size: 23px;
      line-height: 156%;
    }
  }

  .ButtonCancel {
    border: 1px solid rgba(252, 252, 252, 0.4);
    border-radius: 30px;
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
`;function ms({handleClickClose:t}){const e=pe(),i=L(d=>d.modal.clickWordId),{values:r,errors:n,touched:o,isValid:s,handleChange:l,handleSubmit:a}=tn({initialValues:{en:`${i.en}`,ua:`${i.ua}`,category:i.category,isIrregular:i.isIrregular},validationSchema:pi,onSubmit:d=>{e(ei({edit:d,id:i._id})).then(v=>{!v.error&&t()})}}),{getInputAlert:u,getInputClass:c}=nn(r,o,n);return f.jsxs(hs,{children:[f.jsx(Ue,{className:"ButtonClose",onClick:t}),f.jsxs("form",{className:"Form",children:[f.jsxs("div",{className:"UkrainianContainer",id:"ukrainian",children:[f.jsxs("div",{className:"InputImagContainer",children:[f.jsx(on,{className:"IconCountry"})," Ukrainian"]}),f.jsx("input",{id:"ukrainian",className:c("Ua"),type:"text",placeholder:"Слово Українською",name:"ua",value:r.ua,onChange:l,required:!0}),u("ua")]}),f.jsxs("div",{className:"EnglishContainer",children:[f.jsxs("div",{className:"InputImagContainer",children:[f.jsx(an,{className:"IconCountry"})," English"]}),f.jsx("input",{id:"english",className:c("En"),type:"text",placeholder:"Word in English",name:"en",value:r.en,onChange:l,required:!0}),u("en")]}),f.jsxs("ul",{className:"ButtonList",children:[f.jsx("li",{className:"ButtonAdd",type:"submit",disabled:!s,onClick:a,children:"Save"}),f.jsx("li",{className:"ButtonCancel",onClick:t,children:"Cancel"})]})]})]})}const gs=oe.div`
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background: #85aa9f;
  box-sizing: border-box;

  @media only screen and (max-width: 374px) {
    max-width: 343px;
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
`;function vs({handleClickClose:t}){const e=pe(),i=L(n=>n.modal.clickWordId),r=()=>{e(ti(i)).then(n=>{isNaN(n.payload)&&t()})};return f.jsxs(gs,{children:[f.jsxs("h2",{className:"Title",children:["Are you sure you want to delete ",i.en,"?"]}),f.jsxs("ul",{className:"ListButton",children:[f.jsx("li",{className:"ButtonYes",onClick:r,children:"Yes"}),f.jsx("li",{className:"ButtonNo",onClick:()=>t(),children:"No"})]})]})}const bs="/VocabBuilder/assets/open-orange-book-mobile-min-c1af7270.png",xs="/VocabBuilder/assets/open-orange-book-desctop-min-45107eed.png",Es=oe.div`
  border-radius: 15px;
  width: 100%;
  max-width: 343px;
  height: 459px;
  padding: 18px;
  background: #85aa9f;
  position: relative;
  box-sizing: border-box;

  @media only screen and (max-width: 375px) {
  }

  @media only screen and (min-width: 768px) {
    border-radius: 30px;
    max-width: 528px;
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
    display: flex;
    flex-direction: column;
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
`;function Cs({handleClickClose:t}){const e=L(i=>i.data.answers);return e&&f.jsxs(Es,{children:[f.jsx(Ue,{className:"ButtonClose",onClick:t}),f.jsx("h2",{className:"Title",children:"Well done"}),f.jsxs("div",{className:"ContentContainer",children:[f.jsxs("div",{className:"CorrectAnswerContainer",children:[f.jsx("p",{className:"TitleCorrectAnswer",children:"Сorrect answers: "}),f.jsx("ul",{className:"CorrectAnswerList",children:e.map((i,r)=>i.isDone===!0&&f.jsx("li",{className:"CorrectAnswerItem",children:i[i.task]},r))})]}),f.jsxs("div",{className:"MistakesContainer",children:[f.jsx("p",{className:"TitleMistakes",children:"Mistakes: "}),f.jsx("ul",{className:"MistakesList",children:e.map((i,r)=>i.isDone===!1&&f.jsx("li",{className:"MistakesItem",children:i.task==="en"?i.en:i.ua},r))})]}),f.jsx("div",{className:"Img"})]})]})}const ys=document.querySelector("#modal-root");function ws(){const t=pe(),e=L(u=>u.modal.isModalOpenMobile),i=L(u=>u.modal.isModalOpenAddWord),r=L(u=>u.modal.isModalOpenClickWord),n=L(u=>u.modal.isModalOpenConfirmation),o=L(u=>u.modal.isModalOpenEdit),s=L(u=>u.modal.isModalOpenWellDone),l=m.useCallback(()=>{t(ni()),t(ii()),t(ri()),t(oi()),t(ai()),t(si())},[t]),a=u=>{u.target===u.currentTarget&&l()};return m.useEffect(()=>{const u=c=>{c.code==="Escape"&&l()};return document.addEventListener("keydown",u),document.body.style.cssText="overflow: hidden; ",()=>{document.removeEventListener("keydown",u),document.body.style.cssText="overflow: auto; "}},[e,i,r,n,o,s,l,t]),Qt.createPortal(f.jsxs(f.Fragment,{children:[(e||i||o||n||s)&&f.jsxs(Fi,{onClick:a,children:[e&&f.jsx(Si,{handleClickClose:l}),i&&f.jsx(ls,{handleClickClose:l}),n&&f.jsx(vs,{handleClickClose:l}),o&&f.jsx(ms,{handleClickClose:l}),s&&f.jsx(Cs,{handleClickClose:l})]}),r&&f.jsx(Oi,{onClick:a,children:f.jsx(fs,{handleClickClose:l})})]}),ys)}function Is(){const t=pe(),e=Xt(),i=L(c=>c.modal.isModalOpenMobile),r=L(c=>c.modal.isModalOpenAddWord),n=L(c=>c.modal.isModalOpenClickWord),o=L(c=>c.modal.isModalOpenConfirmation),s=L(c=>c.modal.isModalOpenEdit),l=L(c=>c.modal.isModalOpenWellDone),a=L(c=>c.auth.name),u=()=>{t(Jt.logOut()).then(e("/"))};return f.jsxs("div",{className:"container",children:[f.jsxs(Ei,{children:[f.jsxs(de,{to:"/",className:"LogoContainer",children:[f.jsx(vi,{className:"Logo"}),f.jsx("h2",{className:"LogoTitle",children:"VocabBuilder"})]}),a&&f.jsxs("ul",{className:"NavigationContainer",children:[f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/dictionary",children:"Dictionary"})}),f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/recommend",children:"Recommend"})}),f.jsx("li",{children:f.jsx(de,{className:"NavElement",to:"/training",children:"Training"})})]}),a&&f.jsxs("div",{className:"RightSideHeader",children:[f.jsxs("div",{className:"UserContainer",children:[f.jsx("p",{className:"UserName",children:a}),f.jsx("span",{className:"UserImag",children:f.jsx(bi,{})})]}),f.jsxs("button",{className:"ButtonLogOut",onClick:u,children:["Log Out",f.jsx(sn,{className:"SwitchIcon"})]}),f.jsx(xi,{className:"ButtonBurger",onClick:()=>t(ui())})]})]}),f.jsx(m.Suspense,{fallback:f.jsx("div",{children:f.jsx(li,{})}),children:f.jsx(ci,{})}),(i||r||n||o||s||l)&&f.jsx(ws,{})]})}export{Is as default};
