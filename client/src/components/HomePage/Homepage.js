import React, { useState } from 'react';
import {Grid, GridColumn, Header } from "semantic-ui-react";
import ActivitiesContainer from "../ActivitiesContainer";
import {useOutletContext} from 'react-router-dom';
import Welcome from './Welcome';


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
        <div className="welcomeContainer">
          <Grid.Column >
            At DateCrafters, we're dedicated to transforming your date nights into unforgettable experiences. No more stress, no more guesswork – just personalized, memorable moments crafted just for you. Welcome to a world where every date is a masterpiece!
          </Grid.Column>
          <Grid.Column className='welcomeWrapper'>
              <Welcome/>
          </Grid.Column>
          <Grid.Column>
              Ready to Craft Your Perfect Date?
              DateCrafters is more than an website – it's your personal dating concierge, ready to elevate your date nights. Start now and embark on a journey where every date is an experience crafted just for you.   
          </Grid.Column>
          <ActivitiesContainer handleFilterChange={handleFilterChange} searchValue={searchValue} setSearchValue={setSearchValue} activities = {filteredActivities} setActivities = {setActivities} page = {page} added={[]} />
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default HomePage;
