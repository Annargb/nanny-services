import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from "formik";
import styled from "styled-components";

export const Form = styled(FormikForm)`
  max-width: 438px;
  margin-right: auto;
  margin-left: auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`;

export const FormTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.black};
  margin-bottom: 20px;
`;

export const FormText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.textGrayColor};
  margin-bottom: 40px;
`;

export const Field = styled(FormikField)`
  padding: 16px 18px;
  font-size: inherit;
  line-height: 1.25;
  border-radius: 12px;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.inputBorderColor};
  outline: none;
  color: ${(p) => p.theme.colors.black};
  background-color: transparent;
  transition: border-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.green};
  }

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.black};
  }
`;

export const FormGroup = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: 52px;
  left: 8px;
  font-size: 12px;
  color: ${(p) => p.theme.colors.red};
`;

export const RegisterButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.green};
  border-radius: 30px;
  border: 1px solid;
  border-color: transparent;
  padding: 12px 188px;
  transition:
    background-color 250ms ${(p) => p.theme.transition},
    border-color 250ms ${(p) => p.theme.transition},
    color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.white};
    border-color: ${(p) => p.theme.colors.green};
    color: ${(p) => p.theme.colors.green};
  }
`;

export const PasswordButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`;

export const PasswordIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
