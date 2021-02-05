import React from 'react';
import SingleColorPicker from './SingleColorPicker';
import BoxColor from '../boxcolor/BoxColor';

class RGBColorPicker extends React.Component {
  state = {
    r: 0,
    g: 0,
    b: 0,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <BoxColor r={this.state.r} g={0} b={0} />
          <SingleColorPicker
            onChange={this.handleChange}
            r={this.state.r}
            name="r"
          />
        </div>
        <div>
          <BoxColor r={0} g={this.state.g} b={0} />
          <SingleColorPicker
            onChange={this.handleChange}
            g={this.state.g}
            name="g"
          />
        </div>
        <div>
          <BoxColor r={0} g={0} b={this.state.b} />
          <SingleColorPicker
            onChange={this.handleChange}
            b={this.state.b}
            name="b"
          />
        </div>
        <div>
          <BoxColor r={this.state.r} g={this.state.g} b={this.state.b} />
          rgb({this.state.r},{this.state.g},{this.state.b})
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
