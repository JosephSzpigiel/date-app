import React, { useState } from 'react';
import {Grid, Segment} from "semantic-ui-react";
import ActivitiesContainer from "../ActivitiesContainer";
import SearchFilter from "../SearchFilter";
import {useOutletContext} from 'react-router-dom';
import FilterButton from "../FilterButton";

function HomePage() {

  const page = 'home';

  const {
    activities,
    setActivities,
    searchValue,
    setSearchValue,
    handleFilterChange,
    filteredActivities
  } = useOutletContext()
  

  return (
    <Grid centered>
      <Grid.Column textAlign="center" width={15}>
        <div className="childtitle">
          <h1 className="sitetitle">Welcome!</h1>
          <ActivitiesContainer handleFilterChange={handleFilterChange} searchValue={searchValue} setSearchValue={setSearchValue} activities = {filteredActivities} setActivities = {setActivities} page = {page} added={[]} />
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default HomePage;