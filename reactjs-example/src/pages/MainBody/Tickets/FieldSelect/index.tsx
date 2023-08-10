import { memo, useState, useCallback } from 'react';
import classnames from 'classnames';
import { FieldSelectPropsType } from './types';
import FieldRadio from '../FieldRadio';
import getOptionLabel from '../../../../utils/getOptionLabel';
import './styles.scss';

const FieldSelect = memo((props: FieldSelectPropsType): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false);
  const { handleChange } = props;

  const classWrapper = classnames('form-field-select', props.className, {
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

  return (
    <div className={classWrapper}>
      {props.iconLeft}
      {props.iconRight}
      <button
        type='button'
        className='form-field-select-value'
        onClick={() => {
          setIsFocus(!isFocus);
        }}
      >
        {props.value
          ? getOptionLabel(props.value.toString(), props.options)
          : props.placeholder}
      </button>

      {isFocus && (
        <ul className='form-field-select-list'>
          {props.options.map((option) => {
            return (
              <FieldRadio
                key={option.value}
                className='form-field-select-item'
                label={option.label}
                name={props.name}
                value={option.value}
                handleChange={handleOnChange}
                isChecked={props.value === option.value}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
});

export default FieldSelect;
