import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "semantic-ui-react";
import Navbar from "./NavBar";
import {Outlet} from 'react-router-dom';

function App() {
  const [activities, setActivities] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [filterValue, setFilterValue] = useState();
  const [datePlans, setDatePlans] = useState([])

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
  
  useEffect(() => {
    fetch('http://localhost:5555/dateplans')
        .then((r) => r.json())
        .then((dateObj) => {
            setDatePlans(dateObj[0]);
        });
  }, []);
  

  function onNewActivity(newActivity){
    setActivities((currentActivities)=>[...currentActivities,newActivity])
  }

  const context = {
    datePlans,
    activities,
    handleFilterChange,
    filteredActivities,
    onNewActivity,
    setActivities,
    searchValue,
    setSearchValue,
    datePlans
  }

  return <Header as='h3' textAlign='center'>
  <Navbar/>
  <Outlet context={context}/>
</Header>;
}

export default App;
