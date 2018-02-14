import { UserEntity } from '../../../model/';
import { actionsEnums } from '../../../common/actionsEnums';
import { FilterOptions } from '../../../components/userTable/actions'

export const initializeUsersAction = (data : UserEntity[]) => {
    return {
        type: actionsEnums.INITIALIZE_USERS,
        payload: data
    }
}

export const filterByValueAction = ({filterType, value}: FilterOptions) => {
    return {
        type: actionsEnums.UPDATE_TABLE_FILTER,
        payload: {
            filterType,
            value
        }
    }
}

export const sortTableAction = (fieldName) => {
    return {
        type: actionsEnums.SORT_USERS,
        payload: fieldName
    }
}