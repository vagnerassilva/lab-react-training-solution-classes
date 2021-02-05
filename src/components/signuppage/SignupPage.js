import React from 'react';
import TextInput from './TextInput';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    nationality: 'en',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <TextInput
          label="Email address"
          type="email"
          id="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          subtitle={
            this.state.email.indexOf('@') != -1 &&
            this.state.email.indexOf('.com') != -1
              ? 'You typed a valid email'
              : 'Please type a valid email'
          }
        />

        <TextInput
          label="Password"
          type="password"
          id="exampleInputPassword1"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
          subtitle={
            this.state.password.length < 5
              ? 'Your password is too weak'
              : 'Your password is strong'
          }
        />
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Nationality</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            name="nationality"
            value={this.state.nationality}
            onChange={this.handleChange}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div>
          <p>
            {this.state.nationatily === 'en'
              ? 'Hello'
              : this.state.nationality === 'fr'
              ? 'Bonjour'
              : 'Halo'}
          </p>
          <p>Your e-mail is {this.state.email}</p>
          <p>
            {this.state.email.indexOf('@') != -1 &&
            this.state.email.indexOf('.com') != -1
              ? 'Your email adress is correct'
              : 'Your email adress is not correct'}
          </p>
        </div>
      </form>
    );
  }
}

export default SignupPage;
