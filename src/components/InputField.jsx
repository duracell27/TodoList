import React from "react";
import styles from '../App.module.scss'

const InputField = ({text, handleInput, handleSubmit}) => {
  return (
    <label className={styles.input}>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Додати завдання</button>
    </label>
  );
};

export default InputField;
