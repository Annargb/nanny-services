import styled from "styled-components";

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 48px;
`;

export const ReviewerNameRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ReviewerNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background-color: ${(p) => p.theme.colors.avatarBorder};
`;

export const ReviewerNameLetter = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: ${(p) => p.theme.colors.green};
`;

export const Comment = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.textGrayColor};
`;

export const Name = styled.p`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconStar = styled.svg`
  width: 16px;
  height: 16px;
`;

export const Rating = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${(p) => p.theme.colors.black};
`;
