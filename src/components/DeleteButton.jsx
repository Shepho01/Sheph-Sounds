import React, { Component, useEffect } from 'react';
import "../App.css"

function DeleteButton(props) {

    return ( <button onClick={ () => props.onDelete(props.id) } className="deleteButton">DELETE</button>  );
}

export default DeleteButton;