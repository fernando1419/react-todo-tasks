import { type TODO } from "../types";

export default function Todo({ id, title, isCompleted }: TODO) {
  return (
    <>
      {/* <label htmlFor={`${id}`}>Task: </label> */}
      <input
        id={`${id}`}
        className="toggle"
        type="checkbox"
        checked={isCompleted}
        onChange={() => {}}
      />
      <label>{title}</label>
    </>
  );
}
