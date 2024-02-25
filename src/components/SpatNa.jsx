import React from 'react';
import {Link} from "react-router-dom";
import "../css-old/spatna.css"

const SpatNa = (props) => {
    return (
        <div className={"spatna"}>
            <Link to={props.link}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/>
                </svg>
                Späť na {props.text}
            </Link>
        </div>
    );
};

export default SpatNa;
