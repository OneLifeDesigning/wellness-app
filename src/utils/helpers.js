export const dateFormat = (date) => {
  !date && new Date();
  const convert = new Date(date);
  const day = convert?.getDate();
  const month = convert?.getMonth() + 1;
  const year = convert?.getFullYear();
  return month < 10 ? `${day}-0${month}-${year}` : `${day}-${month}-${year}`;
};
