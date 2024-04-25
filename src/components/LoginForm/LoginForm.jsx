import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { logInUser } from "../../redux/auth/authOperations";
import { loginSchema } from "../../schemas/schemas";
import icons from "../../images/icons.svg";
import * as n from "../RegistrationForm/RegistrationForm.styled";

export const LoginForm = ({ closeModal }) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }) => {
    const response = await dispatch(logInUser({ email, password }));
    if (!response.error) {
      closeModal();
      navigate("/nannies");
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
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
