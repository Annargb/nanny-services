import { Field as FormikField } from "formik";

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 200px;
  font-size: 16px;
`;

export const Field = styled(FormikField)`
  position: relative;
  max-width: 231px;
  width: 100%;
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

export const Dropdown = styled.div`
  position: absolute;
  z-index: 2;
  top: calc(100% + 8px);
  right: 0;
  width: 150px;
  max-height: 180px;
  padding: 16px;
  /* background-color: ${(p) => p.theme.colors.snowWhite}; */
  background-color: #fff;
  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
  border-radius: 12px;
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.black};
`;

export const OptionWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 100px;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Option = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: rgba(17, 16, 28, 0.3);
  cursor: pointer;
  transition: color 250ms ${(p) => p.theme.transition};

  &:hover {
    color: ${(p) => p.theme.colors.black};
  }

  &.selected {
    color: ${(p) => p.theme.colors.black};
  }
`;

export const TimeRight = styled.span`
  margin-right: 12px;
`;

export const TimeLeft = styled.span`
  margin-left: 12px;
`;

export const ClockIcon = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 16px;
  right: -14px;
  cursor: pointer;
`;
