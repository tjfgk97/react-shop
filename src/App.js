import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import woman from './images/woman.webp';
import next from './images/thxnext.jpg';
import rem from './images/rem.webp';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">MUSINSA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <div>
        <Container>
          <Row>
            <Col sm>
              <img src={woman} width="80%" />
              <h6>아리아나 그란데</h6>
              <p>갓 이즈 어 우먼 EDP 50ML</p>
            </Col>
            <Col sm>
              <img src={next} width="127%" />
              <h6>아리아나 그란데</h6>
              <p>땡큐 넥스트 2.0 오 드 퍼퓸 30ML</p>
            </Col>
            <Col sm>
              <img src={rem} width="127%" />
              <h6>아리아나 그란데</h6>
              <p>알이엠 오 드 퍼퓸 50ML</p>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  );
}

export default App;
