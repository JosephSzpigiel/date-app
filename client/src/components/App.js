import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "semantic-ui-react";
import Navbar from "./NavBar";
import {Outlet} from 'react-router-dom';
import FooterSVG from "./FooterSVG";
import '../index.css';

function App() {
  const [activities, setActivities] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [filterValue, setFilterValue] = useState();

  const foundActivities = activities.filter((activity)=>
  activity.name.toLowerCase().includes(searchValue.toLowerCase()) || 
  activity.mood.toLowerCase().includes(searchValue.toLowerCase()) || 
  activity.price.toLowerCase().includes(searchValue.toLowerCase()))

  const handleFilterChange = (e, { value }) => {
  setFilterValue(value);
  };

  const filteredActivities = filterValue ? foundActivities.filter(activity => activity.mood === filterValue) : foundActivities;


  useEffect(() => {
    fetch('http://localhost:5555/activities')
        .then((r) => r.json())
        .then((activitiesObj) => {
            setActivities(activitiesObj[0]);
        });
  }, []);
  

  function onNewActivity(newActivity){
    setActivities((currentActivities)=>[...currentActivities,newActivity])
  }

  const context = {
    activities,
    handleFilterChange,
    filteredActivities,
    onNewActivity,
    setActivities,
    searchValue,
    setSearchValue  
  }

  return <Header as='h3' textAlign='center'>
  <Navbar/>
  <Outlet context={context}/>
  <FooterSVG/>
</Header>;
}

export default App;
