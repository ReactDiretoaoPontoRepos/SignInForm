import { useReducer } from "react";
import { sum } from "../../reducers/operations";

const Counter = () => {
  // modo com state
  // const [total, setTotal] = useState(0);;

  // modo com reducer
  const [total, dispatch] = useReducer(sum, 0);

  return (
    <>
      <h2>{total}</h2>
      <button onClick={() => dispatch(1)}>+1</button>
      <button onClick={() => dispatch(2)}>+2</button>
    </>
  );
};

export default Counter;
