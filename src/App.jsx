import React, { useState } from "react";
// CSS
import "./styles.css";
// コンポーネント
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      {/* propsを渡す(props名=propsの値) */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
