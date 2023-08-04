const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getMonthName = (date: Date | string): string => {
  const parsedDate = date instanceof Date ? date : new Date(date);
  return monthNames[parsedDate.getMonth()];
}

export const getMonthAbbreviation = (date: Date | string): string => {
  const parsedDate = date instanceof Date ? date : new Date(date);
  return monthAbbreviations[parsedDate.getMonth()];
}

export const getMonthDay = (date: Date | string): number => {
  const parsedDate = date instanceof Date ? date : new Date(date);
  return parsedDate.getDate();
}

export const getWeekDay = (date: Date | string): string => {
  const parsedDate = date instanceof Date ? date : new Date(date);
  return weekDays[parsedDate.getDay()];
}

export const getLocaleTime = (date: Date | string): string => {
  const parsedDate = date instanceof Date ? date : new Date(date);
  return parsedDate.toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit', hour12: true });
}
