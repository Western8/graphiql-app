import * as yup from 'yup';
import { setLocale } from 'yup';

/*
setLocale({
  // use constant translation keys for messages without values
  mixed: {
    default: 'field_invalid',
  },
  // use functions to generate an error object that includes the value from the schema
  string: {
    min: ({ min }) => ({ key: 'field_min_length', values: { min } }),
    //max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
  },
});
*/

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
