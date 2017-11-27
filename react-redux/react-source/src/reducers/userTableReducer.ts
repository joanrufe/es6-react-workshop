import { actionsEnums } from '../common/actionsEnums';
import { UserEntity } from '../model';
import { UsersAPI } from '../rest-api/';
import { filterEnums, FilterOptions } from '../components/userTable/actions/'

export class UserStateReducer {
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
            };

        case actionsEnums.UPDATE_TABLE_FILTER:
            return handleUpdateFilter(state, action.payload);

        case actionsEnums.RESET_FILTERS: 
            return {
                ...state,
                users_filtered: []
            };

        case actionsEnums.SORT_USERS:
            return handleSortUsers(state,action.payload);
    }
    return state;
}

const handleUpdateFilter = (state:UserStateReducer, { filterType, value }: FilterOptions): UserStateReducer => {
    const users_filtered = state.initial_users.filter(
        ( item : UserEntity ) => {
            switch (filterType){
                case filterEnums.gender:
                    return item.gender === value;
                case filterEnums.first_name:
                    return item.first_name.includes(value);
                case filterEnums.last_name:
                    return item.last_name.includes(value);
            }                 
        }
    );
    return {
        ...state,
        users_filtered
    };
}

const handleSortUsers = (state = new UserStateReducer(), fieldName) => {
    // Need to use slice() because sort() affects the inmutability of initial_users
    const sortedUsers = state.initial_users.slice().sort((a,b) => {
        if(a[fieldName] < b[fieldName]) return -1;
        if(a[fieldName] > b[fieldName]) return 1;
        return 0;
    })
    return {
        ...state,
        users_filtered: sortedUsers
    };
}