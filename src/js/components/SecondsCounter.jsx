import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const SecondsCounter = ({ digitoUno, digitoDos, digitoTres, digitoCuatro, digitoCinco, digitoSeis }) => {

    return (
        <>
            <div className="Contador">

                <div className="reloj">
                <i className="fas fa-clock"></i> </div>
        

                <div className="digitoUno">
                    {digitoUno % 10}
                </div>
                <div className="digitoDos">
                    {digitoDos % 10}
                </div>
                <div className="digitoTres">
                    {digitoTres % 10}
                </div>
                <div className="digitoCuatro">
                    {digitoCuatro % 10}
                </div>
                <div className="digitoCinco">
                    {digitoCinco % 10}
                </div>
                <div className="digitoSeis">
                    {digitoSeis}
                </div>
            </div>

        </>
    );
};