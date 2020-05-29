import React from 'react';
import './dispositivosView.style.css';
import DispositivosSearch from '../dispositivos-search/dispositivosSearch.component';
import ItemsTableView from '../items-table-view/itemsTableView.component';
import { useEffect } from 'react';
import { useState } from 'react';

/*const dispositivos = [
    { idDispositivo: "1", 
    idUser: "1", 
    fechaRegistro: "fecha", 
    descripcion: "hab", 
    estado: "encendido" },
    { idDispositivo: "2", 
    idUser: "1", 
    fechaRegistro: "fecha", 
    descripcion: "sala", 
    estado: "encendido" }
];*/

const DispositivosView = () => {
    const [dispositivos, setDispositivos] = useState([]);
    const [refresh, setRefreshCount] = useState(false);
    //const [showOn, setshowOn] = useState(false);
    const [changeSerch, setChangeSerch] = useState(0);
    const [changeStatus, setChangeStatus] = useState(false);
    const getDisps = async () => {
        const response = await fetch('http://localhost:3001/api/iot/dispositivos');
        const responseJSON = await response.json();
        console.log(responseJSON);
        setDispositivos(responseJSON.data);
    }
    const getDispsOn = async () => {
        const response = await fetch('http://localhost:3001/api/iot/dispositivos/on');
        const responseJSON = await response.json();
        console.log(responseJSON);
        setDispositivos(responseJSON.data);
    }
    const getDispsOff = async () => {
        const response = await fetch('http://localhost:3001/api/iot/dispositivos/off');
        const responseJSON = await response.json();
        console.log(responseJSON);
        setDispositivos(responseJSON.data);
    }
    useEffect(() => {
        if (changeSerch === 1) {
            getDispsOn();
        } else if (changeSerch === 2) { 
            getDispsOff();
        } 
        else {
            getDisps();
        }
    }, [refresh, changeSerch, changeStatus]);
    return (
        <div className="dispositivos bordered-element">
            <DispositivosSearch changeSerch={(changeSerchid) => {
                setChangeSerch(changeSerchid)
            }}></DispositivosSearch>
            <hr />
            <ItemsTableView changeStatus={() => {
                setChangeStatus(!changeStatus);
            }} dispositivos={dispositivos}></ItemsTableView>
            <form>
                <br />
                <input className="boton" type="button" value="refresh " onClick={() => {
                    setRefreshCount(!refresh);
                }} />

            </form>
        </div>

    );
};
export default DispositivosView;