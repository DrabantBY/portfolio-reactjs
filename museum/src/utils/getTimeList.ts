const getTimeList = (
  startHour: number,
  finishHour: number
): { value: string; label: string }[] => {
  const result: { value: string; label: string }[] = [];

  let time: string;

  for (let i = startHour; i <= finishHour; i += 1) {
    time = i < 10 ? `0${i}:00` : `${i}:00`;
    result.push({ value: time, label: time });

    if (i !== finishHour) {
      time = i < 10 ? `0${i}:30` : `${i}:30`;
      result.push({ value: time, label: time });
    }
  }

  return result;
};

export default getTimeList;
