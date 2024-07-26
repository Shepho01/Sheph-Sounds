import React, { Component } from 'react';

import '../App.css';

import SoundIcon from './SoundIcon.jsx';



class SoundIconsB extends Component {


    render() { 
      
        return (<>
           
            {this.props.sounds.map(currentSound => (
             
             <SoundIcon
                    key={currentSound.id}
                    id = {currentSound.id}
                    currentSound = {currentSound}
                    soundName = {currentSound.soundName}
                    soundTime = {currentSound.soundTime}
                    soundRinger = {currentSound.soundRinger}
                    playing = {currentSound.playing}
                    onDelete = {this.props.onDelete}
                    editStatus = {this.props.editStatus} 
                    onChangeName = {this.props.onChangeName}

                    playerSwitch = {this.props.playerSwitch}
                    playedSounds = {this.props.playedSounds}

                    className="grid-item"
                    />

                
                 
            ))}

        </>);
    }
}
 
export default SoundIconsB;