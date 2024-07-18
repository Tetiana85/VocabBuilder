import { useDispatch, useSelector } from 'react-redux';
import { ClickWordContainer } from './clickWord.styled';
import { ReactComponent as Pencil } from '../../img/pencil-green.svg';
import { ReactComponent as Trash } from '../../img/trash-green.svg';
import {
  openModalConfirmation,
  openModalEdit,
} from '../../redux/modals/modal-slice';

export function ClickWord({ handleClickClose }) {
  const dispatch = useDispatch();
  const clickWordCoordinates = useSelector(
    (state) => state.modal.clickWordCoordinates
  );

  const handleDeleteWord = () => {
    handleClickClose();
    dispatch(openModalConfirmation());
  };

  const handleEditClick = () => {
    handleClickClose();
    dispatch(openModalEdit());
  };
  return (
    <ClickWordContainer x={clickWordCoordinates.x} y={clickWordCoordinates.y}>
      <li className="Element" onClick={handleEditClick}>
        <Pencil />
        Edit
      </li>
      <li className="Element" onClick={handleDeleteWord}>
        <Trash />
        Delete
      </li>
    </ClickWordContainer>
  );
}

// import { useDispatch, useSelector } from 'react-redux';
// import { ClickWordContainer } from './clickWord.styled';
// import { ReactComponent as Pencil } from '../../img/pencil-green.svg';
// import { ReactComponent as Trash } from '../../img/trash-green.svg';
// import {
//   openModalConfirmation,
//   openModalEdit,
//   closeModalClickWord,
// } from '../../redux/modals/modal-slice';

// export function ClickWord({ handleClickClose }) {
//   const dispatch = useDispatch();
//   const clickWordCoordinates = useSelector(
//     (state) => state.modal.clickWordCoordinates
//   );

//   const handleDeleteWord = () => {
//     handleClickClose(); // Закрываем текущий модал
//     dispatch(openModalConfirmation()); // Открываем модал подтверждения
//   };

//   const handleEditClick = () => {
//     handleClickClose(); // Закрываем текущий модал
//     dispatch(openModalEdit()); // Открываем модал редактирования
//   };

//   const handleContainerClick = (event) => {
//     event.stopPropagation();
//   };

//   return (
//     <ClickWordContainer
//       x={clickWordCoordinates.x}
//       y={clickWordCoordinates.y}
//       onClick={handleContainerClick}
//     >
//       <li className="Element" onClick={handleEditClick}>
//         <Pencil />
//         Edit
//       </li>
//       <li className="Element" onClick={handleDeleteWord}>
//         <Trash />
//         Delete
//       </li>
//     </ClickWordContainer>
//   );
// }
