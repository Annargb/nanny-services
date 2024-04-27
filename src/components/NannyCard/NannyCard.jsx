import { useState } from "react";
import { useDispatch } from "react-redux";
import icons from "../../images/icons.svg";
import { Rewiews } from "../Rewiews/Rewiews";
import * as n from "./NannyCard.styled";
import { NannyDetails } from "../NannyDetails/NannyDetails";
import { CommonModal } from "../Modal/Modal";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";

import {
  addToFavorites,
  // toggleFavorites,
} from "../../redux/favorites/favoritesOperations";
import { appointmentStyles } from "../../styles/modalStyles";

export const NannyCard = ({ nanny }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const handleReadMoreClick = () => {
    setShowReviews(true);
  };

  const handleFavoriteClick = async () => {
    setIsFavorite(!isFavorite);
    // await dispatch(toggleFavorites(nanny));
    dispatch(addToFavorites(nanny));
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
          <n.TitleWrapper>
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
            {/* <n.HeartButton
              type="button"
              // onClick={() => setIsFavorite(!isFavorite)}
              onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <n.PressedHeart>
                  <use href={`${icons}#full-heart`} />
                </n.PressedHeart>
              ) : (
                <n.IconHeart>
                  <use href={`${icons}#heart`} />
                </n.IconHeart>
              )}
            </n.HeartButton> */}
          </n.TitleWrapper>
        </n.TopWrapper>
        <n.HeartButton
          type="button"
          // onClick={() => setIsFavorite(!isFavorite)}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? (
            <n.PressedHeart>
              <use href={`${icons}#full-heart`} />
            </n.PressedHeart>
          ) : (
            <n.IconHeart>
              <use href={`${icons}#heart`} />
            </n.IconHeart>
          )}
        </n.HeartButton>
        <n.Name>{nanny.name}</n.Name>
        <NannyDetails nanny={nanny} />
        <n.About $biggerMargin={showReviews}>{nanny.about}</n.About>
        {!showReviews && (
          <n.ReadMore type="button" onClick={handleReadMoreClick}>
            Read more
          </n.ReadMore>
        )}
        {showReviews && (
          <>
            <Rewiews reviews={nanny.reviews} />
            <n.AppointmentButton type="button" onClick={() => openModal()}>
              Make an appointment
            </n.AppointmentButton>
          </>
        )}
      </div>
      <CommonModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        styles={appointmentStyles}
      >
        <AppointmentForm nanny={nanny} />
      </CommonModal>
    </n.CardWrapper>
  );
};
