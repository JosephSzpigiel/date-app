import {NavLink} from "react-router-dom"
import { Header, Menu, Segment} from 'semantic-ui-react';
import { useState } from "react";




function Navbar (){


    return (
        <Segment>
          <Header as='h1'>DateCrafters</Header>
          <Menu secondary widths={4}>
            <Menu.Item
              name = 'home'
            >
              <NavLink to="/" className="Nav-Link">
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item
              name = 'add  act'
            >
              <NavLink to="/addactivity" className="Nav-Link">
                Add Activity
              </NavLink>
            </Menu.Item>
            <Menu.Item
              name = 'create date'          
            >
              <NavLink to="/dates/create" className="Nav-Link">
                Create a Date
              </NavLink>
            </Menu.Item>
            <Menu.Item
              name = 'all dates'           
            >
              <NavLink to="/dates" className="Nav-Link">
                All Dates
              </NavLink>
            </Menu.Item>
          </Menu>
        </Segment>
    )
}

export default Navbar;