import { createPortal } from 'react-dom';
import './styles.scss';

type OverlayPropsType = {
  children: JSX.Element;
};

const Overlay = (props: OverlayPropsType): JSX.Element => {
  return createPortal(
    <div className='overlay'>{props.children}</div>,
    document.body
  );
};

export default Overlay;
