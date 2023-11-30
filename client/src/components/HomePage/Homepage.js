import React, { useState } from 'react';
import {Grid, Segment} from "semantic-ui-react";
import ActivitiesContainer from "../ActivitiesContainer";
import {useOutletContext} from 'react-router-dom';
import FilterButton from "../FilterButton";

function HomePage() {

  const [filterValue, setFilterValue] = useState();

  const page = 'home';

  const {
    activities,
    setActivities
  } = useOutletContext()

  const handleFilterChange = (e, { value }) => {
  setFilterValue(value);
  };

  const filteredActivities = filterValue ? activities.filter(activity => activity.mood === filterValue) : activities;


  return (
    <Grid centered>
      <Grid.Column textAlign="center" width={15}>
        <div className="childtitle">
          <h1 className="sitetitle">Welcome!</h1>
          <Segment>
            <FilterButton 
              handleFilterChange={handleFilterChange} 
              setActivities={setActivities}/>
              <div style={{ marginTop: '20px' }}/>
            <ActivitiesContainer 
                activities = {filteredActivities} 
                setActivities = {setActivities} 
                page = {page} 
                added={[]}/>
          </Segment>
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default HomePage;