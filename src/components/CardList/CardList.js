import React ,{ Fragment } from "react";
import Card from "../Card/Card";
const CardList = ({ nameList, deleteFunc }) => {
  const cards = nameList.map(({ id, ...otherProps }) => (
    <Card key={id} {...otherProps} id={id} deleteFunc={deleteFunc} />
  ));
  return <Fragment>{cards}</Fragment>
}
export default CardList;