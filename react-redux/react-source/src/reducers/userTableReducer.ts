import { actionsEnums } from '../common/actionsEnums';
import { UserEntity } from '../model';
import { UsersAPI } from '../rest-api/';
import {} from '../components/userTable/actions/'

class UserStateReducer {
    initial_users: UserEntity[];
    users_filtered: UserEntity[];
    public constructor(){
        this.initial_users = [];
        this.users_filtered = [];
    }
}

export const userTableReducer = (state = new UserStateReducer(), action) => {
    switch (action.type){
        case actionsEnums.INITIALIZE_USERS:
            return {
                ...state,
                initial_users: action.payload
            }
        case actionsEnums.UPDATE_TABLE_FILTER:
            return {
                ...state,
                users_filtered: state.initial_users.filter( ( item : UserEntity ) => item[action.payload.filter] === action.payload.value )
            }
    }
    return state;
}