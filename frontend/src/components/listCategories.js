import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import * as API from '../utils/api'

class ListCategories extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount () {
    API.getAllcategories().then((data) => {
      this.setState({categories: data})
    })
  }

  render () {
    const { categories } = this.state
    return (
      <div style={{ width: '25.66%', marginLeft: '38%' }} >
        <Tabs defaultActiveKey={0} id='uncontrolled-tab-example'>
          <Tab eventKey={0} key={0} title='All'>
            TODOS
          </Tab>
          { categories && categories.map((c, key) => (
            <Tab eventKey={key + 1} key={key + 1} title={c.name}>
              {c.name}
            </Tab>
          ))}
        </Tabs>
      </div>
    )
  }
}

export default ListCategories
