import React, { useState, useEffect, useRef } from 'react';
import '../App.css';


function Timer(props) {

  const totalTime = props.time
  const audioRef = useRef(null);

  const [remainingTime, setRemainingTime] = useState(props.time);
  const [playStatus, setPlayStatus] = useState(false);  
  

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
    
    if(playStatus === true && props.playing === false) {

    }

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
    { props.playing ? <button onClick={handleStop} className="btn btn-info btn-sm">STOP</button> : <button onClick={handlePlay} className="btn btn-success btn-sm">PLAY</button> }
    <span> Time: {remainingTime}s </span>

  </>);
}

export default Timer;
