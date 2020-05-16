import React from 'react';
import './itemdisp.style.css';
const ItemDisp = (props) => {
    return (
        <div className="disp-name">{props.name}</div>
    );
}
export default ItemDisp;