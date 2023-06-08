import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onCh} type="text" value={props.val} />
      <button onClick={props.Adit}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
