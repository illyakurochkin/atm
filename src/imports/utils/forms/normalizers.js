export const normalizeCard = oldValue => newValue => newValue.match(/^[0-9]{0,16}$/) ? newValue : oldValue;

export const normalizePin = oldValue => newValue => newValue.match(/^[0-9]{0,6}$/) ? newValue : oldValue;
