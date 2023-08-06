const shuffleGalleryItems = (arr: string[]) => {
  const result = arr.slice();

  for (let i = result.length - 1; i > 0; i -= 1) {
    const random = Math.floor(Math.random() * (i + 1));
    [result[i], result[random]] = [result[random], result[i]];
  }

  return result;
};

export default shuffleGalleryItems;
