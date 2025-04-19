/* eslint-disable no-unused-vars */
import React from "react";
import { type TODO } from "../types";

interface TodoProps {
  id: number;
  title: string;
  isCompleted: boolean;
  onRemoveTodo: (id: number) => void;
  onToggleCompleteTodo: ({ id, isCompleted }: Pick<TODO, "id" | "isCompleted">) => void;
}

export default function Todo({ id, title, isCompleted, onRemoveTodo, onToggleCompleteTodo }: TodoProps) {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({ id, isCompleted: event?.target.checked });
  };

  return (
    <div className="view">
      { /* prettier-ignore */}
      <input 
        id={`${id}`}
        className="toggle"
        type="checkbox"
        checked={isCompleted}
        onChange={handleChangeCheckbox} 
      />
      <label htmlFor={`${id}`}>{title}</label>
      <button className="destroy" style={{ height: "32px" }} onClick={() => onRemoveTodo(id)}></button>
    </div>
  );
}
