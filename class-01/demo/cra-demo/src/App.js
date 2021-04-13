import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, CardColumns, Card, Navbar } from 'react-bootstrap'
import { Component } from 'react'
import HornedBeastData from './data.json';
// import { render } from '@testing-library/react';
import Main from './components/main.js';
import Footer from './components/footer.js';
import Header from './components/header.js';

function App() {

  return (
      <Container fluid>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
        </Navbar>

        <CardColumns>

          {HornedBeastData.map(item => (
            <LikedHornedBeast
              title={item.title}
              description={item.description}
              imgUrl={item.image_url}
            />
          ))}

        </CardColumns>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#bio">Horned Beasts again??</Navbar.Brand>
        </Navbar>
        <Header />
        <Main />
        <Footer />
      </Container>
  );
}

class LikedHornedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }
  }

  addLikes = () => {
    this.setState({ likes: this.state.likes + 1 })
  }

render() {
  return (
    <Card
      bg="dark"
      text="light"
      onClick={this.addLikes}
    >
      <Card.Img src={this.props.imgUrl} variant="top" />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        ♥️ = {this.state.likes}

        </Card.Text>
        <Card.Text>
          {this.props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
}
export default App;
