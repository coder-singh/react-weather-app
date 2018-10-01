import React from 'react';

const Titles = (props) => (
    <div className="title-wrapper">
        {props.city && props.country && <p>{props.city}, {props.country}</p>}
    </div>
);

export default Titles;