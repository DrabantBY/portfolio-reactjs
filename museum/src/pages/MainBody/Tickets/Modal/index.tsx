import { ReactComponent as DateIcon } from '@svg/ticket/date.svg';
import { ReactComponent as TimeIcon } from '@svg/ticket/time.svg';
import { ReactComponent as CheckIcon } from '@svg/ticket/check.svg';
import Overlay from '@/components/UI/Overlay';
import getPriceLabel from '@/utils/getPriceLabel';
import getStringDate from '@/utils/getStringDate';
import { ModalPropsType } from './types';
import './styles.scss';

const Modal = (props: ModalPropsType): JSX.Element => {
  return (
    <Overlay>
      <div className='modal'>
        <h3 className='modal-title'>Tour to Louvre</h3>
        <div className='modal-body'>
          <div className='modal-side'>
            <div className='modal-field modal-field__date'>
              <DateIcon /> {getStringDate(props.date)}
            </div>

            <div className='modal-field modal-field__time'>
              <TimeIcon /> {props.time}
            </div>

            <div className='modal-field modal-field__price'>
              <CheckIcon /> {getPriceLabel(props.price)}
            </div>
          </div>

          <img
            className='modal-image'
            srcSet='museum_150.jpg 150w, museum_120.jpg 120w'
            sizes='(max-width: 440px) 120px, 150px'
            src='museum_150.jpg'
            alt='louvre'
          />

          <div className='modal-field modal-field__basic'>
            <span className='modal-field__amount'>{props.basic}</span> 18+ (
            {props.price} €){' '}
            <span className='modal-field__sum'>
              {Number(props.price) * props.basic} €
            </span>
          </div>

          <div className='modal-field modal-field__senior'>
            <span className='modal-field__amount'>{props.senior}</span> 65+ (
            {Number(props.price) / 2} €){' '}
            <span className='modal-field__sum'>
              {(Number(props.price) / 2) * props.senior} €
            </span>
          </div>

          <div className='modal-field modal-field__total'>
            Total: <span className='modal-field__sum'>{props.total} €</span>
          </div>
          <div className='modal-field modal-field__message'>
            successfully booked
          </div>
        </div>

        <button type='button' className='modal-control' onClick={props.onClose}>
          ok
        </button>
      </div>
    </Overlay>
  );
};

export default Modal;
