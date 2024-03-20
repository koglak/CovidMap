import { Container, Row } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <Container fluid className="border">
                <Row className="text-center">
                        <span className="mb-3 mb-md-0 text-muted">© 2024 CovidMap Company, Inc</span>

                </Row>

                <Row className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <a href="https://www.instagram.com/ruinsrover/"  ><FaInstagram className="m-1" style={{ fontSize: '2em', color: 'black' }} /></a>
                        <a href="https://github.com/koglak/"><FaGithub style={{ fontSize: '2em', color: 'black' }} className="m-1" /></a>
                        <a href="https://www.linkedin.com/in/kardelen-oglakci/" ><FaLinkedin style={{ fontSize: '2em', color: 'black' }} className="m-1" /></a>
                    </div>
                </Row>
            </Container>
        </footer>

    );
}

export default Footer;