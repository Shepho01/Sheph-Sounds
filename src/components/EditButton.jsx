import React, { Component } from 'react';
import '../App.css'

class EditButton extends Component {
    state = {}
    
    
    render() { 
        return (<>
        
            <button onClick={this.props.onEdit} className="editButton" >EDIT</button>
            
        </>);
    }
}
 
export default EditButton;