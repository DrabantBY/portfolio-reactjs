import { useId, memo } from 'react';
import { FieldRadioPropsType } from './types';
import './styles.scss';

const FieldRadio = memo((props: FieldRadioPropsType): JSX.Element => {
  const fieldId = useId();

  return (
    <li className={props.className}>
      <input
        id={fieldId}
        type='radio'
        name={props.name}
        onChange={props.handleChange}
        value={props.value}
        checked={props.isChecked}
      />
      <label htmlFor={fieldId}>{props.label}</label>
    </li>
  );
});

export default FieldRadio;
