export type FieldSelectPropsType = {
  iconLeft: JSX.Element;
  iconRight: JSX.Element;
  className: string;
  name: string;
  placeholder: string;
  value: string | number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  options: { value: string; label: string }[];
};
