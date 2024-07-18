import{p as u,u as f,a as b,j as e,N as w,c as y}from"./index-be36d13a.js";import{v,d as k,e as N,a as j}from"./eye-off-94fe664f.js";import{m as S,e as I,c as z,u as C,S as P,a as R}from"./error-0b02cb4a.js";const T=u.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 3px solid blue;

  @media only screen and (min-width: 768px) {
    background-image: url(${v});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    max-height: 1000px;
    flex-direction: column;
    align-content: center;
  }

  .ImgContainer {
    @media only screen and (min-width: 768px) {
      display: none;
    }

    @media only screen and (min-width: 1440px) {
      display: flex;
    }
  }

  .RegisterImg {
    background-image: url(${S});
    width: 247px;
    height: 191px;
    background-repeat: no-repeat;
    margin-bottom: 8px;
    @media only screen and (min-width: 1440px) {
      width: 498px;
      height: 475px;
      background-image: url(${k});
    }
  }

  .FormContainer {
    padding: 32px 16px;
    border-radius: 25px 25px 0 0;
    background: rgba(133, 170, 159, 0.1);
    height: 100vh;
    max-width: 374px;

    @media only screen and (min-width: 768px) {
      /* margin-top: 150px; */
      padding: 48px 64px;
      border-radius: 30px;
      max-width: 628px;
      height: 592px;
    }

    @media only screen and (min-width: 1440px) {
      margin-right: 80px;
      margin-top: 0;
      order: -1;
    }
  }

  .Title {
    font-weight: 600;
    font-size: 30px;
    line-height: 107%;
    letter-spacing: -0.02em;
    color: #121417;

    @media only screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 120%;
    }
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.8);
    margin-top: 16px;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
      margin-top: 20px;
      width: 500px;
      line-height: 30px;
    }
  }

  .Form {
    margin-top: 16px;
    display: grid;
    gap: 18px;

    @media only screen and (min-width: 768px) {
      margin-top: 32px;
    }
  }

  input {
    box-sizing: border-box;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 15px;
    padding: 16px 18px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .ButtonSubmit {
    margin-top: 16px;
    border-radius: 30px;
    padding: 16px 18px;
    background: #85aa9f;
    border: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      margin-top: 14px;
    }

    &:hover {
      color: #85aa9f;
      background: #fcfcfc;
    }
  }

  .NavLogIn {
    justify-content: center;
    display: flex;
    margin-top: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: rgba(18, 20, 23, 0.5);

    &:hover {
      color: #85aa9f;
    }
  }

  .SkilsList {
    display: none;

    @media only screen and (min-width: 768px) {
      margin-top: 98px;
      display: flex;
      justify-content: center;

      & li {
        display: inline-block;
        margin-right: 15px;
      }

      & li:not(:last-child)::after {
        content: '·';
        margin-left: 15px;
      }
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 0;
      grid-area: l;
    }
  }

  .Skil {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    text-align: center;
    color: rgba(18, 20, 23, 0.8);
  }

  .DivInput {
    position: relative;
  }

  .DivInput:hover .ShowPassword,
  .DivInput:hover .HidePassword {
    display: block;
  }

  .ErrorInput {
    border: 1px solid #e74a3b;
  }

  .SuccessInput {
    border: 1px solid #3cbc81;
  }

  .ShowPassword {
    display: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${N});
  }

  .HidePassword {
    display: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${j});
  }

  .ErrorText {
    position: absolute;
    color: red;
    top: 60px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${I});
      display: inline-block;
      margin-right: 5px;
    }
  }

  .SuccessText {
    position: absolute;
    color: green;
    top: 60px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${z});
      display: inline-block;
      margin-right: 5px;
    }
  }
`;function L(){const r=f(),o=b(),{values:i,errors:l,touched:d,isValid:p,handleBlur:a,handleChange:n,handleSubmit:c}=C({initialValues:{name:"",email:"",password:""},validationSchema:R,onSubmit:g=>{r(y.register(g)).then(h=>{h.payload.name&&o("/dictionary")})}}),{showPassword:m,getInputAlert:t,getHidePassword:x,getInputClass:s}=P(i,d,l);return e.jsxs(T,{children:[e.jsx("div",{className:"ImgContainer",children:e.jsx("div",{className:"RegisterImg"})}),e.jsxs("div",{className:"FormContainer",children:[e.jsx("h2",{className:"Title",children:"Register"}),e.jsx("p",{className:"Text",children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),e.jsxs("form",{className:"Form",children:[e.jsxs("div",{className:"DivInput",children:[e.jsx("input",{id:"registerName",name:"name",type:"text",placeholder:"Name",className:s("name"),onChange:n,value:i.name,onBlur:a}),t("name")]}),e.jsxs("div",{className:"DivInput",children:[e.jsx("input",{id:"registerEmail",name:"email",type:"email",placeholder:"Email",className:s("email"),onChange:n,value:i.email,onBlur:a}),t("email")]}),e.jsxs("div",{className:"DivInput",id:"password",children:[e.jsx("input",{id:"registerPassword",name:"password",placeholder:"Password",type:m?"text":"password",className:s("password"),onChange:n,value:i.password,onBlur:a}),t("password"),i.password&&x()]}),e.jsx("button",{className:"ButtonSubmit",type:"submit",disabled:!p,onClick:c,children:"Register"})]}),e.jsx(w,{className:"NavLogIn",to:"/login",children:"Login"})]}),e.jsxs("ul",{className:"SkilsList",children:[e.jsx("li",{className:"Skil",children:"Word"}),e.jsx("li",{className:"Skil",children:"Translation"}),e.jsx("li",{className:"Skil",children:"Grammar"}),e.jsx("li",{className:"Skil",children:"Progress"})]})]})}export{L as default};
