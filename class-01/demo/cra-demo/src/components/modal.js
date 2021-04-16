import { Component } from 'react'
import { Modal } from 'react-bootstrap';

class PopModal extends Component {

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModalHandler}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img class = "imagesize" src={this.props.imgUrl} />
                    </Modal.Body>

                    <Modal.Footer>
                        {/* <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button> */}
                        {this.props.description}
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        )
    }
}
export default PopModal;
