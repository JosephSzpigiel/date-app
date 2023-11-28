import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "semantic-ui-react";
import Navbar from "./NavBar";
import {Outlet} from 'react-router-dom';

function App() {
  return <Header as='h3' textAlign='center'>
  <Navbar/>
  <Outlet/>
</Header>;
}

export default App;
