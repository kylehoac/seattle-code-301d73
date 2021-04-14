import { Component } from 'react'
import  Container from 'react-bootstrap/Container'
import Header from './components/header'
import Parent from './components/parent'
class App extends Component {

  render() {
    return (
      <Container fluid>
        <Header 
          title = "Kazaan's Greatest"
        />
        <Parent />
      </Container>
    )
  }
}


export default App;