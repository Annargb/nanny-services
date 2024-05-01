import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import icons from "../../images/icons.svg";
import { Rewiews } from "../Rewiews/Rewiews";
import * as n from "./NannyCard.styled";
import { NannyDetails } from "../NannyDetails/NannyDetails";
import { CommonModal } from "../Modal/Modal";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";
import { appointmentStyles } from "../../styles/modalStyles";
import { updateFavorites } from "../../redux/favorites/favoritesSlice";
import { selectUserName } from "../../redux/auth/selectors";
import toast from "react-hot-toast";

export const NannyCard = ({ nanny }) => {
  const isLogIn = useSelector(selectUserName);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [isFavorite, setIsFavorite] = useState(checkFavorite(nanny) || false);

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

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites !== null && storedFavorites !== undefined) {
      dispatch(updateFavorites(storedFavorites));
    }
  }, [dispatch]);

  function checkFavorite(nanny) {
    if (isLogIn) {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      if (Array.isArray(storedFavorites)) {
        return storedFavorites.some((favorite) => favorite.id === nanny.id);
      }
      return false;
    } else {
      return false;
    }
  }

  const addToFavorites = (nanny) => {
    let storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!Array.isArray(storedFavorites)) {
      storedFavorites = [];
    }
    const updatedFavorites = [...storedFavorites, nanny];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(true);
    if (storedFavorites.length > 0) {
      dispatch(updateFavorites(updatedFavorites));
    }
  };

  const removeFromFavorites = (nanny) => {
    let storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = storedFavorites.filter(
      (favorite) => favorite.id !== nanny.id
    );

    if (updatedFavorites.length === 0) {
      localStorage.removeItem("favorites");
      dispatch(updateFavorites([]));
    } else {
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      dispatch(updateFavorites(updatedFavorites));
    }

    setIsFavorite(false);
  };

  const handleClick = (camper) => {
    if (isLogIn) {
      return isFavorite ? removeFromFavorites(camper) : addToFavorites(camper);
    } else {
      toast.error("You must be logged in to add to favorites");
    }
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
        <n.HeartButton
          type="button"
          // onClick={() => setIsFavorite(!isFavorite)}
          // onClick={handleFavoriteClick}
          onClick={() => handleClick(nanny)}
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
