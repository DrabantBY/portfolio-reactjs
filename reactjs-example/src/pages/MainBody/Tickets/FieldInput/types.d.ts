export type FieldInputPropsType = {
  icon: JSX.Element;
  className: string;
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isError: boolean;
  message: string;
};
