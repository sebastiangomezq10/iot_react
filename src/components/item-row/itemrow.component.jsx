import React, { useState } from 'react';
import './itemrow.style.css';
import Switch from "react-switch";

const ItemRow = (props) => {
    const [switchState, setswitchState] = useState(() => {
        if (props.dispositivo.estado === "encendido") {
            return (true);
        }
        return (false);
    });
    //para actualizar cuando se ejecute un cambio en los estados 
    const { changeStatus } = props;

    //para enviar el nuevo estado 
    const onSubmitNewState = async () => {
        let statusSend
        if (!switchState) {
            statusSend = 'encendido';
        } else {
            statusSend = 'apagado';
        }
        const state = {
            id: props.dispositivo.id_dispositivo,
            state: statusSend
        }
        const dispStatus = JSON.stringify(state);
        console.log({ dispStatus });
        const response = await fetch('http://localhost:3001/api/iot/newState', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: dispStatus
        });
        const responseJSON = await response.json();
        //setStatus(responseJSON);
        console.log({ responseJSON });
    }

    return (<div className="disp">
        <span className="disp__idDispositivo">{props.dispositivo.id_dispositivo} </span>
        <span className="disp__descripcion">{props.dispositivo.descripcion} </span>

        <label>
            <Switch onChange={(e) => {
                onSubmitNewState();
                changeStatus(switchState);
                setswitchState(!switchState);                
            }} checked={switchState} value={switchState}
                uncheckedIcon={
                    <div className="switch-uncheckedIcon"   >
                        <span >Off</span>
                    </div>
                }
                checkedIcon={
                    <div className="switch-checkedIcon">
                        <span>On</span>
                    </div>
                }
                className="react-switch"
                id="icon-switch"
                onColor="#86d3ff" />

        </label>
    </div>
    );
}

export default ItemRow;