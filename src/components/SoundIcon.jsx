import React, { Component } from 'react';
import Timer from './Timer';
import '../App.css';
import DeleteButton from './DeleteButton';
import ChangeName from './ChangeName';


class SoundIcon extends Component {


  render() { 
    return (
      
      <div>

        <h6 className='grid-item'>
          
          <Timer id = {this.props.id} soundName = {this.props.soundName} playing = {this.props.playing} playedSounds = {this.props.playedSounds} playerSwitch = {this.props.playerSwitch} playerStop = {this.props.playerStop} time = {this.props.soundTime} editStatus = {this.props.edit}  name = {this.props.soundName} ringer = {this.props.soundRinger} />

          {this.props.editStatus ? <DeleteButton id = {this.props.id} editStatus = {this.props.editStatus} onDelete = {this.props.onDelete}></DeleteButton> : <></>}

          {this.props.editStatus ? <ChangeName id = {this.props.id} soundName = {this.props.soundName} onChangeName = {this.props.onChangeName}/> : <span className=''>{this.props.soundName}</span>}

        </h6>

        <br></br>
      </div>
    );
  }
}
 
export default SoundIcon;
