import React from 'react';
import './itemsTableView.style.css';
import ItemRow from '../item-row/itemrow.component'

const ItemsTableView = (props) => {
    return (
        <div className="items-table">
            <div className="items-table__header">
                <span>idDispositivo -</span>
                <span> fechaRegistro -</span>
                <span> descripcion - </span>
                <span> estado</span>
            </div>
            <div>
                {props.dispositivos.map((disp) => {
                    return (
                        <ItemRow key={disp.idDispositivo} dispositivo={disp}>
                        </ItemRow>
                    );
                })}
            </div>
        </div>
    );
}

export default ItemsTableView;