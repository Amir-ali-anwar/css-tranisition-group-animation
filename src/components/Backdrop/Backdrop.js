import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssclasses=['Backdrop',props.show?'show-modal':'hide-backdrop']
    return (
        <div className={cssclasses.join(' ')}></div>
    )
};

export default backdrop;