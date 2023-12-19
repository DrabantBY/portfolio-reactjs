export type FieldNumberPropsType = {
  className: string;
  label: string;
  name: string;
  value: number;
  minValue: number;
  maxValue: number;
  handleClick: (name: string, value: number, step: 1 | -1) => void;
};
