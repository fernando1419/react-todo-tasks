interface TodoProps {
  id: number;
  title: string;
  isCompleted: boolean;

  // eslint-disable-next-line no-unused-vars
  onRemoveTodo: (id: number) => void;
}

export default function Todo({
  id,
  title,
  isCompleted,
  onRemoveTodo,
}: TodoProps) {
  return (
    <div className="view">
      {/* <label htmlFor={`${id}`}>Task: </label> */}
      <input
        id={`${id}`}
        className="toggle"
        type="checkbox"
        checked={isCompleted}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className="destroy"
        style={{ height: "32px" }}
        onClick={() => onRemoveTodo(id)}
      ></button>
    </div>
  );
}
