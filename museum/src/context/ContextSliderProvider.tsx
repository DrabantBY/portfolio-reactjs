import {
  createContext,
  useState,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type FractionStateType = {
  total: number;
  current: number;
};

const ContextFractionState = createContext({ total: 0, current: 0 });
const ContextFractionAction = createContext<
  Dispatch<SetStateAction<FractionStateType>>
>(() => {});

type ContextSLiderPropsType = {
  children: ReactNode;
};

const ContextSliderProvider = (props: ContextSLiderPropsType) => {
  const [fraction, setFraction] = useState({ total: 0, current: 0 });

  const changeFraction = useMemo(() => {
    return setFraction;
  }, []);

  return (
    <ContextFractionState.Provider value={fraction}>
      <ContextFractionAction.Provider value={changeFraction}>
        {props.children}
      </ContextFractionAction.Provider>
    </ContextFractionState.Provider>
  );
};

export { ContextFractionState, ContextFractionAction, ContextSliderProvider };
