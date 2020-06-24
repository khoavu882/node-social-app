const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

exports.validateRegisterData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Email must not be empty!";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be a valid Email Address!";
  }

  if (isEmpty(data.password)) errors.password = "Must be not Empty!";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Password must match!";
  if (isEmpty(data.handle)) errors.handle = "Must be not Empty!";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLoginData = (data) => {
  let errors = {};
  if (isEmpty(data.email)) errors.email = "Must not be Empty";
  if (isEmpty(data.password)) errors.password = "Must not be Empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.reducerUserDetails = (data) => {
  let userDetails = {};

  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
  if (!isEmpty(data.website.trim())) {
    if (data.website.trim().substring(0, 4) !== "http") {
      userDetails.website = `http://${data.website.trim()}`;
    } else userDetails.website = data.website;
  }
  if (!isEmpty(data.location.trim())) userDetails.location = data.location;

  return userDetails;
};

exports.validateCommentData = (data) => {
  let errors = {};
  if (isEmpty(data.body)) errors.email = "Must not be Empty";
  if (isEmpty(data.password)) errors.password = "Must not be Empty";
  if (isEmpty(data.password)) errors.password = "Must not be Empty";
  if (isEmpty(data.password)) errors.password = "Must not be Empty";

  return commentData;
};
