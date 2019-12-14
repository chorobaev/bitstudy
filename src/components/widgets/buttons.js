import React from 'react';
import './widgets.css'

export function BitButton(props) {
    return (
        <button className='three-d' onClick={props.onClick}>{props.text}</button>
    )
}