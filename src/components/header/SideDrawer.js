import React from 'react'
import { scroller } from 'react-scroll'

import { Drawer } from '@material-ui/core'
import { List } from '@material-ui/core'
import { ListItem } from '@material-ui/core'

const SideDrawer = (props) => {

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    })
    props.onClose(false)
  }

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement('hero')}>
          Events Starts In
        </ListItem>

        <ListItem button onClick={() => scrollToElement('venuinfo')}>
          Venue Info
        </ListItem>

        <ListItem button onClick={() => scrollToElement('highlights')}>
          Highlights
        </ListItem>

        <ListItem button onClick={() => scrollToElement('pricing')}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => scrollToElement('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer