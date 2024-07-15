import * as Yup from 'yup';

const emailRules = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const EnWord = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
const UaWord = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(emailRules, 'Must be @ and .com or any')
    .required('Required'),
  password: Yup.string()
    .required('Password is required. Example: Password123')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(emailRules, 'Must be @ and .com or any')
    .required('Required'),
  password: Yup.string()
    .required('Password is required. Example: Password123')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

const LessonSchema = Yup.object().shape({
  reason: Yup.string().required('Required'),
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.string()
    .matches(/^\d+$/)
    .min(5, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

const AddWordSchema = Yup.object().shape({
  en: Yup.string().matches(EnWord, 'Must be en letter').required('Required'),
  ua: Yup.string().matches(UaWord, 'Must be ua letter').required('Required'),
  category: Yup.string().required('Required'),
  isIrregular: Yup.boolean(),
});

const EditWordSchema = Yup.object().shape({
  en: Yup.string().matches(EnWord, 'Must be en letter').required('Required'),
  ua: Yup.string().matches(UaWord, 'Must be ua letter').required('Required'),
});

export {
  SignupSchema,
  SigninSchema,
  LessonSchema,
  AddWordSchema,
  EditWordSchema,
};
