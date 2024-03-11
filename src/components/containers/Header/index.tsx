import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand><Link className="navbar-brand" to="/">WEB розробка</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Лаб 5">
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/lab5table">Лаб 5 Таблиця</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;