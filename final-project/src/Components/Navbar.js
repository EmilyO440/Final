import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">COACHES CORNER</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="#home">Home</Link>
            <Link href="#background">Coaches Background</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;

//https://react-bootstrap.netlify.app/docs/components/navbar/