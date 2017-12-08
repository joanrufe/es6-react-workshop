import * as React from 'react';
import { Paper } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { usersApi } from '../../rest-api';
import { MenuBar } from './MenuBar';
import { Form } from './form';
import { UserCard } from './userCard';
import DialogConfirm from './dialog';

export const DemoMaterialUI = () => {
    const usersByFirstName = usersApi.getUsers().map(u => u.first_name);
    const bunchOfUsers = usersApi.getUsers(2);
    return (
        <MuiThemeProvider>
            <div>
                <MenuBar />
                <Form usersByFirstName={usersByFirstName}/>
                <DialogConfirm />
                <div style={{position: 'relative'}}>
                    { 
                        bunchOfUsers.map((user, index) => <UserCard key={index} user={user} />)
                    }
                </div>
                <a href="http://www.material-ui.com" target="_blank">Material UI Docs</a>
            </div>
        </MuiThemeProvider>
    );
}