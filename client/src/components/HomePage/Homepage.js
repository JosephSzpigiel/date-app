import React, { useState } from 'react';
import {Grid, Segment} from "semantic-ui-react";
import ActivitiesContainer from "../ActivitiesContainer";
import SearchFilter from "../SearchFilter";
import {useOutletContext} from 'react-router-dom';
import FilterButton from "../FilterButton";

function HomePage() {

  const [filterValue, setFilterValue] = useState();

  const page = 'home';

  const {
    activities,
    setActivities,
    searchValue,
    setSearchValue
  } = useOutletContext()
  
  const foundActivities = activities.filter((activity)=>
    activity.name.toLowerCase().includes(searchValue.toLowerCase()) || 
    activity.mood.toLowerCase().includes(searchValue.toLowerCase()) || 
    activity.price.toLowerCase().includes(searchValue.toLowerCase()))

  const handleFilterChange = (e, { value }) => {
  setFilterValue(value);
  };

  const filteredActivities = filterValue ? activities.filter(activity => activity.mood === filterValue) : activities;


  return (
    <Grid centered>
      <Grid.Column textAlign="center" width={15}>
        <div className="childtitle">
          <h1 className="sitetitle">Welcome!</h1>
          <SearchFilter searchValue={searchValue} setSearchValue={setSearchValue}/>
          <ActivitiesContainer activities = {foundActivities} setActivities = {setActivities} page = {page} />
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default HomePage;