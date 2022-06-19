import React from "react";
import '../css/popup.css'

const Popup = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" style={{marginLeft:"20px"}} onClick={handleClose}>
          CANCEL
        </button>
      </section>
    </div>
  );
};

export default Popup