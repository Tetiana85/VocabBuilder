import{r as h,p as le,u as lt,a as Yn,b as ke,j as b,N as Ye,c as Gn,m as qn,n as Kn,R as St,q as Zt,v as Xn,w as Zn}from"./index-d63682e6.js";import{e as tt,c as Jt,u as Qt,A as Jn,S as en,E as Qn}from"./error-424bde08.js";import{t as ei,_ as re,b as ie,c as S,d as ti,e as tn,f as ni,g as ii,h as ye,i as F,S as nn,a as rn}from"./extends-dfebe261.js";const ri=t=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t},h.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.333 10h13.334m0 0-3.334-3.333M16.667 10l-3.334 3.333"})),He=t=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...t},h.createElement("path",{stroke:"#FCFCFC",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M24 8 8 24M8 8l16 16"})),ai="/VocabBuilder/assets/x-modal-b22a52f5.svg",oi=le.div`
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
    background-image: url(${ai});

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
`,si=t=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t},h.createElement("path",{fill:"#85AA9F",d:"M9.999 3.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Zm0 13.334s6.666 0 6.666-1.667c0-2-3.25-4.167-6.666-4.167C6.582 10.833 3.332 13 3.332 15c0 1.667 6.667 1.667 6.667 1.667Z"}));function ui({handleClickClose:t}){const e=lt(),i=Yn(),r=ke(u=>u.auth.name),n=ke(u=>u.auth.isLoggedIn),a=()=>{e(Gn.logOut())};h.useEffect(()=>{n||(t(),i("/"))},[n,i,t]);const s=()=>{t()};return b.jsxs(oi,{children:[b.jsxs("div",{className:"HeaderOfModal",children:[b.jsxs("div",{className:"UserContainer",children:[b.jsx("p",{className:"UserName",children:r}),b.jsx("span",{className:"UserImag",children:b.jsx(si,{className:"user-icon"})})]}),b.jsx("div",{className:"UserContainer"}),b.jsx(He,{className:"ButtonClose",onClick:t})]}),b.jsxs("ul",{className:"NavList",children:[b.jsx("li",{children:b.jsx(Ye,{className:"NavElement",to:"/dictionary",onClick:s,children:"Dictionary"})}),b.jsx("li",{children:b.jsx(Ye,{className:"NavElement",to:"/recommend",onClick:s,children:"Recommend"})}),b.jsx("li",{children:b.jsx(Ye,{className:"NavElement",to:"/training",onClick:s,children:"Training"})}),b.jsxs("button",{className:"ButtonLogOut",onClick:a,children:["Log Out",b.jsx(ri,{className:"SwitchIcon"})]})]}),b.jsx("div",{className:"Img"})]})}const li=le.div`
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
`,ci=le.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
`,di=le.div`
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
      content: url(${ei});
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
      content: url(${tt});
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
      content: url(${Jt});
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
      content: url(${tt});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }
`;var fi=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function pi(t){var e=t.defaultInputValue,i=e===void 0?"":e,r=t.defaultMenuIsOpen,n=r===void 0?!1:r,a=t.defaultValue,s=a===void 0?null:a,u=t.inputValue,o=t.menuIsOpen,l=t.onChange,c=t.onInputChange,d=t.onMenuClose,m=t.onMenuOpen,v=t.value,x=re(t,fi),f=h.useState(u!==void 0?u:i),p=ie(f,2),g=p[0],E=p[1],y=h.useState(o!==void 0?o:n),O=ie(y,2),D=O[0],I=O[1],C=h.useState(v!==void 0?v:s),A=ie(C,2),k=A[0],$=A[1],z=h.useCallback(function(Y,ae){typeof l=="function"&&l(Y,ae),$(Y)},[l]),j=h.useCallback(function(Y,ae){var oe;typeof c=="function"&&(oe=c(Y,ae)),E(oe!==void 0?oe:Y)},[c]),Q=h.useCallback(function(){typeof m=="function"&&m(),I(!0)},[m]),ee=h.useCallback(function(){typeof d=="function"&&d(),I(!1)},[d]),B=u!==void 0?u:g,R=o!==void 0?o:D,K=v!==void 0?v:k;return S(S({},x),{},{inputValue:B,menuIsOpen:R,onChange:z,onInputChange:j,onMenuClose:ee,onMenuOpen:Q,value:K})}function hi(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ft(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,ti(r.key),r)}}function mi(t,e,i){return e&&Ft(t.prototype,e),i&&Ft(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e){return nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},nt(t,e)}function gi(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&nt(t,e)}function Pe(t){return Pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},Pe(t)}function vi(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function bi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xi(t,e){if(e&&(tn(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return bi(t)}function Ei(t){var e=vi();return function(){var r=Pe(t),n;if(e){var a=Pe(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return xi(this,n)}}function Ci(t){if(Array.isArray(t))return ni(t)}function yi(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ct(t){return Ci(t)||yi(t)||ii(t)||wi()}function Si(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Fi(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Oi=function(){function t(i){var r=this;this._insertTag=function(n){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(n,a),r.tags.push(n)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Fi(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Si(n);try{a.insertRule(r,a.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),H="-ms-",Le="-moz-",M="-webkit-",an="comm",dt="rule",ft="decl",Ii="@import",on="@keyframes",Ai="@layer",Di=Math.abs,ze=String.fromCharCode,Mi=Object.assign;function Vi(t,e){return N(t,0)^45?(((e<<2^N(t,0))<<2^N(t,1))<<2^N(t,2))<<2^N(t,3):0}function sn(t){return t.trim()}function ki(t,e){return(t=e.exec(t))?t[0]:t}function V(t,e,i){return t.replace(e,i)}function it(t,e){return t.indexOf(e)}function N(t,e){return t.charCodeAt(e)|0}function ge(t,e,i){return t.slice(e,i)}function X(t){return t.length}function pt(t){return t.length}function we(t,e){return e.push(t),t}function Pi(t,e){return t.map(e).join("")}var Ue=1,fe=1,un=0,U=0,L=0,pe="";function _e(t,e,i,r,n,a,s){return{value:t,root:e,parent:i,type:r,props:n,children:a,line:Ue,column:fe,length:s,return:""}}function he(t,e){return Mi(_e("",null,null,"",null,null,0),t,{length:-t.length},e)}function Li(){return L}function Ri(){return L=U>0?N(pe,--U):0,fe--,L===10&&(fe=1,Ue--),L}function W(){return L=U<un?N(pe,U++):0,fe++,L===10&&(fe=1,Ue++),L}function J(){return N(pe,U)}function Ae(){return U}function xe(t,e){return ge(pe,t,e)}function ve(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ln(t){return Ue=fe=1,un=X(pe=t),U=0,[]}function cn(t){return pe="",t}function De(t){return sn(xe(U-1,rt(t===91?t+2:t===40?t+1:t)))}function Ti(t){for(;(L=J())&&L<33;)W();return ve(t)>2||ve(L)>3?"":" "}function Bi(t,e){for(;--e&&W()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return xe(t,Ae()+(e<6&&J()==32&&W()==32))}function rt(t){for(;W();)switch(L){case t:return U;case 34:case 39:t!==34&&t!==39&&rt(L);break;case 40:t===41&&rt(t);break;case 92:W();break}return U}function Ni(t,e){for(;W()&&t+L!==47+10;)if(t+L===42+42&&J()===47)break;return"/*"+xe(e,U-1)+"*"+ze(t===47?t:W())}function $i(t){for(;!ve(J());)W();return xe(t,U)}function ji(t){return cn(Me("",null,null,null,[""],t=ln(t),0,[0],t))}function Me(t,e,i,r,n,a,s,u,o){for(var l=0,c=0,d=s,m=0,v=0,x=0,f=1,p=1,g=1,E=0,y="",O=n,D=a,I=r,C=y;p;)switch(x=E,E=W()){case 40:if(x!=108&&N(C,d-1)==58){it(C+=V(De(E),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:C+=De(E);break;case 9:case 10:case 13:case 32:C+=Ti(x);break;case 92:C+=Bi(Ae()-1,7);continue;case 47:switch(J()){case 42:case 47:we(Hi(Ni(W(),Ae()),e,i),o);break;default:C+="/"}break;case 123*f:u[l++]=X(C)*g;case 125*f:case 59:case 0:switch(E){case 0:case 125:p=0;case 59+c:g==-1&&(C=V(C,/\f/g,"")),v>0&&X(C)-d&&we(v>32?It(C+";",r,i,d-1):It(V(C," ","")+";",r,i,d-2),o);break;case 59:C+=";";default:if(we(I=Ot(C,e,i,l,c,n,u,y,O=[],D=[],d),a),E===123)if(c===0)Me(C,e,I,I,O,a,d,u,D);else switch(m===99&&N(C,3)===110?100:m){case 100:case 108:case 109:case 115:Me(t,I,I,r&&we(Ot(t,I,I,0,0,n,u,y,n,O=[],d),D),n,D,d,u,r?O:D);break;default:Me(C,I,I,I,[""],D,0,u,D)}}l=c=v=0,f=g=1,y=C="",d=s;break;case 58:d=1+X(C),v=x;default:if(f<1){if(E==123)--f;else if(E==125&&f++==0&&Ri()==125)continue}switch(C+=ze(E),E*f){case 38:g=c>0?1:(C+="\f",-1);break;case 44:u[l++]=(X(C)-1)*g,g=1;break;case 64:J()===45&&(C+=De(W())),m=J(),c=d=X(y=C+=$i(Ae())),E++;break;case 45:x===45&&X(C)==2&&(f=0)}}return a}function Ot(t,e,i,r,n,a,s,u,o,l,c){for(var d=n-1,m=n===0?a:[""],v=pt(m),x=0,f=0,p=0;x<r;++x)for(var g=0,E=ge(t,d+1,d=Di(f=s[x])),y=t;g<v;++g)(y=sn(f>0?m[g]+" "+E:V(E,/&\f/g,m[g])))&&(o[p++]=y);return _e(t,e,i,n===0?dt:u,o,l,c)}function Hi(t,e,i){return _e(t,e,i,an,ze(Li()),ge(t,2,-2),0)}function It(t,e,i,r){return _e(t,e,i,ft,ge(t,0,r),ge(t,r+1,-1),r)}function de(t,e){for(var i="",r=pt(t),n=0;n<r;n++)i+=e(t[n],n,t,e)||"";return i}function zi(t,e,i,r){switch(t.type){case Ai:if(t.children.length)break;case Ii:case ft:return t.return=t.return||t.value;case an:return"";case on:return t.return=t.value+"{"+de(t.children,r)+"}";case dt:t.value=t.props.join(",")}return X(i=de(t.children,r))?t.return=t.value+"{"+i+"}":""}function Ui(t){var e=pt(t);return function(i,r,n,a){for(var s="",u=0;u<e;u++)s+=t[u](i,r,n,a)||"";return s}}function _i(t){return function(e){e.root||(e=e.return)&&t(e)}}var Wi=function(e,i,r){for(var n=0,a=0;n=a,a=J(),n===38&&a===12&&(i[r]=1),!ve(a);)W();return xe(e,U)},Yi=function(e,i){var r=-1,n=44;do switch(ve(n)){case 0:n===38&&J()===12&&(i[r]=1),e[r]+=Wi(U-1,i,r);break;case 2:e[r]+=De(n);break;case 4:if(n===44){e[++r]=J()===58?"&\f":"",i[r]=e[r].length;break}default:e[r]+=ze(n)}while(n=W());return e},Gi=function(e,i){return cn(Yi(ln(e),i))},At=new WeakMap,qi=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var i=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&i.charCodeAt(0)!==58&&!At.get(r))&&!n){At.set(e,!0);for(var a=[],s=Gi(i,a),u=r.props,o=0,l=0;o<s.length;o++)for(var c=0;c<u.length;c++,l++)e.props[l]=a[o]?s[o].replace(/&\f/g,u[c]):u[c]+" "+s[o]}}},Ki=function(e){if(e.type==="decl"){var i=e.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(e.return="",e.value="")}};function dn(t,e){switch(Vi(t,e)){case 5103:return M+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return M+t+Le+t+H+t+t;case 6828:case 4268:return M+t+H+t+t;case 6165:return M+t+H+"flex-"+t+t;case 5187:return M+t+V(t,/(\w+).+(:[^]+)/,M+"box-$1$2"+H+"flex-$1$2")+t;case 5443:return M+t+H+"flex-item-"+V(t,/flex-|-self/,"")+t;case 4675:return M+t+H+"flex-line-pack"+V(t,/align-content|flex-|-self/,"")+t;case 5548:return M+t+H+V(t,"shrink","negative")+t;case 5292:return M+t+H+V(t,"basis","preferred-size")+t;case 6060:return M+"box-"+V(t,"-grow","")+M+t+H+V(t,"grow","positive")+t;case 4554:return M+V(t,/([^-])(transform)/g,"$1"+M+"$2")+t;case 6187:return V(V(V(t,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),t,"")+t;case 5495:case 3959:return V(t,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return V(V(t,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+t+t;case 4095:case 3583:case 4068:case 2532:return V(t,/(.+)-inline(.+)/,M+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(X(t)-1-e>6)switch(N(t,e+1)){case 109:if(N(t,e+4)!==45)break;case 102:return V(t,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Le+(N(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~it(t,"stretch")?dn(V(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(N(t,e+1)!==115)break;case 6444:switch(N(t,X(t)-3-(~it(t,"!important")&&10))){case 107:return V(t,":",":"+M)+t;case 101:return V(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(N(t,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+H+"$2box$3")+t}break;case 5936:switch(N(t,e+11)){case 114:return M+t+H+V(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return M+t+H+V(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return M+t+H+V(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return M+t+H+t+t}return t}var Xi=function(e,i,r,n){if(e.length>-1&&!e.return)switch(e.type){case ft:e.return=dn(e.value,e.length);break;case on:return de([he(e,{value:V(e.value,"@","@"+M)})],n);case dt:if(e.length)return Pi(e.props,function(a){switch(ki(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return de([he(e,{props:[V(a,/:(read-\w+)/,":"+Le+"$1")]})],n);case"::placeholder":return de([he(e,{props:[V(a,/:(plac\w+)/,":"+M+"input-$1")]}),he(e,{props:[V(a,/:(plac\w+)/,":"+Le+"$1")]}),he(e,{props:[V(a,/:(plac\w+)/,H+"input-$1")]})],n)}return""})}},Zi=[Xi],Ji=function(e){var i=e.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(f){var p=f.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var n=e.stylisPlugins||Zi,a={},s,u=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(f){for(var p=f.getAttribute("data-emotion").split(" "),g=1;g<p.length;g++)a[p[g]]=!0;u.push(f)});var o,l=[qi,Ki];{var c,d=[zi,_i(function(f){c.insert(f)})],m=Ui(l.concat(n,d)),v=function(p){return de(ji(p),m)};o=function(p,g,E,y){c=E,v(p?p+"{"+g.styles+"}":g.styles),y&&(x.inserted[g.name]=!0)}}var x={key:i,sheet:new Oi({key:i,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:o};return x.sheet.hydrate(u),x},Qi=!0;function er(t,e,i){var r="";return i.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):r+=n+" "}),r}var fn=function(e,i,r){var n=e.key+"-"+i.name;(r===!1||Qi===!1)&&e.registered[n]===void 0&&(e.registered[n]=i.styles)},tr=function(e,i,r){fn(e,i,r);var n=e.key+"-"+i.name;if(e.inserted[i.name]===void 0){var a=i;do e.insert(i===a?"."+n:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function nr(t){for(var e=0,i,r=0,n=t.length;n>=4;++r,n-=4)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,e=(i&65535)*1540483477+((i>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var ir=/[A-Z]|^ms/g,rr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pn=function(e){return e.charCodeAt(1)===45},Dt=function(e){return e!=null&&typeof e!="boolean"},Ge=qn(function(t){return pn(t)?t:t.replace(ir,"-$&").toLowerCase()}),Mt=function(e,i){switch(e){case"animation":case"animationName":if(typeof i=="string")return i.replace(rr,function(r,n,a){return Z={name:n,styles:a,next:Z},n})}return Kn[e]!==1&&!pn(e)&&typeof i=="number"&&i!==0?i+"px":i};function be(t,e,i){if(i==null)return"";if(i.__emotion_styles!==void 0)return i;switch(typeof i){case"boolean":return"";case"object":{if(i.anim===1)return Z={name:i.name,styles:i.styles,next:Z},i.name;if(i.styles!==void 0){var r=i.next;if(r!==void 0)for(;r!==void 0;)Z={name:r.name,styles:r.styles,next:Z},r=r.next;var n=i.styles+";";return n}return ar(t,e,i)}case"function":{if(t!==void 0){var a=Z,s=i(t);return Z=a,be(t,e,s)}break}}if(e==null)return i;var u=e[i];return u!==void 0?u:i}function ar(t,e,i){var r="";if(Array.isArray(i))for(var n=0;n<i.length;n++)r+=be(t,e,i[n])+";";else for(var a in i){var s=i[a];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=a+"{"+e[s]+"}":Dt(s)&&(r+=Ge(a)+":"+Mt(a,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var u=0;u<s.length;u++)Dt(s[u])&&(r+=Ge(a)+":"+Mt(a,s[u])+";");else{var o=be(t,e,s);switch(a){case"animation":case"animationName":{r+=Ge(a)+":"+o+";";break}default:r+=a+"{"+o+"}"}}}return r}var Vt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Z,hn=function(e,i,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";Z=void 0;var s=e[0];s==null||s.raw===void 0?(n=!1,a+=be(r,i,s)):a+=s[0];for(var u=1;u<e.length;u++)a+=be(r,i,e[u]),n&&(a+=s[u]);Vt.lastIndex=0;for(var o="",l;(l=Vt.exec(a))!==null;)o+="-"+l[1];var c=nr(a)+o;return{name:c,styles:a,next:Z}},or=function(e){return e()},sr=St["useInsertionEffect"]?St["useInsertionEffect"]:!1,ur=sr||or,ht={}.hasOwnProperty,mn=h.createContext(typeof HTMLElement<"u"?Ji({key:"css"}):null);mn.Provider;var lr=function(e){return h.forwardRef(function(i,r){var n=h.useContext(mn);return e(i,n,r)})},cr=h.createContext({}),at="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",dr=function(e,i){var r={};for(var n in i)ht.call(i,n)&&(r[n]=i[n]);return r[at]=e,r},fr=function(e){var i=e.cache,r=e.serialized,n=e.isStringTag;return fn(i,r,n),ur(function(){return tr(i,r,n)}),null},pr=lr(function(t,e,i){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var n=t[at],a=[r],s="";typeof t.className=="string"?s=er(e.registered,a,t.className):t.className!=null&&(s=t.className+" ");var u=hn(a,void 0,h.useContext(cr));s+=e.key+"-"+u.name;var o={};for(var l in t)ht.call(t,l)&&l!=="css"&&l!==at&&(o[l]=t[l]);return o.ref=i,o.className=s,h.createElement(h.Fragment,null,h.createElement(fr,{cache:e,serialized:u,isStringTag:typeof n=="string"}),h.createElement(n,o))}),hr=pr,w=function(e,i){var r=arguments;if(i==null||!ht.call(i,"css"))return h.createElement.apply(void 0,r);var n=r.length,a=new Array(n);a[0]=hr,a[1]=dr(e,i);for(var s=2;s<n;s++)a[s]=r[s];return h.createElement.apply(null,a)};function mt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return hn(e)}var mr=function(){var e=mt.apply(void 0,arguments),i="animation-"+e.name;return{name:i,styles:"@keyframes "+i+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function gr(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const vr=Math.min,br=Math.max,Re=Math.round,Se=Math.floor,Te=t=>({x:t,y:t});function xr(t){const{x:e,y:i,width:r,height:n}=t;return{width:r,height:n,top:i,left:e,right:e+r,bottom:i+n,x:e,y:i}}function gn(t){return bn(t)?(t.nodeName||"").toLowerCase():"#document"}function q(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function vn(t){var e;return(e=(bn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function bn(t){return t instanceof Node||t instanceof q(t).Node}function ot(t){return t instanceof Element||t instanceof q(t).Element}function gt(t){return t instanceof HTMLElement||t instanceof q(t).HTMLElement}function kt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof q(t).ShadowRoot}function xn(t){const{overflow:e,overflowX:i,overflowY:r,display:n}=vt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(n)}function Er(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Cr(t){return["html","body","#document"].includes(gn(t))}function vt(t){return q(t).getComputedStyle(t)}function yr(t){if(gn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||kt(t)&&t.host||vn(t);return kt(e)?e.host:e}function En(t){const e=yr(t);return Cr(e)?t.ownerDocument?t.ownerDocument.body:t.body:gt(e)&&xn(e)?e:En(e)}function Be(t,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const n=En(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),s=q(n);return a?e.concat(s,s.visualViewport||[],xn(n)?n:[],s.frameElement&&i?Be(s.frameElement):[]):e.concat(n,Be(n,[],i))}function wr(t){const e=vt(t);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const n=gt(t),a=n?t.offsetWidth:i,s=n?t.offsetHeight:r,u=Re(i)!==a||Re(r)!==s;return u&&(i=a,r=s),{width:i,height:r,$:u}}function bt(t){return ot(t)?t:t.contextElement}function qe(t){const e=bt(t);if(!gt(e))return Te(1);const i=e.getBoundingClientRect(),{width:r,height:n,$:a}=wr(e);let s=(a?Re(i.width):i.width)/r,u=(a?Re(i.height):i.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!u||!Number.isFinite(u))&&(u=1),{x:s,y:u}}const Sr=Te(0);function Fr(t){const e=q(t);return!Er()||!e.visualViewport?Sr:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Or(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==q(t)?!1:e}function Pt(t,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const n=t.getBoundingClientRect(),a=bt(t);let s=Te(1);e&&(r?ot(r)&&(s=qe(r)):s=qe(t));const u=Or(a,i,r)?Fr(a):Te(0);let o=(n.left+u.x)/s.x,l=(n.top+u.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(a){const m=q(a),v=r&&ot(r)?q(r):r;let x=m,f=x.frameElement;for(;f&&r&&v!==x;){const p=qe(f),g=f.getBoundingClientRect(),E=vt(f),y=g.left+(f.clientLeft+parseFloat(E.paddingLeft))*p.x,O=g.top+(f.clientTop+parseFloat(E.paddingTop))*p.y;o*=p.x,l*=p.y,c*=p.x,d*=p.y,o+=y,l+=O,x=q(f),f=x.frameElement}}return xr({width:c,height:d,x:o,y:l})}function Ir(t,e){let i=null,r;const n=vn(t);function a(){var u;clearTimeout(r),(u=i)==null||u.disconnect(),i=null}function s(u,o){u===void 0&&(u=!1),o===void 0&&(o=1),a();const{left:l,top:c,width:d,height:m}=t.getBoundingClientRect();if(u||e(),!d||!m)return;const v=Se(c),x=Se(n.clientWidth-(l+d)),f=Se(n.clientHeight-(c+m)),p=Se(l),E={rootMargin:-v+"px "+-x+"px "+-f+"px "+-p+"px",threshold:br(0,vr(1,o))||1};let y=!0;function O(D){const I=D[0].intersectionRatio;if(I!==o){if(!y)return s();I?s(!1,I):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{i=new IntersectionObserver(O,{...E,root:n.ownerDocument})}catch{i=new IntersectionObserver(O,E)}i.observe(t)}return s(!0),a}function Ar(t,e,i,r){r===void 0&&(r={});const{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,l=bt(t),c=n||a?[...l?Be(l):[],...Be(e)]:[];c.forEach(g=>{n&&g.addEventListener("scroll",i,{passive:!0}),a&&g.addEventListener("resize",i)});const d=l&&u?Ir(l,i):null;let m=-1,v=null;s&&(v=new ResizeObserver(g=>{let[E]=g;E&&E.target===l&&v&&(v.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var y;(y=v)==null||y.observe(e)})),i()}),l&&!o&&v.observe(l),v.observe(e));let x,f=o?Pt(t):null;o&&p();function p(){const g=Pt(t);f&&(g.x!==f.x||g.y!==f.y||g.width!==f.width||g.height!==f.height)&&i(),f=g,x=requestAnimationFrame(p)}return i(),()=>{var g;c.forEach(E=>{n&&E.removeEventListener("scroll",i),a&&E.removeEventListener("resize",i)}),d==null||d(),(g=v)==null||g.disconnect(),v=null,o&&cancelAnimationFrame(x)}}var st=h.useLayoutEffect,Dr=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ne=function(){};function Mr(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function Vr(t,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),n=2;n<i;n++)r[n-2]=arguments[n];var a=[].concat(r);if(e&&t)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(Mr(t,s)));return a.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var Lt=function(e){return jr(e)?e.filter(Boolean):tn(e)==="object"&&e!==null?[e]:[]},Cn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=re(e,Dr);return S({},i)},P=function(e,i,r){var n=e.cx,a=e.getStyles,s=e.getClassNames,u=e.className;return{css:a(i,e),className:n(r??{},s(i,e),u)}};function We(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function kr(t){return We(t)?window.innerHeight:t.clientHeight}function yn(t){return We(t)?window.pageYOffset:t.scrollTop}function $e(t,e){if(We(t)){window.scrollTo(0,e);return}t.scrollTop=e}function Pr(t){var e=getComputedStyle(t),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function Lr(t,e,i,r){return i*((t=t/r-1)*t*t+1)+e}function Fe(t,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ne,n=yn(t),a=e-n,s=10,u=0;function o(){u+=s;var l=Lr(u,n,a,i);$e(t,l),u<i?window.requestAnimationFrame(o):r(t)}o()}function Rt(t,e){var i=t.getBoundingClientRect(),r=e.getBoundingClientRect(),n=e.offsetHeight/3;r.bottom+n>i.bottom?$e(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):r.top-n<i.top&&$e(t,Math.max(e.offsetTop-n,0))}function Rr(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Tt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Tr(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var wn=!1,Br={get passive(){return wn=!0}},Oe=typeof window<"u"?window:{};Oe.addEventListener&&Oe.removeEventListener&&(Oe.addEventListener("p",Ne,Br),Oe.removeEventListener("p",Ne,!1));var Nr=wn;function $r(t){return t!=null}function jr(t){return Array.isArray(t)}function Ie(t,e,i){return t?e:i}var Hr=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];var a=Object.entries(e).filter(function(s){var u=ie(s,1),o=u[0];return!r.includes(o)});return a.reduce(function(s,u){var o=ie(u,2),l=o[0],c=o[1];return s[l]=c,s},{})},zr=["children","innerProps"],Ur=["children","innerProps"];function _r(t){var e=t.maxHeight,i=t.menuEl,r=t.minHeight,n=t.placement,a=t.shouldScroll,s=t.isFixedPosition,u=t.controlHeight,o=Pr(i),l={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return l;var c=o.getBoundingClientRect(),d=c.height,m=i.getBoundingClientRect(),v=m.bottom,x=m.height,f=m.top,p=i.offsetParent.getBoundingClientRect(),g=p.top,E=s?window.innerHeight:kr(o),y=yn(o),O=parseInt(getComputedStyle(i).marginBottom,10),D=parseInt(getComputedStyle(i).marginTop,10),I=g-D,C=E-f,A=I+y,k=d-y-f,$=v-E+y+O,z=y+f-D,j=160;switch(n){case"auto":case"bottom":if(C>=x)return{placement:"bottom",maxHeight:e};if(k>=x&&!s)return a&&Fe(o,$,j),{placement:"bottom",maxHeight:e};if(!s&&k>=r||s&&C>=r){a&&Fe(o,$,j);var Q=s?C-O:k-O;return{placement:"bottom",maxHeight:Q}}if(n==="auto"||s){var ee=e,B=s?I:A;return B>=r&&(ee=Math.min(B-O-u,e)),{placement:"top",maxHeight:ee}}if(n==="bottom")return a&&$e(o,$),{placement:"bottom",maxHeight:e};break;case"top":if(I>=x)return{placement:"top",maxHeight:e};if(A>=x&&!s)return a&&Fe(o,z,j),{placement:"top",maxHeight:e};if(!s&&A>=r||s&&I>=r){var R=e;return(!s&&A>=r||s&&I>=r)&&(R=s?I-D:A-D),a&&Fe(o,z,j),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return l}function Wr(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var Sn=function(e){return e==="auto"?"bottom":e},Yr=function(e,i){var r,n=e.placement,a=e.theme,s=a.borderRadius,u=a.spacing,o=a.colors;return S((r={label:"menu"},ye(r,Wr(n),"100%"),ye(r,"position","absolute"),ye(r,"width","100%"),ye(r,"zIndex",1),r),i?{}:{backgroundColor:o.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},Fn=h.createContext(null),Gr=function(e){var i=e.children,r=e.minMenuHeight,n=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,u=e.menuShouldScrollIntoView,o=e.theme,l=h.useContext(Fn)||{},c=l.setPortalPlacement,d=h.useRef(null),m=h.useState(n),v=ie(m,2),x=v[0],f=v[1],p=h.useState(null),g=ie(p,2),E=g[0],y=g[1],O=o.spacing.controlHeight;return st(function(){var D=d.current;if(D){var I=s==="fixed",C=u&&!I,A=_r({maxHeight:n,menuEl:D,minHeight:r,placement:a,shouldScroll:C,isFixedPosition:I,controlHeight:O});f(A.maxHeight),y(A.placement),c==null||c(A.placement)}},[n,a,s,u,r,c,O]),i({ref:d,placerProps:S(S({},e),{},{placement:E||Sn(a),maxHeight:x})})},qr=function(e){var i=e.children,r=e.innerRef,n=e.innerProps;return w("div",F({},P(e,"menu",{menu:!0}),{ref:r},n),i)},Kr=qr,Xr=function(e,i){var r=e.maxHeight,n=e.theme.spacing.baseUnit;return S({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:n,paddingTop:n})},Zr=function(e){var i=e.children,r=e.innerProps,n=e.innerRef,a=e.isMulti;return w("div",F({},P(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},r),i)},On=function(e,i){var r=e.theme,n=r.spacing.baseUnit,a=r.colors;return S({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},Jr=On,Qr=On,ea=function(e){var i=e.children,r=i===void 0?"No options":i,n=e.innerProps,a=re(e,zr);return w("div",F({},P(S(S({},a),{},{children:r,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),r)},ta=function(e){var i=e.children,r=i===void 0?"Loading...":i,n=e.innerProps,a=re(e,Ur);return w("div",F({},P(S(S({},a),{},{children:r,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),r)},na=function(e){var i=e.rect,r=e.offset,n=e.position;return{left:i.left,position:n,top:r,width:i.width,zIndex:1}},ia=function(e){var i=e.appendTo,r=e.children,n=e.controlElement,a=e.innerProps,s=e.menuPlacement,u=e.menuPosition,o=h.useRef(null),l=h.useRef(null),c=h.useState(Sn(s)),d=ie(c,2),m=d[0],v=d[1],x=h.useMemo(function(){return{setPortalPlacement:v}},[]),f=h.useState(null),p=ie(f,2),g=p[0],E=p[1],y=h.useCallback(function(){if(n){var C=Rr(n),A=u==="fixed"?0:window.pageYOffset,k=C[m]+A;(k!==(g==null?void 0:g.offset)||C.left!==(g==null?void 0:g.rect.left)||C.width!==(g==null?void 0:g.rect.width))&&E({offset:k,rect:C})}},[n,u,m,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);st(function(){y()},[y]);var O=h.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),n&&o.current&&(l.current=Ar(n,o.current,y,{elementResize:"ResizeObserver"in window}))},[n,y]);st(function(){O()},[O]);var D=h.useCallback(function(C){o.current=C,O()},[O]);if(!i&&u!=="fixed"||!g)return null;var I=w("div",F({ref:D},P(S(S({},e),{},{offset:g.offset,position:u,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),r);return w(Fn.Provider,{value:x},i?Zt.createPortal(I,i):I)},ra=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},aa=function(e){var i=e.children,r=e.innerProps,n=e.isDisabled,a=e.isRtl;return w("div",F({},P(e,"container",{"--is-disabled":n,"--is-rtl":a}),r),i)},oa=function(e,i){var r=e.theme.spacing,n=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:n&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},sa=function(e){var i=e.children,r=e.innerProps,n=e.isMulti,a=e.hasValue;return w("div",F({},P(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),r),i)},ua=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},la=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"indicatorsContainer",{indicators:!0}),r),i)},Bt,ca=["size"],da=["innerProps","isRtl","size"],fa={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},In=function(e){var i=e.size,r=re(e,ca);return w("svg",F({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:fa},r))},xt=function(e){return w(In,F({size:20},e),w("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},An=function(e){return w(In,F({size:20},e),w("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Dn=function(e,i){var r=e.isFocused,n=e.theme,a=n.spacing.baseUnit,s=n.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},pa=Dn,ha=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||w(An,null))},ma=Dn,ga=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||w(xt,null))},va=function(e,i){var r=e.isDisabled,n=e.theme,a=n.spacing.baseUnit,s=n.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},ba=function(e){var i=e.innerProps;return w("span",F({},i,P(e,"indicatorSeparator",{"indicator-separator":!0})))},xa=mr(Bt||(Bt=gr([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ea=function(e,i){var r=e.isFocused,n=e.size,a=e.theme,s=a.colors,u=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?s.neutral60:s.neutral20,padding:u*2})},Ke=function(e){var i=e.delay,r=e.offset;return w("span",{css:mt({animation:"".concat(xa," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ca=function(e){var i=e.innerProps,r=e.isRtl,n=e.size,a=n===void 0?4:n,s=re(e,da);return w("div",F({},P(S(S({},s),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),w(Ke,{delay:0,offset:r}),w(Ke,{delay:160,offset:!0}),w(Ke,{delay:320,offset:!r}))},ya=function(e,i){var r=e.isDisabled,n=e.isFocused,a=e.theme,s=a.colors,u=a.borderRadius,o=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:n?s.primary:s.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},wa=function(e){var i=e.children,r=e.isDisabled,n=e.isFocused,a=e.innerRef,s=e.innerProps,u=e.menuIsOpen;return w("div",F({ref:a},P(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":n,"control--menu-is-open":u}),s,{"aria-disabled":r||void 0}),i)},Sa=wa,Fa=["data"],Oa=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Ia=function(e){var i=e.children,r=e.cx,n=e.getStyles,a=e.getClassNames,s=e.Heading,u=e.headingProps,o=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return w("div",F({},P(e,"group",{group:!0}),o),w(s,F({},u,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:r}),l),w("div",null,i))},Aa=function(e,i){var r=e.theme,n=r.colors,a=r.spacing;return S({label:"group",cursor:"default",display:"block"},i?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Da=function(e){var i=Cn(e);i.data;var r=re(i,Fa);return w("div",F({},P(e,"groupHeading",{"group-heading":!0}),r))},Ma=Ia,Va=["innerRef","isDisabled","isHidden","inputClassName"],ka=function(e,i){var r=e.isDisabled,n=e.value,a=e.theme,s=a.spacing,u=a.colors;return S(S({visibility:r?"hidden":"visible",transform:n?"translateZ(0)":""},Pa),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:u.neutral80})},Mn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Pa={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Mn)},La=function(e){return S({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Mn)},Ra=function(e){var i=e.cx,r=e.value,n=Cn(e),a=n.innerRef,s=n.isDisabled,u=n.isHidden,o=n.inputClassName,l=re(n,Va);return w("div",F({},P(e,"input",{"input-container":!0}),{"data-value":r||""}),w("input",F({className:i({input:!0},o),ref:a,style:La(u),disabled:s},l)))},Ta=Ra,Ba=function(e,i){var r=e.theme,n=r.spacing,a=r.borderRadius,s=r.colors;return S({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},Na=function(e,i){var r=e.theme,n=r.borderRadius,a=r.colors,s=e.cropWithEllipsis;return S({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},$a=function(e,i){var r=e.theme,n=r.spacing,a=r.borderRadius,s=r.colors,u=e.isFocused;return S({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:u?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Vn=function(e){var i=e.children,r=e.innerProps;return w("div",r,i)},ja=Vn,Ha=Vn;function za(t){var e=t.children,i=t.innerProps;return w("div",F({role:"button"},i),e||w(xt,{size:14}))}var Ua=function(e){var i=e.children,r=e.components,n=e.data,a=e.innerProps,s=e.isDisabled,u=e.removeProps,o=e.selectProps,l=r.Container,c=r.Label,d=r.Remove;return w(l,{data:n,innerProps:S(S({},P(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:o},w(c,{data:n,innerProps:S({},P(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},i),w(d,{data:n,innerProps:S(S({},P(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},u),selectProps:o}))},_a=Ua,Wa=function(e,i){var r=e.isDisabled,n=e.isFocused,a=e.isSelected,s=e.theme,u=s.spacing,o=s.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?o.primary:n?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},Ya=function(e){var i=e.children,r=e.isDisabled,n=e.isFocused,a=e.isSelected,s=e.innerRef,u=e.innerProps;return w("div",F({},P(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":n,"option--is-selected":a}),{ref:s,"aria-disabled":r},u),i)},Ga=Ya,qa=function(e,i){var r=e.theme,n=r.spacing,a=r.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},Ka=function(e){var i=e.children,r=e.innerProps;return w("div",F({},P(e,"placeholder",{placeholder:!0}),r),i)},Xa=Ka,Za=function(e,i){var r=e.isDisabled,n=e.theme,a=n.spacing,s=n.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Ja=function(e){var i=e.children,r=e.isDisabled,n=e.innerProps;return w("div",F({},P(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),n),i)},Qa=Ja,eo={ClearIndicator:ga,Control:Sa,DropdownIndicator:ha,DownChevron:An,CrossIcon:xt,Group:Ma,GroupHeading:Da,IndicatorsContainer:la,IndicatorSeparator:ba,Input:Ta,LoadingIndicator:Ca,Menu:Kr,MenuList:Zr,MenuPortal:ia,LoadingMessage:ta,NoOptionsMessage:ea,MultiValue:_a,MultiValueContainer:ja,MultiValueLabel:Ha,MultiValueRemove:za,Option:Ga,Placeholder:Xa,SelectContainer:aa,SingleValue:Qa,ValueContainer:sa},to=function(e){return S(S({},eo),e.components)},Nt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function no(t,e){return!!(t===e||Nt(t)&&Nt(e))}function io(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!no(t[i],e[i]))return!1;return!0}function ro(t,e){e===void 0&&(e=io);var i=null;function r(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var s=t.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return r.clear=function(){i=null},r}var ao={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},oo=function(e){return w("span",F({css:ao},e))},$t=oo,so={guidance:function(e){var i=e.isSearchable,r=e.isMulti,n=e.tabSelectsValue,a=e.context,s=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,n=r===void 0?"":r,a=e.labels,s=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,n=e.options,a=e.label,s=a===void 0?"":a,u=e.selectValue,o=e.isDisabled,l=e.isSelected,c=e.isAppleDevice,d=function(f,p){return f&&f.length?"".concat(f.indexOf(p)+1," of ").concat(f.length):""};if(i==="value"&&u)return"value ".concat(s," focused, ").concat(d(u,r),".");if(i==="menu"&&c){var m=o?" disabled":"",v="".concat(l?" selected":"").concat(m);return"".concat(s).concat(v,", ").concat(d(n,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},uo=function(e){var i=e.ariaSelection,r=e.focusedOption,n=e.focusedValue,a=e.focusableOptions,s=e.isFocused,u=e.selectValue,o=e.selectProps,l=e.id,c=e.isAppleDevice,d=o.ariaLiveMessages,m=o.getOptionLabel,v=o.inputValue,x=o.isMulti,f=o.isOptionDisabled,p=o.isSearchable,g=o.menuIsOpen,E=o.options,y=o.screenReaderStatus,O=o.tabSelectsValue,D=o.isLoading,I=o["aria-label"],C=o["aria-live"],A=h.useMemo(function(){return S(S({},so),d||{})},[d]),k=h.useMemo(function(){var B="";if(i&&A.onChange){var R=i.option,K=i.options,Y=i.removedValue,ae=i.removedValues,oe=i.value,Ee=function(ne){return Array.isArray(ne)?null:ne},T=Y||R||Ee(oe),_=T?m(T):"",te=K||ae||void 0,se=te?te.map(m):[],G=S({isDisabled:T&&f(T,u),label:_,labels:se},i);B=A.onChange(G)}return B},[i,A,f,u,m]),$=h.useMemo(function(){var B="",R=r||n,K=!!(r&&u&&u.includes(r));if(R&&A.onFocus){var Y={focused:R,label:m(R),isDisabled:f(R,u),isSelected:K,options:a,context:R===r?"menu":"value",selectValue:u,isAppleDevice:c};B=A.onFocus(Y)}return B},[r,n,m,f,A,a,u,c]),z=h.useMemo(function(){var B="";if(g&&E.length&&!D&&A.onFilter){var R=y({count:a.length});B=A.onFilter({inputValue:v,resultsMessage:R})}return B},[a,v,g,A,E,y,D]),j=(i==null?void 0:i.action)==="initial-input-focus",Q=h.useMemo(function(){var B="";if(A.guidance){var R=n?"value":g?"menu":"input";B=A.guidance({"aria-label":I,context:R,isDisabled:r&&f(r,u),isMulti:x,isSearchable:p,tabSelectsValue:O,isInitialFocus:j})}return B},[I,r,n,x,f,p,g,A,u,O,j]),ee=w(h.Fragment,null,w("span",{id:"aria-selection"},k),w("span",{id:"aria-focused"},$),w("span",{id:"aria-results"},z),w("span",{id:"aria-guidance"},Q));return w(h.Fragment,null,w($t,{id:l},j&&ee),w($t,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!j&&ee))},lo=uo,ut=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],co=new RegExp("["+ut.map(function(t){return t.letters}).join("")+"]","g"),kn={};for(var Xe=0;Xe<ut.length;Xe++)for(var Ze=ut[Xe],Je=0;Je<Ze.letters.length;Je++)kn[Ze.letters[Je]]=Ze.base;var Pn=function(e){return e.replace(co,function(i){return kn[i]})},fo=ro(Pn),jt=function(e){return e.replace(/^\s+|\s+$/g,"")},po=function(e){return"".concat(e.label," ").concat(e.value)},ho=function(e){return function(i,r){if(i.data.__isNew__)return!0;var n=S({ignoreCase:!0,ignoreAccents:!0,stringify:po,trim:!0,matchFrom:"any"},e),a=n.ignoreCase,s=n.ignoreAccents,u=n.stringify,o=n.trim,l=n.matchFrom,c=o?jt(r):r,d=o?jt(u(i)):u(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=fo(c),d=Pn(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},mo=["innerRef"];function go(t){var e=t.innerRef,i=re(t,mo),r=Hr(i,"onExited","in","enter","exit","appear");return w("input",F({ref:e},r,{css:mt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var vo=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function bo(t){var e=t.isEnabled,i=t.onBottomArrive,r=t.onBottomLeave,n=t.onTopArrive,a=t.onTopLeave,s=h.useRef(!1),u=h.useRef(!1),o=h.useRef(0),l=h.useRef(null),c=h.useCallback(function(p,g){if(l.current!==null){var E=l.current,y=E.scrollTop,O=E.scrollHeight,D=E.clientHeight,I=l.current,C=g>0,A=O-D-y,k=!1;A>g&&s.current&&(r&&r(p),s.current=!1),C&&u.current&&(a&&a(p),u.current=!1),C&&g>A?(i&&!s.current&&i(p),I.scrollTop=O,k=!0,s.current=!0):!C&&-g>y&&(n&&!u.current&&n(p),I.scrollTop=0,k=!0,u.current=!0),k&&vo(p)}},[i,r,n,a]),d=h.useCallback(function(p){c(p,p.deltaY)},[c]),m=h.useCallback(function(p){o.current=p.changedTouches[0].clientY},[]),v=h.useCallback(function(p){var g=o.current-p.changedTouches[0].clientY;c(p,g)},[c]),x=h.useCallback(function(p){if(p){var g=Nr?{passive:!1}:!1;p.addEventListener("wheel",d,g),p.addEventListener("touchstart",m,g),p.addEventListener("touchmove",v,g)}},[v,m,d]),f=h.useCallback(function(p){p&&(p.removeEventListener("wheel",d,!1),p.removeEventListener("touchstart",m,!1),p.removeEventListener("touchmove",v,!1))},[v,m,d]);return h.useEffect(function(){if(e){var p=l.current;return x(p),function(){f(p)}}},[e,x,f]),function(p){l.current=p}}var Ht=["boxSizing","height","overflow","paddingRight","position"],zt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ut(t){t.preventDefault()}function _t(t){t.stopPropagation()}function Wt(){var t=this.scrollTop,e=this.scrollHeight,i=t+this.offsetHeight;t===0?this.scrollTop=1:i===e&&(this.scrollTop=t-1)}function Yt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Gt=!!(typeof window<"u"&&window.document&&window.document.createElement),me=0,ce={capture:!1,passive:!1};function xo(t){var e=t.isEnabled,i=t.accountForScrollbars,r=i===void 0?!0:i,n=h.useRef({}),a=h.useRef(null),s=h.useCallback(function(o){if(Gt){var l=document.body,c=l&&l.style;if(r&&Ht.forEach(function(x){var f=c&&c[x];n.current[x]=f}),r&&me<1){var d=parseInt(n.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,v=window.innerWidth-m+d||0;Object.keys(zt).forEach(function(x){var f=zt[x];c&&(c[x]=f)}),c&&(c.paddingRight="".concat(v,"px"))}l&&Yt()&&(l.addEventListener("touchmove",Ut,ce),o&&(o.addEventListener("touchstart",Wt,ce),o.addEventListener("touchmove",_t,ce))),me+=1}},[r]),u=h.useCallback(function(o){if(Gt){var l=document.body,c=l&&l.style;me=Math.max(me-1,0),r&&me<1&&Ht.forEach(function(d){var m=n.current[d];c&&(c[d]=m)}),l&&Yt()&&(l.removeEventListener("touchmove",Ut,ce),o&&(o.removeEventListener("touchstart",Wt,ce),o.removeEventListener("touchmove",_t,ce)))}},[r]);return h.useEffect(function(){if(e){var o=a.current;return s(o),function(){u(o)}}},[e,s,u]),function(o){a.current=o}}var Eo=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Co={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function yo(t){var e=t.children,i=t.lockEnabled,r=t.captureEnabled,n=r===void 0?!0:r,a=t.onBottomArrive,s=t.onBottomLeave,u=t.onTopArrive,o=t.onTopLeave,l=bo({isEnabled:n,onBottomArrive:a,onBottomLeave:s,onTopArrive:u,onTopLeave:o}),c=xo({isEnabled:i}),d=function(v){l(v),c(v)};return w(h.Fragment,null,i&&w("div",{onClick:Eo,css:Co}),e(d))}var wo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},So=function(e){var i=e.name,r=e.onFocus;return w("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:wo,value:"",onChange:function(){}})},Fo=So;function Et(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Oo(){return Et(/^iPhone/i)}function Ln(){return Et(/^Mac/i)}function Io(){return Et(/^iPad/i)||Ln()&&navigator.maxTouchPoints>1}function Ao(){return Oo()||Io()}function Do(){return Ln()||Ao()}var Mo=function(e){return e.label},Vo=function(e){return e.label},ko=function(e){return e.value},Po=function(e){return!!e.isDisabled},Lo={clearIndicator:ma,container:ra,control:ya,dropdownIndicator:pa,group:Oa,groupHeading:Aa,indicatorsContainer:ua,indicatorSeparator:va,input:ka,loadingIndicator:Ea,loadingMessage:Qr,menu:Yr,menuList:Xr,menuPortal:na,multiValue:Ba,multiValueLabel:Na,multiValueRemove:$a,noOptionsMessage:Jr,option:Wa,placeholder:qa,singleValue:Za,valueContainer:oa},Ro={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},To=4,Rn=4,Bo=38,No=Rn*2,$o={baseUnit:Rn,controlHeight:Bo,menuGutter:No},Qe={borderRadius:To,colors:Ro,spacing:$o},jo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Tt(),captureMenuScroll:!Tt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:ho(),formatGroupLabel:Mo,getOptionLabel:Vo,getOptionValue:ko,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Po,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Tr(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function qt(t,e,i,r){var n=Nn(t,e,i),a=$n(t,e,i),s=Bn(t,e),u=je(t,e);return{type:"option",data:e,isDisabled:n,isSelected:a,label:s,value:u,index:r}}function Ve(t,e){return t.options.map(function(i,r){if("options"in i){var n=i.options.map(function(s,u){return qt(t,s,e,u)}).filter(function(s){return Xt(t,s)});return n.length>0?{type:"group",data:i,options:n,index:r}:void 0}var a=qt(t,i,e,r);return Xt(t,a)?a:void 0}).filter($r)}function Tn(t){return t.reduce(function(e,i){return i.type==="group"?e.push.apply(e,ct(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function Kt(t,e){return t.reduce(function(i,r){return r.type==="group"?i.push.apply(i,ct(r.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(r.index,"-").concat(n.index)}}))):i.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),i},[])}function Ho(t,e){return Tn(Ve(t,e))}function Xt(t,e){var i=t.inputValue,r=i===void 0?"":i,n=e.data,a=e.isSelected,s=e.label,u=e.value;return(!Hn(t)||!a)&&jn(t,{label:s,value:u,data:n},r)}function zo(t,e){var i=t.focusedValue,r=t.selectValue,n=r.indexOf(i);if(n>-1){var a=e.indexOf(i);if(a>-1)return i;if(n<e.length)return e[n]}return null}function Uo(t,e){var i=t.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var et=function(e,i){var r,n=(r=e.find(function(a){return a.data===i}))===null||r===void 0?void 0:r.id;return n||null},Bn=function(e,i){return e.getOptionLabel(i)},je=function(e,i){return e.getOptionValue(i)};function Nn(t,e,i){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,i):!1}function $n(t,e,i){if(i.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,i);var r=je(t,e);return i.some(function(n){return je(t,n)===r})}function jn(t,e,i){return t.filterOption?t.filterOption(e,i):!0}var Hn=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},_o=1,zn=function(t){gi(i,t);var e=Ei(i);function i(r){var n;if(hi(this,i),n=e.call(this,r),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.isAppleDevice=Do(),n.controlRef=null,n.getControlRef=function(o){n.controlRef=o},n.focusedOptionRef=null,n.getFocusedOptionRef=function(o){n.focusedOptionRef=o},n.menuListRef=null,n.getMenuListRef=function(o){n.menuListRef=o},n.inputRef=null,n.getInputRef=function(o){n.inputRef=o},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(o,l){var c=n.props,d=c.onChange,m=c.name;l.name=m,n.ariaOnChange(o,l),d(o,l)},n.setValue=function(o,l,c){var d=n.props,m=d.closeMenuOnSelect,v=d.isMulti,x=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:x}),m&&(n.setState({inputIsHiddenAfterUpdate:!v}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(o,{action:l,option:c})},n.selectOption=function(o){var l=n.props,c=l.blurInputOnSelect,d=l.isMulti,m=l.name,v=n.state.selectValue,x=d&&n.isOptionSelected(o,v),f=n.isOptionDisabled(o,v);if(x){var p=n.getOptionValue(o);n.setValue(v.filter(function(g){return n.getOptionValue(g)!==p}),"deselect-option",o)}else if(!f)d?n.setValue([].concat(ct(v),[o]),"select-option",o):n.setValue(o,"select-option");else{n.ariaOnChange(o,{action:"select-option",option:o,name:m});return}c&&n.blurInput()},n.removeValue=function(o){var l=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(o),m=c.filter(function(x){return n.getOptionValue(x)!==d}),v=Ie(l,m,m[0]||null);n.onChange(v,{action:"remove-value",removedValue:o}),n.focusInput()},n.clearValue=function(){var o=n.state.selectValue;n.onChange(Ie(n.props.isMulti,[],null),{action:"clear",removedValues:o})},n.popValue=function(){var o=n.props.isMulti,l=n.state.selectValue,c=l[l.length-1],d=l.slice(0,l.length-1),m=Ie(o,d,d[0]||null);n.onChange(m,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(o){return et(n.state.focusableOptionsWithIds,o)},n.getFocusableOptionsWithIds=function(){return Kt(Ve(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return Vr.apply(void 0,[n.props.classNamePrefix].concat(l))},n.getOptionLabel=function(o){return Bn(n.props,o)},n.getOptionValue=function(o){return je(n.props,o)},n.getStyles=function(o,l){var c=n.props.unstyled,d=Lo[o](l,c);d.boxSizing="border-box";var m=n.props.styles[o];return m?m(d,l):d},n.getClassNames=function(o,l){var c,d;return(c=(d=n.props.classNames)[o])===null||c===void 0?void 0:c.call(d,l)},n.getElementId=function(o){return"".concat(n.state.instancePrefix,"-").concat(o)},n.getComponents=function(){return to(n.props)},n.buildCategorizedOptions=function(){return Ve(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return Tn(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(o,l){n.setState({ariaSelection:S({value:o},l)})},n.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(o){n.blockOptionHover=!1},n.onControlMouseDown=function(o){if(!o.defaultPrevented){var l=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&n.onMenuClose():l&&n.openMenu("first"):(l&&(n.openAfterFocus=!0),n.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},n.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!n.props.isDisabled){var l=n.props,c=l.isMulti,d=l.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),o.preventDefault()}},n.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(n.clearValue(),o.preventDefault(),n.openAfterFocus=!1,o.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(o){typeof n.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&We(o.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(o)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(o){var l=o.touches,c=l&&l.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(o){var l=o.touches,c=l&&l.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),m=Math.abs(c.clientY-n.initialTouchY),v=5;n.userIsDragging=d>v||m>v}},n.onTouchEnd=function(o){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(o.target)&&n.menuListRef&&!n.menuListRef.contains(o.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(o){n.userIsDragging||n.onControlMouseDown(o)},n.onClearIndicatorTouchEnd=function(o){n.userIsDragging||n.onClearIndicatorMouseDown(o)},n.onDropdownIndicatorTouchEnd=function(o){n.userIsDragging||n.onDropdownIndicatorMouseDown(o)},n.handleInputChange=function(o){var l=n.props.inputValue,c=o.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:l}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(o){n.props.onFocus&&n.props.onFocus(o),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(o){var l=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(o),n.onInputChange("",{action:"input-blur",prevInputValue:l}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(o){if(!(n.blockOptionHover||n.state.focusedOption===o)){var l=n.getFocusableOptions(),c=l.indexOf(o);n.setState({focusedOption:o,focusedOptionId:c>-1?n.getFocusedOptionId(o):null})}},n.shouldHideSelectedOptions=function(){return Hn(n.props)},n.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),n.focus()},n.onKeyDown=function(o){var l=n.props,c=l.isMulti,d=l.backspaceRemovesValue,m=l.escapeClearsValue,v=l.inputValue,x=l.isClearable,f=l.isDisabled,p=l.menuIsOpen,g=l.onKeyDown,E=l.tabSelectsValue,y=l.openMenuOnFocus,O=n.state,D=O.focusedOption,I=O.focusedValue,C=O.selectValue;if(!f&&!(typeof g=="function"&&(g(o),o.defaultPrevented))){switch(n.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||v)return;n.focusValue("previous");break;case"ArrowRight":if(!c||v)return;n.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(I)n.removeValue(I);else{if(!d)return;c?n.popValue():x&&n.clearValue()}break;case"Tab":if(n.isComposing||o.shiftKey||!p||!E||!D||y&&n.isOptionSelected(D,C))return;n.selectOption(D);break;case"Enter":if(o.keyCode===229)break;if(p){if(!D||n.isComposing)return;n.selectOption(D);break}return;case"Escape":p?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:v}),n.onMenuClose()):x&&m&&n.clearValue();break;case" ":if(v)return;if(!p){n.openMenu("first");break}if(!D)return;n.selectOption(D);break;case"ArrowUp":p?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":p?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!p)return;n.focusOption("pageup");break;case"PageDown":if(!p)return;n.focusOption("pagedown");break;case"Home":if(!p)return;n.focusOption("first");break;case"End":if(!p)return;n.focusOption("last");break;default:return}o.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++_o),n.state.selectValue=Lt(r.value),r.menuIsOpen&&n.state.selectValue.length){var a=n.getFocusableOptionsWithIds(),s=n.buildFocusableOptions(),u=s.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=a,n.state.focusedOption=s[u],n.state.focusedOptionId=et(a,s[u])}return n}return mi(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Rt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var a=this.props,s=a.isDisabled,u=a.menuIsOpen,o=this.state.isFocused;(o&&!s&&n.isDisabled||o&&u&&!n.menuIsOpen)&&this.focusInput(),o&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Rt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,s=this.state,u=s.selectValue,o=s.isFocused,l=this.buildFocusableOptions(),c=n==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(u[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c],focusedOptionId:this.getFocusedOptionId(l[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,s=a.selectValue,u=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=s.indexOf(u);u||(o=-1);var l=s.length-1,c=-1;if(s.length){switch(n){case"previous":o===0?c=0:o===-1?c=l:c=o-1;break;case"next":o>-1&&o<l&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var o=0,l=u.indexOf(s);s||(l=-1),n==="up"?o=l>0?l-1:u.length-1:n==="down"?o=(l+1)%u.length:n==="pageup"?(o=l-a,o<0&&(o=0)):n==="pagedown"?(o=l+a,o>u.length-1&&(o=u.length-1)):n==="last"&&(o=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(u[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Qe):S(S({},Qe),this.props.theme):Qe}},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,s=this.getStyles,u=this.getClassNames,o=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,v=d.isRtl,x=d.options,f=this.hasValue();return{clearValue:n,cx:a,getStyles:s,getClassNames:u,getValue:o,hasValue:f,isMulti:m,isRtl:v,options:x,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,s=n.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(n,a){return Nn(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return $n(this.props,n,a)}},{key:"filterOption",value:function(n,a){return jn(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:s,selectValue:u})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,a=n.isDisabled,s=n.isSearchable,u=n.inputId,o=n.inputValue,l=n.tabIndex,c=n.form,d=n.menuIsOpen,m=n.required,v=this.getComponents(),x=v.Input,f=this.state,p=f.inputIsHidden,g=f.ariaSelection,E=this.commonProps,y=u||this.getElementId("input"),O=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?h.createElement(x,F({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:a,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:o},O)):h.createElement(go,F({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ne,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),s=a.MultiValue,u=a.MultiValueContainer,o=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,m=this.commonProps,v=this.props,x=v.controlShouldRenderValue,f=v.isDisabled,p=v.isMulti,g=v.inputValue,E=v.placeholder,y=this.state,O=y.selectValue,D=y.focusedValue,I=y.isFocused;if(!this.hasValue()||!x)return g?null:h.createElement(d,F({},m,{key:"placeholder",isDisabled:f,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),E);if(p)return O.map(function(A,k){var $=A===D,z="".concat(n.getOptionLabel(A),"-").concat(n.getOptionValue(A));return h.createElement(s,F({},m,{components:{Container:u,Label:o,Remove:l},isFocused:$,isDisabled:f,key:z,index:k,removeProps:{onClick:function(){return n.removeValue(A)},onTouchEnd:function(){return n.removeValue(A)},onMouseDown:function(Q){Q.preventDefault()}},data:A}),n.formatOptionLabel(A,"value"))});if(g)return null;var C=O[0];return h.createElement(c,F({},m,{data:C,isDisabled:f}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,s=this.commonProps,u=this.props,o=u.isDisabled,l=u.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(a,F({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,s=this.commonProps,u=this.props,o=u.isDisabled,l=u.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return h.createElement(a,F({},s,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,s=n.IndicatorSeparator;if(!a||!s)return null;var u=this.commonProps,o=this.props.isDisabled,l=this.state.isFocused;return h.createElement(s,F({},u,{isDisabled:o,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var s=this.commonProps,u=this.props.isDisabled,o=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(a,F({},s,{innerProps:l,isDisabled:u,isFocused:o}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),s=a.Group,u=a.GroupHeading,o=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,m=a.NoOptionsMessage,v=a.Option,x=this.commonProps,f=this.state.focusedOption,p=this.props,g=p.captureMenuScroll,E=p.inputValue,y=p.isLoading,O=p.loadingMessage,D=p.minMenuHeight,I=p.maxMenuHeight,C=p.menuIsOpen,A=p.menuPlacement,k=p.menuPosition,$=p.menuPortalTarget,z=p.menuShouldBlockScroll,j=p.menuShouldScrollIntoView,Q=p.noOptionsMessage,ee=p.onMenuScrollToTop,B=p.onMenuScrollToBottom;if(!C)return null;var R=function(_,te){var se=_.type,G=_.data,ue=_.isDisabled,ne=_.isSelected,Ce=_.label,Un=_.value,Ct=f===G,yt=ue?void 0:function(){return n.onOptionHover(G)},_n=ue?void 0:function(){return n.selectOption(G)},wt="".concat(n.getElementId("option"),"-").concat(te),Wn={id:wt,onClick:_n,onMouseMove:yt,onMouseOver:yt,tabIndex:-1,role:"option","aria-selected":n.isAppleDevice?void 0:ne};return h.createElement(v,F({},x,{innerProps:Wn,data:G,isDisabled:ue,isSelected:ne,key:wt,label:Ce,type:se,value:Un,isFocused:Ct,innerRef:Ct?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(_.data,"menu"))},K;if(this.hasOptions())K=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var _=T.data,te=T.options,se=T.index,G="".concat(n.getElementId("group"),"-").concat(se),ue="".concat(G,"-heading");return h.createElement(s,F({},x,{key:G,data:_,options:te,Heading:u,headingProps:{id:ue,data:T.data},label:n.formatGroupLabel(T.data)}),T.options.map(function(ne){return R(ne,"".concat(se,"-").concat(ne.index))}))}else if(T.type==="option")return R(T,"".concat(T.index))});else if(y){var Y=O({inputValue:E});if(Y===null)return null;K=h.createElement(d,x,Y)}else{var ae=Q({inputValue:E});if(ae===null)return null;K=h.createElement(m,x,ae)}var oe={minMenuHeight:D,maxMenuHeight:I,menuPlacement:A,menuPosition:k,menuShouldScrollIntoView:j},Ee=h.createElement(Gr,F({},x,oe),function(T){var _=T.ref,te=T.placerProps,se=te.placement,G=te.maxHeight;return h.createElement(o,F({},x,oe,{innerRef:_,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:y,placement:se}),h.createElement(yo,{captureEnabled:g,onTopArrive:ee,onBottomArrive:B,lockEnabled:z},function(ue){return h.createElement(l,F({},x,{innerRef:function(Ce){n.getMenuListRef(Ce),ue(Ce)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:n.getElementId("listbox")},isLoading:y,maxHeight:G,focusedOption:f}),K)}))});return $||k==="fixed"?h.createElement(c,F({},x,{appendTo:$,controlElement:this.controlRef,menuPlacement:A,menuPosition:k}),Ee):Ee}},{key:"renderFormField",value:function(){var n=this,a=this.props,s=a.delimiter,u=a.isDisabled,o=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!u)return h.createElement(Fo,{name:l,onFocus:this.onValueInputFocus});if(!(!l||u))if(o)if(s){var m=d.map(function(f){return n.getOptionValue(f)}).join(s);return h.createElement("input",{name:l,type:"hidden",value:m})}else{var v=d.length>0?d.map(function(f,p){return h.createElement("input",{key:"i-".concat(p),name:l,type:"hidden",value:n.getOptionValue(f)})}):h.createElement("input",{name:l,type:"hidden",value:""});return h.createElement("div",null,v)}else{var x=d[0]?this.getOptionValue(d[0]):"";return h.createElement("input",{name:l,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,s=a.ariaSelection,u=a.focusedOption,o=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return h.createElement(lo,F({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:u,focusedValue:o,isFocused:l,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,s=n.IndicatorsContainer,u=n.SelectContainer,o=n.ValueContainer,l=this.props,c=l.className,d=l.id,m=l.isDisabled,v=l.menuIsOpen,x=this.state.isFocused,f=this.commonProps=this.getCommonProps();return h.createElement(u,F({},f,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:x}),this.renderLiveRegion(),h.createElement(a,F({},f,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:x,menuIsOpen:v}),h.createElement(o,F({},f,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),h.createElement(s,F({},f,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var s=a.prevProps,u=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,m=a.instancePrefix,v=n.options,x=n.value,f=n.menuIsOpen,p=n.inputValue,g=n.isMulti,E=Lt(x),y={};if(s&&(x!==s.value||v!==s.options||f!==s.menuIsOpen||p!==s.inputValue)){var O=f?Ho(n,E):[],D=f?Kt(Ve(n,E),"".concat(m,"-option")):[],I=u?zo(a,E):null,C=Uo(a,O),A=et(D,C);y={selectValue:E,focusedOption:C,focusedOptionId:A,focusableOptionsWithIds:D,focusedValue:I,clearFocusValueOnUpdate:!1}}var k=o!=null&&n!==s?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},$=l,z=c&&d;return c&&!z&&($={value:Ie(g,E,E[0]||null),options:E,action:"initial-input-focus"},z=!d),(l==null?void 0:l.action)==="initial-input-focus"&&($=null),S(S(S({},y),k),{},{prevProps:n,ariaSelection:$,prevWasFocused:z})}}]),i}(h.Component);zn.defaultProps=jo;var Wo=h.forwardRef(function(t,e){var i=pi(t);return h.createElement(zn,F({ref:e},i))}),Yo=Wo;function Go({handleClickClose:t}){const e=lt(),i=ke(f=>f.data.categories),{values:r,errors:n,touched:a,isValid:s,handleChange:u,setFieldValue:o,handleSubmit:l}=Qt({initialValues:{en:"",ua:"",category:"",isIrregular:void 0},validationSchema:Jn,onSubmit:f=>{e(Xn(f)).then(p=>{isNaN(p.payload)&&t()})}}),c=f=>{o("category",f?f.value:"")},d=()=>{if(r.isIrregular&&r.category==="verb"&&!/^\w+-\w+-\w+$/.test(r.en))return b.jsx("p",{className:"EnInputMistake",children:"Must be example: “know-knew-known”"})},{getInputAlert:m,getInputClass:v}=en(r,a,n),x={control:(f,p)=>({...f,borderRadius:"15px",paddingLeft:"12px",paddingRight:"16px",background:"none",borderColor:p.isFocused?"#d1d5db":f.borderColor,color:"#f8f8f8",boxShadow:p.isFocused?"none":f.boxShadow,width:"204px",height:"48px","&:hover":{borderColor:"#d1d5db"}}),menu:f=>({...f,textTransform:"capitalize",borderRadius:"15px",boxShadow:"0 4px 47px 0 rgba(18, 20, 23, 0.08)",width:"205px",overflowY:"auto",paddingLeft:"24px","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:"#f8f8f8",borderRadius:"12px",height:"101px"},"::-webkit-scrollbar-thumb:hover":{background:"#d1d5db"}}),option:f=>({...f,color:"rgba(18, 20, 23, 0.5)",backgroundColor:"transparent","&:hover":{color:"#85AA9F"}}),singleValue:f=>({...f,color:"#f8f8f8"}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:f=>({...f,color:"#f8f8f8","&:hover":{color:"#f8f8f8"}})};return b.jsxs(di,{children:[b.jsx(He,{className:"ButtonClose",onClick:t}),b.jsxs("div",{className:"TextContainer",children:[b.jsx("h2",{className:"Title",children:"Add word"}),b.jsx("p",{className:"Text",children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."})]}),b.jsxs("form",{className:"Form",onSubmit:l,children:[b.jsx(Yo,{id:"category",name:"category",styles:x,options:i.map(f=>({value:f,label:f})),onChange:c,placeholder:"Categories"}),b.jsxs("ul",{className:"RadioButtonList",style:{display:r.category==="verb"?"flex":"none"},children:[b.jsxs("li",{className:"RadioButtonItem",children:[b.jsx("input",{className:"RadioButton",id:"regular",name:"isIrregular",type:"radio",onChange:()=>u({target:{name:"isIrregular",value:!1}}),value:!1,checked:r.isIrregular===!1}),"Regular"]}),b.jsxs("li",{className:"RadioButtonItem",children:[b.jsx("input",{className:"RadioButton",id:"reason",name:"isIrregular",type:"radio",onChange:()=>u({target:{name:"isIrregular",value:!0}}),value:!0,checked:r.isIrregular===!0}),"Irregular"]})]}),b.jsxs("div",{className:"UkrainianContainer",id:"ukrainian",children:[b.jsxs("div",{className:"InputImagContainer",children:[b.jsx(nn,{className:"IconCountry"})," Ukrainian"]}),b.jsx("input",{id:"ukrainian",className:v("Ua"),type:"text",placeholder:"Слово Українською",name:"ua",value:r.ua,onChange:u,required:!0}),m("ua")]}),b.jsxs("div",{className:"EnglishContainer",children:[b.jsxs("div",{className:"InputImagContainer",children:[b.jsx(rn,{className:"IconCountry"})," English"]}),b.jsx("input",{id:"english",className:v("En"),type:"text",placeholder:"Word in English",name:"en",value:r.en,onChange:u,required:!0}),d()?d():m("en")]}),b.jsxs("ul",{className:"ButtonList",children:[b.jsx("li",{className:"ButtonAdd",type:"submit",disabled:!s,onClick:l,children:"Add"}),b.jsx("li",{className:"ButtonCancel",onClick:t,children:"Cancel"})]})]})]})}const qo=le.ul`
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
`,Ko=t=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:17,fill:"none",...t},h.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,d:"M11.334 2.5a1.885 1.885 0 1 1 2.667 2.667l-9 9-3.667 1 1-3.667 9-9Z"})),Xo=t=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:17,fill:"none",...t},h.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.94,strokeWidth:1.3,d:"M2 4.5h12M12.667 4.5v9.333a1.333 1.333 0 0 1-1.333 1.334H4.667a1.333 1.333 0 0 1-1.333-1.334V4.5m2 0V3.167a1.333 1.333 0 0 1 1.333-1.334h2.667a1.333 1.333 0 0 1 1.333 1.334V4.5M6.666 7.833v4M9.334 7.833v4"}));function Zo({coordinates:t,onClose:e,onEdit:i,onDelete:r,word:n}){const a=()=>{e(),r(n)},s=()=>{e(),i()};return b.jsxs(qo,{x:t.x,y:t.y,children:[b.jsxs("li",{className:"Element",onClick:s,children:[b.jsx(Ko,{}),"Edit"]}),b.jsxs("li",{className:"Element",onClick:a,children:[b.jsx(Xo,{}),"Delete"]})]})}const Jo=le.div`
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
      content: url(${tt});
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
      content: url(${Jt});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 58px;
    }
  }
`;function Qo({word:t,handleClickClose:e}){const i=lt(),{values:r,errors:n,touched:a,isValid:s,handleChange:u,handleSubmit:o}=Qt({initialValues:{en:`${t.en}`,ua:`${t.ua}`,category:t.category,isIrregular:t.isIrregular},validationSchema:Qn,onSubmit:d=>{i(Zn({edit:d,id:t._id})).then(m=>{!m.error&&e()})}}),{getInputAlert:l,getInputClass:c}=en(r,a,n);return b.jsxs(Jo,{children:[b.jsx(He,{className:"ButtonClose",onClick:e}),b.jsxs("form",{className:"Form",children:[b.jsxs("div",{className:"UkrainianContainer",id:"ukrainian",children:[b.jsxs("div",{className:"InputImagContainer",children:[b.jsx(nn,{className:"IconCountry"})," Ukrainian"]}),b.jsx("input",{id:"ukrainian",className:c("Ua"),type:"text",placeholder:"Слово Українською",name:"ua",value:r.ua,onChange:u,required:!0}),l("ua")]}),b.jsxs("div",{className:"EnglishContainer",children:[b.jsxs("div",{className:"InputImagContainer",children:[b.jsx(rn,{className:"IconCountry"})," English"]}),b.jsx("input",{id:"english",className:c("En"),type:"text",placeholder:"Word in English",name:"en",value:r.en,onChange:u,required:!0}),l("en")]}),b.jsxs("ul",{className:"ButtonList",children:[b.jsx("li",{className:"ButtonAdd",type:"submit",disabled:!s,onClick:o,children:"Save"}),b.jsx("li",{className:"ButtonCancel",onClick:e,children:"Cancel"})]})]})]})}const es=le.div`
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
`;function ts({handleClickClose:t,word:e,onDelete:i}){const r=()=>{i(e).then(()=>{t()}).catch(n=>{console.error("Ошибка при удалении слова:",n)})};return b.jsxs(es,{children:[b.jsxs("h2",{className:"Title",children:["Are you sure you want to delete ",e.en,"?"]}),b.jsxs("ul",{className:"ListButton",children:[b.jsx("li",{className:"ButtonYes",onClick:r,children:"Yes"}),b.jsx("li",{className:"ButtonNo",onClick:t,children:"No"})]})]})}const ns="/VocabBuilder/assets/open-orange-book-mobile-min-c1af7270.png",is="/VocabBuilder/assets/open-orange-book-desctop-min-45107eed.png",rs=le.div`
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
    overflow: auto;
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
    background-image: url(${ns});
    position: absolute;
    bottom: 40px;
    right: 0;

    @media only screen and (min-width: 768px) {
      width: 212px;
      height: 179px;
      background-image: url(${is});
    }
  }
`;function as({handleClickClose:t}){const e=ke(i=>i.data.answers);return e&&b.jsxs(rs,{children:[b.jsx(He,{className:"ButtonClose",onClick:t}),b.jsx("h2",{className:"Title",children:"Well done"}),b.jsxs("div",{className:"ContentContainer",children:[b.jsxs("div",{className:"CorrectAnswerContainer",children:[b.jsx("p",{className:"TitleCorrectAnswer",children:"Сorrect answers: "}),b.jsx("ul",{className:"CorrectAnswerList",children:e.map((i,r)=>i.isDone===!0&&b.jsx("li",{className:"CorrectAnswerItem",children:i[i.task]},r))})]}),b.jsxs("div",{className:"MistakesContainer",children:[b.jsx("p",{className:"TitleMistakes",children:"Mistakes: "}),b.jsx("ul",{className:"MistakesList",children:e.map((i,r)=>i.isDone===!1&&b.jsx("li",{className:"MistakesItem",children:i.task==="en"?i.en:i.ua},r))})]}),b.jsx("div",{className:"Img"})]})]})}const os=document.querySelector("#modal-root");function cs({isMobileModalOpen:t,isModalOpenAddWord:e,isModalOpenClickWord:i,isModalOpenConfirmation:r,isModalOpenEdit:n,isModalOpenWellDone:a,selectedWord:s,coordinates:u,onClose:o,onEdit:l,onDelete:c,handleOpenModalConfirmation:d}){const m=h.useCallback(()=>{o()},[o]),v=x=>{x.target===x.currentTarget&&m()};return h.useEffect(()=>{const x=f=>{f.code==="Escape"&&m()};return document.addEventListener("keydown",x),document.body.style.cssText="overflow: hidden; ",()=>{document.removeEventListener("keydown",x),document.body.style.cssText="overflow: auto; "}},[m]),Zt.createPortal(b.jsxs(b.Fragment,{children:[(t||e||n||r||a)&&b.jsxs(li,{onClick:v,children:[t&&b.jsx(ui,{handleClickClose:m}),e&&b.jsx(Go,{handleClickClose:m}),n&&s&&b.jsx(Qo,{word:s,handleClickClose:m}),r&&s&&b.jsx(ts,{handleClickClose:m,word:s,onDelete:c}),a&&b.jsx(as,{handleClickClose:m})]}),i&&b.jsx(ci,{onClick:v,children:b.jsx(Zo,{coordinates:u,onClose:m,onEdit:l,onDelete:d,word:s})})]}),os)}export{cs as M,ri as S};
