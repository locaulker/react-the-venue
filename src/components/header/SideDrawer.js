import React from 'react'
import { Drawer } from '@material-ui/core'
import { List } from '@material-ui/core'
import { ListItem } from '@material-ui/core'

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log('Featured')}>
          Events Starts In
        </ListItem>

        <ListItem button onClick={() => console.log('Venue Info')}>
          Venue Info
        </ListItem>

        <ListItem button onClick={() => console.log('Featured')}>
          Events Starts In
        </ListItem>

        <ListItem button onClick={() => console.log('Highlights')}>
          Highlights
        </ListItem>

        <ListItem button onClick={() => console.log('Pricing')}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => console.log('Location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer