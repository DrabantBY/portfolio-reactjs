import { useId, memo } from 'react';
import './styles.scss';

type FieldRadioPropsType = {
  className: string;
  label: string;
  name: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
};

const FieldRadio = memo(
  ({
    className,
    label,
    name,
    value,
    handleChange,
    isChecked,
  }: FieldRadioPropsType): JSX.Element => {
    const fieldId = useId();
    console.log(name, 'radio', value);
    return (
      <div className={className}>
        <input
          id={fieldId}
          type='radio'
          name={name}
          onChange={handleChange}
          value={value}
          checked={isChecked}
        />
        <label htmlFor={fieldId}>{label}</label>
      </div>
    );
  }
);

export default FieldRadio;
