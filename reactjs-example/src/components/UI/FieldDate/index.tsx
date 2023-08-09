import { useEffect, useRef, useMemo, memo } from 'react';
import classnames from 'classnames';
import { FieldDatePropsType } from './types';
import getCurrentDate from '../../../utils/getCurrentDate';
import './styles.scss';

const FieldDate = memo((props: FieldDatePropsType): JSX.Element => {
  const classInput = classnames({ active: props.value });

  const classField = classnames('form-field-date', props.className);

  const inputRef = useRef<HTMLInputElement>(null);

  const minValue = useMemo(() => {
    return getCurrentDate();
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }, [props.value]);

  console.log(props.name, props.value);

  return (
    <div className={classField}>
      {props.iconLeft}
      {props.iconRight}
      <input
        className={classInput}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        min={minValue}
        onChange={props.handleChange}
        value={props.value}
        ref={inputRef}
      />
    </div>
  );
});

export default FieldDate;
