import { useDispatch } from "react-redux";
import { customStyles } from "../../styles/selectStyles";
import * as n from "./NanniesSelect.styled";
import { fetchFilteredData } from "../../redux/nannies/nanniesOperations";

export const NanniesSelect = () => {
  const dispatch = useDispatch();
  const options = [
    { value: "az", label: "A to Z" },
    { value: "za", label: "Z to A" },
    { value: "less", label: "Less than 10$" },
    { value: "greater", label: "Greater than 10$" },
    { value: "popular", label: "Popular" },
    { value: "notPopular", label: "Not popular" },
    { value: "all", label: "Show all" },
  ];

  const handleOptionChange = (selectedOption) => {
    console.log(`Вибрана опція: ${selectedOption.value}`);
    dispatch(fetchFilteredData(selectedOption.value));
  };

  return (
    <>
      <n.Filters>Filters</n.Filters>
      <n.StyledSelect
        options={options}
        onChange={handleOptionChange}
        styles={customStyles}
      />
    </>
  );
};
