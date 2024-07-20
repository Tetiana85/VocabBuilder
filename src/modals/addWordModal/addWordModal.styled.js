import styled from 'styled-components';
import toggle from '../../img/toggle.svg';
import correct from '../../img/correct.svg';
import error from '../../img/error.svg';

export const ContainerAddWordModal = styled.div`
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
      content: url(${toggle});
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
      content: url(${error});
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
      content: url(${correct});
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
      content: url(${error});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }
`;
