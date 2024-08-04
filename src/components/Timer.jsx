import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

function getRandomColor() {
  const letters = ["#ff5717", "#dfd736", "#f12e67", "#169bf4", "#3cc75c", "#ba5ae5"];

  const min = 0;
  const max = letters.length - 1;

  let ass = Math.floor(Math.random() * (max - min + 1)) + min; 

  let color = letters[ass]

  return color;

}


function Timer(props) {


  const totalTime = props.time
  const audioRef = useRef(null);

  const [remainingTime, setRemainingTime] = useState(props.time);
  const [playStatus, setPlayStatus] = useState(false);  

  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  useEffect(() => {
    let intervalId;
    
    handleVerify()

    if (playStatus && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
      }, 1000);
    }
    
    else if(playStatus === false && remainingTime > 0) {
      handleStop();
    }
        
    else if (remainingTime === 0) {

      handleStop();
      
    }
    

    return () => clearInterval(intervalId);
  }, [playStatus, remainingTime, props.playing]);

  const handlePlay = () => {
    audioRef.current.play();   
    setPlayStatus(true);
    props.playerSwitch(props.id, true)
  }
  
  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlayStatus(false);
    setRemainingTime(totalTime);
    props.playerSwitch(props.id, playStatus)
    
  }

  const handleVerify = () => {
    if(playStatus === true && props.playing === false) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setRemainingTime(props.time)
    }
  };



  return (<>

    <audio ref={audioRef} src={props.ringer}></audio>
    { props.playing ? <button onClick={handleStop} className="stopButton">STOP</button> : <button style={{backgroundColor: color}} onClick={handlePlay} className="playButton">PLAY</button> }
  
    <span className='timeRemaining'> ({remainingTime}s) </span>

  </>);
}

export default Timer;
