import { useMemo, useState } from "react";
import { ReactComponent as DateIcon } from "@svg/ticket/date.svg";
import { ReactComponent as TimeIcon } from "@svg/ticket/time.svg";
import { ReactComponent as NameIcon } from "@svg/ticket/name.svg";
import { ReactComponent as EmailIcon } from "@svg/ticket/email.svg";
import { ReactComponent as TelIcon } from "@svg/ticket/tel.svg";
import { ReactComponent as ListIcon } from "@svg/ticket/list.svg";
import { ReactComponent as ArrowIcon } from "@svg/ticket/arrow.svg";
import useFormState from "@/hooks/useFormState";
import getDateList from "@/utils/getDateList";
import getTimeList from "@/utils/getTimeList";
import PRICES from "@/data/prices";
import FieldInput from "../FieldInput";
import FieldSelect from "../FieldSelect";
import FieldNumber from "../FieldNumber";
import Modal from "../Modal";
import { ErrorMessages } from "./types";
import "./styles.scss";

const TicketsForm = (): JSX.Element => {
  const { state, setNumberValue, setInputValue, setInitState } = useFormState();
  const [isSubmit, setIsSubmit] = useState(false);

  const closeModal = () => {
    setIsSubmit(false);
    setInitState();
  };

  const basicPriceValue = state.price ? `${state.price} €` : "set ticket type";

  const seniorPriceValue = state.price ? `${Number(state.price) / 2} €` : "set ticket type";

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
    return getTimeList(9, 18);
  }, []);

  const DAYS = useMemo(() => {
    return getDateList(7);
  }, []);

  return (
    <>
      <form
        className="form-tickets"
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmit(true);
        }}
      >
        <FieldSelect
          className="form-field form-tickets__form-field"
          name="date"
          options={DAYS}
          placeholder="date"
          value={state.date}
          handleChange={setInputValue}
          iconLeft={memoDateIcon}
          iconRight={memoArrowIcon}
        />

        <FieldSelect
          className="form-field form-tickets__form-field"
          name="time"
          options={TIME}
          placeholder="time"
          value={state.time}
          handleChange={setInputValue}
          iconLeft={memoTimeIcon}
          iconRight={memoArrowIcon}
        />

        <FieldInput
          className="form-field form-tickets__form-field"
          type="text"
          name="name"
          placeholder="full name"
          value={state.name}
          handleChange={setInputValue}
          isError={state.isNameError}
          icon={memoNameIcon}
          message={ErrorMessages.NAME_ERROR}
        />

        <FieldInput
          className="form-field form-tickets__form-field"
          type="email"
          name="email"
          placeholder="email"
          value={state.email}
          handleChange={setInputValue}
          isError={state.isEmailError}
          icon={memoEmailIcon}
          message={ErrorMessages.EMAIL_ERROR}
        />

        <FieldInput
          className="form-field form-tickets__form-field"
          type="tel"
          name="phone"
          placeholder="phone"
          value={state.phone}
          handleChange={setInputValue}
          isError={state.isPhoneError}
          icon={memoTelIcon}
          message={ErrorMessages.PHONE_ERROR}
        />

        <FieldSelect
          className="form-field form-tickets__form-field"
          name="price"
          options={PRICES}
          placeholder="ticket type"
          value={state.price}
          handleChange={setInputValue}
          iconLeft={memoListIcon}
          iconRight={memoArrowIcon}
        />

        <FieldNumber
          className="form-field form-tickets__form-field"
          label={`age 18+ (${basicPriceValue})`}
          name="basic"
          value={state.basic}
          minValue={0}
          maxValue={10}
          handleClick={setNumberValue}
        />

        <FieldNumber
          className="form-field form-tickets__form-field"
          label={`age 65+ (${seniorPriceValue})`}
          name="senior"
          value={state.senior}
          minValue={0}
          maxValue={10}
          handleClick={setNumberValue}
        />

        <div className="total-price form-tickets__total-price">
          Total:&nbsp;<span>{state.total}</span>&nbsp;€
        </div>

        <div className="form-controls form-tickets__form-controls">
          <button
            disabled={state.isActiveResetBtn}
            className="btn-control form-tickets__btn-control"
            type="button"
            onClick={setInitState}
          >
            Reset
          </button>
          <button className="btn-control form-tickets__btn-control" type="submit" disabled={!state.isActiveSubmitBtn}>
            Book
          </button>
        </div>
      </form>
      {isSubmit && (
        <Modal
          price={state.price}
          basic={state.basic}
          senior={state.senior}
          total={state.total}
          date={state.date}
          time={state.time}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default TicketsForm;
