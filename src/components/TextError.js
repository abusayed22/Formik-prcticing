import React from 'react';

function TextError(props) {
    return (
        <div className={{color: 'red'}}>
            {props.children}
        </div>
    );
}

export default TextError;