import React from 'react';
import './addDisp.style.css';
//import DispositivosSearch from '../dispositivos-search/dispositivosSearch.component';
//import ItemsTableView from '../items-table-view/itemsTableView.component';
//import { useEffect } from 'react';
import { useState } from 'react';


const AddDispView = () => {

    const [id, setId] = useState('');
    const [desc, setdesc] = useState('');
    const [status, setStatus] = useState('');

    const onSubmitDisp = (e) => {
        e.preventDefault();
        const disp = {
            id,
            desc
        };
        saveDisp(disp);
    }

    const saveDisp = async (disp) => {
        const dispStr = JSON.stringify(disp);
        console.log({ dispStr });
        const response = await fetch('http://localhost:3001/api/iot/addDisp', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: dispStr
        });
        const responseJSON = await response.json();
        setStatus(responseJSON);
        //console.log({responseJSON});
    }

    return (
        <div>
            <form className="add-disp" onSubmit={onSubmitDisp}>
                <div className="row">
                    <label htmlFor="id" className="add-disp_label">Id: </label>
                    <input id="id" type="number" value={id} onChange={(e) => { setId(e.target.value); }} required />
                </div>
                <div className="row">
                    <label htmlFor="desc" className="add-disp_label">Description: </label>
                    <input id="desc" type="text" value={desc} onChange={(e) => { setdesc(e.target.value); }} required />
                </div>
                <div className="row">
                    <button className="boton">Send</button>
                </div>
            </form>
            {
                status
                    ? <div>{status.message}</div>
                    : <></>
            }
        </div>
    );
};
export default AddDispView;