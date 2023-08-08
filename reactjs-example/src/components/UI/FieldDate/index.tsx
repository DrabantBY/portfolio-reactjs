import { useEffect, useRef, useMemo, memo } from 'react';
import classnames from 'classnames';
import getCurrentDate from '../../../utils/getCurrentDate';
import './styles.scss';

type FieldDatePropsType = {
  iconLeft: JSX.Element;
  iconRight: JSX.Element;
  className: string;
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const FieldDate = memo(
  ({
    iconLeft,
    iconRight,
    className,
    type,
    name,
    placeholder,
    value,
    handleChange,
  }: FieldDatePropsType): JSX.Element => {
    const classInput = classnames({ active: value });
    const classField = classnames('field-form-arrow', className);

    const inputRef = useRef<HTMLInputElement>(null);
    const minValue = useMemo(() => getCurrentDate(), []);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }, [value]);

    console.log(name, value);

    return (
      <div className={classField}>
        {iconLeft}
        {iconRight}
        <input
          className={classInput}
          type={type}
          name={name}
          placeholder={placeholder}
          min={minValue}
          onChange={handleChange}
          value={value}
          ref={inputRef}
        />
      </div>
    );
  }
);

export default FieldDate;
