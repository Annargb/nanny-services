import styled from "styled-components";
import {
  //   Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from "formik";

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

export const NannyWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Avatar = styled.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
`;
export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${(p) => p.theme.colors.textGray};
  margin-bottom: 4px;
`;

export const NannyName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
  margin-bottom: 40px;
`;

export const SendButton = styled.button`
  border-radius: 30px;
  padding: 16px 217px;
  width: 472px;
  height: 52px;
  border: 1px solid ${(p) => p.theme.colors.green};
  background-color: ${(p) => p.theme.colors.green};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  transition:
    background-color 250ms ${(p) => p.theme.transition},
    color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.green};
  }
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: 54px;
  left: 8px;
  font-size: 12px;
  color: ${(p) => p.theme.colors.red};
`;

export const Label = styled.label`
  position: relative;
  width: 230px;
  height: 52px;
`;

export const LongLabel = styled(Label)`
  width: 470px;
`;

export const Field = styled(FormikField)`
  width: 230px;
  height: 52px;
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

export const LongField = styled(Field)`
  width: 470px;
`;

export const TextArea = styled(Field)`
  width: 470px;
  height: 116px;
  resize: none;
`;
