import Overlay from '../../../../components/UI/Overlay';
import { ModalPropsType } from './types';
import './styles.scss';

const Modal = (props: ModalPropsType): JSX.Element => {
  return (
    <Overlay>
      <div>
        <div>{props.price}</div>
        <div>{props.basic}</div>
        <div>{props.senior}</div>
        <div>{props.total}</div>
        <div>{props.date}</div>
        <div>{props.time}</div>
      </div>
    </Overlay>
  );
};

export default Modal;
