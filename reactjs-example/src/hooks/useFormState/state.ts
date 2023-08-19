import { FormInitStateType } from './types';

export const initialState: FormInitStateType = {
  price: '',
  basic: 0,
  senior: 0,
  total: 0,
  date: '',
  time: '',
  name: '',
  phone: '',
  email: '',
  isNameError: false,
  isPhoneError: false,
  isEmailError: false,
  isActiveResetBtn: true,
  isActiveSubmitBtn: false,
};

export const getInitialState = (): FormInitStateType => {
  const formState = localStorage.getItem('formState');
  return formState ? JSON.parse(formState) : initialState;
};
