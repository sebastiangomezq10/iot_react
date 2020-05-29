import React from 'react';
import './dispositivosSearch.style.css';

const DispositivosSearch = (props) => {
    //const [showInStock, setShowInStock] = useState(0);
    //const { onShowDispOn } = props;
    const { changeSerch } = props;

    return (
        <div className="dispositivos-search">
            <form >
                <div > 
                    <span>Search: </span>
                    <select className="select" defaultValue="0" onChange={(e) => {
                        changeSerch(e.target.selectedIndex);
                    }} >
                        <option value="0" defaultValue >
                            Ver Todos
                        </option>
                        <option value="1" >
                            Ver Dispositivos On
                        </option>
                        <option value="2">
                            Ver Dispositivos Off
                        </option>
                    </select>
                    { /*<input type="checkbox" id="check-show-on" checked={showInStock} onChange={(e) => {
                        setShowInStock(e.target.checked);
                        onShowDispOn(e.target.checked);
                    }} />
                <label htmlFor="check-show-on">ver dispositivos encendidos</label>*/}
                </div>
            </form>
        </div>
    );
};
export default DispositivosSearch;