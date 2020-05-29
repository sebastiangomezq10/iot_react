import React from 'react';
//import logo from './logo.png';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import DispositivosPage from "./pages/dispositivos/dispositivos.page";
import AddDispPage from "./pages/add-disps/add-disp.page";
function App() {


  //const dispositivos=[{id:"1",name:"cat1 "},{id:"2",name:"cat2"}]
  return (
    <Router>
      <div className="dispositivos-page ">
        <header className="dipositivos-header bordered-element">
          <nav className="menu">
            <span className="item-menu" ><Link className="item-menu__link" to="/dispositivos">Dispositivos</Link></span>
            <span className="item-menu"><Link className="item-menu__link" to="/add-dipositivo">Add dispositivos</Link></span>
          </nav>
        </header>
        <div className="view-section">
          <Route path="/dispositivos">
            <DispositivosPage />
          </Route>
          <Route path="/add-dipositivo">
            <AddDispPage />
          </Route>
        </div>
        <Redirect from="/" to="/dispositivos" />
        <footer className="dispositivos-footer bordered-element">
          Footer
      </footer>
      </div>
    </Router>
  );
}

export default App;
