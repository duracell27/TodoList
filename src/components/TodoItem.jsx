import React from "react";
import { useDispatch } from "react-redux";
import styles from '../App.module.scss'
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({id,text,complited}) => {
    const dispatch= useDispatch()
  return (
    <li>
      <input type="checkbox" checked={complited} onChange={()=>dispatch(toggleTodoComplete({id}))}/>
      <span>{text}</span>
      <span className={styles.delete} onClick={()=>dispatch(removeTodo({id}))}>&times;</span>
    </li>
  );
};

export default TodoItem;
