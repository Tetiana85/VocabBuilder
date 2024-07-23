import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import MobileModal from './mobileModal/mobileModal';
import { BackdropClickWord, BackdropStyle } from './modals.styled';
import { AddWordModal } from './addWordModal/addWordModal';
import { ClickWord } from './clickWord/clickWord';
import { EditModal } from './editModal/editModal';
import { ConfirmationModal } from './confirmation/confirmationModal';
import WellDoneModal from './wellDoneModal/wellDoneModal';

const modalRoot = document.querySelector('#modal-root');

export default function Modals({
  isMobileModalOpen,
  isModalOpenAddWord,
  isModalOpenClickWord,
  isModalOpenConfirmation,
  isModalOpenEdit,
  isModalOpenWellDone,
  selectedWord,
  coordinates,
  onClose,
  onEdit,
  onDelete,
  handleOpenModalConfirmation,
}) {
  const handleClickClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClickClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        handleClickClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.cssText = `overflow: hidden; `;

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.cssText = `overflow: auto; `;
    };
  }, [handleClickClose]);

  return createPortal(
    <>
      {(isMobileModalOpen ||
        isModalOpenAddWord ||
        isModalOpenEdit ||
        isModalOpenConfirmation ||
        isModalOpenWellDone) && (
        <BackdropStyle onClick={handleBackdropClick}>
          {isMobileModalOpen && (
            <MobileModal handleClickClose={handleClickClose} />
          )}
          {isModalOpenAddWord && (
            <AddWordModal handleClickClose={handleClickClose} />
          )}
          {isModalOpenEdit && selectedWord && (
            <EditModal
              word={selectedWord}
              handleClickClose={handleClickClose}
            />
          )}
          {isModalOpenConfirmation && selectedWord && (
            <ConfirmationModal
              handleClickClose={handleClickClose}
              word={selectedWord}
              onDelete={onDelete}
            />
          )}
          {isModalOpenWellDone && (
            <WellDoneModal handleClickClose={handleClickClose} />
          )}
        </BackdropStyle>
      )}
      {isModalOpenClickWord && (
        <BackdropClickWord onClick={handleBackdropClick}>
          <ClickWord
            coordinates={coordinates}
            onClose={handleClickClose}
            onEdit={onEdit}
            onDelete={handleOpenModalConfirmation}
            word={selectedWord}
          />
        </BackdropClickWord>
      )}
    </>,
    modalRoot
  );
}
