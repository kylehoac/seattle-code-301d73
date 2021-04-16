import { Component } from 'react';
import items from '../data.json'
import { CardColumns, Card, Form} from 'react-bootstrap';
import PopModal from './modal.js';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            hornsArr: [],
        }
    }

    filterHorns = (val) => {
        console.log(val);
        if (val === isNaN){
            this.setState({ hornsArr: [] });
        } else {
            const newArr = items.filter(horns => horns.horns === val);
            this.setState({ hornsArr: newArr });
        }
    }
    render() {
        if (this.state.hornsArr.length > 0) {
            return (
                <>
                <HornForm filterfunc={this.filterHorns}/>
                <CardColumns>
    
                    {this.state.hornsArr.map(item => (
                        <LikedHornedBeast
                            title={item.title}
                            description={item.description}
                            imgUrl={item.image_url}
                            horns={item.horns}
                        />
                    ))}
                </CardColumns>
                </>
            );
        } else {
            return (
                <>
                <HornForm filterfunc={this.filterHorns}/>
                <CardColumns>
    
                    {items.map(item => (
                        <LikedHornedBeast
                            title={item.title}
                            description={item.description}
                            imgUrl={item.image_url}
                            horns={item.horns}
                        />
                    ))}
                </CardColumns>
                </>
            )

        }
    }
}

class LikedHornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            showModal: false,
        }
    }

    addLikes = () => {
        this.setState({ likes: this.state.likes + 1, showModal: true })
    }

    closeModalHandler = () => {
        this.setState({
            showModal: false,
        });
    }

    render() {
        return (
            <>
            <PopModal
                showModal={this.state.showModal}
                closeModalHandler={this.closeModalHandler} 
                title= {this.props.title} 
                description={this.props.description} 
                imgUrl={this.props.imgUrl}>
            </PopModal>
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
            </>
        );
    }
}
export default Main;

class HornForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
    }
    handleSubmit = (event) => {
        this.props.filterfunc(parseInt(event.target.value));
    }
    render() {
      return (
        <>
        <Form>
            <Form.Group>
              <Form.Control as="select" size="lg" onChange={this.handleSubmit}>
                <option value =''>Select Horns</option>
                <option value ='1'>1</option>
                <option value ='2'>2</option>
                <option value ='3'>3</option>
                <option value ='100'>WOW!</option>
              </Form.Control>
            </Form.Group>
        </Form>
        </>
      )
    }
  }