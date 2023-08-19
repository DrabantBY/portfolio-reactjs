import {
  createContext,
  useState,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

const ContextMenuState = createContext(false);
const ContextMenuAction = createContext<Dispatch<SetStateAction<boolean>>>(
  () => {}
);

type ContextMenuPropsType = {
  children: ReactNode;
};

const ContextMenuProvider = (props: ContextMenuPropsType): JSX.Element => {
  const [state, setState] = useState(false);

  const toggleState = useMemo(() => {
    return setState;
  }, []);

  return (
    <ContextMenuState.Provider value={state}>
      <ContextMenuAction.Provider value={toggleState}>
        {props.children}
      </ContextMenuAction.Provider>
    </ContextMenuState.Provider>
  );
};

export { ContextMenuState, ContextMenuAction, ContextMenuProvider };
