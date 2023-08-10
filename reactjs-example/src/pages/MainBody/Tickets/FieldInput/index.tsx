import { memo } from 'react';
import classnames from 'classnames';
import { FieldInputPropsType } from './types';
import './styles.scss';

const FieldInput = memo((props: FieldInputPropsType): JSX.Element => {
  const classField = classnames('form-field-input', props.className, {
    error: props.isError,
  });

  return (
    <div className={classField}>
      {props.icon}
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
      {props.isError && <span>* invalid {props.name}</span>}
    </div>
  );
});

export default FieldInput;
