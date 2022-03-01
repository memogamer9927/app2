import { Container, Row, Col } from 'react-bootstrap';
import NavBar from "./NavBar"
import ProfileBar from "./ProfileBar"

const HeaderContent = () => {
    return (
        <Container fluid id='menu'>
            <Row>
                <Col sm>
                    <div >
                        Terminal de reclutamiento
                    </div>
                </Col>
                <Col sm>
                    <NavBar/>
                </Col>
                <Col sm>
                    <ProfileBar/>
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderContent;

//This component wraps the header of the app (navbar & profile access)
