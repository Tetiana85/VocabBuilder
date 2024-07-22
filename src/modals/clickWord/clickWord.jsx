// import { useDispatch, useSelector } from 'react-redux';
// import { ClickWordContainer } from './clickWord.styled';
// import { ReactComponent as Pencil } from '../../img/pencil-green.svg';
// import { ReactComponent as Trash } from '../../img/trash-green.svg';
// import {
//   openModalConfirmation,
//   openModalEdit,
// } from '../../redux/modals/modal-slice';

// export function ClickWord({ handleClickClose }) {
//   const dispatch = useDispatch();
//   const clickWordCoordinates = useSelector(
//     (state) => state.modal.clickWordCoordinates
//   );

//   const handleDeleteWord = () => {
//     handleClickClose();
//     dispatch(openModalConfirmation());
//   };

//   const handleEditClick = () => {
//     handleClickClose();
//     dispatch(openModalEdit());
//   };
//   return (
//     <ClickWordContainer x={clickWordCoordinates.x} y={clickWordCoordinates.y}>
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

import { ClickWordContainer } from './clickWord.styled';
import { ReactComponent as Pencil } from '../../img/pencil-green.svg';
import { ReactComponent as Trash } from '../../img/trash-green.svg';

export function ClickWord({ coordinates, onClose, onEdit, onDelete }) {
  const handleDeleteWord = () => {
    console.log('ClickWord закривається для видалення');
    onClose();
    onDelete(); // Предполагается, что onDelete обрабатывает состояние
  };

  const handleEditClick = () => {
    console.log('ClickWord закривається для редагування');
    onClose();
    onEdit(); // Предполагается, что onEdit обрабатывает состояние
  };

  return (
    <ClickWordContainer x={coordinates.x} y={coordinates.y}>
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
