import * as n from "./NanniesSelect.styled";

export const NanniesSelect = () => {
  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    console.log(`Вибрана опція: ${selectedOption}`);
  };

  return (
    <>
      <n.Filters>Filters</n.Filters>
      <n.Select onChange={handleOptionChange}>
        <option value="az">A to Z</option>
        <option value="za">Z to A</option>
        <option value="less">Less than 10$</option>
        <option value="greater">Greater than 10$</option>
        <option value="popular">Popular</option>
        <option value="notPopular">Not popular</option>
        <option value="all">Show all</option>
      </n.Select>
    </>
  );
};
