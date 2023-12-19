const getOptionLabel = (
  value: string,
  data: { value: string; label: string }[]
): string | null => {
  return (
    data.find((el) => {
      return el.value === value;
    })?.label ?? null
  );
};

export default getOptionLabel;
