import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
  selectCounter,
} from "../redux/CounterSlice";

const Counter = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div className="flex w-1/3 justify-between">
        <button
          className="bg-blue-500 p-4 rounded-md"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="bg-blue-500 p-4 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="bg-blue-500 p-4 rounded-md"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          className="bg-blue-500 p-4 rounded-md"
          onClick={() => dispatch(incrementByValue(5))}
        >
          5
        </button>
      </div>
    </section>
  );
};

export default Counter;
