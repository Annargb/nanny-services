import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 64px 96px 100px 96px;
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.grayBackgraund};

  @media screen and (max-width: 1024px) {
    padding: 64px 20px;
  }
`;

export const NannyList = styled.ul`
  margin-bottom: 64px;
`;
