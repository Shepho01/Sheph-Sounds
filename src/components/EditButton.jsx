import React, { Component } from 'react';

class EditButton extends Component {
    state = { 
        editStatus: this.props.editStatus,
        onEdit: this.props.onEdit 
    }
    
    
    render() { 
        return (<button onClick={this.state.onEdit} className="btn btn-warning btn-sm" >EDIT</button>);
    }
}
 
export default EditButton;