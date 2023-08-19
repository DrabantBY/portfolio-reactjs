const getStringDate = (str: string): string => {
  const currentDate = new Date(str).toLocaleString('en-EN', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return currentDate.replace(/\//g, '-');
};

export default getStringDate;
