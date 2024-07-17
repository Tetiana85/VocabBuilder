import styled from 'styled-components';
import Img from '../../img/registration-mobile.png';
import X from '../../img/x-modal.svg';

export const ModalDiv = styled.div`
  background-color: #85aa9f;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  transition: right 0.5s ease-in-out;
  padding: 16px;

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
    background-image: url(${X});

    &:hover {
      path {
        stroke: #121417;
      }
    }
  }

  .NavList {
    display: grid;
    gap: 28px;
    margin-top: 150px;
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
    background-size: 100%;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-position: center;
    height: 1050px;
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
`;
