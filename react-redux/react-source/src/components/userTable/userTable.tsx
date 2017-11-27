import * as React from 'react';
import { TableComponent } from '../../common/components/table/table'
import { UsersAPI } from '../../rest-api/userApi';
import { UserEntity } from '../../model';
import { filterEnums } from './actions/filterEnums';
import { ControlPanel } from './controlPanel';

interface Props{
    initial_users: UserEntity[];
    users_filtered: UserEntity[];
    // Action creators
    updateFilters: (FilterOptions) => void;
    initializeUsers: (data : UserEntity[]) => void;
    resetFilters: () => {};
    toggleSort: (elem) => {};
}

export class UserTableComponent extends React.Component<Props,{}>{
    constructor(props){
        super(props);
        // Launch initialize users action
        const api = new UsersAPI();
        this.props.initializeUsers(api.getUsers());
    }
    render(){
        const renderUsers = 
            (typeof this.props.users_filtered !== 'undefined' && this.props.users_filtered.length > 0)?
                this.props.users_filtered:
                 this.props.initial_users;

        return (
            <div>
                <ControlPanel
                    updateFilters={ this.props.updateFilters }
                    resetFilters={this.props.resetFilters}
                />
                <TableComponent 
                    data={ renderUsers }
                    toggleSort={ elem => this.props.toggleSort(elem)}
                />
            </div>
        );
    }
}
