import React, { Component } from 'react'
import NavHeader from '../components/header'
import ListCategories from '../components/listCategories'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavHeader />
        <ListCategories />
      </div>
    )
  }
}

export default App
