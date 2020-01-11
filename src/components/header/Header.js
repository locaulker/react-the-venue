import React, { Component } from 'react'

import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import SideDrawer from './SideDrawer'
// import { $mainBlack3 } from '../../resources/styles.scss'

class Header extends Component {

  state = {
    drawerOpen: false,
    showHeader: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler)
  }

  scrollHandler = () => {
    if (window.scrollY > 0) {
      this.setState({
        showHeader: true
      })
    } else {
      this.setState({
        showHeader: false
      })
    }
  }

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value
    })
  }

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.showHeader ? '#2f2f2f' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0px'
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>

    )
  }
}

export default Header