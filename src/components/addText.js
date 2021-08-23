import React from 'react';

const AddText = (props) => {

    return (
        <div>
            <button onClick={props.onClick}>
                Add text
            </button>

        </div>
    );
};

export default AddText;
