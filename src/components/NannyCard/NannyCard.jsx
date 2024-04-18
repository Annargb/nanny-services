import { useState } from "react";
import icons from "../../images/icons.svg";
import { getAge } from "../../operations/operations";
import { Rewiews } from "../Rewiews/Rewiews";
import * as n from "./NannyCard.styled";

export const NannyCard = ({ nanny }) => {
  const [showReviews, setShowReviews] = useState(false);

  const handleReadMoreClick = () => {
    setShowReviews(true);
  };

  return (
    <n.CardWrapper>
      <n.AvatarWrapper>
        <n.AvatarPhoto src={nanny.avatar_url} alt={nanny.name} />
        <n.AvatarActive></n.AvatarActive>
      </n.AvatarWrapper>
      <div>
        <n.TopWrapper>
          <n.NannyTitle>Nanny</n.NannyTitle>
          <n.TitleButtonWrapper>
            <n.LocationRaitingWrapper>
              <n.TextWrapper>
                <n.IconMap>
                  <use href={`${icons}#map-pin`} />
                </n.IconMap>
                <n.Text>{nanny.location}</n.Text>
                <n.TextDelimiter></n.TextDelimiter>
              </n.TextWrapper>
              <n.TextWrapper>
                <n.IconStar>
                  <use href={`${icons}#star`} />
                </n.IconStar>
                <n.Text>Rating: {nanny.rating}</n.Text>
                <n.TextDelimiter></n.TextDelimiter>
              </n.TextWrapper>
              <n.TextWrapper>
                <n.Text>
                  Price / 1 hour:{" "}
                  <n.AccentText>{nanny.price_per_hour}$</n.AccentText>
                </n.Text>
              </n.TextWrapper>
            </n.LocationRaitingWrapper>
            <n.HeartButton type="button">
              <n.IconHeart>
                <use href={`${icons}#heart`} />
              </n.IconHeart>
            </n.HeartButton>
          </n.TitleButtonWrapper>
        </n.TopWrapper>
        <n.Name>{nanny.name}</n.Name>
        <n.List>
          <n.ListItem>
            <n.ListTitle>
              Age:{" "}
              <n.ListSubText
                style={{
                  textDecoration: "underline",
                  textDecorationSkipInk: "none",
                }}
              >
                {getAge(nanny.birthday)}
              </n.ListSubText>
            </n.ListTitle>
          </n.ListItem>
          <n.ListItem>
            <n.ListTitle>
              Experience: <n.ListSubText>{nanny.experience}</n.ListSubText>
            </n.ListTitle>
          </n.ListItem>
          <n.ListItem>
            <n.ListTitle>
              Kids Age: <n.ListSubText>{nanny.kids_age}</n.ListSubText>
            </n.ListTitle>
          </n.ListItem>
          <n.ListItem>
            <n.ListTitle>
              Characters:{" "}
              <n.ListSubText>
                {nanny.characters
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(", ")}
              </n.ListSubText>
            </n.ListTitle>
          </n.ListItem>
          <n.ListItem>
            <n.ListTitle>
              Education: <n.ListSubText>{nanny.education}</n.ListSubText>
            </n.ListTitle>
          </n.ListItem>
        </n.List>
        <n.About $biggerMargin={showReviews}>{nanny.about}</n.About>
        {!showReviews && (
          <n.ReadMore
            type="button"
            onClick={handleReadMoreClick}
            //   disabled={showReviews}
          >
            Read more
          </n.ReadMore>
        )}
        {showReviews && (
          <>
            <Rewiews reviews={nanny.reviews} />
            <n.AppointmentButton type="button">
              Make an appointment
            </n.AppointmentButton>
          </>
        )}
      </div>
    </n.CardWrapper>
  );
};
