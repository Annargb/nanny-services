import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1440px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
`;
