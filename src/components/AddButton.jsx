import React, { Component } from 'react';

function AppButton(props) {

    const handleAdd = () => {

        console.log("AAA");
    }

    return ( <>
    
        <button className="btn btn-info btn-sm" onClick={handleAdd}>ADD</button>

    </> );
}

export default AppButton;