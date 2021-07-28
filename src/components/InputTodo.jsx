import React from "react";

// 親コンポーネントからのproosを受け取る場合は引数にpropsを指定する
export const InputTodo = (props) => {
  // 親コンポーネントから受け取ったpropsを分割代入する
  const { todoText, onChange, onClick } = props;

  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
