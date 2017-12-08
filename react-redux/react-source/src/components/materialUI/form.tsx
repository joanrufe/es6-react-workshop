import * as React from 'react';
import {
    FlatButton, DatePicker, Checkbox, Toggle,
    AutoComplete, RaisedButton, SelectField
} from 'material-ui';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

interface Props {
    usersByFirstName: string[];
}

interface State{
    value: number;
}

export class Form extends React.Component<Props,State> {
    constructor(){
        super();
        this.state = {
            value: 0
        };
    }
    render (){
        return (
            <div>
                <AutoComplete
                    floatingLabelText="Search users"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={this.props.usersByFirstName}
                    onUpdateInput={e => console.log(e)}
                />
                <RaisedButton 
                    label="Submit" 
                    primary={true}
                    style={{margin: 12}}
                />
                <DatePicker hintText="Date Picker"/>
                <Toggle
                    label="Toggle"
                    style={{width: 200}}
                /> 
                <Checkbox
                    label="Check label"
                />
                <Checkbox
                    label="Disabled unchecked"
                    disabled={true}
                />
            <div>
                <SelectField
                    floatingLabelText="Meeting time"
                    value={this.state.value} 
                    onChange={(event, index, value) => this.setState({value})}
                >
                    <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
                    <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
                    <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
                    <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
                </SelectField>
            </div>
        </div>
    )};
}
