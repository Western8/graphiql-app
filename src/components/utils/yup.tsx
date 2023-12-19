import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required('E-mail is a required field'),
  password: yup
    .string()
    .matches(/[A-Za-z]/, 'Password must contain one letter')
    .matches(/[@$!%*#?&]+/, 'Password must contain one special character')
    .matches(/\d+/, 'Password must contain one number')
    .min(8, 'Password must contain at least 8 characters')
    .required('Password is a required field'),
});

export default schema;
