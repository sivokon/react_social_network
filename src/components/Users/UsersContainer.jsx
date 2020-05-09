import { connect } from 'react-redux';
import Users from './Users';
import { ToggleFollowAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => dispatch(ToggleFollowAC(userId))
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;