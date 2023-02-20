import React from "react";
import styles from "./Card.module.css"

const Card = ({id ,name, age, phone, type ,deleteFunc}) => {
  return ( 
    <div className={styles.cardWrapper} style={{ backgroundColor: type === "boy" ? "#3f51b5" : "#673ab7" }}>
    <div>Name: {name}</div>
    <div>age: {age}</div>
    <div>Phone: {phone}</div>
    <div className={styles.deleteBtn} onClick={(e) => deleteFunc(e, id)}>X</div>
  </div>
  );
}

export default Card;