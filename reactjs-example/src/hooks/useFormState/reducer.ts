import { FormInitStateType, ActionType } from './types';
import { initialState } from './state';
import { setIsActiveBtn, setFormTotal, setIsError } from './helpers';

const reducer = (state: FormInitStateType, action: ActionType) => {
  switch (action.type) {
    case 'date': {
      const newState = { ...state, date: action.date };

      newState.isActiveResetBtn = setIsActiveBtn(newState, true);
      newState.isActiveSubmitBtn = setIsActiveBtn(newState, false);

      return newState;
    }

    case 'time': {
      const newState = { ...state, time: action.time };

      newState.isActiveResetBtn = setIsActiveBtn(newState, true);
      newState.isActiveSubmitBtn = setIsActiveBtn(newState, false);

      return newState;
    }

    case 'name': {
      const newState = {
        ...state,
        name: action.name,
        isNameError: setIsError(action),
      };

      newState.isActiveResetBtn = setIsActiveBtn(newState, true);
      newState.isActiveSubmitBtn = setIsActiveBtn(newState, false);

      return newState;
    }

    case 'email': {
      const newState = {
        ...state,
        email: action.email,
        isEmailError: setIsError(action),
      };

      newState.isActiveResetBtn = setIsActiveBtn(newState, true);
      newState.isActiveSubmitBtn = setIsActiveBtn(newState, false);

      return newState;
    }

    case 'phone': {
      const newState = {
        ...state,
        phone: action.phone,
        isPhoneError: setIsError(action),
      };

      newState.isActiveResetBtn = setIsActiveBtn(newState, true);
      newState.isActiveSubmitBtn = setIsActiveBtn(newState, false);

      return newState;
    }

    case 'price': {
      const newState = {
        ...state,
        price: action.price,
        total: setFormTotal(state, action),
      };

      newState.isActiveResetBtn = setIsActiveBtn(newState, true);
      newState.isActiveSubmitBtn = setIsActiveBtn(newState, false);

      return newState;
    }

    case 'basic': {
      const newState = {
        ...state,
        basic: action.basic,
        total: setFormTotal(state, action),
      };

      newState.isActiveResetBtn = setIsActiveBtn(newState, true);
      newState.isActiveSubmitBtn = setIsActiveBtn(newState, false);

      return newState;
    }

    case 'senior': {
      const newState = {
        ...state,
        senior: action.senior,
        total: setFormTotal(state, action),
      };

      newState.isActiveResetBtn = setIsActiveBtn(newState, true);
      newState.isActiveSubmitBtn = setIsActiveBtn(newState, false);

      return newState;
    }

    case 'reset':
      return initialState;

    default:
      return { ...state };
  }
};

export default reducer;
