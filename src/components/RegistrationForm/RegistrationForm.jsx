import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { registerUser } from "../../redux/auth/authOperations";
import { registerSchema } from "../../schemas/schemas";
import icons from "../../images/icons.svg";
import * as n from "./RegistrationForm.styled";

export const RegistrationForm = ({ closeModal }) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async ({ name, email, password }) => {
    const response = await dispatch(
      registerUser({ email, password, displayName: name })
    );
    if (!response.error) {
      closeModal();
      navigate("/nannies");
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <n.Form>
        <n.FormTitle>Registration</n.FormTitle>
        <n.FormText>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </n.FormText>
        <n.InputWrapper>
          <n.FormGroup>
            <n.Field name="name" type="text" placeholder="Name" />
            <n.ErrorMessage name="name" component="span" required />
          </n.FormGroup>

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
