import{r as m,p as be,u as Xt,a as jn,b as Pe,j as x,N as We,c as zn,m as Un,n as _n,R as St,q as Zt,v as Wn}from"./index-4ee2733a.js";import{X as Gn,c as ut,t as Yn,_ as ie,d as re,e as w,f as qn,g as Jt,h as Kn,i as Xn,j as Se,k as F,S as Zn,a as Jn,b as Qn,E as er,C as tr}from"./confirmationModal-e793beea.js";import{e as yt,c as nr,u as rr,A as ir,S as ar}from"./error-c41fa518.js";const or=n=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...n},m.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.333 10h13.334m0 0-3.334-3.333M16.667 10l-3.334 3.333"})),ur=be.div`
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
    background-image: url(${Gn});

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
`,sr=n=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...n},m.createElement("path",{fill:"#85AA9F",d:"M9.999 3.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Zm0 13.334s6.666 0 6.666-1.667c0-2-3.25-4.167-6.666-4.167C6.582 10.833 3.332 13 3.332 15c0 1.667 6.667 1.667 6.667 1.667Z"}));function lr({handleClickClose:n}){const e=Xt(),r=jn(),i=Pe(s=>s.auth.name),t=Pe(s=>s.auth.isLoggedIn),a=()=>{e(zn.logOut())};m.useEffect(()=>{t||(n(),r("/"))},[t,r,n]);const u=()=>{n()};return x.jsxs(ur,{children:[x.jsxs("div",{className:"HeaderOfModal",children:[x.jsxs("div",{className:"UserContainer",children:[x.jsx("p",{className:"UserName",children:i}),x.jsx("span",{className:"UserImag",children:x.jsx(sr,{className:"user-icon"})})]}),x.jsx("div",{className:"UserContainer"}),x.jsx(ut,{className:"ButtonClose",onClick:n})]}),x.jsxs("ul",{className:"NavList",children:[x.jsx("li",{children:x.jsx(We,{className:"NavElement",to:"/dictionary",onClick:u,children:"Dictionary"})}),x.jsx("li",{children:x.jsx(We,{className:"NavElement",to:"/recommend",onClick:u,children:"Recommend"})}),x.jsx("li",{children:x.jsx(We,{className:"NavElement",to:"/training",onClick:u,children:"Training"})}),x.jsxs("button",{className:"ButtonLogOut",onClick:a,children:["Log Out",x.jsx(or,{className:"SwitchIcon"})]})]}),x.jsx("div",{className:"Img"})]})}const cr=be.div`
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
`,dr=be.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
`,fr=be.div`
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
      content: url(${Yn});
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
      content: url(${yt});
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
      content: url(${nr});
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
      content: url(${yt});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }
`;var pr=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function hr(n){var e=n.defaultInputValue,r=e===void 0?"":e,i=n.defaultMenuIsOpen,t=i===void 0?!1:i,a=n.defaultValue,u=a===void 0?null:a,s=n.inputValue,o=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,g=n.onMenuOpen,v=n.value,b=ie(n,pr),f=m.useState(s!==void 0?s:r),p=re(f,2),h=p[0],E=p[1],S=m.useState(o!==void 0?o:t),O=re(S,2),D=O[0],I=O[1],C=m.useState(v!==void 0?v:u),A=re(C,2),P=A[0],$=A[1],z=m.useCallback(function(G,ae){typeof l=="function"&&l(G,ae),$(G)},[l]),H=m.useCallback(function(G,ae){var oe;typeof c=="function"&&(oe=c(G,ae)),E(oe!==void 0?oe:G)},[c]),Q=m.useCallback(function(){typeof g=="function"&&g(),I(!0)},[g]),ee=m.useCallback(function(){typeof d=="function"&&d(),I(!1)},[d]),B=s!==void 0?s:h,L=o!==void 0?o:D,K=v!==void 0?v:P;return w(w({},b),{},{inputValue:B,menuIsOpen:L,onChange:z,onInputChange:H,onMenuClose:ee,onMenuOpen:Q,value:K})}function mr(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function wt(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,qn(i.key),i)}}function vr(n,e,r){return e&&wt(n.prototype,e),r&&wt(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function et(n,e){return et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,t){return i.__proto__=t,i},et(n,e)}function gr(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&et(n,e)}function ke(n){return ke=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ke(n)}function br(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Er(n,e){if(e&&(Jt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xr(n)}function Cr(n){var e=br();return function(){var i=ke(n),t;if(e){var a=ke(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return Er(this,t)}}function Sr(n){if(Array.isArray(n))return Kn(n)}function yr(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function wr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(n){return Sr(n)||yr(n)||Xn(n)||wr()}function Fr(n){if(n.sheet)return n.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===n)return document.styleSheets[e]}function Or(n){var e=document.createElement("style");return e.setAttribute("data-emotion",n.key),n.nonce!==void 0&&e.setAttribute("nonce",n.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Ir=function(){function n(r){var i=this;this._insertTag=function(t){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(t,a),i.tags.push(t)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=n.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Or(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Fr(t);try{a.insertRule(i,a.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},n}(),j="-ms-",Re="-moz-",M="-webkit-",Qt="comm",lt="rule",ct="decl",Ar="@import",en="@keyframes",Dr="@layer",Mr=Math.abs,je=String.fromCharCode,Vr=Object.assign;function Pr(n,e){return N(n,0)^45?(((e<<2^N(n,0))<<2^N(n,1))<<2^N(n,2))<<2^N(n,3):0}function tn(n){return n.trim()}function kr(n,e){return(n=e.exec(n))?n[0]:n}function V(n,e,r){return n.replace(e,r)}function tt(n,e){return n.indexOf(e)}function N(n,e){return n.charCodeAt(e)|0}function me(n,e,r){return n.slice(e,r)}function X(n){return n.length}function dt(n){return n.length}function ye(n,e){return e.push(n),n}function Rr(n,e){return n.map(e).join("")}var ze=1,de=1,nn=0,U=0,R=0,fe="";function Ue(n,e,r,i,t,a,u){return{value:n,root:e,parent:r,type:i,props:t,children:a,line:ze,column:de,length:u,return:""}}function pe(n,e){return Vr(Ue("",null,null,"",null,null,0),n,{length:-n.length},e)}function Lr(){return R}function Tr(){return R=U>0?N(fe,--U):0,de--,R===10&&(de=1,ze--),R}function W(){return R=U<nn?N(fe,U++):0,de++,R===10&&(de=1,ze++),R}function J(){return N(fe,U)}function Ae(){return U}function xe(n,e){return me(fe,n,e)}function ve(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rn(n){return ze=de=1,nn=X(fe=n),U=0,[]}function an(n){return fe="",n}function De(n){return tn(xe(U-1,nt(n===91?n+2:n===40?n+1:n)))}function Br(n){for(;(R=J())&&R<33;)W();return ve(n)>2||ve(R)>3?"":" "}function Nr(n,e){for(;--e&&W()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return xe(n,Ae()+(e<6&&J()==32&&W()==32))}function nt(n){for(;W();)switch(R){case n:return U;case 34:case 39:n!==34&&n!==39&&nt(R);break;case 40:n===41&&nt(n);break;case 92:W();break}return U}function $r(n,e){for(;W()&&n+R!==47+10;)if(n+R===42+42&&J()===47)break;return"/*"+xe(e,U-1)+"*"+je(n===47?n:W())}function Hr(n){for(;!ve(J());)W();return xe(n,U)}function jr(n){return an(Me("",null,null,null,[""],n=rn(n),0,[0],n))}function Me(n,e,r,i,t,a,u,s,o){for(var l=0,c=0,d=u,g=0,v=0,b=0,f=1,p=1,h=1,E=0,S="",O=t,D=a,I=i,C=S;p;)switch(b=E,E=W()){case 40:if(b!=108&&N(C,d-1)==58){tt(C+=V(De(E),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:C+=De(E);break;case 9:case 10:case 13:case 32:C+=Br(b);break;case 92:C+=Nr(Ae()-1,7);continue;case 47:switch(J()){case 42:case 47:ye(zr($r(W(),Ae()),e,r),o);break;default:C+="/"}break;case 123*f:s[l++]=X(C)*h;case 125*f:case 59:case 0:switch(E){case 0:case 125:p=0;case 59+c:h==-1&&(C=V(C,/\f/g,"")),v>0&&X(C)-d&&ye(v>32?Ot(C+";",i,r,d-1):Ot(V(C," ","")+";",i,r,d-2),o);break;case 59:C+=";";default:if(ye(I=Ft(C,e,r,l,c,t,s,S,O=[],D=[],d),a),E===123)if(c===0)Me(C,e,I,I,O,a,d,s,D);else switch(g===99&&N(C,3)===110?100:g){case 100:case 108:case 109:case 115:Me(n,I,I,i&&ye(Ft(n,I,I,0,0,t,s,S,t,O=[],d),D),t,D,d,s,i?O:D);break;default:Me(C,I,I,I,[""],D,0,s,D)}}l=c=v=0,f=h=1,S=C="",d=u;break;case 58:d=1+X(C),v=b;default:if(f<1){if(E==123)--f;else if(E==125&&f++==0&&Tr()==125)continue}switch(C+=je(E),E*f){case 38:h=c>0?1:(C+="\f",-1);break;case 44:s[l++]=(X(C)-1)*h,h=1;break;case 64:J()===45&&(C+=De(W())),g=J(),c=d=X(S=C+=Hr(Ae())),E++;break;case 45:b===45&&X(C)==2&&(f=0)}}return a}function Ft(n,e,r,i,t,a,u,s,o,l,c){for(var d=t-1,g=t===0?a:[""],v=dt(g),b=0,f=0,p=0;b<i;++b)for(var h=0,E=me(n,d+1,d=Mr(f=u[b])),S=n;h<v;++h)(S=tn(f>0?g[h]+" "+E:V(E,/&\f/g,g[h])))&&(o[p++]=S);return Ue(n,e,r,t===0?lt:s,o,l,c)}function zr(n,e,r){return Ue(n,e,r,Qt,je(Lr()),me(n,2,-2),0)}function Ot(n,e,r,i){return Ue(n,e,r,ct,me(n,0,i),me(n,i+1,-1),i)}function ce(n,e){for(var r="",i=dt(n),t=0;t<i;t++)r+=e(n[t],t,n,e)||"";return r}function Ur(n,e,r,i){switch(n.type){case Dr:if(n.children.length)break;case Ar:case ct:return n.return=n.return||n.value;case Qt:return"";case en:return n.return=n.value+"{"+ce(n.children,i)+"}";case lt:n.value=n.props.join(",")}return X(r=ce(n.children,i))?n.return=n.value+"{"+r+"}":""}function _r(n){var e=dt(n);return function(r,i,t,a){for(var u="",s=0;s<e;s++)u+=n[s](r,i,t,a)||"";return u}}function Wr(n){return function(e){e.root||(e=e.return)&&n(e)}}var Gr=function(e,r,i){for(var t=0,a=0;t=a,a=J(),t===38&&a===12&&(r[i]=1),!ve(a);)W();return xe(e,U)},Yr=function(e,r){var i=-1,t=44;do switch(ve(t)){case 0:t===38&&J()===12&&(r[i]=1),e[i]+=Gr(U-1,r,i);break;case 2:e[i]+=De(t);break;case 4:if(t===44){e[++i]=J()===58?"&\f":"",r[i]=e[i].length;break}default:e[i]+=je(t)}while(t=W());return e},qr=function(e,r){return an(Yr(rn(e),r))},It=new WeakMap,Kr=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,i=e.parent,t=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!It.get(i))&&!t){It.set(e,!0);for(var a=[],u=qr(r,a),s=i.props,o=0,l=0;o<u.length;o++)for(var c=0;c<s.length;c++,l++)e.props[l]=a[o]?u[o].replace(/&\f/g,s[c]):s[c]+" "+u[o]}}},Xr=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function on(n,e){switch(Pr(n,e)){case 5103:return M+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return M+n+Re+n+j+n+n;case 6828:case 4268:return M+n+j+n+n;case 6165:return M+n+j+"flex-"+n+n;case 5187:return M+n+V(n,/(\w+).+(:[^]+)/,M+"box-$1$2"+j+"flex-$1$2")+n;case 5443:return M+n+j+"flex-item-"+V(n,/flex-|-self/,"")+n;case 4675:return M+n+j+"flex-line-pack"+V(n,/align-content|flex-|-self/,"")+n;case 5548:return M+n+j+V(n,"shrink","negative")+n;case 5292:return M+n+j+V(n,"basis","preferred-size")+n;case 6060:return M+"box-"+V(n,"-grow","")+M+n+j+V(n,"grow","positive")+n;case 4554:return M+V(n,/([^-])(transform)/g,"$1"+M+"$2")+n;case 6187:return V(V(V(n,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),n,"")+n;case 5495:case 3959:return V(n,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return V(V(n,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+n+n;case 4095:case 3583:case 4068:case 2532:return V(n,/(.+)-inline(.+)/,M+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(X(n)-1-e>6)switch(N(n,e+1)){case 109:if(N(n,e+4)!==45)break;case 102:return V(n,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Re+(N(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~tt(n,"stretch")?on(V(n,"stretch","fill-available"),e)+n:n}break;case 4949:if(N(n,e+1)!==115)break;case 6444:switch(N(n,X(n)-3-(~tt(n,"!important")&&10))){case 107:return V(n,":",":"+M)+n;case 101:return V(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(N(n,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+j+"$2box$3")+n}break;case 5936:switch(N(n,e+11)){case 114:return M+n+j+V(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return M+n+j+V(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return M+n+j+V(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return M+n+j+n+n}return n}var Zr=function(e,r,i,t){if(e.length>-1&&!e.return)switch(e.type){case ct:e.return=on(e.value,e.length);break;case en:return ce([pe(e,{value:V(e.value,"@","@"+M)})],t);case lt:if(e.length)return Rr(e.props,function(a){switch(kr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ce([pe(e,{props:[V(a,/:(read-\w+)/,":"+Re+"$1")]})],t);case"::placeholder":return ce([pe(e,{props:[V(a,/:(plac\w+)/,":"+M+"input-$1")]}),pe(e,{props:[V(a,/:(plac\w+)/,":"+Re+"$1")]}),pe(e,{props:[V(a,/:(plac\w+)/,j+"input-$1")]})],t)}return""})}},Jr=[Zr],Qr=function(e){var r=e.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(f){var p=f.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var t=e.stylisPlugins||Jr,a={},u,s=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var p=f.getAttribute("data-emotion").split(" "),h=1;h<p.length;h++)a[p[h]]=!0;s.push(f)});var o,l=[Kr,Xr];{var c,d=[Ur,Wr(function(f){c.insert(f)})],g=_r(l.concat(t,d)),v=function(p){return ce(jr(p),g)};o=function(p,h,E,S){c=E,v(p?p+"{"+h.styles+"}":h.styles),S&&(b.inserted[h.name]=!0)}}var b={key:r,sheet:new Ir({key:r,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:o};return b.sheet.hydrate(s),b},ei=!0;function ti(n,e,r){var i="";return r.split(" ").forEach(function(t){n[t]!==void 0?e.push(n[t]+";"):i+=t+" "}),i}var un=function(e,r,i){var t=e.key+"-"+r.name;(i===!1||ei===!1)&&e.registered[t]===void 0&&(e.registered[t]=r.styles)},ni=function(e,r,i){un(e,r,i);var t=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var a=r;do e.insert(r===a?"."+t:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function ri(n){for(var e=0,r,i=0,t=n.length;t>=4;++i,t-=4)r=n.charCodeAt(i)&255|(n.charCodeAt(++i)&255)<<8|(n.charCodeAt(++i)&255)<<16|(n.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(t){case 3:e^=(n.charCodeAt(i+2)&255)<<16;case 2:e^=(n.charCodeAt(i+1)&255)<<8;case 1:e^=n.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var ii=/[A-Z]|^ms/g,ai=/_EMO_([^_]+?)_([^]*?)_EMO_/g,sn=function(e){return e.charCodeAt(1)===45},At=function(e){return e!=null&&typeof e!="boolean"},Ge=Un(function(n){return sn(n)?n:n.replace(ii,"-$&").toLowerCase()}),Dt=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(ai,function(i,t,a){return Z={name:t,styles:a,next:Z},t})}return _n[e]!==1&&!sn(e)&&typeof r=="number"&&r!==0?r+"px":r};function ge(n,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return Z={name:r.name,styles:r.styles,next:Z},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)Z={name:i.name,styles:i.styles,next:Z},i=i.next;var t=r.styles+";";return t}return oi(n,e,r)}case"function":{if(n!==void 0){var a=Z,u=r(n);return Z=a,ge(n,e,u)}break}}if(e==null)return r;var s=e[r];return s!==void 0?s:r}function oi(n,e,r){var i="";if(Array.isArray(r))for(var t=0;t<r.length;t++)i+=ge(n,e,r[t])+";";else for(var a in r){var u=r[a];if(typeof u!="object")e!=null&&e[u]!==void 0?i+=a+"{"+e[u]+"}":At(u)&&(i+=Ge(a)+":"+Dt(a,u)+";");else if(Array.isArray(u)&&typeof u[0]=="string"&&(e==null||e[u[0]]===void 0))for(var s=0;s<u.length;s++)At(u[s])&&(i+=Ge(a)+":"+Dt(a,u[s])+";");else{var o=ge(n,e,u);switch(a){case"animation":case"animationName":{i+=Ge(a)+":"+o+";";break}default:i+=a+"{"+o+"}"}}}return i}var Mt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Z,ln=function(e,r,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var t=!0,a="";Z=void 0;var u=e[0];u==null||u.raw===void 0?(t=!1,a+=ge(i,r,u)):a+=u[0];for(var s=1;s<e.length;s++)a+=ge(i,r,e[s]),t&&(a+=u[s]);Mt.lastIndex=0;for(var o="",l;(l=Mt.exec(a))!==null;)o+="-"+l[1];var c=ri(a)+o;return{name:c,styles:a,next:Z}},ui=function(e){return e()},si=St["useInsertionEffect"]?St["useInsertionEffect"]:!1,li=si||ui,ft={}.hasOwnProperty,cn=m.createContext(typeof HTMLElement<"u"?Qr({key:"css"}):null);cn.Provider;var ci=function(e){return m.forwardRef(function(r,i){var t=m.useContext(cn);return e(r,t,i)})},di=m.createContext({}),rt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",fi=function(e,r){var i={};for(var t in r)ft.call(r,t)&&(i[t]=r[t]);return i[rt]=e,i},pi=function(e){var r=e.cache,i=e.serialized,t=e.isStringTag;return un(r,i,t),li(function(){return ni(r,i,t)}),null},hi=ci(function(n,e,r){var i=n.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var t=n[rt],a=[i],u="";typeof n.className=="string"?u=ti(e.registered,a,n.className):n.className!=null&&(u=n.className+" ");var s=ln(a,void 0,m.useContext(di));u+=e.key+"-"+s.name;var o={};for(var l in n)ft.call(n,l)&&l!=="css"&&l!==rt&&(o[l]=n[l]);return o.ref=r,o.className=u,m.createElement(m.Fragment,null,m.createElement(pi,{cache:e,serialized:s,isStringTag:typeof t=="string"}),m.createElement(t,o))}),mi=hi,y=function(e,r){var i=arguments;if(r==null||!ft.call(r,"css"))return m.createElement.apply(void 0,i);var t=i.length,a=new Array(t);a[0]=mi,a[1]=fi(e,r);for(var u=2;u<t;u++)a[u]=i[u];return m.createElement.apply(null,a)};function pt(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return ln(e)}var vi=function(){var e=pt.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function gi(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const bi=Math.min,xi=Math.max,Le=Math.round,we=Math.floor,Te=n=>({x:n,y:n});function Ei(n){const{x:e,y:r,width:i,height:t}=n;return{width:i,height:t,top:r,left:e,right:e+i,bottom:r+t,x:e,y:r}}function dn(n){return pn(n)?(n.nodeName||"").toLowerCase():"#document"}function q(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function fn(n){var e;return(e=(pn(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function pn(n){return n instanceof Node||n instanceof q(n).Node}function it(n){return n instanceof Element||n instanceof q(n).Element}function ht(n){return n instanceof HTMLElement||n instanceof q(n).HTMLElement}function Vt(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof q(n).ShadowRoot}function hn(n){const{overflow:e,overflowX:r,overflowY:i,display:t}=mt(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(t)}function Ci(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Si(n){return["html","body","#document"].includes(dn(n))}function mt(n){return q(n).getComputedStyle(n)}function yi(n){if(dn(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Vt(n)&&n.host||fn(n);return Vt(e)?e.host:e}function mn(n){const e=yi(n);return Si(e)?n.ownerDocument?n.ownerDocument.body:n.body:ht(e)&&hn(e)?e:mn(e)}function Be(n,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const t=mn(n),a=t===((i=n.ownerDocument)==null?void 0:i.body),u=q(t);return a?e.concat(u,u.visualViewport||[],hn(t)?t:[],u.frameElement&&r?Be(u.frameElement):[]):e.concat(t,Be(t,[],r))}function wi(n){const e=mt(n);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const t=ht(n),a=t?n.offsetWidth:r,u=t?n.offsetHeight:i,s=Le(r)!==a||Le(i)!==u;return s&&(r=a,i=u),{width:r,height:i,$:s}}function vt(n){return it(n)?n:n.contextElement}function Ye(n){const e=vt(n);if(!ht(e))return Te(1);const r=e.getBoundingClientRect(),{width:i,height:t,$:a}=wi(e);let u=(a?Le(r.width):r.width)/i,s=(a?Le(r.height):r.height)/t;return(!u||!Number.isFinite(u))&&(u=1),(!s||!Number.isFinite(s))&&(s=1),{x:u,y:s}}const Fi=Te(0);function Oi(n){const e=q(n);return!Ci()||!e.visualViewport?Fi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ii(n,e,r){return e===void 0&&(e=!1),!r||e&&r!==q(n)?!1:e}function Pt(n,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const t=n.getBoundingClientRect(),a=vt(n);let u=Te(1);e&&(i?it(i)&&(u=Ye(i)):u=Ye(n));const s=Ii(a,r,i)?Oi(a):Te(0);let o=(t.left+s.x)/u.x,l=(t.top+s.y)/u.y,c=t.width/u.x,d=t.height/u.y;if(a){const g=q(a),v=i&&it(i)?q(i):i;let b=g,f=b.frameElement;for(;f&&i&&v!==b;){const p=Ye(f),h=f.getBoundingClientRect(),E=mt(f),S=h.left+(f.clientLeft+parseFloat(E.paddingLeft))*p.x,O=h.top+(f.clientTop+parseFloat(E.paddingTop))*p.y;o*=p.x,l*=p.y,c*=p.x,d*=p.y,o+=S,l+=O,b=q(f),f=b.frameElement}}return Ei({width:c,height:d,x:o,y:l})}function Ai(n,e){let r=null,i;const t=fn(n);function a(){var s;clearTimeout(i),(s=r)==null||s.disconnect(),r=null}function u(s,o){s===void 0&&(s=!1),o===void 0&&(o=1),a();const{left:l,top:c,width:d,height:g}=n.getBoundingClientRect();if(s||e(),!d||!g)return;const v=we(c),b=we(t.clientWidth-(l+d)),f=we(t.clientHeight-(c+g)),p=we(l),E={rootMargin:-v+"px "+-b+"px "+-f+"px "+-p+"px",threshold:xi(0,bi(1,o))||1};let S=!0;function O(D){const I=D[0].intersectionRatio;if(I!==o){if(!S)return u();I?u(!1,I):i=setTimeout(()=>{u(!1,1e-7)},1e3)}S=!1}try{r=new IntersectionObserver(O,{...E,root:t.ownerDocument})}catch{r=new IntersectionObserver(O,E)}r.observe(n)}return u(!0),a}function Di(n,e,r,i){i===void 0&&(i={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:o=!1}=i,l=vt(n),c=t||a?[...l?Be(l):[],...Be(e)]:[];c.forEach(h=>{t&&h.addEventListener("scroll",r,{passive:!0}),a&&h.addEventListener("resize",r)});const d=l&&s?Ai(l,r):null;let g=-1,v=null;u&&(v=new ResizeObserver(h=>{let[E]=h;E&&E.target===l&&v&&(v.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var S;(S=v)==null||S.observe(e)})),r()}),l&&!o&&v.observe(l),v.observe(e));let b,f=o?Pt(n):null;o&&p();function p(){const h=Pt(n);f&&(h.x!==f.x||h.y!==f.y||h.width!==f.width||h.height!==f.height)&&r(),f=h,b=requestAnimationFrame(p)}return r(),()=>{var h;c.forEach(E=>{t&&E.removeEventListener("scroll",r),a&&E.removeEventListener("resize",r)}),d==null||d(),(h=v)==null||h.disconnect(),v=null,o&&cancelAnimationFrame(b)}}var at=m.useLayoutEffect,Mi=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ne=function(){};function Vi(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Pi(n,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),t=2;t<r;t++)i[t-2]=arguments[t];var a=[].concat(i);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(Vi(n,u)));return a.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var kt=function(e){return ji(e)?e.filter(Boolean):Jt(e)==="object"&&e!==null?[e]:[]},vn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=ie(e,Mi);return w({},r)},k=function(e,r,i){var t=e.cx,a=e.getStyles,u=e.getClassNames,s=e.className;return{css:a(r,e),className:t(i??{},u(r,e),s)}};function _e(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function ki(n){return _e(n)?window.innerHeight:n.clientHeight}function gn(n){return _e(n)?window.pageYOffset:n.scrollTop}function $e(n,e){if(_e(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Ri(n){var e=getComputedStyle(n),r=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(r&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Li(n,e,r,i){return r*((n=n/i-1)*n*n+1)+e}function Fe(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ne,t=gn(n),a=e-t,u=10,s=0;function o(){s+=u;var l=Li(s,t,a,r);$e(n,l),s<r?window.requestAnimationFrame(o):i(n)}o()}function Rt(n,e){var r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),t=e.offsetHeight/3;i.bottom+t>r.bottom?$e(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):i.top-t<r.top&&$e(n,Math.max(e.offsetTop-t,0))}function Ti(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Lt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Bi(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var bn=!1,Ni={get passive(){return bn=!0}},Oe=typeof window<"u"?window:{};Oe.addEventListener&&Oe.removeEventListener&&(Oe.addEventListener("p",Ne,Ni),Oe.removeEventListener("p",Ne,!1));var $i=bn;function Hi(n){return n!=null}function ji(n){return Array.isArray(n)}function Ie(n,e,r){return n?e:r}var zi=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),t=1;t<r;t++)i[t-1]=arguments[t];var a=Object.entries(e).filter(function(u){var s=re(u,1),o=s[0];return!i.includes(o)});return a.reduce(function(u,s){var o=re(s,2),l=o[0],c=o[1];return u[l]=c,u},{})},Ui=["children","innerProps"],_i=["children","innerProps"];function Wi(n){var e=n.maxHeight,r=n.menuEl,i=n.minHeight,t=n.placement,a=n.shouldScroll,u=n.isFixedPosition,s=n.controlHeight,o=Ri(r),l={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return l;var c=o.getBoundingClientRect(),d=c.height,g=r.getBoundingClientRect(),v=g.bottom,b=g.height,f=g.top,p=r.offsetParent.getBoundingClientRect(),h=p.top,E=u?window.innerHeight:ki(o),S=gn(o),O=parseInt(getComputedStyle(r).marginBottom,10),D=parseInt(getComputedStyle(r).marginTop,10),I=h-D,C=E-f,A=I+S,P=d-S-f,$=v-E+S+O,z=S+f-D,H=160;switch(t){case"auto":case"bottom":if(C>=b)return{placement:"bottom",maxHeight:e};if(P>=b&&!u)return a&&Fe(o,$,H),{placement:"bottom",maxHeight:e};if(!u&&P>=i||u&&C>=i){a&&Fe(o,$,H);var Q=u?C-O:P-O;return{placement:"bottom",maxHeight:Q}}if(t==="auto"||u){var ee=e,B=u?I:A;return B>=i&&(ee=Math.min(B-O-s,e)),{placement:"top",maxHeight:ee}}if(t==="bottom")return a&&$e(o,$),{placement:"bottom",maxHeight:e};break;case"top":if(I>=b)return{placement:"top",maxHeight:e};if(A>=b&&!u)return a&&Fe(o,z,H),{placement:"top",maxHeight:e};if(!u&&A>=i||u&&I>=i){var L=e;return(!u&&A>=i||u&&I>=i)&&(L=u?I-D:A-D),a&&Fe(o,z,H),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function Gi(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var xn=function(e){return e==="auto"?"bottom":e},Yi=function(e,r){var i,t=e.placement,a=e.theme,u=a.borderRadius,s=a.spacing,o=a.colors;return w((i={label:"menu"},Se(i,Gi(t),"100%"),Se(i,"position","absolute"),Se(i,"width","100%"),Se(i,"zIndex",1),i),r?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},En=m.createContext(null),qi=function(e){var r=e.children,i=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,s=e.menuShouldScrollIntoView,o=e.theme,l=m.useContext(En)||{},c=l.setPortalPlacement,d=m.useRef(null),g=m.useState(t),v=re(g,2),b=v[0],f=v[1],p=m.useState(null),h=re(p,2),E=h[0],S=h[1],O=o.spacing.controlHeight;return at(function(){var D=d.current;if(D){var I=u==="fixed",C=s&&!I,A=Wi({maxHeight:t,menuEl:D,minHeight:i,placement:a,shouldScroll:C,isFixedPosition:I,controlHeight:O});f(A.maxHeight),S(A.placement),c==null||c(A.placement)}},[t,a,u,s,i,c,O]),r({ref:d,placerProps:w(w({},e),{},{placement:E||xn(a),maxHeight:b})})},Ki=function(e){var r=e.children,i=e.innerRef,t=e.innerProps;return y("div",F({},k(e,"menu",{menu:!0}),{ref:i},t),r)},Xi=Ki,Zi=function(e,r){var i=e.maxHeight,t=e.theme.spacing.baseUnit;return w({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:t,paddingTop:t})},Ji=function(e){var r=e.children,i=e.innerProps,t=e.innerRef,a=e.isMulti;return y("div",F({},k(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},i),r)},Cn=function(e,r){var i=e.theme,t=i.spacing.baseUnit,a=i.colors;return w({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},Qi=Cn,ea=Cn,ta=function(e){var r=e.children,i=r===void 0?"No options":r,t=e.innerProps,a=ie(e,Ui);return y("div",F({},k(w(w({},a),{},{children:i,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),i)},na=function(e){var r=e.children,i=r===void 0?"Loading...":r,t=e.innerProps,a=ie(e,_i);return y("div",F({},k(w(w({},a),{},{children:i,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),i)},ra=function(e){var r=e.rect,i=e.offset,t=e.position;return{left:r.left,position:t,top:i,width:r.width,zIndex:1}},ia=function(e){var r=e.appendTo,i=e.children,t=e.controlElement,a=e.innerProps,u=e.menuPlacement,s=e.menuPosition,o=m.useRef(null),l=m.useRef(null),c=m.useState(xn(u)),d=re(c,2),g=d[0],v=d[1],b=m.useMemo(function(){return{setPortalPlacement:v}},[]),f=m.useState(null),p=re(f,2),h=p[0],E=p[1],S=m.useCallback(function(){if(t){var C=Ti(t),A=s==="fixed"?0:window.pageYOffset,P=C[g]+A;(P!==(h==null?void 0:h.offset)||C.left!==(h==null?void 0:h.rect.left)||C.width!==(h==null?void 0:h.rect.width))&&E({offset:P,rect:C})}},[t,s,g,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);at(function(){S()},[S]);var O=m.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&o.current&&(l.current=Di(t,o.current,S,{elementResize:"ResizeObserver"in window}))},[t,S]);at(function(){O()},[O]);var D=m.useCallback(function(C){o.current=C,O()},[O]);if(!r&&s!=="fixed"||!h)return null;var I=y("div",F({ref:D},k(w(w({},e),{},{offset:h.offset,position:s,rect:h.rect}),"menuPortal",{"menu-portal":!0}),a),i);return y(En.Provider,{value:b},r?Zt.createPortal(I,r):I)},aa=function(e){var r=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},oa=function(e){var r=e.children,i=e.innerProps,t=e.isDisabled,a=e.isRtl;return y("div",F({},k(e,"container",{"--is-disabled":t,"--is-rtl":a}),i),r)},ua=function(e,r){var i=e.theme.spacing,t=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return w({alignItems:"center",display:t&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},sa=function(e){var r=e.children,i=e.innerProps,t=e.isMulti,a=e.hasValue;return y("div",F({},k(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),i),r)},la=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ca=function(e){var r=e.children,i=e.innerProps;return y("div",F({},k(e,"indicatorsContainer",{indicators:!0}),i),r)},Tt,da=["size"],fa=["innerProps","isRtl","size"],pa={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Sn=function(e){var r=e.size,i=ie(e,da);return y("svg",F({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:pa},i))},gt=function(e){return y(Sn,F({size:20},e),y("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},yn=function(e){return y(Sn,F({size:20},e),y("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},wn=function(e,r){var i=e.isFocused,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return w({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?u.neutral60:u.neutral20,padding:a*2,":hover":{color:i?u.neutral80:u.neutral40}})},ha=wn,ma=function(e){var r=e.children,i=e.innerProps;return y("div",F({},k(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||y(yn,null))},va=wn,ga=function(e){var r=e.children,i=e.innerProps;return y("div",F({},k(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||y(gt,null))},ba=function(e,r){var i=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return w({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},xa=function(e){var r=e.innerProps;return y("span",F({},r,k(e,"indicatorSeparator",{"indicator-separator":!0})))},Ea=vi(Tt||(Tt=gi([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ca=function(e,r){var i=e.isFocused,t=e.size,a=e.theme,u=a.colors,s=a.spacing.baseUnit;return w({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?u.neutral60:u.neutral20,padding:s*2})},qe=function(e){var r=e.delay,i=e.offset;return y("span",{css:pt({animation:"".concat(Ea," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Sa=function(e){var r=e.innerProps,i=e.isRtl,t=e.size,a=t===void 0?4:t,u=ie(e,fa);return y("div",F({},k(w(w({},u),{},{innerProps:r,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),y(qe,{delay:0,offset:i}),y(qe,{delay:160,offset:!0}),y(qe,{delay:320,offset:!i}))},ya=function(e,r){var i=e.isDisabled,t=e.isFocused,a=e.theme,u=a.colors,s=a.borderRadius,o=a.spacing;return w({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?u.neutral5:u.neutral0,borderColor:i?u.neutral10:t?u.primary:u.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},wa=function(e){var r=e.children,i=e.isDisabled,t=e.isFocused,a=e.innerRef,u=e.innerProps,s=e.menuIsOpen;return y("div",F({ref:a},k(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":t,"control--menu-is-open":s}),u,{"aria-disabled":i||void 0}),r)},Fa=wa,Oa=["data"],Ia=function(e,r){var i=e.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},Aa=function(e){var r=e.children,i=e.cx,t=e.getStyles,a=e.getClassNames,u=e.Heading,s=e.headingProps,o=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return y("div",F({},k(e,"group",{group:!0}),o),y(u,F({},s,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:i}),l),y("div",null,r))},Da=function(e,r){var i=e.theme,t=i.colors,a=i.spacing;return w({label:"group",cursor:"default",display:"block"},r?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ma=function(e){var r=vn(e);r.data;var i=ie(r,Oa);return y("div",F({},k(e,"groupHeading",{"group-heading":!0}),i))},Va=Aa,Pa=["innerRef","isDisabled","isHidden","inputClassName"],ka=function(e,r){var i=e.isDisabled,t=e.value,a=e.theme,u=a.spacing,s=a.colors;return w(w({visibility:i?"hidden":"visible",transform:t?"translateZ(0)":""},Ra),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:s.neutral80})},Fn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ra={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":w({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Fn)},La=function(e){return w({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Fn)},Ta=function(e){var r=e.cx,i=e.value,t=vn(e),a=t.innerRef,u=t.isDisabled,s=t.isHidden,o=t.inputClassName,l=ie(t,Pa);return y("div",F({},k(e,"input",{"input-container":!0}),{"data-value":i||""}),y("input",F({className:r({input:!0},o),ref:a,style:La(s),disabled:u},l)))},Ba=Ta,Na=function(e,r){var i=e.theme,t=i.spacing,a=i.borderRadius,u=i.colors;return w({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},$a=function(e,r){var i=e.theme,t=i.borderRadius,a=i.colors,u=e.cropWithEllipsis;return w({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Ha=function(e,r){var i=e.theme,t=i.spacing,a=i.borderRadius,u=i.colors,s=e.isFocused;return w({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:s?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},On=function(e){var r=e.children,i=e.innerProps;return y("div",i,r)},ja=On,za=On;function Ua(n){var e=n.children,r=n.innerProps;return y("div",F({role:"button"},r),e||y(gt,{size:14}))}var _a=function(e){var r=e.children,i=e.components,t=e.data,a=e.innerProps,u=e.isDisabled,s=e.removeProps,o=e.selectProps,l=i.Container,c=i.Label,d=i.Remove;return y(l,{data:t,innerProps:w(w({},k(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},y(c,{data:t,innerProps:w({},k(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},r),y(d,{data:t,innerProps:w(w({},k(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},s),selectProps:o}))},Wa=_a,Ga=function(e,r){var i=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.theme,s=u.spacing,o=u.colors;return w({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?o.primary:t?o.primary25:"transparent",color:i?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?o.primary:o.primary50}})},Ya=function(e){var r=e.children,i=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.innerRef,s=e.innerProps;return y("div",F({},k(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":t,"option--is-selected":a}),{ref:u,"aria-disabled":i},s),r)},qa=Ya,Ka=function(e,r){var i=e.theme,t=i.spacing,a=i.colors;return w({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Xa=function(e){var r=e.children,i=e.innerProps;return y("div",F({},k(e,"placeholder",{placeholder:!0}),i),r)},Za=Xa,Ja=function(e,r){var i=e.isDisabled,t=e.theme,a=t.spacing,u=t.colors;return w({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Qa=function(e){var r=e.children,i=e.isDisabled,t=e.innerProps;return y("div",F({},k(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),t),r)},eo=Qa,to={ClearIndicator:ga,Control:Fa,DropdownIndicator:ma,DownChevron:yn,CrossIcon:gt,Group:Va,GroupHeading:Ma,IndicatorsContainer:ca,IndicatorSeparator:xa,Input:Ba,LoadingIndicator:Sa,Menu:Xi,MenuList:Ji,MenuPortal:ia,LoadingMessage:na,NoOptionsMessage:ta,MultiValue:Wa,MultiValueContainer:ja,MultiValueLabel:za,MultiValueRemove:Ua,Option:qa,Placeholder:Za,SelectContainer:oa,SingleValue:eo,ValueContainer:sa},no=function(e){return w(w({},to),e.components)},Bt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function ro(n,e){return!!(n===e||Bt(n)&&Bt(e))}function io(n,e){if(n.length!==e.length)return!1;for(var r=0;r<n.length;r++)if(!ro(n[r],e[r]))return!1;return!0}function ao(n,e){e===void 0&&(e=io);var r=null;function i(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(r&&r.lastThis===this&&e(t,r.lastArgs))return r.lastResult;var u=n.apply(this,t);return r={lastResult:u,lastArgs:t,lastThis:this},u}return i.clear=function(){r=null},i}var oo={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},uo=function(e){return y("span",F({css:oo},e))},Nt=uo,so={guidance:function(e){var r=e.isSearchable,i=e.isMulti,t=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,i=e.label,t=i===void 0?"":i,a=e.labels,u=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var r=e.context,i=e.focused,t=e.options,a=e.label,u=a===void 0?"":a,s=e.selectValue,o=e.isDisabled,l=e.isSelected,c=e.isAppleDevice,d=function(f,p){return f&&f.length?"".concat(f.indexOf(p)+1," of ").concat(f.length):""};if(r==="value"&&s)return"value ".concat(u," focused, ").concat(d(s,i),".");if(r==="menu"&&c){var g=o?" disabled":"",v="".concat(l?" selected":"").concat(g);return"".concat(u).concat(v,", ").concat(d(t,i),".")}return""},onFilter:function(e){var r=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},lo=function(e){var r=e.ariaSelection,i=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,u=e.isFocused,s=e.selectValue,o=e.selectProps,l=e.id,c=e.isAppleDevice,d=o.ariaLiveMessages,g=o.getOptionLabel,v=o.inputValue,b=o.isMulti,f=o.isOptionDisabled,p=o.isSearchable,h=o.menuIsOpen,E=o.options,S=o.screenReaderStatus,O=o.tabSelectsValue,D=o.isLoading,I=o["aria-label"],C=o["aria-live"],A=m.useMemo(function(){return w(w({},so),d||{})},[d]),P=m.useMemo(function(){var B="";if(r&&A.onChange){var L=r.option,K=r.options,G=r.removedValue,ae=r.removedValues,oe=r.value,Ee=function(ne){return Array.isArray(ne)?null:ne},T=G||L||Ee(oe),_=T?g(T):"",te=K||ae||void 0,ue=te?te.map(g):[],Y=w({isDisabled:T&&f(T,s),label:_,labels:ue},r);B=A.onChange(Y)}return B},[r,A,f,s,g]),$=m.useMemo(function(){var B="",L=i||t,K=!!(i&&s&&s.includes(i));if(L&&A.onFocus){var G={focused:L,label:g(L),isDisabled:f(L,s),isSelected:K,options:a,context:L===i?"menu":"value",selectValue:s,isAppleDevice:c};B=A.onFocus(G)}return B},[i,t,g,f,A,a,s,c]),z=m.useMemo(function(){var B="";if(h&&E.length&&!D&&A.onFilter){var L=S({count:a.length});B=A.onFilter({inputValue:v,resultsMessage:L})}return B},[a,v,h,A,E,S,D]),H=(r==null?void 0:r.action)==="initial-input-focus",Q=m.useMemo(function(){var B="";if(A.guidance){var L=t?"value":h?"menu":"input";B=A.guidance({"aria-label":I,context:L,isDisabled:i&&f(i,s),isMulti:b,isSearchable:p,tabSelectsValue:O,isInitialFocus:H})}return B},[I,i,t,b,f,p,h,A,s,O,H]),ee=y(m.Fragment,null,y("span",{id:"aria-selection"},P),y("span",{id:"aria-focused"},$),y("span",{id:"aria-results"},z),y("span",{id:"aria-guidance"},Q));return y(m.Fragment,null,y(Nt,{id:l},H&&ee),y(Nt,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!H&&ee))},co=lo,ot=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],fo=new RegExp("["+ot.map(function(n){return n.letters}).join("")+"]","g"),In={};for(var Ke=0;Ke<ot.length;Ke++)for(var Xe=ot[Ke],Ze=0;Ze<Xe.letters.length;Ze++)In[Xe.letters[Ze]]=Xe.base;var An=function(e){return e.replace(fo,function(r){return In[r]})},po=ao(An),$t=function(e){return e.replace(/^\s+|\s+$/g,"")},ho=function(e){return"".concat(e.label," ").concat(e.value)},mo=function(e){return function(r,i){if(r.data.__isNew__)return!0;var t=w({ignoreCase:!0,ignoreAccents:!0,stringify:ho,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,u=t.ignoreAccents,s=t.stringify,o=t.trim,l=t.matchFrom,c=o?$t(i):i,d=o?$t(s(r)):s(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=po(c),d=An(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},vo=["innerRef"];function go(n){var e=n.innerRef,r=ie(n,vo),i=zi(r,"onExited","in","enter","exit","appear");return y("input",F({ref:e},i,{css:pt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var bo=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function xo(n){var e=n.isEnabled,r=n.onBottomArrive,i=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,u=m.useRef(!1),s=m.useRef(!1),o=m.useRef(0),l=m.useRef(null),c=m.useCallback(function(p,h){if(l.current!==null){var E=l.current,S=E.scrollTop,O=E.scrollHeight,D=E.clientHeight,I=l.current,C=h>0,A=O-D-S,P=!1;A>h&&u.current&&(i&&i(p),u.current=!1),C&&s.current&&(a&&a(p),s.current=!1),C&&h>A?(r&&!u.current&&r(p),I.scrollTop=O,P=!0,u.current=!0):!C&&-h>S&&(t&&!s.current&&t(p),I.scrollTop=0,P=!0,s.current=!0),P&&bo(p)}},[r,i,t,a]),d=m.useCallback(function(p){c(p,p.deltaY)},[c]),g=m.useCallback(function(p){o.current=p.changedTouches[0].clientY},[]),v=m.useCallback(function(p){var h=o.current-p.changedTouches[0].clientY;c(p,h)},[c]),b=m.useCallback(function(p){if(p){var h=$i?{passive:!1}:!1;p.addEventListener("wheel",d,h),p.addEventListener("touchstart",g,h),p.addEventListener("touchmove",v,h)}},[v,g,d]),f=m.useCallback(function(p){p&&(p.removeEventListener("wheel",d,!1),p.removeEventListener("touchstart",g,!1),p.removeEventListener("touchmove",v,!1))},[v,g,d]);return m.useEffect(function(){if(e){var p=l.current;return b(p),function(){f(p)}}},[e,b,f]),function(p){l.current=p}}var Ht=["boxSizing","height","overflow","paddingRight","position"],jt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function zt(n){n.preventDefault()}function Ut(n){n.stopPropagation()}function _t(){var n=this.scrollTop,e=this.scrollHeight,r=n+this.offsetHeight;n===0?this.scrollTop=1:r===e&&(this.scrollTop=n-1)}function Wt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Gt=!!(typeof window<"u"&&window.document&&window.document.createElement),he=0,le={capture:!1,passive:!1};function Eo(n){var e=n.isEnabled,r=n.accountForScrollbars,i=r===void 0?!0:r,t=m.useRef({}),a=m.useRef(null),u=m.useCallback(function(o){if(Gt){var l=document.body,c=l&&l.style;if(i&&Ht.forEach(function(b){var f=c&&c[b];t.current[b]=f}),i&&he<1){var d=parseInt(t.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,v=window.innerWidth-g+d||0;Object.keys(jt).forEach(function(b){var f=jt[b];c&&(c[b]=f)}),c&&(c.paddingRight="".concat(v,"px"))}l&&Wt()&&(l.addEventListener("touchmove",zt,le),o&&(o.addEventListener("touchstart",_t,le),o.addEventListener("touchmove",Ut,le))),he+=1}},[i]),s=m.useCallback(function(o){if(Gt){var l=document.body,c=l&&l.style;he=Math.max(he-1,0),i&&he<1&&Ht.forEach(function(d){var g=t.current[d];c&&(c[d]=g)}),l&&Wt()&&(l.removeEventListener("touchmove",zt,le),o&&(o.removeEventListener("touchstart",_t,le),o.removeEventListener("touchmove",Ut,le)))}},[i]);return m.useEffect(function(){if(e){var o=a.current;return u(o),function(){s(o)}}},[e,u,s]),function(o){a.current=o}}var Co=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},So={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function yo(n){var e=n.children,r=n.lockEnabled,i=n.captureEnabled,t=i===void 0?!0:i,a=n.onBottomArrive,u=n.onBottomLeave,s=n.onTopArrive,o=n.onTopLeave,l=xo({isEnabled:t,onBottomArrive:a,onBottomLeave:u,onTopArrive:s,onTopLeave:o}),c=Eo({isEnabled:r}),d=function(v){l(v),c(v)};return y(m.Fragment,null,r&&y("div",{onClick:Co,css:So}),e(d))}var wo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Fo=function(e){var r=e.name,i=e.onFocus;return y("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:wo,value:"",onChange:function(){}})},Oo=Fo;function bt(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Io(){return bt(/^iPhone/i)}function Dn(){return bt(/^Mac/i)}function Ao(){return bt(/^iPad/i)||Dn()&&navigator.maxTouchPoints>1}function Do(){return Io()||Ao()}function Mo(){return Dn()||Do()}var Vo=function(e){return e.label},Po=function(e){return e.label},ko=function(e){return e.value},Ro=function(e){return!!e.isDisabled},Lo={clearIndicator:va,container:aa,control:ya,dropdownIndicator:ha,group:Ia,groupHeading:Da,indicatorsContainer:la,indicatorSeparator:ba,input:ka,loadingIndicator:Ca,loadingMessage:ea,menu:Yi,menuList:Zi,menuPortal:ra,multiValue:Na,multiValueLabel:$a,multiValueRemove:Ha,noOptionsMessage:Qi,option:Ga,placeholder:Ka,singleValue:Ja,valueContainer:ua},To={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Bo=4,Mn=4,No=38,$o=Mn*2,Ho={baseUnit:Mn,controlHeight:No,menuGutter:$o},Je={borderRadius:Bo,colors:To,spacing:Ho},jo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Lt(),captureMenuScroll:!Lt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:mo(),formatGroupLabel:Vo,getOptionLabel:Po,getOptionValue:ko,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Ro,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Bi(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Yt(n,e,r,i){var t=kn(n,e,r),a=Rn(n,e,r),u=Pn(n,e),s=He(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:u,value:s,index:i}}function Ve(n,e){return n.options.map(function(r,i){if("options"in r){var t=r.options.map(function(u,s){return Yt(n,u,e,s)}).filter(function(u){return Kt(n,u)});return t.length>0?{type:"group",data:r,options:t,index:i}:void 0}var a=Yt(n,r,e,i);return Kt(n,a)?a:void 0}).filter(Hi)}function Vn(n){return n.reduce(function(e,r){return r.type==="group"?e.push.apply(e,st(r.options.map(function(i){return i.data}))):e.push(r.data),e},[])}function qt(n,e){return n.reduce(function(r,i){return i.type==="group"?r.push.apply(r,st(i.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(i.index,"-").concat(t.index)}}))):r.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),r},[])}function zo(n,e){return Vn(Ve(n,e))}function Kt(n,e){var r=n.inputValue,i=r===void 0?"":r,t=e.data,a=e.isSelected,u=e.label,s=e.value;return(!Tn(n)||!a)&&Ln(n,{label:u,value:s,data:t},i)}function Uo(n,e){var r=n.focusedValue,i=n.selectValue,t=i.indexOf(r);if(t>-1){var a=e.indexOf(r);if(a>-1)return r;if(t<e.length)return e[t]}return null}function _o(n,e){var r=n.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var Qe=function(e,r){var i,t=(i=e.find(function(a){return a.data===r}))===null||i===void 0?void 0:i.id;return t||null},Pn=function(e,r){return e.getOptionLabel(r)},He=function(e,r){return e.getOptionValue(r)};function kn(n,e,r){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,r):!1}function Rn(n,e,r){if(r.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,r);var i=He(n,e);return r.some(function(t){return He(n,t)===i})}function Ln(n,e,r){return n.filterOption?n.filterOption(e,r):!0}var Tn=function(e){var r=e.hideSelectedOptions,i=e.isMulti;return r===void 0?i:r},Wo=1,Bn=function(n){gr(r,n);var e=Cr(r);function r(i){var t;if(mr(this,r),t=e.call(this,i),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Mo(),t.controlRef=null,t.getControlRef=function(o){t.controlRef=o},t.focusedOptionRef=null,t.getFocusedOptionRef=function(o){t.focusedOptionRef=o},t.menuListRef=null,t.getMenuListRef=function(o){t.menuListRef=o},t.inputRef=null,t.getInputRef=function(o){t.inputRef=o},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(o,l){var c=t.props,d=c.onChange,g=c.name;l.name=g,t.ariaOnChange(o,l),d(o,l)},t.setValue=function(o,l,c){var d=t.props,g=d.closeMenuOnSelect,v=d.isMulti,b=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:b}),g&&(t.setState({inputIsHiddenAfterUpdate:!v}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(o,{action:l,option:c})},t.selectOption=function(o){var l=t.props,c=l.blurInputOnSelect,d=l.isMulti,g=l.name,v=t.state.selectValue,b=d&&t.isOptionSelected(o,v),f=t.isOptionDisabled(o,v);if(b){var p=t.getOptionValue(o);t.setValue(v.filter(function(h){return t.getOptionValue(h)!==p}),"deselect-option",o)}else if(!f)d?t.setValue([].concat(st(v),[o]),"select-option",o):t.setValue(o,"select-option");else{t.ariaOnChange(o,{action:"select-option",option:o,name:g});return}c&&t.blurInput()},t.removeValue=function(o){var l=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(o),g=c.filter(function(b){return t.getOptionValue(b)!==d}),v=Ie(l,g,g[0]||null);t.onChange(v,{action:"remove-value",removedValue:o}),t.focusInput()},t.clearValue=function(){var o=t.state.selectValue;t.onChange(Ie(t.props.isMulti,[],null),{action:"clear",removedValues:o})},t.popValue=function(){var o=t.props.isMulti,l=t.state.selectValue,c=l[l.length-1],d=l.slice(0,l.length-1),g=Ie(o,d,d[0]||null);t.onChange(g,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(o){return Qe(t.state.focusableOptionsWithIds,o)},t.getFocusableOptionsWithIds=function(){return qt(Ve(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return Pi.apply(void 0,[t.props.classNamePrefix].concat(l))},t.getOptionLabel=function(o){return Pn(t.props,o)},t.getOptionValue=function(o){return He(t.props,o)},t.getStyles=function(o,l){var c=t.props.unstyled,d=Lo[o](l,c);d.boxSizing="border-box";var g=t.props.styles[o];return g?g(d,l):d},t.getClassNames=function(o,l){var c,d;return(c=(d=t.props.classNames)[o])===null||c===void 0?void 0:c.call(d,l)},t.getElementId=function(o){return"".concat(t.state.instancePrefix,"-").concat(o)},t.getComponents=function(){return no(t.props)},t.buildCategorizedOptions=function(){return Ve(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Vn(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(o,l){t.setState({ariaSelection:w({value:o},l)})},t.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(o){t.blockOptionHover=!1},t.onControlMouseDown=function(o){if(!o.defaultPrevented){var l=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&t.onMenuClose():l&&t.openMenu("first"):(l&&(t.openAfterFocus=!0),t.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},t.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!t.props.isDisabled){var l=t.props,c=l.isMulti,d=l.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),o.preventDefault()}},t.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(t.clearValue(),o.preventDefault(),t.openAfterFocus=!1,o.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(o){typeof t.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&_e(o.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(o)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(o){var l=o.touches,c=l&&l.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(o){var l=o.touches,c=l&&l.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),g=Math.abs(c.clientY-t.initialTouchY),v=5;t.userIsDragging=d>v||g>v}},t.onTouchEnd=function(o){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(o.target)&&t.menuListRef&&!t.menuListRef.contains(o.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(o){t.userIsDragging||t.onControlMouseDown(o)},t.onClearIndicatorTouchEnd=function(o){t.userIsDragging||t.onClearIndicatorMouseDown(o)},t.onDropdownIndicatorTouchEnd=function(o){t.userIsDragging||t.onDropdownIndicatorMouseDown(o)},t.handleInputChange=function(o){var l=t.props.inputValue,c=o.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:l}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(o){t.props.onFocus&&t.props.onFocus(o),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(o){var l=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(o),t.onInputChange("",{action:"input-blur",prevInputValue:l}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(o){if(!(t.blockOptionHover||t.state.focusedOption===o)){var l=t.getFocusableOptions(),c=l.indexOf(o);t.setState({focusedOption:o,focusedOptionId:c>-1?t.getFocusedOptionId(o):null})}},t.shouldHideSelectedOptions=function(){return Tn(t.props)},t.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),t.focus()},t.onKeyDown=function(o){var l=t.props,c=l.isMulti,d=l.backspaceRemovesValue,g=l.escapeClearsValue,v=l.inputValue,b=l.isClearable,f=l.isDisabled,p=l.menuIsOpen,h=l.onKeyDown,E=l.tabSelectsValue,S=l.openMenuOnFocus,O=t.state,D=O.focusedOption,I=O.focusedValue,C=O.selectValue;if(!f&&!(typeof h=="function"&&(h(o),o.defaultPrevented))){switch(t.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||v)return;t.focusValue("previous");break;case"ArrowRight":if(!c||v)return;t.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(I)t.removeValue(I);else{if(!d)return;c?t.popValue():b&&t.clearValue()}break;case"Tab":if(t.isComposing||o.shiftKey||!p||!E||!D||S&&t.isOptionSelected(D,C))return;t.selectOption(D);break;case"Enter":if(o.keyCode===229)break;if(p){if(!D||t.isComposing)return;t.selectOption(D);break}return;case"Escape":p?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:v}),t.onMenuClose()):b&&g&&t.clearValue();break;case" ":if(v)return;if(!p){t.openMenu("first");break}if(!D)return;t.selectOption(D);break;case"ArrowUp":p?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":p?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!p)return;t.focusOption("pageup");break;case"PageDown":if(!p)return;t.focusOption("pagedown");break;case"Home":if(!p)return;t.focusOption("first");break;case"End":if(!p)return;t.focusOption("last");break;default:return}o.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++Wo),t.state.selectValue=kt(i.value),i.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),s=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=u[s],t.state.focusedOptionId=Qe(a,u[s])}return t}return vr(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Rt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,u=a.isDisabled,s=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&t.isDisabled||o&&s&&!t.menuIsOpen)&&this.focusInput(),o&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Rt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,u=this.state,s=u.selectValue,o=u.isFocused,l=this.buildFocusableOptions(),c=t==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(s[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c],focusedOptionId:this.getFocusedOptionId(l[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,u=a.selectValue,s=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(s);s||(o=-1);var l=u.length-1,c=-1;if(u.length){switch(t){case"previous":o===0?c=0:o===-1?c=l:c=o-1;break;case"next":o>-1&&o<l&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var o=0,l=s.indexOf(u);u||(l=-1),t==="up"?o=l>0?l-1:s.length-1:t==="down"?o=(l+1)%s.length:t==="pageup"?(o=l-a,o<0&&(o=0)):t==="pagedown"?(o=l+a,o>s.length-1&&(o=s.length-1)):t==="last"&&(o=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(s[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Je):w(w({},Je),this.props.theme):Je}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,u=this.getStyles,s=this.getClassNames,o=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,v=d.isRtl,b=d.options,f=this.hasValue();return{clearValue:t,cx:a,getStyles:u,getClassNames:s,getValue:o,hasValue:f,isMulti:g,isRtl:v,options:b,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,u=t.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(t,a){return kn(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Rn(this.props,t,a)}},{key:"filterOption",value:function(t,a){return Ln(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:u,selectValue:s})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,u=t.isSearchable,s=t.inputId,o=t.inputValue,l=t.tabIndex,c=t.form,d=t.menuIsOpen,g=t.required,v=this.getComponents(),b=v.Input,f=this.state,p=f.inputIsHidden,h=f.ariaSelection,E=this.commonProps,S=s||this.getElementId("input"),O=w(w(w({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?m.createElement(b,F({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:S,innerRef:this.getInputRef,isDisabled:a,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:o},O)):m.createElement(go,F({id:S,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ne,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),u=a.MultiValue,s=a.MultiValueContainer,o=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,g=this.commonProps,v=this.props,b=v.controlShouldRenderValue,f=v.isDisabled,p=v.isMulti,h=v.inputValue,E=v.placeholder,S=this.state,O=S.selectValue,D=S.focusedValue,I=S.isFocused;if(!this.hasValue()||!b)return h?null:m.createElement(d,F({},g,{key:"placeholder",isDisabled:f,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),E);if(p)return O.map(function(A,P){var $=A===D,z="".concat(t.getOptionLabel(A),"-").concat(t.getOptionValue(A));return m.createElement(u,F({},g,{components:{Container:s,Label:o,Remove:l},isFocused:$,isDisabled:f,key:z,index:P,removeProps:{onClick:function(){return t.removeValue(A)},onTouchEnd:function(){return t.removeValue(A)},onMouseDown:function(Q){Q.preventDefault()}},data:A}),t.formatOptionLabel(A,"value"))});if(h)return null;var C=O[0];return m.createElement(c,F({},g,{data:C,isDisabled:f}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,u=this.commonProps,s=this.props,o=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(a,F({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,u=this.commonProps,s=this.props,o=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return m.createElement(a,F({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,u=t.IndicatorSeparator;if(!a||!u)return null;var s=this.commonProps,o=this.props.isDisabled,l=this.state.isFocused;return m.createElement(u,F({},s,{isDisabled:o,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var u=this.commonProps,s=this.props.isDisabled,o=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(a,F({},u,{innerProps:l,isDisabled:s,isFocused:o}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),u=a.Group,s=a.GroupHeading,o=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,g=a.NoOptionsMessage,v=a.Option,b=this.commonProps,f=this.state.focusedOption,p=this.props,h=p.captureMenuScroll,E=p.inputValue,S=p.isLoading,O=p.loadingMessage,D=p.minMenuHeight,I=p.maxMenuHeight,C=p.menuIsOpen,A=p.menuPlacement,P=p.menuPosition,$=p.menuPortalTarget,z=p.menuShouldBlockScroll,H=p.menuShouldScrollIntoView,Q=p.noOptionsMessage,ee=p.onMenuScrollToTop,B=p.onMenuScrollToBottom;if(!C)return null;var L=function(_,te){var ue=_.type,Y=_.data,se=_.isDisabled,ne=_.isSelected,Ce=_.label,Nn=_.value,xt=f===Y,Et=se?void 0:function(){return t.onOptionHover(Y)},$n=se?void 0:function(){return t.selectOption(Y)},Ct="".concat(t.getElementId("option"),"-").concat(te),Hn={id:Ct,onClick:$n,onMouseMove:Et,onMouseOver:Et,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:ne};return m.createElement(v,F({},b,{innerProps:Hn,data:Y,isDisabled:se,isSelected:ne,key:Ct,label:Ce,type:ue,value:Nn,isFocused:xt,innerRef:xt?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(_.data,"menu"))},K;if(this.hasOptions())K=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var _=T.data,te=T.options,ue=T.index,Y="".concat(t.getElementId("group"),"-").concat(ue),se="".concat(Y,"-heading");return m.createElement(u,F({},b,{key:Y,data:_,options:te,Heading:s,headingProps:{id:se,data:T.data},label:t.formatGroupLabel(T.data)}),T.options.map(function(ne){return L(ne,"".concat(ue,"-").concat(ne.index))}))}else if(T.type==="option")return L(T,"".concat(T.index))});else if(S){var G=O({inputValue:E});if(G===null)return null;K=m.createElement(d,b,G)}else{var ae=Q({inputValue:E});if(ae===null)return null;K=m.createElement(g,b,ae)}var oe={minMenuHeight:D,maxMenuHeight:I,menuPlacement:A,menuPosition:P,menuShouldScrollIntoView:H},Ee=m.createElement(qi,F({},b,oe),function(T){var _=T.ref,te=T.placerProps,ue=te.placement,Y=te.maxHeight;return m.createElement(o,F({},b,oe,{innerRef:_,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:S,placement:ue}),m.createElement(yo,{captureEnabled:h,onTopArrive:ee,onBottomArrive:B,lockEnabled:z},function(se){return m.createElement(l,F({},b,{innerRef:function(Ce){t.getMenuListRef(Ce),se(Ce)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:t.getElementId("listbox")},isLoading:S,maxHeight:Y,focusedOption:f}),K)}))});return $||P==="fixed"?m.createElement(c,F({},b,{appendTo:$,controlElement:this.controlRef,menuPlacement:A,menuPosition:P}),Ee):Ee}},{key:"renderFormField",value:function(){var t=this,a=this.props,u=a.delimiter,s=a.isDisabled,o=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!s)return m.createElement(Oo,{name:l,onFocus:this.onValueInputFocus});if(!(!l||s))if(o)if(u){var g=d.map(function(f){return t.getOptionValue(f)}).join(u);return m.createElement("input",{name:l,type:"hidden",value:g})}else{var v=d.length>0?d.map(function(f,p){return m.createElement("input",{key:"i-".concat(p),name:l,type:"hidden",value:t.getOptionValue(f)})}):m.createElement("input",{name:l,type:"hidden",value:""});return m.createElement("div",null,v)}else{var b=d[0]?this.getOptionValue(d[0]):"";return m.createElement("input",{name:l,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,u=a.ariaSelection,s=a.focusedOption,o=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return m.createElement(co,F({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:s,focusedValue:o,isFocused:l,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,u=t.IndicatorsContainer,s=t.SelectContainer,o=t.ValueContainer,l=this.props,c=l.className,d=l.id,g=l.isDisabled,v=l.menuIsOpen,b=this.state.isFocused,f=this.commonProps=this.getCommonProps();return m.createElement(s,F({},f,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:b}),this.renderLiveRegion(),m.createElement(a,F({},f,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:b,menuIsOpen:v}),m.createElement(o,F({},f,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),m.createElement(u,F({},f,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var u=a.prevProps,s=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,g=a.instancePrefix,v=t.options,b=t.value,f=t.menuIsOpen,p=t.inputValue,h=t.isMulti,E=kt(b),S={};if(u&&(b!==u.value||v!==u.options||f!==u.menuIsOpen||p!==u.inputValue)){var O=f?zo(t,E):[],D=f?qt(Ve(t,E),"".concat(g,"-option")):[],I=s?Uo(a,E):null,C=_o(a,O),A=Qe(D,C);S={selectValue:E,focusedOption:C,focusedOptionId:A,focusableOptionsWithIds:D,focusedValue:I,clearFocusValueOnUpdate:!1}}var P=o!=null&&t!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},$=l,z=c&&d;return c&&!z&&($={value:Ie(h,E,E[0]||null),options:E,action:"initial-input-focus"},z=!d),(l==null?void 0:l.action)==="initial-input-focus"&&($=null),w(w(w({},S),P),{},{prevProps:t,ariaSelection:$,prevWasFocused:z})}}]),r}(m.Component);Bn.defaultProps=jo;var Go=m.forwardRef(function(n,e){var r=hr(n);return m.createElement(Bn,F({ref:e},r))}),Yo=Go;function qo({handleClickClose:n}){const e=Xt(),r=Pe(f=>f.data.categories),{values:i,errors:t,touched:a,isValid:u,handleChange:s,setFieldValue:o,handleSubmit:l}=rr({initialValues:{en:"",ua:"",category:"",isIrregular:void 0},validationSchema:ir,onSubmit:f=>{e(Wn(f)).then(p=>{isNaN(p.payload)&&n()})}}),c=f=>{o("category",f?f.value:"")},d=()=>{if(i.isIrregular&&i.category==="verb"&&!/^\w+-\w+-\w+$/.test(i.en))return x.jsx("p",{className:"EnInputMistake",children:"Must be example: “know-knew-known”"})},{getInputAlert:g,getInputClass:v}=ar(i,a,t),b={control:(f,p)=>({...f,borderRadius:"15px",paddingLeft:"12px",paddingRight:"16px",background:"none",borderColor:p.isFocused?"#d1d5db":f.borderColor,color:"#f8f8f8",boxShadow:p.isFocused?"none":f.boxShadow,width:"204px",height:"48px","&:hover":{borderColor:"#d1d5db"}}),menu:f=>({...f,textTransform:"capitalize",borderRadius:"15px",boxShadow:"0 4px 47px 0 rgba(18, 20, 23, 0.08)",width:"205px",overflowY:"auto",paddingLeft:"24px","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:"#f8f8f8",borderRadius:"12px",height:"101px"},"::-webkit-scrollbar-thumb:hover":{background:"#d1d5db"}}),option:f=>({...f,color:"rgba(18, 20, 23, 0.5)",backgroundColor:"transparent","&:hover":{color:"#85AA9F"}}),singleValue:f=>({...f,color:"#f8f8f8"}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:f=>({...f,color:"#f8f8f8","&:hover":{color:"#f8f8f8"}})};return x.jsxs(fr,{children:[x.jsx(ut,{className:"ButtonClose",onClick:n}),x.jsxs("div",{className:"TextContainer",children:[x.jsx("h2",{className:"Title",children:"Add word"}),x.jsx("p",{className:"Text",children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."})]}),x.jsxs("form",{className:"Form",onSubmit:l,children:[x.jsx(Yo,{id:"category",name:"category",styles:b,options:r.map(f=>({value:f,label:f})),onChange:c,placeholder:"Categories"}),x.jsxs("ul",{className:"RadioButtonList",style:{display:i.category==="verb"?"flex":"none"},children:[x.jsxs("li",{className:"RadioButtonItem",children:[x.jsx("input",{className:"RadioButton",id:"regular",name:"isIrregular",type:"radio",onChange:()=>s({target:{name:"isIrregular",value:!1}}),value:!1,checked:i.isIrregular===!1}),"Regular"]}),x.jsxs("li",{className:"RadioButtonItem",children:[x.jsx("input",{className:"RadioButton",id:"reason",name:"isIrregular",type:"radio",onChange:()=>s({target:{name:"isIrregular",value:!0}}),value:!0,checked:i.isIrregular===!0}),"Irregular"]})]}),x.jsxs("div",{className:"UkrainianContainer",id:"ukrainian",children:[x.jsxs("div",{className:"InputImagContainer",children:[x.jsx(Zn,{className:"IconCountry"})," Ukrainian"]}),x.jsx("input",{id:"ukrainian",className:v("Ua"),type:"text",placeholder:"Слово Українською",name:"ua",value:i.ua,onChange:s,required:!0}),g("ua")]}),x.jsxs("div",{className:"EnglishContainer",children:[x.jsxs("div",{className:"InputImagContainer",children:[x.jsx(Jn,{className:"IconCountry"})," English"]}),x.jsx("input",{id:"english",className:v("En"),type:"text",placeholder:"Word in English",name:"en",value:i.en,onChange:s,required:!0}),d()?d():g("en")]}),x.jsxs("ul",{className:"ButtonList",children:[x.jsx("li",{className:"ButtonAdd",type:"submit",disabled:!u,onClick:l,children:"Add"}),x.jsx("li",{className:"ButtonCancel",onClick:n,children:"Cancel"})]})]})]})}const Ko="/VocabBuilder/assets/open-orange-book-mobile-min-c1af7270.png",Xo="/VocabBuilder/assets/open-orange-book-desctop-min-45107eed.png",Zo=be.div`
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
    background-image: url(${Ko});
    position: absolute;
    bottom: 40px;
    right: 0;

    @media only screen and (min-width: 768px) {
      width: 212px;
      height: 179px;
      background-image: url(${Xo});
    }
  }
`;function Jo({handleClickClose:n}){const e=Pe(r=>r.data.answers);return e&&x.jsxs(Zo,{children:[x.jsx(ut,{className:"ButtonClose",onClick:n}),x.jsx("h2",{className:"Title",children:"Well done"}),x.jsxs("div",{className:"ContentContainer",children:[x.jsxs("div",{className:"CorrectAnswerContainer",children:[x.jsx("p",{className:"TitleCorrectAnswer",children:"Сorrect answers: "}),x.jsx("ul",{className:"CorrectAnswerList",children:e.map((r,i)=>r.isDone===!0&&x.jsx("li",{className:"CorrectAnswerItem",children:r[r.task]},i))})]}),x.jsxs("div",{className:"MistakesContainer",children:[x.jsx("p",{className:"TitleMistakes",children:"Mistakes: "}),x.jsx("ul",{className:"MistakesList",children:e.map((r,i)=>r.isDone===!1&&x.jsx("li",{className:"MistakesItem",children:r.task==="en"?r.en:r.ua},i))})]}),x.jsx("div",{className:"Img"})]})]})}const Qo=document.querySelector("#modal-root");function ru({isMobileModalOpen:n,isModalOpenAddWord:e,isModalOpenClickWord:r,isModalOpenConfirmation:i,isModalOpenEdit:t,isModalOpenWellDone:a,selectedWord:u,coordinates:s,onClose:o,onEdit:l,onDelete:c}){const d=m.useCallback(()=>{o()},[o]),g=v=>{v.target===v.currentTarget&&d()};return m.useEffect(()=>{const v=b=>{b.code==="Escape"&&d()};return document.addEventListener("keydown",v),document.body.style.cssText="overflow: hidden; ",()=>{document.removeEventListener("keydown",v),document.body.style.cssText="overflow: auto; "}},[d]),Zt.createPortal(x.jsxs(x.Fragment,{children:[(n||e||t||i||a)&&x.jsxs(cr,{onClick:g,children:[n&&x.jsx(lr,{handleClickClose:d}),e&&x.jsx(qo,{handleClickClose:d}),i&&x.jsx(Qn,{handleClickClose:d}),t&&x.jsx(er,{word:u,handleClickClose:d}),a&&x.jsx(Jo,{handleClickClose:d})]}),r&&x.jsx(dr,{onClick:g,children:x.jsx(tr,{onClose:d})})]}),Qo)}export{ru as M,or as S};
