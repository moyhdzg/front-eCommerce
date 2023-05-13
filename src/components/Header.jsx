import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">UCAMP Project 5 eCommerce</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Productos / Home</Nav.Link>
                    <Nav.Link href="/register">Registrate! / Sign Up</Nav.Link>
                    <Nav.Link href="/login">Accesa! / Sign In</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default Header;