export const getAge = (date) => {
  const birthday = new Date(date);
  const currentDate = new Date();
  const differenceInMillis = currentDate.getTime() - birthday.getTime();
  const age = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 365.25));
  return age;
};

export const handleOptionChange = (
  selectedOption,
  myFavorites,
  setFilteredFavorites
) => {
  let filtered = [...myFavorites];
  switch (selectedOption.value) {
    case "az":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "za":
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "less":
      filtered = myFavorites.filter((item) => item.price_per_hour < 10);
      break;
    case "greater":
      filtered = myFavorites
        .filter((item) => item.price_per_hour > 10)
        .sort((a, b) => a.price_per_hour - b.price_per_hour);
      break;
    case "popular":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "notPopular":
      filtered.sort((a, b) => a.rating - b.rating);
      break;
    case "all":
      filtered = [...myFavorites];
      break;
    default:
      break;
  }
  setFilteredFavorites(filtered);
};
