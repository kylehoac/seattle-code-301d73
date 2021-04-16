import { Container, Navbar } from 'react-bootstrap'
import { Component } from 'react';


export default class Header extends Component {
    render() {
      return (
        <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
        </Navbar>
      </Container>
      )
    }
  }
