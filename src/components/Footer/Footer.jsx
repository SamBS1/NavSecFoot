import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer