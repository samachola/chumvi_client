import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = (data) => {
  let errors = {};

  if (Validator.isNull(data.username)) {
    errors.username = 'username is required';
  }
};

export default validateInput;
