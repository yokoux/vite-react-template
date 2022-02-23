import { ReducerWithoutAction, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../store/slices/counter";

interface ReducerState {
  sum: number
}

const reducer =(state: ReducerState, action: any) => {
  switch (action.type) {
    case 'increment':
      return {sum: state.sum + 1};
    case 'decrement':
      return {sum: state.sum - 1};
    default:
      throw new Error();
  }
}

const App = () => {
  const { t, i18n } = useTranslation();

  const [state, d] = useReducer(reducer, {sum: 10})

  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const onIncrement = () => {
    dispatch(increment());
    d({type: "increment"})
  };

  const onIncrement2 = () => {
    dispatch(incrementByAmount(2));
  };

  const onDecrement = () => {
    dispatch(decrement());
    d({type: "decrement"})
  };

  const onChangeLng = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="App">
      <h1>
        {t("Welcome to React")} {count}
      </h1>
      <h2>{ state.sum }</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement2}>+2</button>
      <button onClick={()=>onChangeLng('en')}>en</button>
      <button onClick={()=>onChangeLng('zh')}>zh</button>
    </div>
  );
}

export default App;
