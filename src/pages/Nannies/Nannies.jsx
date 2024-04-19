import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectNannyList,
} from "../../redux/nannies/selectors";
import { updateCurrentPage } from "../../redux/nannies/nanniesSlice";
import { useEffect } from "react";
import { fetchUserData } from "../../redux/nannies/nanniesOperations";
import { NannyCard } from "../../components/NannyCard/NannyCard";
import * as n from "./Nannies.styled";
import { NanniesSelect } from "../../components/NanniesSelect/NanniesSelect";

const Nannies = () => {
  const currentPage = useSelector(selectCurrentPage);
  const nannies = useSelector(selectNannyList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData(currentPage));
  }, [currentPage, dispatch]);

  return (
    <n.PageWrapper>
      <NanniesSelect />
      <n.NannyList>
        {nannies.map((item) => (
          <NannyCard key={item.id} nanny={item} />
        ))}
      </n.NannyList>
      <n.LoadMoreButton
        type="button"
        onClick={() => dispatch(updateCurrentPage())}
      >
        Load more
      </n.LoadMoreButton>
    </n.PageWrapper>
  );
};

export default Nannies;
