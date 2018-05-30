import React, { Component } from 'react'
import { Panel, Grid, Row, Col, Badge, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
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
    const value = `-${e.target.value}`
    if(e.target.value === 'timestamp'){
      this.state.posts.sort(sortBy(e.target.value)) 
      this.setState({ sortOrder: e.target.value });
    } else {
      this.state.posts.sort(sortBy(value)) 
      this.setState({ sortOrder: value });
    }
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
            <Row key={key} className='show-grid'>
              <Col xs={7} md={6}>
                <Panel bsStyle='primary' id={`collapsible-panel-example-${key}`} defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle>
                      {p.title}
                    </Panel.Title>
                    By: {p.author}
                  </Panel.Heading>
                  <Panel.Collapse>
                    <Panel.Body>
                      {p.body}
                    </Panel.Body>
                    <Panel.Footer>
                     Comment <Badge>{p.commentCount}</Badge> |
                     Vote <Badge>{p.voteScore}</Badge> |
                     Date: {moment(new Date(p.timestamp)).format('L')}
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
