import React from 'react';
import './dispositivosView.style.css';
import DispositivosSearch from '../dispositivos-search/dispositivosSearch.component';
import ItemsTableView from '../items-table-view/itemsTableView.component';


const dispositivos = [
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
];

const DispositivosView = () => {
    return (
        <div className="dispositivos bordered-element">
            <DispositivosSearch></DispositivosSearch>
            <hr/>
            <ItemsTableView dispositivos={dispositivos}></ItemsTableView>
        </div>
        
    );
};
export default DispositivosView;