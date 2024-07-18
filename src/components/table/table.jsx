import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Ukraine } from '../../img/ukraine.svg';
import { ReactComponent as England } from '../../img/united kingdom.svg';
import { ReactComponent as Switch } from '../../img/switch-horizontal.svg';
import { Circle } from 'rc-progress';
import { openModalClickWord } from '../../redux/modals/modal-slice';
import { TableList } from './table.styled';
import { addWord } from '../../redux/data/data-operation';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Table({ data }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const wordsData = useSelector((state) => state.data.words);

  useEffect(() => {
    console.log('Дані в Redux-сторі змінилися:', wordsData.results);
  }, [wordsData.results]);

  const handleClickWord = (event, word) => {
    const { clientX, clientY } = event;
    dispatch(
      openModalClickWord({
        x: clientX,
        y: clientY,
        wordId: word,
      })
    );
  };

  const isDictionaryPage = location.pathname.includes('/dictionary');

  return (
    <TableList>
      <thead className="TableHeader">
        <tr className="TableHeaderList">
          <th className="TableHeaderItem">
            <div className="TableImagContainer">
              Word <England className="IconCountry" />
            </div>
          </th>
          <th className="TableHeaderItem">
            <div className="TableImagContainer">
              Translation <Ukraine className="IconCountry" />
            </div>
          </th>
          <th className="TableHeaderItem">Category</th>
          <th className="TableHeaderItem">
            {isDictionaryPage ? 'Progress' : ''}
          </th>
          {isDictionaryPage && <th className="TableHeaderItem"></th>}
        </tr>
      </thead>
      {data.results &&
        data.results.map((word, item) => (
          <tbody
            className={data.results[0].progress >= 0 ? 'WordOfTable' : ''}
            key={item}
            style={{ cursor: data.results[0].progress >= 0 ? 'pointer' : '' }}
          >
            <tr className="WordList">
              <td className="TableHeaderItem">{word.en}</td>
              <td className="TableHeaderItem">{word.ua}</td>
              <td className="TableHeaderItem">{word.category}</td>
              <td className="TableHeaderItem">
                {word.progress >= 0 ? (
                  <div className="PercentContainer">
                    <span className="ProgressText">{word.progress}%</span>
                    <Circle
                      className="Circle"
                      gapPosition="bottom"
                      percent={word.progress}
                      strokeWidth={15}
                      trailWidth={15}
                      strokeColor="#00FF00"
                      strokeLinecap="round"
                      gapDegree={0}
                    />
                  </div>
                ) : (
                  <div
                    className="AddDictionaryContainer"
                    onClick={() =>
                      dispatch(addWord(word._id)).then((response) => {
                        isNaN(response.payload) && navigate('/dictionary');
                      })
                    }
                  >
                    <span className="AddToDictionaryText">
                      Add to dictionary
                    </span>
                    <Switch />
                  </div>
                )}
              </td>
              {isDictionaryPage && (
                <td
                  className="TableHeaderItem DotsColumn"
                  onClick={(event) => handleClickWord(event, word)}
                >
                  ...
                </td>
              )}
            </tr>
          </tbody>
        ))}
    </TableList>
  );
}

// import { useDispatch, useSelector } from 'react-redux';
// import { ReactComponent as Ukraine } from '../../img/ukraine.svg';
// import { ReactComponent as England } from '../../img/united kingdom.svg';
// import { ReactComponent as Switch } from '../../img/switch-horizontal.svg';
// import { Circle } from 'rc-progress';
// import {
//   openModalClickWord,
//   closeModalClickWord,
// } from '../../redux/modals/modal-slice';
// import { TableList } from './table.styled';
// import { addWord } from '../../redux/data/data-operation';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { ClickWord } from '../../modals/clickWord/clickWord';

// export function Table({ data }) {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const wordsData = useSelector((state) => state.data.words);
//   const isPopupOpen = useSelector((state) => state.modal.isModalOpenClickWord);

//   useEffect(() => {
//     console.log('Дані в Redux-сторі змінилися:', wordsData.results);
//   }, [wordsData.results]);

//   const handleDotsClick = (event, word) => {
//     event.stopPropagation();
//     const rect = event.currentTarget.getBoundingClientRect();
//     const coordinates = {
//       x: rect.left + window.scrollX,
//       y: rect.top + window.scrollY,
//       word,
//     };
//     dispatch(closeModalClickWord());
//     dispatch(openModalClickWord({ coordinates, word }));
//   };

//   const handleClickClose = () => {
//     dispatch(closeModalClickWord());
//   };

//   return (
//     <>
//       <TableList>
//         <thead className="TableHeader">
//           <tr className="TableHeaderList">
//             <th className="TableHeaderItem">
//               <div className="TableImagContainer">
//                 Word <England className="IconCountry" />
//               </div>
//             </th>
//             <th className="TableHeaderItem">
//               <div className="TableImagContainer">
//                 Translation <Ukraine className="IconCountry" />
//               </div>
//             </th>
//             <th className="TableHeaderItem">Category</th>
//             <th className="TableHeaderItem">
//               {location.pathname.includes('/dictionary') ? 'Progress' : ''}
//             </th>
//             <th className="TableHeaderItem"></th>
//           </tr>
//         </thead>
//         {data.results &&
//           data.results.map((word, index) => (
//             <tbody
//               className={word.progress >= 0 ? 'WordOfTable' : ''}
//               key={index}
//               style={{ cursor: word.progress >= 0 ? 'pointer' : '' }}
//             >
//               <tr className="WordList">
//                 <td className="TableHeaderItem">{word.en}</td>
//                 <td className="TableHeaderItem">{word.ua}</td>
//                 <td className="TableHeaderItem">{word.category}</td>
//                 <td className="TableHeaderItem">
//                   {word.progress >= 0 ? (
//                     <div className="PercentContainer">
//                       <span className="ProgressText">{word.progress}%</span>
//                       <Circle
//                         className="Circle"
//                         gapPosition="bottom"
//                         percent={word.progress}
//                         strokeWidth={15}
//                         trailWidth={15}
//                         strokeColor="#00FF00"
//                         strokeLinecap="round"
//                         gapDegree={0}
//                       />
//                     </div>
//                   ) : (
//                     <div
//                       className="AddDictionaryContainer"
//                       onClick={() =>
//                         dispatch(addWord(word._id)).then((response) => {
//                           isNaN(response.payload) && navigate('/dictionary');
//                         })
//                       }
//                     >
//                       <span className="AddToDictionaryText">
//                         Add to dictionary
//                       </span>
//                       <Switch />
//                     </div>
//                   )}
//                 </td>
//                 <td
//                   className="TableHeaderItem DotsColumn"
//                   onClick={(event) => handleDotsClick(event, word)}
//                 >
//                   ...
//                 </td>
//               </tr>
//             </tbody>
//           ))}
//       </TableList>
//       {isPopupOpen && <ClickWord handleClickClose={handleClickClose} />}
//     </>
//   );
// }
