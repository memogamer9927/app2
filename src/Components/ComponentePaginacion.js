import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import PaginacionNumeros from './PaginacionNumeros';
import NumeroFilasTabla from './NumeroFilasTabla';



const ComponentePaginacion= () =>{
  return (
    <Container id='componente-paginacion' fluid>
            <Row>
                <Col>
                    <PaginacionNumeros />
                </Col>
                <Col>
                    <NumeroFilasTabla />
                </Col>
            </Row>
        </Container>
  )
}
export default ComponentePaginacion;