import { customStyles } from "../../styles/selectStyles";
import * as n from "./NanniesSelect.styled";

export const NanniesSelect = ({ handleOptionChange }) => {
  const options = [
    { value: "az", label: "A to Z" },
    { value: "za", label: "Z to A" },
    { value: "less", label: "Less than 10$" },
    { value: "greater", label: "Greater than 10$" },
    { value: "popular", label: "Popular" },
    { value: "notPopular", label: "Not popular" },
    { value: "all", label: "Show all" },
  ];

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
