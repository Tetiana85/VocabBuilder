import { ModalContainer } from './confirmationModal.styled';

export function ConfirmationModal({ handleClickClose, word, onDelete }) {
  const handleDeleteWord = () => {
    onDelete(word)
      .then(() => {
        handleClickClose();
      })
      .catch((error) => {
        console.error('Ошибка при удалении слова:', error);
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

export default ConfirmationModal;
