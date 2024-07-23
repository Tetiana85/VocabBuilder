import { ModalContainer } from './editModal.styled';
import { ReactComponent as ButtonClose } from '../../img/x-modal.svg';
import { ReactComponent as Ukraine } from '../../img/ukraine.svg';
import { ReactComponent as England } from '../../img/united kingdom.svg';
import { ShowRules } from '../../utils/showRules';
import { useFormik } from 'formik';
import { EditWordSchema } from '../../utils/validationSchemas';
import { useDispatch } from 'react-redux';
import { editWord } from '../../redux/data/data-operation';

export function EditModal({ word, handleClickClose }) {
  const dispatch = useDispatch();
  // const clickWordId = useSelector((state) => state.modal.clickWordId);
  const { values, errors, touched, isValid, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        en: `${word.en}`,
        ua: `${word.ua}`,
        category: word.category,
        isIrregular: word.isIrregular,
      },

      validationSchema: EditWordSchema,

      onSubmit: (values) => {
        dispatch(editWord({ edit: values, id: word._id })).then((response) => {
          !response.error && handleClickClose();
        });
      },
    });

  const { getInputAlert, getInputClass } = ShowRules(values, touched, errors);
  return (
    <ModalContainer>
      <ButtonClose className="ButtonClose" onClick={handleClickClose} />
      <form className="Form">
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
          {getInputAlert('en')}
        </div>

        <ul className="ButtonList">
          <li
            className="ButtonAdd"
            type="submit"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Save
          </li>
          <li className="ButtonCancel" onClick={handleClickClose}>
            Cancel
          </li>
        </ul>
      </form>
    </ModalContainer>
  );
}

// import { ModalContainer } from './editModal.styled';
// import { ReactComponent as ButtonClose } from '../../img/x-modal.svg';
// import { ReactComponent as Ukraine } from '../../img/ukraine.svg';
// import { ReactComponent as England } from '../../img/united kingdom.svg';
// import { ShowRules } from '../../utils/showRules';
// import { useFormik } from 'formik';
// import { EditWordSchema } from '../../utils/validationSchemas';
// import { useDispatch } from 'react-redux';
// import { editWord } from '../../redux/data/data-operation';

// export function EditModal({ word, handleClickClose }) {
//   const dispatch = useDispatch();
//   const { values, errors, touched, isValid, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: {
//         en: `${word.en}`,
//         ua: `${word.ua}`,
//         category: word.category,
//         isIrregular: word.isIrregular,
//       },

//       validationSchema: EditWordSchema,

//       onSubmit: (values) => {
//         dispatch(editWord({ edit: values, id: word._id })).then((response) => {
//           !response.error && handleClickClose();
//         });
//       },
//     });

//   const { getInputAlert, getInputClass } = ShowRules(values, touched, errors);
//   return (
//     <ModalContainer>
//       <ButtonClose className="ButtonClose" onClick={handleClickClose} />
//       <form className="Form">
//         <div className="UkrainianContainer" id="ukrainian">
//           <div className="InputImagContainer">
//             <Ukraine className="IconCountry" /> Ukrainian
//           </div>
//           <input
//             id="ukrainian"
//             className={getInputClass('Ua')}
//             type="text"
//             placeholder="Слово Українською"
//             name="ua"
//             value={values.ua}
//             onChange={handleChange}
//             required
//           />
//           {getInputAlert('ua')}
//         </div>
//         <div className="EnglishContainer">
//           <div className="InputImagContainer">
//             <England className="IconCountry" /> English
//           </div>
//           <input
//             id="english"
//             className={getInputClass('En')}
//             type="text"
//             placeholder="Word in English"
//             name="en"
//             value={values.en}
//             onChange={handleChange}
//             required
//           />
//           {getInputAlert('en')}
//         </div>

//         <ul className="ButtonList">
//           <li
//             className="ButtonAdd"
//             type="submit"
//             disabled={!isValid}
//             onClick={handleSubmit}
//           >
//             Save
//           </li>
//           <li className="ButtonCancel" onClick={handleClickClose}>
//             Cancel
//           </li>
//         </ul>
//       </form>
//     </ModalContainer>
//   );
// }
