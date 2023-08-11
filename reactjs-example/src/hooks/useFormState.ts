import { useReducer, useEffect, useCallback } from 'react';

type FormInitStateType = {
  price: string;
  basic: number;
  senior: number;
  total: number;
  date: string;
  time: string;
  name: string;
  isNameError: boolean;
  phone: string;
  isPhoneError: boolean;
  email: string;
  isEmailError: boolean;
  isFormClear: boolean;
};

type ActionType =
  | {
      type: 'price';
      price: string;
    }
  | {
      type: 'basic';
      basic: number;
    }
  | {
      type: 'senior';
      senior: number;
    }
  | {
      type: 'name';
      name: string;
    }
  | {
      type: 'phone';
      phone: string;
    }
  | {
      type: 'email';
      email: string;
    }
  | {
      type: 'date';
      date: string;
    }
  | {
      type: 'time';
      time: string;
    }
  | {
      type: 'reset';
    };

const initialState: FormInitStateType = {
  price: '',
  basic: 0,
  senior: 0,
  total: 0,
  date: '',
  time: '',
  name: '',
  isNameError: false,
  phone: '',
  isPhoneError: false,
  email: '',
  isEmailError: false,
  isFormClear: true,
};

const checkIsFormClear = (
  store: FormInitStateType,
  props: (keyof FormInitStateType)[]
): boolean => {
  return Object.keys(store)
    .filter((key) => {
      return !props.some((prop) => {
        return prop === key;
      });
    })
    .every((key) => {
      return !store[key as keyof FormInitStateType];
    });
};

const setIsFormClear = (
  value: number | string | boolean,
  store: FormInitStateType,
  keys: (keyof FormInitStateType)[]
) => {
  return value ? false : checkIsFormClear(store, keys);
};

const getInitialState = (): FormInitStateType => {
  const formState = localStorage.getItem('formState');
  return formState ? JSON.parse(formState) : initialState;
};

const reducer = (state: FormInitStateType, action: ActionType) => {
  switch (action.type) {
    case 'price':
      return {
        ...state,
        price: action.price,
        total:
          Number(action.price) * state.basic +
          (Number(action.price) * state.senior) / 2,
        isFormClear: setIsFormClear(action.price, state, [
          'isFormClear',
          'price',
        ]),
      };

    case 'basic':
      return {
        ...state,
        basic: action.basic,
        total:
          Number(state.price) * action.basic +
          (Number(state.price) * state.senior) / 2,
        isFormClear: setIsFormClear(action.basic, state, [
          'isFormClear',
          'basic',
        ]),
      };

    case 'senior':
      return {
        ...state,
        senior: action.senior,
        total:
          Number(state.price) * state.basic +
          (Number(state.price) * action.senior) / 2,
        isFormClear: setIsFormClear(action.senior, state, [
          'isFormClear',
          'senior',
        ]),
      };

    case 'name':
      return {
        ...state,
        name: action.name,
        isNameError: !/^([a-z\s]{3,15})?$/i.test(action.name),
        isFormClear: setIsFormClear(action.name, state, [
          'isFormClear',
          'isNameError',
          'name',
        ]),
      };

    case 'phone':
      return {
        ...state,
        phone: action.phone,
        isPhoneError: !/^(\d{6,10})?$/.test(action.phone),
        isFormClear: setIsFormClear(action.phone, state, [
          'isFormClear',
          'isPhoneError',
          'phone',
        ]),
      };

    case 'email':
      return {
        ...state,
        email: action.email,
        isEmailError: !/^([a-zA-Z\d_-]{3,15}@[a-z]{4,}\.[a-z]{2,})?$/i.test(
          action.email
        ),

        isFormClear: setIsFormClear(action.email, state, [
          'isFormClear',
          'isEmailError',
          'email',
        ]),
      };

    case 'date':
      return {
        ...state,
        date: action.date,
        isFormClear: setIsFormClear(action.date, state, [
          'isFormClear',
          'date',
        ]),
      };

    case 'time':
      return {
        ...state,
        time: action.time,
        isFormClear: setIsFormClear(action.time, state, [
          'isFormClear',
          'time',
        ]),
      };

    case 'reset':
      return initialState;

    default:
      return state;
  }
};

const useFormState = () => {
  const [state, dispatch] = useReducer(reducer, initialState, getInitialState);

  useEffect(() => {
    localStorage.setItem('formState', JSON.stringify(state));
  }, [state]);

  const setNumberValue = useCallback(
    (name: string, value: number, step: 1 | -1) => {
      dispatch({
        type: name,
        [name]: value + step,
      } as ActionType);
    },
    []
  );

  const setInputValue: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      dispatch({
        type: e.target.name,
        [e.target.name]: e.target.value,
      } as ActionType);
    },
    []
  );

  const setInitState = useCallback(() => {
    dispatch({
      type: 'reset',
    });
  }, []);

  return { state, setNumberValue, setInputValue, setInitState };
};

export default useFormState;
