import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { Tabs, Tab, Button, Grid, Col, Row, 
  ListGroup, ListGroupItem, Modal, FormGroup,
  ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import * as API from '../utils/api'
import Cards from '../components/cards'
import PostCard from '../components/postCard'
import uuidv4 from 'uuid/v4'

class ListCategories extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [],
      postCategories: [],
      show: false,
      name: '',
      title: '',
      post: '',
      select: '',
      value: '',
      redirect: false,
    }
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  handleChangePost = (e) => {
    this.setState({ post: e.target.value });
  }

  handleSelect = (e) => {
    this.setState({ select: e.target.value });
  }

  handleShow = () => {
    this.setState({ show: true })
  }
  handleClose =() => {
    this.setState({ show: false });
  }

  componentDidMount () {
    API.getAllcategories().then((data) => {
      this.setState({categories: data})
    })
  }

  handleSubmit = (event) => {
    const body = {
      id: uuidv4(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.post,
      author: this.state.name,
      category: this.state.select,
    }

     API.posts(body).then((data) => {
       console.log('data', data)
      setTimeout(function(){ window.location.reload()}, 1000)
     })
    event.preventDefault();

  }

  render () {
    const { categories, show } = this.state
    // if (this.state.redirect) {
    //   return <Redirect push to="/" />;
    // }

    return (
      <div>
        <Grid>
          <Row className='show-grid'>
            <Col xs={3} md={2}>
              <Button bsStyle='primary' onClick={this.handleShow}>New Post</Button>
            </Col>
          </Row>
          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="name">
              <ControlLabel>Your Name:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.name}
                placeholder="Enter your name"
                onChange={this.handleChangeName}
              />
            </FormGroup>
            <FormGroup controlId="titlePost">
              <ControlLabel>Your Post Title:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="Enter your post title"
                onChange={this.handleChangeTitle}
              />
            </FormGroup>
            <FormGroup controlId="postBody">
              <ControlLabel>Your Post:</ControlLabel>
              <FormControl
                componentClass="textarea"
                value={this.state.post}
                placeholder="Enter your post"
                onChange={this.handleChangePost}
              />
            </FormGroup>
            <FormGroup controlId="Select">
              <ControlLabel>Select a Category</ControlLabel>
              <FormControl componentClass="select" placeholder="select a category" onChange={this.handleSelect}>
                <option value="select">select</option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </FormControl>
            </FormGroup>
            <Button type="submit" bsStyle="primary">Submit</Button>
          </form>
          </Modal.Body>
        </Modal>
          <Row className='show-grid' style={{marginTop: '2%'}}>
            <Col xs={3} md={2}>
              <ListGroup>
                <Link to='/'>
                  <ListGroupItem>All</ListGroupItem>
                </Link>
                <Link to='/react'>
                  <ListGroupItem>React</ListGroupItem>
                </Link>
                <Link to='/redux' >
                  <ListGroupItem>Redux</ListGroupItem>
                </Link>
                <Link to='/udacity'>
                  <ListGroupItem>Udacity</ListGroupItem>
                </Link>
              </ListGroup>
            </Col>
            <Col xs={7} md={6}>
              <Route exact path="/" render={() => (
                <Cards />
              )}/>
              <Route path="/react" render={ ({ history }) => (
                <Cards category='react' />
              )}/>
              <Route path="/redux" render={ ({ history }) => (
                <Cards category='redux' />
              )}/>
              <Route path="/udacity" render={ ({ history }) => (
                <Cards category='udacity' />
              )}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default ListCategories
