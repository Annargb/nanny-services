import icons from "../../images/icons.svg";
import * as n from "./NannyCardTop.styled";

export const NannyCardTop = ({ nanny }) => {
  return (
    <n.TopWrapper>
      <n.NannyTitle>Nanny</n.NannyTitle>
      <n.TitleWrapper>
        <n.LocationRaitingWrapper>
          <n.TextWrapper>
            <n.IconMap>
              <use href={`${icons}#map-pin`} />
            </n.IconMap>
            <n.Text>{nanny.location}</n.Text>
          </n.TextWrapper>
          <n.TextWrapper className="pseudo">
            <n.IconStar>
              <use href={`${icons}#star`} />
            </n.IconStar>
            <n.Text>Rating: {nanny.rating}</n.Text>
          </n.TextWrapper>
          <n.TextWrapper className="pseudo">
            <n.Text>
              Price / 1 hour:{" "}
              <n.AccentText>{nanny.price_per_hour}$</n.AccentText>
            </n.Text>
          </n.TextWrapper>
        </n.LocationRaitingWrapper>
      </n.TitleWrapper>
    </n.TopWrapper>
  );
};
