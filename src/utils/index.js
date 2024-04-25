import { format } from "date-fns";

export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", "[", "]", "{", "}", /[^A-Za-z]/g].includes(e.key) &&
  e.preventDefault();

export const formatTime = (timeString) => {
  const date = new Date(timeString);
  return format(date, "dd/MM/yyyy");
};
