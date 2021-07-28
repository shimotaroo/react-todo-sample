import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // フォームに入力されたテキストを保管するState
  const [todoText, setTodoText] = useState("");
  // 未完了のTODOを保管するState
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了のTODOを保管するState
  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力内容のState保持
  // event.targrt.valueは使い方を覚えておく（eventにはonChangeイベントの内容が入っている）
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // TODOの追加
  const onClickAdd = () => {
    if (todoText === "") return;
    // スプレッド構文
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // TODOの削除
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 第一引数：何番目の要素から、　第二引数：何個削除するか
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // TODOの完了
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // 第一引数：何番目の要素から、　第二引数：何個削除するか
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 完了TODOを未完了TODOに戻す
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newincompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newincompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* mapの第二引数indexは要素の番号（初めは0から)が入る */}
          {incompleteTodos.map((todo, index) => {
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
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
