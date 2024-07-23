import{p as A,u as M,a as P,b as L,r as o,j as e,f as E,t as F}from"./index-f1fa268b.js";import{C as U,S as T}from"./index-6008286f.js";import{S as O,a as _}from"./extends-09a7e574.js";import{M as $}from"./modals-f1d2bf96.js";import"./error-ca5a6836.js";const V=A.div`
  background: #f8f8f8;
  width: 100%;
  height: 100vh;
  padding: 24px 16px;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    padding: 64px 32px;
  }

  .CicleContainer {
    position: relative;
    display: flex;
    justify-content: end;
  }
  .Circle {
    width: 44px;
    height: 44px;

    @media only screen and (min-width: 768px) {
      width: 58px;
      height: 58px;
    }
  }
  .Percent {
    position: absolute;
    right: 13px;
    top: 10px;
    width: 20px;
    height: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;

    @media only screen and (min-width: 768px) {
      right: 20px;
      top: 20px;
    }
  }

  .Form {
    margin-top: 8px;
    @media only screen and (min-width: 768px) {
      margin-top: 16px;
    }
  }

  .FormContainer {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
      border-radius: 15px;
      padding: 18px;
      background: #fff;
    }

    @media only screen and (min-width: 1440px) {
      flex-direction: row;
    }
  }

  .InputContainer {
    box-sizing: border-box;
    border-radius: 8px 8px 0 0;
    padding: 22px;
    width: 100%;
    height: 195px;
    background: #fcfcfc;
    display: flex;
    flex-direction: column;
    position: relative;

    @media only screen and (min-width: 768px) {
      height: 282px;
    }

    @media only screen and (min-width: 1440px) {
      height: 302px;
    }
  }

  .InputContainer[id='ukrainian'] {
    border-bottom: 2px solid #dbdbdb;
    @media only screen and (min-width: 1440px) {
      border-bottom: none;
      border-right: 2px solid #dbdbdb;
    }
  }

  input {
    border: none;
    background: #fcfcfc;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
    margin-bottom: auto;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }

    &:focus {
      outline: none;
    }
  }
  input::placeholder {
    color: #121417;
  }

  .LangueButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    color: rgba(18, 20, 23, 0.5);
    background: none;
    border: none;
    position: absolute;
    bottom: 25px;

    &:hover {
      color: #85aa9f;
    }
  }

  .LangueName {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    margin-left: auto;
    font-size: 14px;
    position: absolute;
    bottom: 18px;
    right: 22px;

    @media only screen and (min-width: 768px) {
      bottom: auto;
      top: 20px;
      font-size: 16px;
    }
  }

  .ButtonList {
    display: flex;
    flex-direction: column;
    margin-top: 116px;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-top: 40px;
      justify-content: start;
    }
    @media only screen and (min-width: 1440px) {
      margin-top: 80px;
    }
  }

  .SaveButton {
    display: flex;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 30px;
    width: 100%;
    max-width: 343px;
    height: 56px;
    background: #85aa9f;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;
    justify-content: center;
    align-items: center;

    &:hover {
      color: #85aa9f;
      background: #f8f8f8;
    }

    @media only screen and (max-width: 374px) {
    }

    @media only screen and (min-width: 768px) {
      width: 203px;
      padding: 14px;
      font-size: 18px;
      line-height: 156%;
    }
  }

  .CanselButton {
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    color: rgba(18, 20, 23, 0.5);
    padding: 16px;
    display: flex;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      box-sizing: border-box;
      border: 1px solid #85aa9f;
      border-radius: 30px;
      padding: 14px;
      width: 203px;
      height: 56px;
      font-size: 18px;
      line-height: 156%;
      color: #85aa9f;

      &:hover {
        background: #85aa9f;
        color: #f8f8f8;
      }
    }
  }
`;function H({tasks:t,openModalWellDone:d}){var z,W,I,B;const r=M(),l=P(),c=L(n=>n.data.words),[a,p]=o.useState(0),[x,u]=o.useState([]),[i,h]=o.useState({_id:(z=t[a])==null?void 0:z._id,en:((W=t[a])==null?void 0:W.en)||"",ua:((I=t[a])==null?void 0:I.ua)||"",task:(B=t[a])==null?void 0:B.task}),f=c.results.reduce((n,s)=>n+s.progress,0),y=Math.round(f/c.results.length),k=(n,s)=>{const{value:g}=n.target;h(m=>({...m,[s]:g}))},b=()=>{t.length>a&&(p(n=>n+1),h(n=>{var s,g,m,S;return{...n,_id:(s=t[a+1])==null?void 0:s._id,en:((g=t[a+1])==null?void 0:g.en)||"",ua:((m=t[a+1])==null?void 0:m.ua)||"",task:(S=t[a+1])==null?void 0:S.task}}),i[i.task]!==""&&u(n=>[...n,i]))},D=()=>{window.history.back()},w=()=>{b();const n=i[i.task]===""?[...x,i]:x;r(E(n)).then(s=>{isNaN(s.payload)?d():l("/dictionary")})},j=n=>n==="en"?2:1,v=n=>n==="ua"?2:1,C=()=>{if(!/^[A-Za-z]*$/.test(i.en.replace(" ","")))return e.jsx("p",{style:{color:"red"},children:"Please enter only English letters"})},N=()=>{if(!/^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]*$/.test(i.ua.replace(" ","")))return e.jsx("p",{style:{color:"red"},children:"Будь ласка, введіть лише українські літери"})};return t.length>0&&e.jsxs(V,{children:[e.jsxs("div",{className:"CicleContainer",children:[e.jsx(U,{className:"Circle",gapPosition:"bottom",percent:y,strokeWidth:8,trailWidth:8,strokeColor:{"0%":"#c9cdcc","100%":"#85aa9f"},strokeLinecap:"round",gapDegree:0}),e.jsx("div",{className:"Percent",children:y})]}),e.jsxs("form",{className:"Form",children:[e.jsxs("div",{className:"FormContainer",children:[e.jsxs("div",{id:"ukrainian",className:"InputContainer",style:{order:v(i.task)},children:[e.jsx("input",{name:"ukrainian",type:"text",className:"Input",placeholder:"Введіть переклад",value:i.ua,onChange:n=>k(n,"ua")}),N&&N(),t.length>a?e.jsxs("div",{className:"LangueButton",onClick:b,style:{display:v(i.task)===1?"flex":"none"},children:["Next ",e.jsx(T,{})]}):w(),e.jsxs("div",{className:"LangueName",children:[e.jsx(O,{}),"Ukrainian"]})]}),e.jsxs("div",{id:"english",className:"InputContainer",style:{order:j(i.task)},children:[e.jsx("input",{name:"english",type:"text",className:"Input",placeholder:"Break in",value:i.en,onChange:n=>k(n,"en")}),C&&C(),t.length>a?e.jsxs("div",{className:"LangueButton",onClick:b,style:{display:j(i.task)===1?"flex":"none"},children:["Next ",e.jsx(T,{})]}):w(),e.jsxs("div",{className:"LangueName",children:[e.jsx(_,{}),"English"]})]})]}),e.jsxs("ul",{className:"ButtonList",children:[e.jsx("li",{className:"SaveButton",onClick:w,children:"Save"}),e.jsx("li",{className:"CanselButton",onClick:D,children:"Cancel"})]})]})]})}const K="/VocabBuilder/assets/blood-report-mobile-154afdcd.png",R="/VocabBuilder/assets/blood-report-desctop-355d9d49.png",Y=A.div`
  background: #f8f8f8;
  width: 100%;
  height: 100vh;
  padding: 32px 16px;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1440px) {
    align-items: center;
  }

  .ContentContainer {
    margin-top: 30px;
    width: 343px;

    @media only screen and (min-width: 768px) {
      margin-top: 100px;
      width: 581px;
    }

    @media only screen and (min-width: 1440px) {
      width: 902px;
      height: 289px;
      display: flex;
      flex-direction: column;
      margin-top: 0px;
      position: relative;
    }
  }

  .ImgContainer {
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 1440px) {
      position: absolute;
      right: 0;
    }
  }

  .Img {
    width: 189px;
    height: 203px;
    background-image: url(${K});
    @media only screen and (min-width: 768px) {
      width: 250px;
      height: 290px;
      background-image: url(${R});
    }
  }

  .TextContainer {
    @media only screen and (min-width: 1440px) {
      max-width: 581px;
    }
  }

  .Title {
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .Text {
    margin-top: 20px;
    font-weight: 400;
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }

  .ButtonList {
    margin-top: 132px;

    @media only screen and (min-width: 768px) {
      margin-top: 64px;
      display: flex;
      gap: 8px;
    }

    @media only screen and (min-width: 1440px) {
    }
  }

  .AddWordButton {
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 16px;
    max-width: 343px;
    height: 56px;
    background: #85aa9f;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    text-align: center;

    &:hover {
      color: #85aa9f;
      background: #f8f8f8;
    }

    @media only screen and (min-width: 768px) {
      width: 203px;
      padding: 14px;
      font-size: 18px;
      line-height: 156%;

      &:hover {
        border: 1px solid #85aa9f;
      }
    }
  }

  .CancelButton {
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    color: rgba(18, 20, 23, 0.5);
    padding: 16px;
    display: flex;
    justify-content: center;

    &:hover {
      color: #85aa9f;
    }

    @media only screen and (min-width: 768px) {
      box-sizing: border-box;
      border: 1px solid #85aa9f;
      border-radius: 30px;
      padding: 14px;
      width: 203px;
      height: 56px;

      font-size: 18px;
      line-height: 156%;
      color: #85aa9f;

      &:hover {
        background: #85aa9f;
        color: #fcfcfc;
      }
    }
  }
`;function Z({openModalAddWord:t}){const d=()=>{t()},r=()=>{window.history.back()};return e.jsx(Y,{children:e.jsxs("div",{className:"ContentContainer",children:[e.jsx("div",{className:"ImgContainer",children:e.jsx("div",{className:"Img"})}),e.jsxs("div",{className:"TextContainer",children:[e.jsx("h2",{className:"Title",children:"You don't have a single word to learn right now."}),e.jsx("p",{className:"Text",children:"Please create or add a word to start the workout. We want to improve your vocabulary and develop your knowledge, so please share the words you are interested in adding to your study."})]}),e.jsxs("ul",{className:"ButtonList",children:[e.jsx("li",{className:"AddWordButton",onClick:d,children:"Add word"}),e.jsx("li",{className:"CancelButton",onClick:r,children:"Cancel"})]})]})})}function ee(){const t=M(),d=P(),r=L(f=>f.data.tasks),[l,c]=o.useState(!1),[a,p]=o.useState(!1),x=o.useCallback(()=>{c(!0)},[]),u=o.useCallback(()=>{c(!1),d("/dictionary")},[d]),i=o.useCallback(()=>{p(!0)},[]),h=o.useCallback(()=>{p(!1)},[]);return o.useEffect(()=>{t(F())},[t]),e.jsxs(e.Fragment,{children:[r.tasks!==void 0&&r.tasks.length!==0?e.jsx(H,{tasks:r.tasks,openModalWellDone:x}):e.jsx(Z,{openModalAddWord:i}),(l||a)&&e.jsx($,{isModalOpenWellDone:l,isModalOpenAddWord:a,onClose:l?u:h})]})}export{ee as default};
