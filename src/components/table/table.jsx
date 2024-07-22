// import { useDispatch, useSelector } from 'react-redux';
// import { ReactComponent as Ukraine } from '../../img/ukraine.svg';
// import { ReactComponent as England } from '../../img/united kingdom.svg';
// import { ReactComponent as Switch } from '../../img/switch-horizontal.svg';
// import { Circle } from 'rc-progress';
// import { openModalClickWord } from '../../redux/modals/modal-slice';
// import { TableList } from './table.styled';
// import { addWord } from '../../redux/data/data-operation';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// export function Table({ data }) {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const wordsData = useSelector((state) => state.data.words);

//   useEffect(() => {}, [wordsData.results]);

//   const handleClickWord = (event, word) => {
//     const { clientX, clientY } = event;
//     dispatch(
//       openModalClickWord({
//         x: clientX,
//         y: clientY,
//         wordId: word,
//       })
//     );
//   };

//   const isDictionaryPage = location.pathname.includes('/dictionary');
//   const isRecommendPage = location.pathname.includes('/recommend');

//   return (
//     <TableList>
//       <thead className="TableHeader">
//         <tr className="TableHeaderList">
//           <th
//             className={`TableHeaderItem WordColumn ${
//               isRecommendPage ? 'WordColumnRecommend' : ''
//             }`}
//           >
//             <div className="TableImagContainer">
//               Word <England className="IconCountry" />
//             </div>
//           </th>
//           <th
//             className={`TableHeaderItem TranslationColumn ${
//               isRecommendPage ? 'TranslationColumnRecommend' : ''
//             }`}
//           >
//             <div className="TableImagContainer">
//               Translation <Ukraine className="IconCountry" />
//             </div>
//           </th>
//           <th
//             className={`TableHeaderItem CategoryColumn ${
//               isRecommendPage ? 'CategoryColumnRecommend' : ''
//             }`}
//           >
//             Category
//           </th>
//           <th
//             className={`TableHeaderItem ProgressColumn ${
//               isRecommendPage ? 'ProgressColumnRecommend' : ''
//             }`}
//           >
//             {isDictionaryPage ? 'Progress' : ''}
//           </th>
//           {isDictionaryPage && (
//             <th
//               className={`TableHeaderItem DotsColumn ${
//                 isRecommendPage ? 'DotsColumnRecommend' : ''
//               }`}
//             ></th>
//           )}
//         </tr>
//       </thead>
//       {data.results &&
//         data.results.map((word, item) => (
//           <tbody
//             className={data.results[0].progress >= 0 ? 'WordOfTable' : ''}
//             key={item}
//             style={{ cursor: data.results[0].progress >= 0 ? 'pointer' : '' }}
//           >
//             <tr className="WordList">
//               <td
//                 className={`TableHeaderItem WordColumn ${
//                   isRecommendPage ? 'WordColumnRecommend' : ''
//                 }`}
//               >
//                 {word.en}
//               </td>
//               <td
//                 className={`TableHeaderItem TranslationColumn ${
//                   isRecommendPage ? 'TranslationColumnRecommend' : ''
//                 }`}
//               >
//                 {word.ua}
//               </td>
//               <td
//                 className={`TableHeaderItem CategoryColumn ${
//                   isRecommendPage ? 'CategoryColumnRecommend' : ''
//                 }`}
//               >
//                 {word.category}
//               </td>
//               <td
//                 className={`TableHeaderItem ProgressColumn ${
//                   isRecommendPage ? 'ProgressColumnRecommend' : ''
//                 }`}
//               >
//                 {word.progress >= 0 ? (
//                   <div className="PercentContainer">
//                     <span className="ProgressText">{word.progress}%</span>
//                     <Circle
//                       className="Circle"
//                       gapPosition="bottom"
//                       percent={word.progress}
//                       strokeWidth={15}
//                       trailWidth={15}
//                       strokeColor="#00FF00"
//                       strokeLinecap="round"
//                       gapDegree={0}
//                     />
//                   </div>
//                 ) : (
//                   <div
//                     className="AddDictionaryContainer"
//                     onClick={() =>
//                       dispatch(addWord(word._id)).then((response) => {
//                         isNaN(response.payload) && navigate('/dictionary');
//                       })
//                     }
//                   >
//                     <span className="AddToDictionaryText">
//                       Add to dictionary
//                     </span>
//                     <Switch />
//                   </div>
//                 )}
//               </td>
//               {isDictionaryPage && (
//                 <td
//                   className={`TableHeaderItem DotsColumn ${
//                     isRecommendPage ? 'DotsColumnRecommend' : ''
//                   }`}
//                   onClick={(event) => handleClickWord(event, word)}
//                 >
//                   ...
//                 </td>
//               )}
//             </tr>
//           </tbody>
//         ))}
//     </TableList>
//   );
// }

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Ukraine } from '../../img/ukraine.svg';
import { ReactComponent as England } from '../../img/united kingdom.svg';
import { ReactComponent as Switch } from '../../img/switch-horizontal.svg';
import { Circle } from 'rc-progress';
import { TableList } from './table.styled';
import { addWord, deleteWord } from '../../redux/data/data-operation';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClickWord } from '../../modals/clickWord/clickWord';
import { EditModal } from '../../modals/editModal/editModal';
import { ConfirmationModal } from '../../modals/confirmation/confirmationModal';

