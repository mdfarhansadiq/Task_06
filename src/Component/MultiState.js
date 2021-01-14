import React from 'react';

const MultiState = (props) => {
    const {Number, setnumber} = props
    return (
        <div>
            <p>Number: {props.Number}</p>
            <button onClick={function () {
                setnumber(props.Number + 1)
            }}>Increase
            </button>

        </div>
    );
};

export default MultiState;