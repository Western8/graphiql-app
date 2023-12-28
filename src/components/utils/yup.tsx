import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required('yupEmailRequired'),
  password: yup
    .string()
    .required('yupPasswordRequired')
    .min(8, 'yupPasswordMin')
    .matches(/[A-Za-z]/, 'yupPasswordLetter')
    .matches(/[@$!%*#?&]+/, 'yupPasswordCharacter')
    .matches(/\d+/, 'yupPasswordNumber'),
});

export default schema;
