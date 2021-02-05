import React from "react";

function TextInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        name={props.name}
        onChange={props.onChange} //lift.state up
        value={props.value}
      />
      {props.subtitle ? (
        <small className="form-text text-muted">{props.subtitle}</small>
      ) : (
        ""
      )}
    </div>
  );
}

export default TextInput;
