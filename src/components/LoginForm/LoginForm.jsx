import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import icons from "../../images/icons.svg";
import * as n from "../RegistrationForm/RegistrationForm.styled";

const emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

const validationSchema = Yup.object().shape({
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

export const LoginForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      //   onSubmit={handleSubmit}
    >
      <n.Form>
        <n.FormTitle>Log In</n.FormTitle>
        <n.FormText>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </n.FormText>
        <n.InputWrapper>
          <n.FormGroup>
            <n.Field name="email" type="email" placeholder="Email" />
            <n.ErrorMessage name="email" component="span" required />
          </n.FormGroup>

          <n.FormGroup>
            <n.Field
              name="password"
              type={isVisiblePassword ? "text" : "password"}
              placeholder="Password"
            />
            <n.ErrorMessage name="password" component="span" required />
            <n.PasswordButton
              type="button"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              {isVisiblePassword ? (
                <n.PasswordIcon>
                  <use href={`${icons}#eye`} />
                </n.PasswordIcon>
              ) : (
                <n.PasswordIcon>
                  <use href={`${icons}#eye-off`} />
                </n.PasswordIcon>
              )}
            </n.PasswordButton>
          </n.FormGroup>
        </n.InputWrapper>

        <n.RegisterButton type="submit">Sign up</n.RegisterButton>
      </n.Form>
    </Formik>
  );
};
