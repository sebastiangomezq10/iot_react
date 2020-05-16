import React from 'react';
import './itemrow.style.css';

const ItemRow = (props) => {
    return (<div className="disp">
        <span className="disp__idDispositivo">{props.disp.idDispositivo} </span>
        <span className="disp__fechaRegistro">{props.disp.fechaRegistro} </span>
        <span className="disp__descripcion">{props.disp.descripcion} </span>
        <span className="disp__estado">{props.disp.estado}</span>
    </div>
    );
}

export default ItemRow;