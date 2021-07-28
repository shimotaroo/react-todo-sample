import React from "react";

// 親コンポーネントから受け取ったpropsを分割代入する
export const IncompleteTodos = (props) => {
  // 親コンポーネントから受け取ったpropsを分割代入する
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* mapの第二引数indexは要素の番号（初めは0から)が入る */}
        {todos.map((todo, index) => {
          return (
            // 仮想DOMは変更前と変更後で差分だけ抽出し、差分のみ実際のDOMに反映する
            // map等でループでレンダリングされた場合、何個目の要素なのか正確に比較するためにkeyで目印をつける
            <div key={todo} className="list-row">
              <li>{todo}</li>
              {/* 関数に引数を渡す場合はアロー関数で新しく関数を定義する必要がある
            onClick={onClickComplete(index)}はダメ */}
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 関数に引数を渡す場合はアロー関数で新しく関数を定義する必要がある
            onClick={onClickDelete(index)}はダメ */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
