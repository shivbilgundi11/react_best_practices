import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../services/state/store';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from '../../services/state/counter/counterSlice';

export default function ReduxEx() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div>
        <h1>Redux Redux ToolKit Example</h1>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <br />
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(50))}>
          IncrementByAmount
        </button>
        <br />
        <button onClick={() => dispatch(incrementAsync(500))}>
          IncrementAsync
        </button>
      </div>
    </>
  );
}
