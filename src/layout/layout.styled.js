import styled from 'styled-components';

export const MainContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media only screen and (min-width: 768px) {
  }

  .NavigationContainer {
    display: none;

    @media only screen and (min-width: 1440px) {
      display: flex;
      gap: 28px;
    }
  }

  .NavElement {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    color: #121417;
    transition:
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;
    padding: 12px 20px;
    display: inline-block;

    &:hover {
      color: #85aa9f;
    }

    &.active {
      color: #f8f8f8;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.active::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      border-radius: 15px;
      background-color: #85aa9f;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .RightSideHeader {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .LogoContainer {
    display: flex;
    gap: 16px;
    align-items: center;

    text-decoration: none;
    color: inherit;

    &:hover {
      color: #85aa9f;
    }

    &:hover {
      path {
        stroke: #85aa9f;
        fill: #85aa9f;
      }
      circle {
        stroke: #85aa9f;
        fill: none;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .Logo {
    width: 36px;
    height: 36px;
  }

  .LogoTitle {
    font-size: 18px;
    @media only screen and (max-width: 374px) {
      font-size: 14px;
    }
  }

  .UserContainer {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .UserName {
    font-weight: 500;
    font-size: 16px;
    color: #121417;
    @media only screen and (max-width: 374px) {
      font-size: 12px;
    }
  }

  .UserImag {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    width: 36px;
    height: 36px;
    background: #85aa9f;
  }

  .ButtonBurger {
    cursor: pointer;
    margin-left: 8px;

    &:hover {
      line {
        stroke: #85aa9f;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media only screen and (max-width: 374px) {
      margin-left: 0px;
    }
    @media only screen and (min-width: 1440px) {
      display: none;
    }
  }

  .ButtonLogOut {
    display: none;
  }

  @media only screen and (min-width: 1440px) {
    .ButtonLogOut {
      display: flex;
      align-items: center;
      gap: 6px;
      border: none;
      color: #121417;
      background: transparent;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      &:hover {
        color: #85aa9f;
        transition: fill 0.3s ease;
      }
    }
  }
`;
