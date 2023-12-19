import { FormInitStateType, ActionType } from './types';

export const setFormTotal = (
  state: FormInitStateType,
  action: ActionType
): number => {
  switch (action.type) {
    case 'price':
      return (
        Number(action.price) * state.basic +
        (Number(action.price) * state.senior) / 2
      );

    case 'basic':
      return (
        action.basic * Number(state.price) +
        (Number(state.price) * state.senior) / 2
      );

    case 'senior':
      return (
        Number(state.price) * state.basic +
        (action.senior * Number(state.price)) / 2
      );

    default:
      return 0;
  }
};

export const setIsActiveBtn = (
  store: FormInitStateType,
  error: boolean
): boolean => {
  const keys = Object.keys(store).filter((key) => {
    return error
      ? !key.endsWith('Btn')
      : !key.endsWith('Btn') && key !== 'senior' && key !== 'base';
  });

  const isClear = keys.every((key) => {
    if (error) {
      return !store[key as keyof FormInitStateType];
    }

    return key.endsWith('Error')
      ? !store[key as keyof FormInitStateType]
      : store[key as keyof FormInitStateType];
  });

  return isClear;
};

export const setIsError = (action: ActionType): boolean => {
  switch (action.type) {
    case 'name':
      return !/^([A-Z][a-z]{1,14}\s[A-Z][a-z]{1,14})?$/.test(
        action[action.type]
      );

    case 'email':
      return !/^([a-zA-Z\d_-]{3,15}@[a-z]{4,}\.[a-z]{2,})?$/i.test(
        action[action.type]
      );

    case 'phone':
      return !/^(\d{9})?$/.test(action[action.type]);

    default:
      return false;
  }
};
