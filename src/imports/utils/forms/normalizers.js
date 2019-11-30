export const normalizeCard = oldValue => newValue => newValue.match(/^[0-9]{0,16}$/) ? newValue : oldValue;

export const normalizePin = oldValue => newValue => newValue.match(/^[0-9]{0,6}$/) ? newValue : oldValue;

export const normalizeAmount = oldValue => newValue => newValue.match(/^[1-9][0-9]*$/) ? newValue : oldValue;
