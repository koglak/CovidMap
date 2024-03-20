import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar bg="white" expand="lg" className="shadow-sm ">
            <Container fluid>
                <Navbar.Brand href="/">Covid Map</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navigation;