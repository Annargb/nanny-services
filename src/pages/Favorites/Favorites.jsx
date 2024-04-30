import { useDispatch, useSelector } from "react-redux";
import * as n from "./Favorites.styled";
import { selectFavorites } from "../../redux/favorites/selectors";
import { useEffect, useState } from "react";
import { updateFavorites } from "../../redux/favorites/favoritesSlice";
import { NannyCard } from "../../components/NannyCard/NannyCard";
import { NotFound } from "../../components/NotFound/NotFound";

const Favorites = () => {
  const myFavorites = useSelector(selectFavorites);
  const [filteredFavorites, setFilteredFavorites] = useState(myFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites !== null && storedFavorites !== undefined) {
      dispatch(updateFavorites(storedFavorites));
    }
  }, [dispatch]);

  const handleOptionChange = (selectedOption, myFavorites) => {
    console.log(`Вибрана опція: ${selectedOption.value}`);
    const filtered = [];

    switch (option) {
      case "az":
        dbQuery = query(dbRef, orderByChild("name"));
        break;
      case "za":
        dbQuery = query(dbRef, orderByChild("name"));
        break;
      case "less":
        dbQuery = query(dbRef, orderByChild("price_per_hour"), endAt(10));
        break;
      case "greater":
        dbQuery = query(dbRef, orderByChild("price_per_hour"), startAt(10));
        break;
      case "popular":
        dbQuery = query(dbRef, orderByChild("rating"));
        break;
      case "notPopular":
        dbQuery = query(dbRef, orderByChild("rating"));
        break;
      case "all":
        dbQuery = query(dbRef, orderByKey());
        break;
    }
  };

  return (
    <n.PageWrapper>
      <NanniesSelect handleOptionChange={handleOptionChange} />
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
