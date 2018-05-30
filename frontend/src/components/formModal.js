import React, { Component } from 'react'
import { Tooltip, Popover, Button, Modal, OverlayTrigger } from 'react-bootstrap'
import * as API from '../utils/api'

class FormModal extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      showOn: false,
    }
  }

  handleClose = () => {
    this.setState({ showOn: false })
  }

  render () {
      console.log(this.state.show);
    const popover = (
      <Popover id='modal-popover' title='popover'>
        very popover. such engagement
      </Popover>
    )
    const tooltip = <Tooltip id='modal-tooltip'>wow.</Tooltip>

    return (
      <div>
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <h4>Popover in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={popover}>
                <a href='#popover'>popover</a>
              </OverlayTrigger>{' '}
              here
            </p>

            <h4>Tooltips in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={tooltip}>
                <a href='#tooltip'>tooltip</a>
              </OverlayTrigger>{' '}
              here
            </p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default FormModal
