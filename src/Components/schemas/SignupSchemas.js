import * as Yup from 'yup';

const passwordRules =
  /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

export const signUpSchema = () => Yup.object({
  name: Yup.string().required('Please enter your first name'),
  email: Yup.string()
    .email('Enter valid email')
    .required('Please enter email'),
  password: Yup.string()
    .matches(
      passwordRules,
      {
        message:
          'password should include one number, one character and should be 8 character long'
      }
    )
    .required('Please enter password'),
    dob: Yup.string().required('Please enter your date'),
    country: Yup.string().required('Please enter your country'),
    state: Yup.string().required('Please enter your state'),
    city: Yup.string().required('Please enter your city'),
    phoneNumber: Yup.string().required('Please enter your phoneNumber'),
});
