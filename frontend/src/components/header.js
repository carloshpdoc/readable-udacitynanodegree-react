import React, { Component } from 'react'
import { Navbar, Nav, NavItem,
  MenuItem, NavDropdown} from 'react-bootstrap'

const styles = {
  root: {
    flexGrow: 1
  }
}

class NavHeader extends Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#home'>Project Readable - Nanodegree React Udacity</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}

export default NavHeader
