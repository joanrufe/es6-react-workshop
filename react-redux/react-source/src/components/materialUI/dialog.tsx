import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    marginTop: '20px'
}

interface State {
    open: boolean;
}

export default class DialogConfirm extends React.Component<{},State> {
    constructor (){
        super();
        this.state = {
            open: false,
        };
    }
  
    handleOpen = () => {
      this.setState({open: true});
    };
  
    handleClose = () => {
      this.setState({open: false});
    };
  
    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Confirm"
          primary={true}
          onClick={this.handleClose}
        />,
      ];
  
      return (
        <div>
          <RaisedButton 
            style={styles} 
            label="Dialog" 
            onClick={this.handleOpen} />
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Are you sure?
          </Dialog>
        </div>
      );
    }
  }