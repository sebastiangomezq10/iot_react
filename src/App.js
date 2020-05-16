import React from 'react';
import logo from './logo.svg';
import './App.css';

import ItemTableName from './components/items-table-view/itemsTableView.component';

function App() {

  const dispositivos = [{ idDispositivo: "1", idUser: "1", fechaRegistro: "fecha", descripcion: "hab", estado: "encendido" }, {idDispositivo: "2", idUser: "1", fechaRegistro: "fecha", descripcion: "sala", estado: "encendido" }];
  //const dispositivos=[{id:"1",name:"cat1 "},{id:"2",name:"cat2"}]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ItemTableName disps={dispositivos} />
        </div>
      </header>
    </div>
  );
}

export default App;
