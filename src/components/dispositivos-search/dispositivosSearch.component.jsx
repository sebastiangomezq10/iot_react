import React from 'react';
import './dispositivosSearch.style.css';

const DispositivosSearch = () => {
    return (
        <div className="dispositivos-search">
            <form >
                <div>
                    <input type="text" placeholder="Search... " />
                </div>
                <div>
                    <input type="checkbox"/>
                    ver dispositivos encendidos 
                </div>
            </form>
        </div>
    );
};
export default DispositivosSearch;