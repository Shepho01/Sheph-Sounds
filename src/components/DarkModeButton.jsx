import { useState, useEffect } from "react";

function DarkModeButton(props) {

    return(<>
        {
            props.darkModeStatus ? 
            
            <button className="colourModeButton1" onClick={ () => props.colourModeSwitch() }> Dark Mode </button> 
            :
            <button className="colourModeButton2" onClick={ () => props.colourModeSwitch() }> Light Mode </button> 

        } 
    </>)
}

export default DarkModeButton;