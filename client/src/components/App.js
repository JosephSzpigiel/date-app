import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "semantic-ui-react";
import Navbar from "./NavBar";
import {Outlet} from 'react-router-dom';

function App() {
  const [activities, setActivities] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(()=> {
      fetch('http://localhost:5555/activities')
      .then((r)=>r.json())
      .then((activitiesObj)=> {
          setActivities(activitiesObj[0])
      });
  }, []);

  const context = {
    activities,
    setActivities,
    searchValue,
    setSearchValue,
  }

  return <Header as='h3' textAlign='center'>
  <Navbar/>
  <Outlet context={context}/>
</Header>;
}

export default App;
