export const getAge = (date) => {
  const birthday = new Date(date);
  const currentDate = new Date();
  const differenceInMillis = currentDate.getTime() - birthday.getTime();
  const age = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 365.25));

  //   console.log(age);
  return age;
};
