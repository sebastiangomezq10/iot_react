import React, { useState } from 'react';
import './dispositivosSearch.style.css';

const DispositivosSearch = (props) => {
    const [showInStock, setShowInStock] = useState(false);
    const { onShowDispOn } = props;

    return (
        <div className="dispositivos-search">
            <form >            
                <div>                
                    <input type="checkbox" id="check-show-on" checked={showInStock} onChange={(e) => {
                        setShowInStock(e.target.checked);
                        onShowDispOn(e.target.checked);
                    }} />
                    <label htmlFor="check-show-on">ver dispositivos encendidos</label>
                </div>
            </form>
        </div>
    );
};
export default DispositivosSearch;