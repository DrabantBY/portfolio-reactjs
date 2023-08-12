import { useReducer, useEffect, useCallback } from 'react';
import { ActionType } from './types';
import { initialState, getInitialState } from './state';
import reducer from './reducer';

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
