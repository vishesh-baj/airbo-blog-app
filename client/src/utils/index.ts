export const convertDateToString = (date: Date) => {
  const createdAtDate = new Date(date);

  const day = createdAtDate.getDate();
  const month = createdAtDate.getMonth() + 1;
  const year = createdAtDate.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${formattedDay} ${formattedMonth} ${year}`;
  return formattedDate;
};
