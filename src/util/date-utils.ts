export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const MONTH_NAMES_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function dateFormat(t: Date) {
  return `${
    MONTH_NAMES_SHORT[t.getMonth()]
  } ${t.getDate()}, ${t.getFullYear()}`;
}

export function monthNameFromDate(t: Date) {
  return `${MONTH_NAMES[t.getMonth()]}`;
}

export function isDateBeforeToday(date: Date) {
  return new Date(date.toDateString()) < new Date(new Date().toDateString());
}
