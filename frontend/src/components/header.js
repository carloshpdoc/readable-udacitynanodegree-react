import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

class NavHeader extends Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Text>
              Project Readable - Nanodegree React Udacity
            </Navbar.Text>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}

export default NavHeader
