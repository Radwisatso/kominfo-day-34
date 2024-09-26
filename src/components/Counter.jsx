import {
  useSelector,
  useDispatch,
} from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector(
    (state) => state.counter.value
  );
  const dispatch = useDispatch();

  const amount = 10;
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        onClick={() =>
          dispatch(incrementByAmount(amount))
        }
      >
        Increment by {amount}
      </button>
    </div>
  );
}
