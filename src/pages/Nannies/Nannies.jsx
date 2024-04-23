import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentPage } from "../../redux/nannies/nanniesSlice";
import { fetchUserData } from "../../redux/nannies/nanniesOperations";
import {
  selectCurrentPage,
  selectNannyError,
  selectNannyList,
  selectNannyLoading,
  selectVisibleButton,
} from "../../redux/nannies/selectors";
import { NannyCard } from "../../components/NannyCard/NannyCard";
import { NanniesSelect } from "../../components/NanniesSelect/NanniesSelect";
import { NotFound } from "../../components/NotFound/NotFound";
import * as n from "./Nannies.styled";

const Nannies = () => {
  const currentPage = useSelector(selectCurrentPage);
  const isVisibleButton = useSelector(selectVisibleButton);
  const nannies = useSelector(selectNannyList);
  const error = useSelector(selectNannyError);
  const isLoading = useSelector(selectNannyLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData(currentPage));
  }, [currentPage, dispatch]);

  return (
    <n.PageWrapper>
      <NanniesSelect />
      {!nannies.length && !error && !isLoading && <NotFound />}
      {nannies.length !== 0 && (
        <n.NannyList>
          {nannies.map((item) => (
            <NannyCard key={item.id} nanny={item} />
          ))}
        </n.NannyList>
      )}
      {isVisibleButton && !isLoading && (
        <n.LoadMoreButton
          type="button"
          onClick={() => dispatch(updateCurrentPage())}
        >
          Load more
        </n.LoadMoreButton>
      )}
    </n.PageWrapper>
  );
};

export default Nannies;
