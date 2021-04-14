import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap'
import { Component } from 'react'

import Main from './components/main.js';
import Footer from './components/footer.js';
import Header from './components/header.js';

class App extends Component {
  render() {
  return (
      <Container fluid>
        <Header />
        <Main />
        <Footer />
      </Container>
  );
}
}

export default App;
// Code inspired by demo
