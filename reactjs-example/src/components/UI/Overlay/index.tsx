import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import './styles.scss';

type OverlayPropsType = {
  children: JSX.Element;
};

const Overlay = (props: OverlayPropsType): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'initial';
    };
  }, []);

  return createPortal(
    <div className='overlay'>{props.children}</div>,
    document.body
  );
};

export default Overlay;
