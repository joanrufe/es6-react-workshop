import { UserEntity } from '../../../model/';
import { actionsEnums } from '../../../common/actionsEnums';

export const initializeUsersAction = (data : UserEntity[]) => {
    return {
        type: actionsEnums.INITIALIZE_USERS,
        payload: data
    }
}

export const updateFilterAction = (filter : string, value) => {
    return {
        type: actionsEnums.UPDATE_TABLE_FILTER,
        payload: {filter,value}
    }
}