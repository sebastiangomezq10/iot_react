import React from 'react';
import './itemrow.style.css';

const ItemRow = (props) => {
    return (<div className="disp">
        <span className="disp__idDispositivo">{props.dispositivo.idDispositivo} </span>
        <span className="disp__fechaRegistro">{props.dispositivo.fechaRegistro} </span>
        <span className="disp__descripcion">{props.dispositivo.descripcion} </span>
        <span className="disp__estado">{props.dispositivo.estado}</span>
    </div>
    );
}

export default ItemRow;