import React from 'react';
import '../App.css';
import HeaderContent from './HeaderContent';
import { Table, Button, Col } from 'react-bootstrap';



const ContenedorTabla = () => {
    return (
        <div className='carta tabla'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Vacante</th>
                        <th>Status</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>43975</td>
                        <td><a href="">Sandra Patricia</a></td>
                        <td>Almacen</td>
                        <td>Entrevista</td>
                        <td>19/01/22</td>
                    </tr>
                    <tr>
                        <td>43965</td>
                        <td><a href="">Aracely Villamil</a></td>
                        <td>Caja</td>
                        <td>CV</td>
                        <td>19/01/22</td>
                    </tr>
                    <tr>
                        <td>43975</td>
                        <td><a href="">Sandra Patricia</a></td>
                        <td>Almacen</td>
                        <td>Entrevista</td>
                        <td>19/01/22</td>
                    </tr>
                    <tr>
                        <td>43965</td>
                        <td><a href="">Aracely Villamil</a></td>
                        <td>Caja</td>
                        <td>CV</td>
                        <td>19/01/22</td>
                    </tr>
                    <tr>
                        <td>43975</td>
                        <td><a href="">Sandra Patricia</a></td>
                        <td>Almacen</td>
                        <td>Entrevista</td>
                        <td>19/01/22</td>
                    </tr>
                    <tr>
                        <td>43965</td>
                        <td><a href="">Aracely Villamil</a></td>
                        <td>Caja</td>
                        <td>CV</td>
                        <td>19/01/22</td>
                    </tr>
                    <tr>
                        <td>43975</td>
                        <td><a href="">Sandra Patricia</a></td>
                        <td>Almacen</td>
                        <td>Entrevista</td>
                        <td>19/01/22</td>
                    </tr>
                    <tr>
                        <td>43965</td>
                        <td><a href="">Aracely Villamil</a></td>
                        <td>Caja</td>
                        <td>CV</td>
                        <td>19/01/22</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ContenedorTabla;