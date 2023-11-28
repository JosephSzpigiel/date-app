import {NavLink} from "react-router-dom"
import { Menu, Segment} from 'semantic-ui-react';


function Navbar (){
    return (
        <Segment>
          <Menu secondary widths={4}>
            <Menu.Item>
              <NavLink to="/" className="Nav-Link">
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/addactivity" className="Nav-Link">
                Add Activity
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/dates/create" className="Nav-Link">
                Create a Date
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/dates" className="Nav-Link">
                All Dates
              </NavLink>
            </Menu.Item>
          </Menu>
        </Segment>
    )
}

export default Navbar;