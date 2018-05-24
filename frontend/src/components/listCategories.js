import React, { Component } from 'react'
import { Tabs, Tab, Button, Grid, Col, Row } from 'react-bootstrap'
import * as API from '../utils/api'
import Cards from '../components/cards'
import PostCard from '../components/postCard'
import FormModal from '../components/formModal'

class ListCategories extends Component {
  constructor (props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)

    this.handleShow = this.handleShow.bind(this)
    this.state = {
      categories: [],
      postCategories: [],
      show: false
    }
  }

  handleClose () {
    this.setState({ show: false })
  }

  handleShow () {
    this.setState({ show: true })
  }
  componentDidMount () {
    API.getAllcategories().then((data) => {
      this.setState({categories: data})
    })
  }

  render () {
    const { categories } = this.state
    return (
      <div>
        <div>
          <Grid>
            <Row className='show-grid'>
              <Col xs={3} md={2} xsOffset={1}>
                <Button bsStyle='primary' onClick={this.handleShow}>Criar Post</Button>
              </Col>
            </Row>
          </Grid>
        </div>
        <div style={{ width: '50.66%', marginLeft: '28%' }} >
          <Tabs defaultActiveKey={0} id='uncontrolled-tab-example'>
            <Tab eventKey={0} key={0} title='All'>
              <Cards />
            </Tab>
            { categories && categories.map((c, key) => (
              <Tab eventKey={key + 1} key={key + 1} title={c.name}>
                <Cards category={c.path} />
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    )
  }
}

export default ListCategories