export function Table({ data }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const wordsData = useSelector((state) => state.data.words);

  const [isClickWordOpen, setIsClickWordOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [modalCoordinates, setModalCoordinates] = useState({ x: 0, y: 0 });
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {}, [wordsData.results]);

  const handleClickWord = (event, word) => {
    const { clientX, clientY } = event;
    setModalCoordinates({ x: clientX, y: clientY });
    setSelectedWord(word);
    setIsClickWordOpen(true);
  };

  const handleCloseClickWord = () => {
    setIsClickWordOpen(false);
    setSelectedWord(null);
  };

  const handleOpenEditModal = () => {
    console.log('Відкриття модалки редагування');
    setIsClickWordOpen(false);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedWord(null);
  };

  const handleOpenConfirmationModal = () => {
    setIsClickWordOpen(false);
    setIsConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    setSelectedWord(null);
  };

  const handleDeleteWord = () => {
    if (selectedWord) {
      dispatch(deleteWord(selectedWord._id))
        .then((response) => {
          if (!isNaN(response.payload)) {
            handleCloseConfirmationModal();
          } else {
            console.error('Failed to delete word:', response.payload);
          }
        })
        .catch((error) => {
          console.error('Error deleting word:', error);
        });
    }
  };

  const isDictionaryPage = location.pathname.includes('/dictionary');
  const isRecommendPage = location.pathname.includes('/recommend');

  return (
    <>
      <TableList>
        <thead className="TableHeader">
          <tr className="TableHeaderList">
            <th
              className={`TableHeaderItem WordColumn ${
                isRecommendPage ? 'WordColumnRecommend' : ''
              }`}
            >
              <div className="TableImagContainer">
                Word <England className="IconCountry" />
              </div>
            </th>
            <th
              className={`TableHeaderItem TranslationColumn ${
                isRecommendPage ? 'TranslationColumnRecommend' : ''
              }`}
            >
              <div className="TableImagContainer">
                Translation <Ukraine className="IconCountry" />
              </div>
            </th>
            <th
              className={`TableHeaderItem CategoryColumn ${
                isRecommendPage ? 'CategoryColumnRecommend' : ''
              }`}
            >
              Category
            </th>
            <th
              className={`TableHeaderItem ProgressColumn ${
                isRecommendPage ? 'ProgressColumnRecommend' : ''
              }`}
            >
              {isDictionaryPage ? 'Progress' : ''}
            </th>
            {isDictionaryPage && (
              <th
                className={`TableHeaderItem DotsColumn ${
                  isRecommendPage ? 'DotsColumnRecommend' : ''
                }`}
              ></th>
            )}
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
                <td
                  className={`TableHeaderItem WordColumn ${
                    isRecommendPage ? 'WordColumnRecommend' : ''
                  }`}
                >
                  {word.en}
                </td>
                <td
                  className={`TableHeaderItem TranslationColumn ${
                    isRecommendPage ? 'TranslationColumnRecommend' : ''
                  }`}
                >
                  {word.ua}
                </td>
                <td
                  className={`TableHeaderItem CategoryColumn ${
                    isRecommendPage ? 'CategoryColumnRecommend' : ''
                  }`}
                >
                  {word.category}
                </td>
                <td
                  className={`TableHeaderItem ProgressColumn ${
                    isRecommendPage ? 'ProgressColumnRecommend' : ''
                  }`}
                >
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
                    className={`TableHeaderItem DotsColumn ${
                      isRecommendPage ? 'DotsColumnRecommend' : ''
                    }`}
                    onClick={(event) => handleClickWord(event, word)}
                  >
                    ...
                  </td>
                )}
              </tr>
            </tbody>
          ))}
      </TableList>
      {isClickWordOpen && (
        <ClickWord
          coordinates={modalCoordinates}
          onClose={handleCloseClickWord}
          onEdit={handleOpenEditModal}
          onDelete={handleOpenConfirmationModal}
        />
      )}
      {isEditModalOpen && selectedWord && (
        <EditModal
          word={selectedWord}
          handleClickClose={handleCloseEditModal}
        />
      )}
      {isConfirmationModalOpen && selectedWord && (
        <ConfirmationModal
          handleClickClose={handleCloseConfirmationModal}
          handleDeleteWord={handleDeleteWord}
          word={selectedWord}
        />
      )}
    </>
  );
}
