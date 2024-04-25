import { useDispatch } from "react-redux";
import { customStyles } from "../../styles/selectStyles";
import * as n from "./NanniesSelect.styled";
import { fetchFilteredData } from "../../redux/nannies/nanniesOperations";
// import { selectFilterOption } from "../../redux/nannies/selectors";
import { setFilterOption } from "../../redux/nannies/nanniesSlice";

export const NanniesSelect = () => {
  // const filterOption = useSelector(selectFilterOption);
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
    dispatch(setFilterOption(selectedOption));
    dispatch(fetchFilteredData(selectedOption.value));
  };

  return (
    <>
      <n.Filters>Filters</n.Filters>
      <n.StyledSelect
        options={options}
        // value={filterOption.value}
        onChange={handleOptionChange}
        styles={customStyles}
      />
    </>
  );
};

// import { useDispatch } from "react-redux";
// import { customStyles } from "../../styles/selectStyles";
// import * as n from "./NanniesSelect.styled";
// import { fetchFilteredData } from "../../redux/nannies/nanniesOperations";

// export const NanniesSelect = () => {
//   const dispatch = useDispatch();
//   const options = [
//     { value: "az", label: "A to Z" },
//     { value: "za", label: "Z to A" },
//     { value: "less", label: "Less than 10$" },
//     { value: "greater", label: "Greater than 10$" },
//     { value: "popular", label: "Popular" },
//     { value: "notPopular", label: "Not popular" },
//     { value: "all", label: "Show all" },
//   ];

//   const handleOptionChange = (selectedOption) => {
//     console.log(`Вибрана опція: ${selectedOption.value}`);
//     dispatch(fetchFilteredData(selectedOption.value));
//   };

//   return (
//     <>
//       <n.Filters>Filters</n.Filters>
//       <n.StyledSelect
//         options={options}
//         onChange={handleOptionChange}
//         styles={customStyles}
//       />
//     </>
//   );
// };
