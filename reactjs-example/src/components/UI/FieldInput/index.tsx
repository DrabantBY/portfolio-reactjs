import { memo } from 'react';
import classnames from 'classnames';
import './styles.scss';

type FieldInputPropsType = {
  icon: JSX.Element;
  className: string;
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isError: boolean;
};

const FieldInput = memo(
  ({
    icon,
    className,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isError,
  }: FieldInputPropsType): JSX.Element => {
    const classField = classnames('field-form', className, {
      error: isError,
    });

    console.log(name, value);

    return (
      <div className={classField}>
        {icon}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {isError && <span>* invalid {name}</span>}
      </div>
    );
  }
);

export default FieldInput;
