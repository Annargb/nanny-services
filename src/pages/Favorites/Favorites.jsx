import { useDispatch, useSelector } from "react-redux";
import * as n from "./Favorites.styled";
import { selectFavorites } from "../../redux/favorites/selectors";
import { useEffect, useState } from "react";
import { updateFavorites } from "../../redux/favorites/favoritesSlice";
import { NannyCard } from "../../components/NannyCard/NannyCard";
import { NotFound } from "../../components/NotFound/NotFound";
import { NanniesSelect } from "../../components/NanniesSelect/NanniesSelect";

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

  const handleOptionChange = (selectedOption) => {
    console.log(`Вибрана опція: ${selectedOption.value}`);
    let filtered = [...myFavorites];

    switch (selectedOption.value) {
      case "az":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "less":
        filtered = myFavorites.filter((item) => item.price_per_hour < 10);
        break;
      case "greater":
        filtered = myFavorites
          .filter((item) => item.price_per_hour > 10)
          .sort((a, b) => a.price_per_hour - b.price_per_hour);
        break;
      case "popular":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "notPopular":
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      case "all":
        filtered = [...myFavorites];
        break;
    }

    setFilteredFavorites(filtered);
  };

  return (
    <n.PageWrapper>
      {!myFavorites.length ? (
        <NotFound text={`It seems like you don't have your favorites`} />
      ) : (
        <>
          <NanniesSelect handleOptionChange={handleOptionChange} />
          {!filteredFavorites.length ? (
            <NotFound text={`There are no matching options for your request`} />
          ) : (
            <>
              <n.NannyList>
                {filteredFavorites.map((item) => (
                  <NannyCard key={item.id} nanny={item} />
                ))}
              </n.NannyList>
              <n.LoadMoreButton type="button">Load more</n.LoadMoreButton>
            </>
          )}
        </>
      )}
    </n.PageWrapper>
  );
};

export default Favorites;
