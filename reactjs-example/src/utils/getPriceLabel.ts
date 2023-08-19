import PRICES from '@/data/prices';

const getPriceLabel = (value: string): string | null => {
  return (
    PRICES.find((price) => {
      return price.value === value;
    })?.label ?? null
  );
};

export default getPriceLabel;
