import React, { Component } from 'react';
import "../App.css"

function AppButton(props) {

    const handleAdd = () => {

        console.log("AAA");
    }

    return ( <>
    
        <button className="addButton" onClick={handleAdd}>ADD</button>

    </> );
}

export default AppButton;