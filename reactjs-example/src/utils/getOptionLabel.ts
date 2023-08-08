const getOptionLabel = (
  value: string,
  data: { value: string; label: string }[]
): string | null => data.find((el) => el.value === value)?.label ?? null;

export default getOptionLabel;
