import * as yup from 'yup';

const contactusSchema = yup.object().shape({
  first_name_584c: yup.string().min(4, 'First name must be at least 4 characters').required('First name is required'),
  last_name_51ee: yup.string().min(4, 'Last name must be at least 4 characters').required('Last name is required'),
  email_bd82: yup.string().email('Invalid email').required('Email is required'),
  long_answer_afda: yup.string().test('word-count', 'Message must be between 5 and 50 words', value => {
    if (!value) return false; // If message is empty, return false
    const wordCount = value.trim().split(/\s+/).length;
    return wordCount >= 5 && wordCount <= 50;
  }).required('Message is required'),
});

export default contactusSchema;
