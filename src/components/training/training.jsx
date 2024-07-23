import { TrainingContainer } from './training.styled';

export default function Training({ openModalAddWord }) {
  const handleAddWord = () => {
    openModalAddWord();
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <TrainingContainer>
      <div className="ContentContainer">
        <div className="ImgContainer">
          <div className="Img" />
        </div>
        <div className="TextContainer">
          <h2 className="Title">
            You don&apos;t have a single word to learn right now.
          </h2>
          <p className="Text">
            Please create or add a word to start the workout. We want to improve
            your vocabulary and develop your knowledge, so please share the
            words you are interested in adding to your study.
          </p>
        </div>
        <ul className="ButtonList">
          <li className="AddWordButton" onClick={handleAddWord}>
            Add word
          </li>
          <li className="CancelButton" onClick={handleCancel}>
            Cancel
          </li>
        </ul>
      </div>
    </TrainingContainer>
  );
}
