import React from 'react';
import BoxColor from '../boxcolor/BoxColor';

function SingleColorPicker(props) {
  return (
    <div>
      {props.r ? 'R:' : props.g ? 'G:' : 'B:'}
      <input
        name={props.name}
        onChange={props.onChange}
        type="number"
        min="0"
        max="255"
      ></input>
    </div>
  );
}

export default SingleColorPicker;
