import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import woman from './images/woman.webp';
import next from './images/thxnext.jpg';
import rem from './images/rem.webp';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [perfume] = useState(data)



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
              <h6>{perfume[0].title}</h6>
              <p>{perfume[0].price}</p>
            </Col>
            <Col sm>
              <img src={next} width="127%" />
              <h6>{perfume[1].title}</h6>
              <p>{perfume[1].price}</p>
            </Col>
            <Col sm>
              <img src={rem} width="127%" />
              <h6>{perfume[2].title}</h6>
              <p>{perfume[2].price}</p>
            </Col>
          </Row>
        </Container>



      </div>
    </div>
  );
}

export default App;
