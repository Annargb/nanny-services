import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  margin-bottom: 32px;
`;

export const Filters = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${(p) => p.theme.colors.textGray};
  margin-bottom: 8px;
`;
