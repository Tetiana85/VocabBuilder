import { ModalContainer } from './confirmationModal.styled';
import { deleteWord } from '../../redux/data/data-operation';
import { useDispatch } from 'react-redux';

export function ConfirmationModal({ handleClickClose, word }) {
  const dispatch = useDispatch();

  const handleDeleteWord = () => {
    dispatch(deleteWord(word)).then((response) => {
      isNaN(response.payload) && handleClickClose();
    });
  };

  return (
    <ModalContainer>
      <h2 className="Title">Are you sure you want to delete {word.en}?</h2>
      <ul className="ListButton">
        <li className="ButtonYes" onClick={handleDeleteWord}>
          Yes
        </li>
        <li className="ButtonNo" onClick={handleClickClose}>
          No
        </li>
      </ul>
    </ModalContainer>
  );
}
