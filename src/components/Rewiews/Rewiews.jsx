import { nanoid } from "nanoid";
import icons from "../../images/icons.svg";
import * as n from "./Rewiews.styled";

export const Rewiews = ({ reviews }) => {
  return (
    <n.ReviewsList>
      {reviews.map((review) => (
        <li key={nanoid()}>
          <n.ReviewerNameRatingWrapper>
            <n.ReviewerNameContainer>
              <n.ReviewerNameLetter>
                {review.reviewer.charAt(0).toUpperCase()}
              </n.ReviewerNameLetter>
            </n.ReviewerNameContainer>
            <div>
              <n.Name>{review.reviewer}</n.Name>
              <n.RatingWrapper>
                <n.IconStar>
                  <use href={`${icons}#star`} />
                </n.IconStar>
                <n.Rating>{review.rating.toFixed(1)}</n.Rating>
              </n.RatingWrapper>
            </div>
          </n.ReviewerNameRatingWrapper>
          <n.Comment>{review.comment}</n.Comment>
        </li>
      ))}
    </n.ReviewsList>
  );
};
