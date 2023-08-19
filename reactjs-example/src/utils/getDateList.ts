const MILLISECONDS = 86400000;

const transformDateToString = (date: Date): string => {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

const getDateList = (days: number): { value: string; label: string }[] => {
  const dates: { value: string; label: string }[] = [];
  let currentDate = new Date();

  for (let i = 0; i < days; i += 1) {
    const date = transformDateToString(currentDate);
    dates[i] = { value: date, label: date };
    currentDate = new Date(currentDate.getTime() + MILLISECONDS);
  }

  return dates;
};

export default getDateList;
