import React from 'react';
import './dispositivos.style.css';
import DispositivosView from "../../components/disposiivos-view/dispositivosView.component";

const DispositivosPage = () => {
    return (
        <div className="dispositivos-page bordered-element">
            <header className="dipositivos-header bordered-element">Header</header>
            <section className="dispositivos-section ">
            <DispositivosView></DispositivosView>
            </section>
            <footer className="dispositivos-footer bordered-element">disp Footer</footer>
        </div>
    );

};
export default DispositivosPage;