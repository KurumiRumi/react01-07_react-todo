import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          id="add-text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button id="add-button" onClick={onClickAdd}>
          追加
        </button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo) => {
            return (
              // mapを使うときはkeyで何個目かの目印を付ける
              <li key={todo} className="list-row">
                <div>{todo}</div>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-list">
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div>{todo}</div>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
