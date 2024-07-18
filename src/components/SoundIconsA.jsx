import React, { Component } from 'react';

import '../App.css';

import SoundIcon from './SoundIcon.jsx';



class SoundIconsA extends Component {

    
    render() { 
      
        return (<>
            <br></br>
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
                    
                    playerStop = {this.props.playerStop}
                    playerSwitch = {this.props.playerSwitch}
                    anySoundPlaying = {this.props.anySoundPlaying}
                    playSituation = {this.props.playSituation}
                    playedSounds = {this.props.playedSounds}
                    />

                
                 
            ))}

        </>);
    }
}
 
export default SoundIconsA;