import { useState } from "react";
import styles from "./App.module.scss";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('')
  };

  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <InputField text={text} handleInput={setText} handleSubmit={addTask} />

        <TodoList />
      </div>
    </div>
  );
}

export default App;
