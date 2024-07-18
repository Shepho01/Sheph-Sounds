import React, { Component, useEffect } from 'react';

function DeleteButton(props) {

    return ( <button onClick={ () => props.onDelete(props.currentSound.id) } className="btn btn-danger btn-sm">DELETE</button>  );
}

export default DeleteButton;