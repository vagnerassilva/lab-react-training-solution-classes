import React from 'react';
import profiles from '../../data/berlin.json';
import IdCard from '../idcard/IdCard';

class FaceBook extends React.Component {
  state = {
    country: '',
  };

  handleFilter = () => {};

  render() {
    console.log(profiles);
    return profiles
      .map((profile) => (
        <IdCard
          firstName={profile.firstName}
          lastName={profile.lastName}
          country={profile.country}
          img={profile.img}
          isStudent={profile.isStudent}
        ></IdCard>
      ))
      .filter((profile) => profile.country === this.state.country);
  }
}

export default FaceBook;
