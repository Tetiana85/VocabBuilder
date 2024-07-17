import { useDispatch, useSelector } from 'react-redux';
import { createWord } from '../../redux/data/data-operation';
import { useFormik } from 'formik';
import { ShowRules } from '../../utils/showRules';
import { AddWordSchema } from '../../utils/validationSchemas';
import { ContainerAddWordModal } from './addWordModal.styled';
import { ReactComponent as ButtonClose } from '../../img/x-modal.svg';
import { ReactComponent as Ukraine } from '../../img/ukraine.svg';
import { ReactComponent as England } from '../../img/united kingdom.svg';
import Select from 'react-select';

export function AddWordModal({ handleClickClose }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.data.categories);

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      en: '',
      ua: '',
      category: '',
      isIrregular: undefined,
    },
    validationSchema: AddWordSchema,
    onSubmit: (values) => {
      dispatch(createWord(values)).then((response) => {
        isNaN(response.payload) && handleClickClose();
      });
    },
  });

  const handleCategoryChange = (selectedOption) => {
    setFieldValue('category', selectedOption ? selectedOption.value : '');
  };

  const handleIrregular = () => {
    if (values.isIrregular && values.category === 'verb') {
      const pattern = /^\w+-\w+-\w+$/;
      if (!pattern.test(values.en)) {
        return (
          <p className="EnInputMistake">Must be example: "know-knew-known"</p>
        );
      }
    }
  };

  const { getInputAlert, getInputClass } = ShowRules(values, touched, errors);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '15px',
      paddingLeft: '12px',
      paddingRight: '16px',
      background: 'none',
      borderColor: state.isFocused ? '#d1d5db' : provided.borderColor,
      color: '#f8f8f8',
      boxShadow: state.isFocused ? 'none' : provided.boxShadow,
      width: '204px',
      height: '48px',
      '&:hover': {
        borderColor: '#d1d5db',
      },
    }),
    menu: (provided) => ({
      ...provided,
      textTransform: 'capitalize',
      borderRadius: '15px',
      boxShadow: '0 4px 47px 0 rgba(18, 20, 23, 0.08)',
      width: '205px',
      overflowY: 'auto',
      paddingLeft: '24px',
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#f8f8f8',
        borderRadius: '12px',
        height: '101px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#d1d5db',
      },
    }),
    option: (provided) => ({
      ...provided,
      color: 'rgba(18, 20, 23, 0.5)',
      backgroundColor: 'transparent',
      '&:hover': {
        color: '#85AA9F',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#f8f8f8',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#f8f8f8',
      '&:hover': {
        color: '#f8f8f8',
      },
    }),
  };

  return (
    <ContainerAddWordModal>
      <ButtonClose className="ButtonClose" onClick={handleClickClose} />
      <div className="TextContainer">
        <h2 className="Title">Add word</h2>
        <p className="Text">
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
        </p>
      </div>
      <form className="Form" onSubmit={handleSubmit}>
        <Select
          id="category"
          name="category"
          styles={customStyles}
          options={categories.map((item) => ({ value: item, label: item }))}
          onChange={handleCategoryChange}
          placeholder="Categories"
        />
        <ul
          className="RadioButtonList"
          style={{ display: values.category === 'verb' ? 'flex' : 'none' }}
        >
          <li className="RadioButtonItem">
            <input
              className="RadioButton"
              id="regular"
              name="isIrregular"
              type="radio"
              onChange={() =>
                handleChange({ target: { name: 'isIrregular', value: false } })
              }
              value={false}
              checked={values.isIrregular === false}
            />
            Regular
          </li>
          <li className="RadioButtonItem">
            <input
              className="RadioButton"
              id="reason"
              name="isIrregular"
              type="radio"
              onChange={() =>
                handleChange({ target: { name: 'isIrregular', value: true } })
              }
              value={true}
              checked={values.isIrregular === true}
            />
            Irregular
          </li>
        </ul>
        <div className="UkrainianContainer" id="ukrainian">
          <div className="InputImagContainer">
            <Ukraine className="IconCountry" /> Ukrainian
          </div>
          <input
            id="ukrainian"
            className={getInputClass('Ua')}
            type="text"
            placeholder="Слово Українською"
            name="ua"
            value={values.ua}
            onChange={handleChange}
            required
          />
          {getInputAlert('ua')}
        </div>
        <div className="EnglishContainer">
          <div className="InputImagContainer">
            <England className="IconCountry" /> English
          </div>
          <input
            id="english"
            className={getInputClass('En')}
            type="text"
            placeholder="Word in English"
            name="en"
            value={values.en}
            onChange={handleChange}
            required
          />
          {handleIrregular() ? handleIrregular() : getInputAlert('en')}
        </div>
        <ul className="ButtonList">
          <li
            className="ButtonAdd"
            type="submit"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Add
          </li>
          <li className="ButtonCancel" onClick={handleClickClose}>
            Cancel
          </li>
        </ul>
      </form>
    </ContainerAddWordModal>
  );
}
