import React from 'react';

const Titles = (props) => (
    <div className="title-wrapper">
        {props.city && <p>city: {props.city}</p>}
        {props.country && <p>Country: {props.country}</p>}
    </div>
);

export default Titles;