import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ filteration }) => {
  const [filter, setFilter] = useState();
  const filterHandler = (e) => {
    setFilter(e.target.value);
    filteration(e.target.value);
  }
  return (
    <input className={styles.filter} type={"text"} value={filter} onChange={filterHandler} />
  )
}

export default Filter;