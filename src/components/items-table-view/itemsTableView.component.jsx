import React from 'react';
import './itemsTableView.style.css';
import ItemRow from '../item-row/itemrow.component'

const ItemsTableView = (props) => {
    //para ver los cambios de estado
    //const [change, setChange] = useState(false);
    const { changeStatus } = props;
    
    return (

        <div className="items-table">
            <div className="items-table__header">
                <span>Disp</span>
                <span>Descripcion</span>
                <span>Estado</span>

            </div>
            <div>
                {props.dispositivos.map((disp) => {
                    return (
                        <ItemRow changeStatus={(change) => {                            
                            changeStatus(change)
                        }} key={disp.id_dispositivo} dispositivo={disp}>
                        </ItemRow>
                    );
                })}
            </div>
        </div>
    );
}

export default ItemsTableView;