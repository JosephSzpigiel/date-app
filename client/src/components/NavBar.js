import {NavLink} from "react-router-dom"
import { Header, Menu, Segment,Button} from 'semantic-ui-react';
import { useState } from "react";
import '../index.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Navbar (){


    return (
        <Segment>
          <Header as='h1' className="title1" > DateCrafters - Your Personal Dating Concierge! <FontAwesomeIcon icon={faHeart} style={{color: "#c2c4ee",}} /> </Header>
          <Menu secondary widths={4}>
            <Menu.Item
              name = 'home'
              as ={NavLink}
              to="/"
            >
                Home
            </Menu.Item>
            <Menu.Item
              name = 'add  act'
              as ={NavLink}
              to="/addactivity"
            >
                Add Activity
            </Menu.Item>
            <Menu.Item
              name = 'create date' 
              as ={NavLink}
              end to="/dates/create"        
            >
                Create a Date
            </Menu.Item>
            <Menu.Item
              name = 'all dates' 
              as ={NavLink}
              end to="/dates"  
            >
                All Dates
            </Menu.Item>
          </Menu>
        </Segment>
    )
}

export default Navbar;