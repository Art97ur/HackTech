
const minLength = (length) => (value) => {
  return value.length >= length
    ? undefined
    : `The min length must be ${length}`;
};

export const minLength8 = minLength(8);

const maxLength = (length) => (value) => {
  return value.length <= length
    ? undefined
    : `The max length must be ${length}`;
};


export const maxLength25 = maxLength(25);


export const validateEmail = (email) => {
  const rgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return rgx.test(String(email).toLowerCase())
  ? undefined
  : `The input is not vali Email!`
};