import styled from 'styled-components';

export const ModalContainer = styled.div`
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
`;
