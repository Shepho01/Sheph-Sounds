import React, { Component, useState } from 'react';
import "../App.css"

function ChangeName(props) {
    const [name, setName] = useState(props.soundName)

    return (<>
        <input className='textBox' value={name} onChange={e => setName(e.target.value)}></input>
        <button className='editButton' onClick={() => props.onChangeName(props.id, name)}>Change Name</button>
    </>);
}

export default ChangeName;