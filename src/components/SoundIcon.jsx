import React, { Component } from 'react';
import Timer from './Timer';
import '../App.css';
import DeleteButton from './DeleteButton';


class SoundIcon extends Component {

  render() { 
    return (
      
      <div className='soundIconBox'>

        <p className='table'>
          <span>{this.props.soundName}</span>
          
          <Timer id = {this.props.id} playing = {this.props.playing} playedSounds = {this.props.playedSounds} playerSwitch = {this.props.playerSwitch} playerStop = {this.props.playerStop} anySoundPlaying = {this.props.anySoundPlaying} time = {this.props.soundTime}  name = {this.props.soundName} ringer = {this.props.soundRinger} />

          {this.props.editStatus ? <DeleteButton currentSound = {this.props.currentSound} editStatus = {this.props.editStatus} onDelete = {this.props.onDelete}></DeleteButton> : <></>}
          
        </p>

        {/* <button onClick={ () => this.props.playSituation(this.props.id, this.props.playing)}>Playing</button> */} 

        {/* <span>{this.props.playing ? "Playing" : "Not Playing"}</span>
 */}
      
        <br></br>
      </div>
    );
  }
}
 
export default SoundIcon;
