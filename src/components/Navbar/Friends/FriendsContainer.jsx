import { connect } from 'react-redux';
import Friends from './Friends';

let mapStateToProps = (state) => {
  return {
    friends: state.navbar.friends
  };
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;