import React from "react";

// 親コンポーネントから受け取ったpropsを分割代入する
export const CompleteTodos = (props) => {
  // 親コンポーネントから受け取ったpropsを分割代入する
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
