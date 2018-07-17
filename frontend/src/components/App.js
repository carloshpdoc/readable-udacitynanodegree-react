import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavHeader from '../components/header'
import ListCategories from '../components/listCategories'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavHeader />
        <Switch>
          <Route exact path='/' component={ListCategories} />
          <Route exact path='/:category' component={ListCategories} />
          {/* <Route exact path='/post/new' component={FormView} />
          <Route exact path='/post/:id' component={PostDetailView} />
          <Route exact path='/post/edit/:id' component={FormView} />
          <Route component={NotFound} /> */}
        </Switch>
      </div>
    )
  }
}

export default App
