import styled from 'styled-components';

export const TableList = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  border-radius: 8px;
  overflow: hidden;

  --h: 1px; /* Change this value to adjust h */

  .IconCountry {
    display: none;

    @media only screen and (min-width: 768px) {
      display: inline-flex;
      width: 28px;
      height: 28px;
    }
    @media only screen and (min-width: 1440px) {
      width: 32px;
      height: 32px;
    }
  }

  .TableHeaderItem {
    padding: 12px;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    text-align: left;
    font-weight: 500;
    font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (375 - 320)));
    overflow-wrap: break-word;

    @media only screen and (min-width: 375px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 20px;
    }
  }

  .TableHeaderList .TableHeaderItem {
    font-size: calc(13px + (16 - 13) * ((100vw - 320px) / (375 - 320)));

    @media only screen and (min-width: 375px) {
      font-size: 16px;
    }
  }

  .WordColumn {
    width: calc(82 / 375 * 100vw);
    max-width: 160px;
    @media only screen and (min-width: 768px) {
      width: 160px;
    }
  }
  .WordColumnRecommend {
    width: calc(90 / 375 * 100vw);
    max-width: 180px;
    @media only screen and (min-width: 768px) {
      width: 180px;
    }
  }

  .TranslationColumn {
    width: calc(116 / 375 * 100vw);
    max-width: 180px;
    @media only screen and (min-width: 768px) {
      width: 180px;
    }
  }
  .TranslationColumnRecommend {
    width: calc(116 / 375 * 100vw);
    max-width: 169px;
    @media only screen and (min-width: 768px) {
      width: 169px;
    }
  }

  .ProgressColumn {
    width: calc(95 / 375 * 100vw);
    max-width: 151px;
    @media only screen and (min-width: 768px) {
      width: 151px;
    }
  }
  .ProgressColumnRecommend {
    width: calc(38 / 375 * 100vw);
    max-width: 148px;
    @media only screen and (min-width: 768px) {
      width: 148px;
    }
  }
  .CategoryColumn {
    display: none;
    @media only screen and (min-width: 768px) {
      display: table-cell;
      width: 122px;
    }
  }
  .CategoryColumnRecommend {
    display: table-cell;
    width: calc(99 / 375 * 100vw);
    max-width: 160px;
    @media only screen and (min-width: 768px) {
      width: 160px;
    }
  }
  .DotsColumn {
    width: calc(50 / 375 * 100vw);
    text-align: center;
    max-width: 66px;
    @media only screen and (min-width: 768px) {
      width: 66px;
    }
  }
  .DotsColumnRecommend {
    width: calc(50 / 375 * 100vw);
    text-align: center;
    max-width: 66px;
    @media only screen and (min-width: 768px) {
      width: 66px;
    }
  }

  .WordOfTable {
    &:hover,
    &:focus {
      color: #85aa9f;
    }
  }

  .PercentContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      gap: 10px;
    }
  }

  .ProgressText {
    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
      font-size: 18px;
    }
  }

  .AddDictionaryContainer {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 10px;
    align-items: center;

    &:hover,
    &:focus {
      color: #85aa9f;
    }

    @media only screen and (min-width: 768px) {
      align-items: flex-start;
      gap: 2px;
    }

    @media only screen and (min-width: 1440px) {
      display: flex;
      flex-direction: row;
      height: 72px;
      gap: 8px;
    }
  }

  .TableImagContainer {
    @media only screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
    }
  }

  .TableHeader {
    background-color: rgba(133, 170, 159, 0.1);
  }

  .WordList:nth-child(odd) {
    background-color: #fcfcfc;
  }

  .Circle {
    width: 26px;
    height: 26px;
  }

  .DotsColumn {
    text-align: center;
  }

  .AddToDictionaryText {
    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }
`;
