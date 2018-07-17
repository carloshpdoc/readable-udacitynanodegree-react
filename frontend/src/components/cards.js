import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { Panel, Grid, Row, Col, Badge, 
  FormGroup, ControlLabel, FormControl,
  ButtonToolbar, ButtonGroup, Glyphicon, Button} from 'react-bootstrap'
import * as API from '../utils/api'
import moment from 'moment'
import sortBy from 'sort-by'

class Cards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      post: {},
      sortOrder: '-voteScore',
    }
  }

  handlerOrder = (e) => { 
    this.state.posts.sort(sortBy(`-${e.target.value}`)) 
    this.setState({ sortOrder: `-${e.target.value}` });
   }

  componentDidMount () {
    if (this.props.category) {
      API.getAllcategoriesPost(this.props.category).then((data) => {
        this.setState({posts: data})
      })
    } else {
      API.getAllpost().then((data) => {
        this.setState({posts: data})
      })
    }
  }

  render () {
    const { posts } = this.state
    // this.state.posts.sort(sortBy('-voteScore'))
    console.log('posts: ', posts)

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={2} md={2}>
            <FormGroup controlId="Select">
              <ControlLabel>Select a Category</ControlLabel>
              <FormControl componentClass="select" placeholder="select by Order" onChange={this.handlerOrder}>
                <option value="voteScore">voteScore</option>
                <option value="timestamp">Date</option>
              </FormControl>
            </FormGroup>
            </Col>
          </Row>
          { posts && posts.map((p, key) => (
           // !p.deleted continue;
            <Row key={key} className='show-grid'>
              <Col xs={7} md={6}>
                <Panel bsStyle='primary' id={`collapsible-panel-example-${key}`} defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title>
                    <Link to={`/post/${p.id}`}>
                      {p.title}
                    </Link>
                    </Panel.Title>
                    By: {p.author}
                    <div style={{float:'right', marginLeft: '0.5%'}}>
                      <Button bsSize='xsmall' style={{marginRight: '0.5em'}}>
                        <Glyphicon glyph='chevron-up' />
                      </Button>
                        Vote <Badge>{p.voteScore}</Badge>
                      <Button bsSize='xsmall' style={{marginLeft: '0.5em'}}>
                        <Glyphicon glyph='chevron-down' />
                      </Button>
                    </div>
                  </Panel.Heading>
                  <Panel.Collapse>
                    <Panel.Body>
                      {p.body}
                    </Panel.Body>
                    <Panel.Footer>
                     Comment <Badge>{p.commentCount}</Badge> |
                     Date: {moment(new Date(p.timestamp)).format('MMMM Do YYYY')}
                     <div style={{float:'right', marginLeft: '0.5%'}}>
                      <Button bsSize='xsmall' style={{marginRight: '0.5em'}}>
                          <Glyphicon glyph='edit' />
                        </Button>
                        <Button bsSize='xsmall' style={{marginLeft: '0.5em'}}>
                          <Glyphicon glyph='trash' />
                        </Button>
                      </div>
                    </Panel.Footer>
                  </Panel.Collapse>
                </Panel>
              </Col>
            </Row>
          ))}
        </Grid>
      </div>
    )
  }
}

export default Cards
