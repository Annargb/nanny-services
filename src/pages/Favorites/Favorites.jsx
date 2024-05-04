import { useDispatch, useSelector } from "react-redux";
import * as n from "./Favorites.styled";
import { selectFavorites } from "../../redux/favorites/selectors";
import { useEffect, useState } from "react";
import { updateFavorites } from "../../redux/favorites/favoritesSlice";
import { NannyCard } from "../../components/NannyCard/NannyCard";
import { NotFound } from "../../components/NotFound/NotFound";
import { NanniesSelect } from "../../components/NanniesSelect/NanniesSelect";
import { handleOptionChange } from "../../operations/operations";

const Favorites = () => {
  const myFavorites = useSelector(selectFavorites);
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites !== null && storedFavorites !== undefined) {
      dispatch(updateFavorites(storedFavorites));
    }
  }, [dispatch]);

  useEffect(() => {
    setFilteredFavorites(myFavorites);
  }, [myFavorites]);

  return (
    <n.PageWrapper>
      {!myFavorites.length ? (
        <NotFound text={`It seems like you don't have your favorites`} />
      ) : (
        <>
          <NanniesSelect
            handleOptionChange={(selectedOption) =>
              handleOptionChange(
                selectedOption,
                myFavorites,
                setFilteredFavorites
              )
            }
          />
          {!filteredFavorites.length ? (
            <NotFound text={`There are no matching options for your request`} />
          ) : (
            <>
              <n.NannyList>
                {filteredFavorites.map((item) => (
                  <NannyCard key={item.id} nanny={item} />
                ))}
              </n.NannyList>
            </>
          )}
        </>
      )}
    </n.PageWrapper>
  );
};

export default Favorites;
