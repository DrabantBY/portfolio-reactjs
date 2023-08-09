export type FieldDatePropsType = {
  iconLeft: JSX.Element;
  iconRight: JSX.Element;
  className: string;
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};
