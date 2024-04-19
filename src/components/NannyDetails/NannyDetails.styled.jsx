import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ListItem = styled.li`
  border-radius: 24px;
  padding: 8px 16px;
  background-color: ${(p) => p.theme.colors.grayBackgraund};
`;

export const ListTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textGray};
`;

export const ListSubText = styled.span`
  color: ${(p) => p.theme.colors.black};
`;
