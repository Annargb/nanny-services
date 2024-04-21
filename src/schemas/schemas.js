import * as Yup from "yup";

const emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(
      emailPattern,
      "Please enter a valid email. For example jane@mail.com"
    )
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must contain at least 8 characters")
    .max(40, "Too long password")
    .required("Password is required"),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(40, "Too long name")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .matches(
      emailPattern,
      "Please enter a valid email! For example jane@mail.com"
    )
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must contain at least 8 characters")
    .max(40, "Too long password")
    .required("Password is required!"),
});

export const appointmentValidationSchema = Yup.object().shape({
  addres: Yup.string()
    .trim()
    .min(8, "Address must contain at least 8 characters")
    .max(100, "Too long address")
    .required("Address is required"),
  phone: Yup.string()
    .trim()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
      message: "Invalid Phone Number",
      excludeEmptyString: false,
    })
    .max(13, "Too long phone number")
    .required("The phone number is required"),
  childsAge: Yup.string()
    .trim()
    .max(15, "Please enter a child's age")
    .required("Child's age is required"),
  time: Yup.string()
    .length(5)
    .matches(/(\d){2}:(\d){2}/, 'Meeting time must have this pattern "00:00"')
    .required("Meeting time is required"),
  //   time: Yup.number().required("Meeting time is required"),
  email: Yup.string()
    .trim()
    .matches(
      emailPattern,
      "Please enter a valid email. For example jane@mail.com"
    )
    .required("Email is required"),
  name: Yup.string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(40, "Too long name")
    .required("Father's or mother's name is required"),
});
