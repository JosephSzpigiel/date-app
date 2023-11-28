import {NavLink} from "react-router-dom"
import { Menu, Segment} from 'semantic-ui-react';


function Navbar (){
    return (
        <Segment>
          <Menu secondary>
            <Menu.Item position="right">
              <NavLink to="/" className="Nav-Link">
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item position="right">
              <NavLink to="/activities" className="Nav-Link">
                Activities
              </NavLink>
            </Menu.Item>
            <Menu.Item position="right">
              <NavLink to="/activities/form" className="Nav-Link">
                New Activity
              </NavLink>
            </Menu.Item>
            <Menu.Item position="right">
              <NavLink to="/activities/random" className="Nav-Link">
                Random
              </NavLink>
            </Menu.Item>
          </Menu>
        </Segment>
    )
}

export default Navbar;