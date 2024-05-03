import { useState } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { CommonModal } from "../Modal/Modal";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";
import { appointmentStyles } from "../../styles/modalStyles";
import { NannyCardTop } from "../NannyCardTop/NannyCardTop";
import { NannyDetails } from "../NannyDetails/NannyDetails";
import { Rewiews } from "../Rewiews/Rewiews";
import icons from "../../images/icons.svg";
import * as n from "./NannyCard.styled";

export const NannyCard = ({ nanny }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const { isFavorite, toggleFavorite } = useFavorites(nanny);

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

  return (
    <n.CardWrapper>
      <n.AvatarWrapper>
        <n.AvatarPhoto src={nanny.avatar_url} alt={nanny.name} />
        <n.AvatarActive></n.AvatarActive>
      </n.AvatarWrapper>
      <div>
        <NannyCardTop nanny={nanny} />
        <n.HeartButton onClick={toggleFavorite}>
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
