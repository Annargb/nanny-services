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

export const LoadMoreButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  border-radius: 30px;
  display: block;
  padding: 14px 38px;
  margin: 0 auto;
  width: 159px;
  height: 48px;
  border: 1px solid ${(p) => p.theme.colors.green};
  background-color: ${(p) => p.theme.colors.green};
  transition:
    color 250ms ${(p) => p.theme.transition},
    background-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.green};
    background-color: ${(p) => p.theme.colors.white};
  }
`;
