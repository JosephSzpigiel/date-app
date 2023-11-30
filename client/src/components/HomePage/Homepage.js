import {Grid} from "semantic-ui-react";
import ActivitiesContainer from "../ActivitiesContainer";
import SearchFilter from "../SearchFilter";
import {useOutletContext} from 'react-router-dom';

function HomePage() {

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

  const page = 'home';

  return (
    <Grid>
      <Grid.Column textAlign="center">
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