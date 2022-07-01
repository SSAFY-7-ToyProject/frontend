const validate = (name, value) => {
  switch (name) {
    case "email":
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    case "password":
      return /^.{8,20}$/.test(value);
    case "phone":
      return /^01(?:0|1|[6-9])+-(\d{3}|\d{4})+-(\d{4})$/.test(value);
    case "birth":
      return /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/.test(value);
  }
};

export default validate;
