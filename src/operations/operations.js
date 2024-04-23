export const getAge = (date) => {
  const birthday = new Date(date);
  const currentDate = new Date();
  const differenceInMillis = currentDate.getTime() - birthday.getTime();
  const age = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 365.25));
  return age;
};

// export function getDefaultTime() {
//   const now = new Date();
//   const later = new Date(now.getTime() + 30 * 60 * 1000);
//   const hours = later.getHours().toString().padStart(2, "0");
//   const minutes = Math.floor(now.getMinutes() / 30) * 30;
//   return `${hours}:${minutes.toString().padStart(2, "0")}`;
// }
