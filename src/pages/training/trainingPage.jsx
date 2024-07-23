import AddWord from 'components/addWord/addWord';
import Training from 'components/training/training';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksWords } from '../../redux/data/data-operation';
import Modals from '../../modals/modals';
import { useNavigate } from 'react-router-dom';

export default function TrainingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.data.tasks);

  const [isModalOpenWellDone, setIsModalOpenWellDone] = useState(false);
  const [isModalOpenAddWord, setIsModalOpenAddWord] = useState(false);

  const openModalWellDone = useCallback(() => {
    setIsModalOpenWellDone(true);
  }, []);

  const closeModalWellDone = useCallback(() => {
    setIsModalOpenWellDone(false);
    navigate('/dictionary');
  }, [navigate]);

  const openModalAddWord = useCallback(() => {
    setIsModalOpenAddWord(true);
  }, []);

  const closeModalAddWord = useCallback(() => {
    setIsModalOpenAddWord(false);
  }, []);

  useEffect(() => {
    dispatch(tasksWords());
  }, [dispatch]);

  return (
    <>
      {tasks.tasks !== undefined && tasks.tasks.length !== 0 ? (
        <AddWord tasks={tasks.tasks} openModalWellDone={openModalWellDone} />
      ) : (
        <Training openModalAddWord={openModalAddWord} />
      )}
      {(isModalOpenWellDone || isModalOpenAddWord) && (
        <Modals
          isModalOpenWellDone={isModalOpenWellDone}
          isModalOpenAddWord={isModalOpenAddWord}
          onClose={isModalOpenWellDone ? closeModalWellDone : closeModalAddWord}
        />
      )}
    </>
  );
}
