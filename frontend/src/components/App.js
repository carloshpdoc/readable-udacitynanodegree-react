import React, { Component } from 'react'
import '../App.css'
import NavHeader from '../components/header'
import Cards from '../components/cards'
import ListCategories from '../components/listCategories'
import { Grid, Row } from 'react-bootstrap'

const styles = {
  root: {
    flexGrow: 1
  }
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavHeader />
        <Grid>
          <Row className='show-grid'>
            <ListCategories />
            <Cards />
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
