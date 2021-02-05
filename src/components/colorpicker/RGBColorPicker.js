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
    return (
      <div>
        <div className="d-flex">
          <BoxColor
            r={this.state.r}
            g={0}
            b={0}
            class="border border-dark w-25"
          />
          <p>R:</p> <SingleColorPicker onChange={this.handleChange} name="r" />
        </div>
        <div className="d-flex">
          <BoxColor
            r={0}
            g={this.state.g}
            b={0}
            class="border border-dark w-25"
          />
          <p>G:</p> <SingleColorPicker onChange={this.handleChange} name="g" />
        </div>
        <div className="d-flex">
          <BoxColor
            r={0}
            g={0}
            b={this.state.b}
            class="border border-dark w-25"
          />
          <p>B:</p> <SingleColorPicker onChange={this.handleChange} name="b" />
        </div>
        <div className="d-flex">
          <BoxColor
            onChange={this.handleChange}
            r={this.state.r}
            g={this.state.g}
            b={this.state.b}
            class="border border-dark w-25"
          />
          rgb({this.state.r},{this.state.g},{this.state.b})
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
