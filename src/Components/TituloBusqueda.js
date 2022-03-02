import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import PageName from './PageName'


const TituloBusqueda = () => {
    return (
        <Container fluid >
            <Row>
                <Col md={3}>
                </Col>
                <Col md={3}>
                    <PageName />
                </Col>
                <Col md={3}>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                    />
                </Col>

            </Row>

        </Container>
    );
}

export default TituloBusqueda;
