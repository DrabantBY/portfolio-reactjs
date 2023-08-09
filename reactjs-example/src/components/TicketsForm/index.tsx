import { useMemo } from 'react';
import useFormState from '../../hooks/useFormState';
import FieldInput from '../UI/FieldInput';
import FieldDate from '../UI/FieldDate';
import FieldSelect from '../UI/FieldSelect';
// import NumberField from '../UI/NumberField';
import { ReactComponent as DateIcon } from '../../assets/form.svg/date.svg';
import { ReactComponent as TimeIcon } from '../../assets/form.svg/time.svg';
import { ReactComponent as NameIcon } from '../../assets/form.svg/name.svg';
import { ReactComponent as EmailIcon } from '../../assets/form.svg/email.svg';
import { ReactComponent as TelIcon } from '../../assets/form.svg/tel.svg';
import { ReactComponent as ListIcon } from '../../assets/form.svg/list.svg';
import { ReactComponent as ArrowIcon } from '../../assets/form.svg/arrow.svg';
import getLabelValue from '../../utils/getLabelValue';
import './styles.scss';

const TICKETS = [
  { value: '20', label: 'permanent exhibition' },
  { value: '30', label: 'temporary exhibition' },
  { value: '40', label: 'combined admission' },
];

const TicketsForm = () => {
  const { state, setInputValue } = useFormState();

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
    <form className='form-tickets'>
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
        placeholder='name'
        value={state.name.value}
        handleChange={setInputValue}
        isError={state.name.error}
        icon={memoNameIcon}
      />

      <FieldInput
        className='form-field form-tickets__form-field'
        type='email'
        name='email'
        placeholder='email'
        value={state.email.value}
        handleChange={setInputValue}
        isError={state.email.error}
        icon={memoEmailIcon}
      />

      <FieldInput
        className='form-field form-tickets__form-field'
        type='tel'
        name='phone'
        placeholder='phone'
        value={state.phone.value}
        handleChange={setInputValue}
        isError={state.phone.error}
        icon={memoTelIcon}
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

      {/* <div className='booking-form__section'>
        <NumberField
          className='booking-form__number-field '
          label={`basic 18+ (${state.price} €)`}
          name='basic'
          value={state.basic}
          handleClick={setAmount}
        />
        <NumberField
          className='booking-form__number-field '
          label={`senior 65+ (${Number(state.price) / 2} €)`}
          name='senior'
          value={state.senior}
          handleClick={setAmount}
        />
      </div> */}
    </form>
  );
};

export default TicketsForm;
