export const isDarkmode =
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const fetchStatus = {
  success: 'SUCCESS',
  error: 'ERROR',
  loading: 'LOADING',
};

export const fetchMessages = {
  unknownError: 'Something went wrong. Please try again later.',
  sendSuccess: 'Mail has been send successfully,',
};

export const validateMessages = {
  mailAddressRequired: 'Please enter your email address.',
  MailAddressInvalid: 'Please enter correct email address.',
  subjectTooLong: 'Subject is too long. Please keep the length less than 30 strings.',
  messageRequired: 'Please write some message.',
  messageTooLong: 'Thank you for writing me so long email! But please keep the message a little shorter.',
};
