import { connect } from 'react-redux';
import { UserTableComponent } from './userTable';
import { actionsEnums } from '../../common/actionsEnums';
import { UserEntity } from '../../model/userEntity';
import {initializeUsersAction, updateFilterAction} from './actions/userTableActions';

const mapStateToProps = state => {
    return {
        initial_users: state.userTableReducer.initial_users,
        users_filtered: state.userTableReducer.users_filtered
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFilters: (filter, value) => dispatch(updateFilterAction(filter, value)),
        initializeUsers: data => dispatch(initializeUsersAction(data))
    }
}

export const UserTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserTableComponent);