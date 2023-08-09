const transformTitleItems = (title: string): string => {
  return title
    .split(' ')
    .map((chunk) => {
      return chunk[0].toUpperCase() + chunk.slice(1);
    })
    .join('');
};

export default transformTitleItems;
