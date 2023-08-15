import { useMemo } from 'react';
import useFormState from '../../../../hooks/useFormState';
import FieldInput from '../FieldInput';
import FieldDate from '../FieldDate';
import FieldSelect from '../FieldSelect';
import FieldNumber from '../FieldNumber';
import { ReactComponent as DateIcon } from '../../../../assets/svg/ticket/date.svg';
import { ReactComponent as TimeIcon } from '../../../../assets/svg/ticket/time.svg';
import { ReactComponent as NameIcon } from '../../../../assets/svg/ticket/name.svg';
import { ReactComponent as EmailIcon } from '../../../../assets/svg/ticket/email.svg';
import { ReactComponent as TelIcon } from '../../../../assets/svg/ticket/tel.svg';
import { ReactComponent as ListIcon } from '../../../../assets/svg/ticket/list.svg';
import { ReactComponent as ArrowIcon } from '../../../../assets/svg/ticket/arrow.svg';
import getLabelValue from '../../../../utils/getLabelValue';
import './styles.scss';

const TICKETS = [
  { value: '20', label: 'permanent exhibition' },
  { value: '30', label: 'temporary exhibition' },
  { value: '40', label: 'combined admission' },
];

const TicketsForm = (): JSX.Element => {
  const { state, setNumberValue, setInputValue, setInitState } = useFormState();

  const basicPriceValue = state.price ? `${state.price} €` : 'set ticket type';
  const seniorPriceValue = state.price
    ? `${Number(state.price) / 2} €`
    : 'set ticket type';

  const memoNameIcon = useMemo(() => {
    return <NameIcon />;
  }, []);

  const memoTelIcon = useMemo(() => {
    return <TelIcon />;
  }, []);

  const memoEmailIcon = useMemo(() => {
    return <EmailIcon />;
  }, []);

  const memoDateIcon = useMemo(() => {
    return <DateIcon />;
  }, []);

  const memoTimeIcon = useMemo(() => {
    return <TimeIcon />;
  }, []);

  const memoListIcon = useMemo(() => {
    return <ListIcon />;
  }, []);

  const memoArrowIcon = useMemo(() => {
    return <ArrowIcon />;
  }, []);

  const TIME = useMemo(() => {
    return getLabelValue(9, 18);
  }, []);

  return (
    <form
      className='form-tickets'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FieldDate
        className='form-field form-tickets__form-field'
        type='date'
        name='date'
        placeholder='date'
        value={state.date}
        handleChange={setInputValue}
        iconLeft={memoDateIcon}
        iconRight={memoArrowIcon}
      />

      <FieldSelect
        className='form-field form-tickets__form-field'
        name='time'
        options={TIME}
        placeholder='time'
        value={state.time}
        handleChange={setInputValue}
        iconLeft={memoTimeIcon}
        iconRight={memoArrowIcon}
      />

      <FieldInput
        className='form-field form-tickets__form-field'
        type='text'
        name='name'
        placeholder='full name'
        value={state.name}
        handleChange={setInputValue}
        isError={state.isNameError}
        icon={memoNameIcon}
        message={import.meta.env.VITE_NAME_ERROR}
      />

      <FieldInput
        className='form-field form-tickets__form-field'
        type='email'
        name='email'
        placeholder='email'
        value={state.email}
        handleChange={setInputValue}
        isError={state.isEmailError}
        icon={memoEmailIcon}
        message={import.meta.env.VITE_EMAIL_ERROR}
      />

      <FieldInput
        className='form-field form-tickets__form-field'
        type='tel'
        name='phone'
        placeholder='phone'
        value={state.phone}
        handleChange={setInputValue}
        isError={state.isPhoneError}
        icon={memoTelIcon}
        message={import.meta.env.VITE_PHONE_ERROR}
      />

      <FieldSelect
        className='form-field form-tickets__form-field'
        name='price'
        options={TICKETS}
        placeholder='ticket type'
        value={state.price}
        handleChange={setInputValue}
        iconLeft={memoListIcon}
        iconRight={memoArrowIcon}
      />

      <FieldNumber
        className='form-field form-tickets__form-field'
        label={`age 18+ (${basicPriceValue})`}
        name='basic'
        value={state.basic}
        minValue={0}
        maxValue={10}
        handleClick={setNumberValue}
      />

      <FieldNumber
        className='form-field form-tickets__form-field'
        label={`age 65+ (${seniorPriceValue})`}
        name='senior'
        value={state.senior}
        minValue={0}
        maxValue={10}
        handleClick={setNumberValue}
      />

      <div className='total-price form-tickets__total-price'>
        Total:&nbsp;<span>{state.total}</span>&nbsp;€
      </div>

      <div className='form-controls form-tickets__form-controls'>
        <button
          disabled={state.isActiveResetBtn}
          className='btn-control form-tickets__btn-control'
          type='button'
          onClick={setInitState}
        >
          Reset
        </button>
        <button
          className='btn-control form-tickets__btn-control'
          type='submit'
          disabled={!state.isActiveSubmitBtn}
        >
          Book
        </button>
      </div>
    </form>
  );
};

export default TicketsForm;
