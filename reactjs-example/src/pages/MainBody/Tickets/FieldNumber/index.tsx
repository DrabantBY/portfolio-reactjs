import { memo, useId } from 'react';
import classnames from 'classnames';
import { FieldNumberPropsType } from './types';
import './styles.scss';

const FieldNumber = memo((props: FieldNumberPropsType): JSX.Element => {
  const fieldId = useId();
  const classField = classnames('form-field-number', props.className);
  return (
    <div className={classField}>
      <label htmlFor={fieldId}>{props.label}</label>
      <span>
        <button
          type='button'
          disabled={props.value === props.minValue}
          onClick={() => {
            props.handleClick(props.name, Number(props.value), -1);
          }}
        >
          –
        </button>
        <input
          id={fieldId}
          disabled
          type='number'
          name={props.name}
          value={props.value}
          onChange={(e) => {
            e.preventDefault();
          }}
        />
        <button
          type='button'
          disabled={props.value === props.maxValue}
          onClick={() => {
            props.handleClick(props.name, Number(props.value), 1);
          }}
        >
          +
        </button>
      </span>
    </div>
  );
});

export default FieldNumber;
