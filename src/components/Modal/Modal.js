import React from 'react';

import './Modal.css';

const modal = (props) => {  
    const cssclasses=['Modal', props.show==='entering'?'show-modal':props.show==='exiting'?'close-modal':null]
    return (
    <div className={cssclasses.join(' ')}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
    )
};

export default modal;