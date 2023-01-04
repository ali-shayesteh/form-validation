import { useState, useReducer, useEffect } from "react";

const validateEmail = (email) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(mailformat);
};

const validatePassword = (password) => {
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return strongRegex.test(password);
};

const handleSubmit = (e) => {
  e.preventDefault();
  alert("Form submitted!");
};
const reducer = (state, action) => {
  switch (action.type) {
    case "form_valid":
      return { ...state, status: true };
      break;
    case "form_invalid":
      return { ...state, status: false };
      break;
    case "form_setError":
      return { ...state, status: false, error: action.errMsg };
      break;
    default:
      return state;
  }
};

function useForm() {
  const [validate, dispatch] = useReducer(reducer, {
    status: false,
    error: {
      name: "",
      family: "",
      email: "",
      password: "",
      sex: "",
    },
  });
  const [form, setForm] = useState({
    name: "",
    family: "",
    email: "",
    password: "",
    sex: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm((cur) => ({ ...cur, [name]: value }));
  };
  useEffect(() => {
    dispatch({
      type: "form_setError",
      errMsg: {
        name: "",
        email: "",
        password: "",
        family: "",
        sex: "",
      },
    });
  }, []);
  useEffect(() => {
    const validateForm = () => {
      const nameValid = !!form.name;
      const familyValid = !!form.family;
      const passwordvalid = validatePassword(form.password);
      const sexValid = !!form.sex;
      const emailValid = validateEmail(form.email);

      dispatch({
        type: "form_setError",
        errMsg: {
          name: nameValid ? "" : "Please enter your name",
          email: emailValid ? "" : "Please enter a valid email address",
          password: passwordvalid ? "" : "Please enter a valid password.",
          family: familyValid ? "" : "Please enter your family",
          sex: sexValid ? "" : "Please enter your name",
        },
      });

      dispatch({
        type:
          nameValid && familyValid && emailValid && passwordvalid && sexValid
            ? "form_valid"
            : "form_invalid",
      });
    };
    validateForm();
  }, [form]);

  return {
    validate,
    handleChange,
    form,
    handleSubmit,
  };
}
export default useForm;
