import * as React from 'react';
import { TableComponent } from '../../common/components/table/table'
import { UsersAPI } from '../../rest-api/userApi';
import { UserEntity } from '../../model';
import { filterEnums } from './actions/filterEnums';

interface Props{
    initial_users: UserEntity[];
    users_filtered: UserEntity[];
    updateFilters: (filter, value) => void;
    initializeUsers: (data : UserEntity[]) => void;
}

export class UserTableComponent extends React.Component<Props,{}>{
    constructor(props){
        super(props);
        // Bind Container functions
        this.props.initializeUsers.bind(this);
        this.props.updateFilters.bind(this);
        // Launch initialize users action
        const api = new UsersAPI();
        this.props.initializeUsers(api.getUsers());
    }
    render(){
        const renderUsers = (typeof this.props.users_filtered !== 'undefined' && this.props.users_filtered.length > 0)?
            this.props.users_filtered : this.props.initial_users;
        return <div>
            <div className="container">
                <a href="#" onClick={ e => this.props.updateFilters(filterEnums.gender,'Male')}>
                    Filter males
                </a>
            </div>
            <TableComponent data={ renderUsers }/>
        </div>
    }
}
