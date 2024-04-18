import icons from "../../images/icons.svg";
import home from "../../images/home1x.png";
// import { useEffect } from "react";
// import { fetchUserData } from "../../redux/nannies/nanniesOperations";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCurrentPage } from "../../redux/nannies/selectors";
// import { updateCurrentPage } from "../../redux/nannies/nanniesSlice";
// import { getDatabase, ref, onValue, off } from "firebase/database";

const Favorites = () => {
  // const currentPage = useSelector(selectCurrentPage);
  // // console.log(currentPage);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUserData(currentPage));
  // }, [currentPage, dispatch]);

  // useEffect(() => {
  //   // Отримайте посилання на базу даних
  //   // const dbRef = ref(getDatabase());

  //   // Функція, що обробляє зміни у вузлі бази даних
  //   const handleData = (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data);
  //   };

  //   const query = ref(getDatabase())
  //     .orderByKey()
  //     .limitToFirst(3 * 1);
  //   // Слухайте зміни у вузлі бази даних
  //   onValue(query, handleData);

  //   // Приберіть слухача під час розміщення компонента
  //   return () => {
  //     // Відключіть слухача
  //     off(query, "value", handleData);
  //   };
  // }, []);

  return (
    <div>
      <h1>Favorites</h1>

      <svg>
        <use
          href={`${icons}#icon-heart`}
          style={{ width: "30px", height: "30px" }}
        />
      </svg>
      <img src={home} alt="home" style={{ width: "300px", height: "150px" }} />
      {/* <button onClick={() => dispatch(updateCurrentPage())}>Load more</button> */}
    </div>
  );
};

export default Favorites;
