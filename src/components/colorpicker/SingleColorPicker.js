import React from 'react';

function SingleColorPicker(props) {
  return (
    <input
      name={props.name}
      onChange={props.onChange}
      type="number"
      min="0"
      max="255"
    ></input>
  );
}

export default SingleColorPicker;
