import { useDispatch, useSelector } from "react-redux";
import * as n from "./Favorites.styled";
import { selectFavorites } from "../../redux/favorites/selectors";
import { useEffect } from "react";
import { updateFavorites } from "../../redux/favorites/favoritesSlice";
import { NannyCard } from "../../components/NannyCard/NannyCard";
import { NotFound } from "../../components/NotFound/NotFound";

const Favorites = () => {
  const myFavorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites !== null && storedFavorites !== undefined) {
      dispatch(updateFavorites(storedFavorites));
    }
  }, [dispatch]);

  return (
    <n.PageWrapper>
      {!myFavorites.length ? (
        <NotFound text={`It seems like you don't have your favorites`} />
      ) : (
        <n.NannyList>
          {myFavorites.map((item) => (
            <NannyCard key={item.id} nanny={item} />
          ))}
        </n.NannyList>
      )}
    </n.PageWrapper>
  );
};

export default Favorites;
