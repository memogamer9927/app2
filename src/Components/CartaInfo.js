import React from 'react';
import '../App.css';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';

const CartaInfo = () => {
    return (
        <div className='mon'>
            <Card id="carta">
                <Card.Body>
                    <Row>
                        <Col sm={5}>
                        </Col>
                        <Col sm={7}>
                            <Row>
                                <Col>
                                    <h5>Guillermo</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <h5>Martínez Alfaro</h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div>
                                    <a href="">memo@tdp.com</a>
                                </div>
                                <div >
                                    <div >+52 (834)-197-11-13</div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Container>

                        <Row>
                            <div>Edad: 22 años</div>
                            <div>Municipio: San nicolas de los Garza</div>
                            <div>Escolaridad: Secundaria</div>

                        </Row>
                        <div >
                            <Button variant="primary">Candidato viable</Button>

                        </div>
                        <Row>
                            <h4 >Auxiliar de Abarrotes</h4>
                            <div>
                                <p>Sucursal Las puentes</p>
                            </div>
                            <div>
                                <p>Sueldo: $7,500.00</p>
                            </div>
                        </Row>
                    </Container>
                    <div >
                        <Button variant="primary" id='btn-1'>
                            Activa</Button>
                        <Button variant="primary" id='btn-2'>
                            Inactiva</Button>
                    </div>

                    <Row>
                        <Col sm={2}>
                            <div >
                                <i>icono check</i>
                            </div>
                        </Col>
                        <Col sm={10}>Perfil</Col>
                        <Row>
                            <Col>
                                <div >
                                    Estrellas rate
                                </div>
                            </Col>

                        </Row>

                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CartaInfo;