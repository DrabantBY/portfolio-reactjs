import { memo, useState, useCallback } from 'react';
import classnames from 'classnames';
import FieldRadio from '../FieldRadio';
import getOptionLabel from '../../../utils/getOptionLabel';
import './styles.scss';

type FieldSelectPropsType = {
  iconLeft: JSX.Element;
  iconRight: JSX.Element;
  className: string;
  name: string;
  placeholder: string;
  value: string | number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  options: { value: string; label: string }[];
};

const FieldSelect = memo(
  ({
    iconLeft,
    iconRight,
    className,
    name,
    value,
    handleChange,
    options,
    placeholder,
  }: FieldSelectPropsType): JSX.Element => {
    const [isFocus, setIsFocus] = useState(false);

    const classWrapper = classnames('form-select', className, {
      open: isFocus,
    });

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> =
      useCallback(
        (e) => {
          handleChange(e);
          setIsFocus(false);
        },
        [handleChange]
      );

    console.log(name, value);

    return (
      <div className={classWrapper}>
        {iconLeft}
        {iconRight}
        <div className='form-select-value' onClick={() => setIsFocus(!isFocus)}>
          {value ? getOptionLabel(value.toString(), options) : placeholder}
        </div>

        {isFocus && (
          <div className='form-select-list'>
            {options.map((option) => (
              <FieldRadio
                key={option.value}
                className='form-select-option'
                label={option.label}
                name={name}
                value={option.value}
                handleChange={handleOnChange}
                isChecked={value === option.value}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default FieldSelect;
