export const minLengthValidator = errorMessage =>
  // if the value validates it will return undefined, otherwise return errormessage
  value => (value.length >= 3 ? undefined : (errorMessage || 'Required'));

export default null;

