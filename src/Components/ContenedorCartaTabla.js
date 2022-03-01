import React from 'react';
import '../App.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CartaInfo from './CartaInfo';
import ContenedorTabla from './ContenedorTabla';



const ContenedorCartaTabla = () => {
    return (
        <Container id='contenedor-carta-tabla' >
            <Row>
                <Col md={3}>
                    <CartaInfo />
                </Col>
                <Col md={9}>
                    <Card id="carta-tabla">
                        <Card.Body>
                            <ContenedorTabla />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ContenedorCartaTabla;