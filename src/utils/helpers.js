export const dateFormat = (date) => {
  !date && new Date();
  const convert = new Date(date);
  const day =
    convert?.getDate() < 10 ? `0${convert?.getDate()}` : convert?.getDate();
  const month =
    convert?.getMonth() + 1 < 10
      ? `0${convert?.getMonth() + 1}`
      : convert?.getMonth() + 1;
  const year = convert?.getFullYear();
  return `${day}/${month}/${year}`;
};
