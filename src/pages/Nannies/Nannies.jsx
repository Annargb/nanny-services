import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectNannyList,
} from "../../redux/nannies/selectors";
import { useEffect } from "react";
import { fetchUserData } from "../../redux/nannies/nanniesOperations";
import { NannyCard } from "../../components/NannyCard/NannyCard";
import * as n from "./Nannies.styled";

const Nannies = () => {
  const currentPage = useSelector(selectCurrentPage);
  const nannies = useSelector(selectNannyList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData(currentPage));
  }, [currentPage, dispatch]);

  return (
    <n.PageWrapper>
      <ul>
        {nannies.map((item) => (
          <NannyCard key={item.id} nanny={item} />
        ))}
      </ul>
    </n.PageWrapper>
  );
};

export default Nannies;
