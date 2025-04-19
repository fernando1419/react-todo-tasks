import React, { useState } from "react";

interface Props {
  // eslint-disable-next-line no-unused-vars
  onAddTodo: (title: string) => void;
}

export default function Header({ onAddTodo }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const value = inputValue.trim();
    event.preventDefault();
    if (!value) return;

    // console.log({ value });
    onAddTodo(value);
    setInputValue("");
  };
  return (
    <header className="header">
      <h1>
        Todos{" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/archive/4/4c/20210506173340%21Typescript_logo_2020.svg"
          alt="logo"
          width="60px"
          height="auto"
        />
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
}
