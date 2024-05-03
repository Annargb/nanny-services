import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFavorites } from "../redux/favorites/favoritesSlice";
import { selectUserName } from "../redux/auth/selectors";
import toast from "react-hot-toast";

export const useFavorites = (nanny) => {
  const isLogIn = useSelector(selectUserName);
  const [isFavorite, setIsFavorite] = useState(checkFavorite(nanny));
  const dispatch = useDispatch();

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

  const toggleFavorite = () => {
    if (isLogIn) {
      return isFavorite ? removeFromFavorites(nanny) : addToFavorites(nanny);
    } else {
      toast.error("You must be logged in to add to favorites");
    }
  };

  return { isFavorite, toggleFavorite };
};
