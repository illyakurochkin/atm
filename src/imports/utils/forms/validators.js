export const validateCard = value => {
  if(!value) {
    return 'card is required';
  }

  if(!value.match(/^[0-9]{16}$/)) {
    return 'card number is not valid';
  }
};

export const validatePin = value => {
  if(!value) {
    return 'pin is required';
  }

  if(!value.match(/^[0-9]{6}$/)) {
    return 'pin is not valid';
  }
};
