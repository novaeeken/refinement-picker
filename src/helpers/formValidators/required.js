export const requiredValidator = errorMessage =>
// if the value validates it will return undefined, otherwise return errormessage
  value => (value ? undefined : (errorMessage || 'Required'));

export default null;
