import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar bg="white" expand="lg" className="shadow-sm ">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={require("../images/branding.png")} width="35" height="35" style={{ cursor: "pointer", margin:"5px" }} alt="branding" />
                    <label style={{ cursor: "pointer", fontWeight: "650" }}>Covid Map</label>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navigation;