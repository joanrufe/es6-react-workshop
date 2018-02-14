import { connect } from 'react-redux';
import { UserTableComponent } from './userTable';
import { actionsEnums } from '../../common/actionsEnums';
import { UserEntity } from '../../model/userEntity';
import { initializeUsersAction, filterByValueAction, filterEnums, sortTableAction } from './actions/';

const mapStateToProps = state => {
    return {
        initial_users: state.userTableReducer.initial_users,
        users_filtered: state.userTableReducer.users_filtered
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initializeUsers: data => dispatch(initializeUsersAction(data)),
        resetFilters: () => dispatch({ type: actionsEnums.RESET_FILTERS }),
        updateFilters: FilterOptions => dispatch(filterByValueAction(FilterOptions)),
        toggleSort: elem => dispatch(sortTableAction(elem))
    }
}

export const UserTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserTableComponent);