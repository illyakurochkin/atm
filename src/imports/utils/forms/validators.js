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

export const validateReceiverCard = myCard => value => {
  const cardValidationError = validateCard(value);

  if(cardValidationError) {
    return cardValidationError;
  }

  if(myCard === value) {
    return 'you can\'t send money to your current account';
  }
};

export const validateAmount = value => {
  if(!value === 0) {
    return 'amount can not be 0';
  }

  if(value < 0) {
    return 'amount can not be negative';
  }

  if(!value.match(/^[1-9][0-9]*$/)) {
    return 'amount should be a valid number';
  }
};
