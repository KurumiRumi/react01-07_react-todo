import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input id="add-text" placeholder="TODOを入力" />
        <button id="add-button">追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          <li className="list-row">
            <div>TODOです。</div>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li className="list-row">
            <div>TODOです。</div>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-list">
          <li className="list-row">
            <div>TODOでした</div>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
