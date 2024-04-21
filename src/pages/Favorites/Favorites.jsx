import icons from "../../images/icons.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFavorites } from "../../redux/favorites/favoritesOperations";

const Favorites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div>
      <h1>Favorites</h1>

      <svg>
        <use
          href={`${icons}#icon-heart`}
          style={{ width: "30px", height: "30px" }}
        />
      </svg>
    </div>
  );
};

export default Favorites;
