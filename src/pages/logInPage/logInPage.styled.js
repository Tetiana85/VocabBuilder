import styled from 'styled-components';
import vector from '../../img/Vector-min.jpg';
import mobileImg from '../../img/registration-mobile.png';
import desctopImg from '../../img/registration-desctop.png';
import eye from '../../img/eye.svg';
import eye_off from '../../img/eye-off.svg';
import correct from '../../img/correct.svg';
import error from '../../img/error.svg';

export const LogInPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    background-image: url(${vector});
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
    order: 1;
    display: flex;
    justify-content: end;

    @media only screen and (min-width: 768px) {
      display: none;
    }

    @media only screen and (min-width: 1440px) {
      display: flex;
    }
  }

  .RegisterImg {
    background-image: url(${mobileImg});
    width: 247px;
    height: 191px;

    @media only screen and (min-width: 1440px) {
      width: 498px;
      height: 475px;
      background-image: url(${desctopImg});
    }
  }

  .FormContainer {
    margin-top: 43px;
    order: 3;
    padding: 32px 16px;
    border-radius: 25px 25px 0 0;
    background: rgba(133, 170, 159, 0.1);
    height: 100vh;
    max-width: 374px;

    @media only screen and (min-width: 768px) {
      margin-top: 150px;
      padding: 48px 64px;
      border-radius: 30px;
      max-width: 628px;
      height: 518px;
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
    }
  }

  .Form {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 18px;

    @media only screen and (min-width: 768px) {
      margin-top: 36px;
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

    &:hover {
      background: #fcfcfc;
      color: #85aa9f;
    }

    @media only screen and (min-width: 768px) {
      margin-top: 14px;
    }
  }

  .SkilsList {
    margin-top: 16px;
    order: 2;
    display: flex;
    justify-content: center;
    & li {
      display: inline-block;
      margin-right: 7px;
    }

    & li:not(:last-child)::after {
      content: '·';
      margin-left: 7px;
    }

    @media only screen and (min-width: 768px) {
      margin-top: 172px;
      order: 3;
      & li {
        margin-right: 15px;
      }

      & li:not(:last-child)::after {
        margin-left: 15px;
      }
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 0;
    }
  }

  .Skil {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: rgba(18, 20, 23, 0.8);

    @media only screen and (min-width: 768px) {
      font-size: 22px;
      line-height: 150%;
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
    background-image: url(${eye_off});
  }

  .HidePassword {
    display: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${eye});
  }

  input::placeholder {
    color: #121417;
  }

  .ErrorText {
    position: absolute;
    color: red;
    top: 60px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${error});
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
      content: url(${correct});
      display: inline-block;
      margin-right: 5px;
    }
  }
`;
