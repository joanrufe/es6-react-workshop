import * as React from 'react';
import {
    IconButton, Toolbar,
    ToolbarGroup, ToolbarTitle
} from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialPeople from 'material-ui/svg-icons/social/people';
import MapsMap from 'material-ui/svg-icons/maps/map';
import ActionShop from 'material-ui/svg-icons/action/shop';

export const MenuBar = () => {
    return (
        <Toolbar>
            <ToolbarGroup>
                <IconButton tooltip="Index">
                    <ActionHome/>
                </IconButton>
                <IconButton tooltip="Users">
                    <SocialPeople/>
                </IconButton>
                <IconButton tooltip="Map">
                    <MapsMap/>
                </IconButton>
                <IconButton tooltip="Shop">
                    <ActionShop/>
                </IconButton>
            </ToolbarGroup>
        </Toolbar>
    );
}
