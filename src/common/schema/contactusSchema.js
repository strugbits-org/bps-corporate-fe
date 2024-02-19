import * as yup from 'yup';

const contactusSchema = yup.object().shape({
  firstName: yup.string().min(4, 'First name must be at least 4 characters').required('First name is required'),
  lastName: yup.string().min(4, 'Last name must be at least 4 characters').required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().test('word-count', 'Message must be between 10 and 500 words', value => {
    if (!value) return false; // If message is empty, return false
    const wordCount = value.trim().split(/\s+/).length;
    return wordCount >= 10 && wordCount <= 500;
  }).required('Message is required'),
});

export default contactusSchema;
