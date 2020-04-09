import React from "react";
import "./styles/style.scss";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-inner">
        <div className="modal-fill">{children}</div>

        <button className="modal__close" onClick={() => onClose(false)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Modal;
