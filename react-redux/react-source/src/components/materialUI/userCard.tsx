import * as React from 'react';
import { UserEntity } from '../../model/';
import { Paper, Badge } from 'material-ui';

const userCardStyles: React.CSSProperties = {
    width:150, 
    height: 150,
    overflow: 'hidden',
}
const badgeStyles: React.CSSProperties = {
    right: 15,
    top: 15,
    position: 'absolute'
}

const containerStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    margin: 20
}

export const UserCard = props => {
    const user: UserEntity = props.user;
    return (
        <div style={containerStyles}>
            <Badge
                badgeContent={user.id}
                primary={true}
                style={badgeStyles}
            />
            <Paper 
                style={userCardStyles}
                circle={true}>
                <img 
                    src={user.avatar.toString().replace("50x50", "150x150")} 
                    alt={user.first_name}
                />
            </Paper>
        </div>
    );
}
