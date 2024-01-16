import { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = { email: "", name: "" };

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addEmail":
      return { ...currentState, email: action.payload };
    case "addName":
      return { ...currentState, name: action.payload };
    default:
      return currentState;
  }
};
const UseReducer = () => {
  const [state, disPatch] = useReducer(reducer, initialState);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => disPatch({ type: "addName", payload: e.target.value })}
        className=" border-cyan-400 border-2"
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={(e) =>
          disPatch({ type: "addEmail", payload: e.target.value })
        }
        className="border-cyan-400 border-2"
        type="email"
        name="email"
        id="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseReducer;
