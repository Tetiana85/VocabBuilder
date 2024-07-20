import styled from 'styled-components';
import correct from '../../img/correct.svg';
import error from '../../img/error.svg';

export const ModalContainer = styled.div`
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
      content: url(${error});
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
      content: url(${correct});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 58px;
    }
  }
`;
