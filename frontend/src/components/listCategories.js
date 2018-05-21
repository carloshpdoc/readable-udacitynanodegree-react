import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import * as API from '../utils/api'
import Cards from '../components/cards'
import PostCard from '../components/postCard'

class ListCategories extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [],
      postCategories: []
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
    )
  }
}

export default ListCategories
