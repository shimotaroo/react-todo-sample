import React from "react";

// CSSをオブジェクトで定義
// CSSプロパティはjsファイルではキャメルケースで書く
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

// 親コンポーネントからのproosを受け取る場合は引数にpropsを指定する
export const InputTodo = (props) => {
  // 親コンポーネントから受け取ったpropsを分割代入する
  const { todoText, onChange, onClick } = props;

  return (
    <div style={style}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
