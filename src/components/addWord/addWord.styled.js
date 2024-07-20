import styled from 'styled-components';

export const TrainingPageContainer = styled.div`
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
    /* border: 1px solid red; */
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
    border-bottom: 1px solid #dbdbdb;
    @media only screen and (min-width: 1440px) {
      border-bottom: none;
      border-right: 1px solid #dbdbdb;
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
`;
