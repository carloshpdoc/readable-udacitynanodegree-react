import React, { Component } from 'react'
import { Panel, Grid, Row, Col, Badge } from 'react-bootstrap'
import * as API from '../utils/api'
import moment from 'moment'

class Cards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    API.getAllpost().then((data) => {
      console.log('data: ', data)
      this.setState({posts: data})
    })
  }

  render () {
    const { posts } = this.state

    return (
      <div>
        <Grid>
          { posts && posts.map((p, key) => (
            <Row key={key} className='show-grid'>
              <Col xs={7} md={6} xsOffset={3}>
                <Panel bsStyle='primary' id={`collapsible-panel-example-${key}`} defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle>
                      {p.title}
                    </Panel.Title>
                    Author: {p.author}
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
