import React from 'react';
import '../App.css' ;

var nombrePagina=['Candidatos en proceso','Candidatos Contratados','Vacantes']
const PageName = () => {
    return (
        <h2>
            {nombrePagina[0]}
        </h2>
    );
}

export default PageName;