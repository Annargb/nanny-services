import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFilteredData,
  fetchUserData,
} from "../../redux/nannies/nanniesOperations";
import {
  selectNannyError,
  selectNannyList,
  selectNannyLoading,
  selectVisibleButton,
} from "../../redux/nannies/selectors";
import { NannyCard } from "../../components/NannyCard/NannyCard";
import { NanniesSelect } from "../../components/NanniesSelect/NanniesSelect";
import { NotFound } from "../../components/NotFound/NotFound";
import Loader from "../../components/Loader/Loader";
import * as n from "./Nannies.styled";

const Nannies = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isVisibleButton = useSelector(selectVisibleButton);
  const nannies = useSelector(selectNannyList);
  const error = useSelector(selectNannyError);
  const isLoading = useSelector(selectNannyLoading);
  const dispatch = useDispatch();
  const nannyListRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleScroll = () => {
    setScrollPosition(nannyListRef.current.scrollTop);
  };

  useEffect(() => {
    dispatch(fetchUserData(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (nannyListRef.current) {
      nannyListRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (!isLoading || !nannyListRef.current) return;
    nannyListRef.current.scrollTop = nannyListRef.current.scrollHeight;
  }, [isLoading]);

  const handleOptionChange = (selectedOption) => {
    console.log(`Вибрана опція: ${selectedOption.value}`);
    dispatch(fetchFilteredData(selectedOption.value));
  };

  return (
    <n.PageWrapper>
      <NanniesSelect handleOptionChange={handleOptionChange} />
      {!nannies.length && !error && !isLoading && (
        <NotFound text={`There are no matching options for your request`} />
      )}
      {isLoading && !error ? (
        <Loader />
      ) : (
        <n.NannyList ref={nannyListRef} onScroll={handleScroll}>
          {nannies.map((item) => (
            <NannyCard key={item.id} nanny={item} />
          ))}
        </n.NannyList>
      )}
      {isVisibleButton && !isLoading && (
        <n.LoadMoreButton
          type="button"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          Load more
        </n.LoadMoreButton>
      )}
    </n.PageWrapper>
  );
};

export default Nannies;
