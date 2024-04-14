import { Formik } from "formik";
import * as Yup from "yup";
import * as n from "./RegistrationForm.styled";

const emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

const validationSchema = Yup.object().shape({
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

export const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      //   onSubmit={handleSubmit}
    >
      <n.Form>
        <n.FormTitle>Registration</n.FormTitle>
        <n.FormGroup>
          <n.LabelText>Name</n.LabelText>
          <n.Field name="name" type="text" placeholder="Name" />
          <n.ErrorMessage name="name" component="span" required />
        </n.FormGroup>

        <n.FormGroup>
          <n.LabelText>Email</n.LabelText>
          <n.Field name="email" type="email" placeholder="Email" />
          <n.ErrorMessage name="email" component="span" required />
        </n.FormGroup>

        <n.FormGroup>
          <n.LabelText>Password</n.LabelText>
          <n.Field name="password" type="password" placeholder="Password" />
          <n.ErrorMessage name="password" component="span" required />
        </n.FormGroup>

        <n.RegisterButton type="submit">Sign up</n.RegisterButton>
      </n.Form>
    </Formik>
  );
};
