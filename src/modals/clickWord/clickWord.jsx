import { ClickWordContainer } from './clickWord.styled';
import { ReactComponent as Pencil } from '../../img/pencil-green.svg';
import { ReactComponent as Trash } from '../../img/trash-green.svg';

export function ClickWord({ coordinates, onClose, onEdit, onDelete, word }) {
  const handleDeleteWord = () => {
    onClose();
    onDelete(word);
  };

  const handleEdit = () => {
    onClose();
    onEdit();
  };

  return (
    <ClickWordContainer x={coordinates.x} y={coordinates.y}>
      <li className="Element" onClick={handleEdit}>
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

export default ClickWord;
