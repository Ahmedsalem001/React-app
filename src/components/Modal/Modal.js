import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import styles from "./Modal.module.css";
const BackDrop = ({ close, show }) => {
  return (
    <div className={`${styles.backDrop} ${show ? styles.showBackDrop : ""}`} onClick={close}></div>
  )
};
const Overlay = ({ children, show }) => {
  return (
    <div className={`${styles.overlay} ${show ? styles.showOverlay : ""}`}>
    {children}
    </div>
  )
}
const Modal = ({ children, show, close }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <BackDrop close={close} show={show} />
          <Overlay show={show}>{children}</Overlay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  )
}
export default Modal;

