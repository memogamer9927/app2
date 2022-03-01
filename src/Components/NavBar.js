import {Row, Col} from 'react-bootstrap';
import '../App.css';

const NavBar = () => {
    return (
        <Row id="contenedor-menu">
            <Col sm id='opcion-select'>
                Candidatos en Proceso
            </Col>
            <Col sm id ='opcion'>
                Candidatos Contratados
            </Col>
            <Col sm id ='opcion'>
               Vacantes
            </Col>
        </Row>
    );
}

export default NavBar;

//This means the pagenavigation (Canidatos en Proceso / contratados / Vacantes)
