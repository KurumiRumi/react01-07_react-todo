import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul id="incomplete-list">
        {todos.map((todo, index) => {
          return (
            // mapを使うときはkeyで何個目かの目印を付ける
            <li key={todo} className="list-row">
              <div>{todo}</div>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 関数に引数を渡す場合アロー関数にする必要がある */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
