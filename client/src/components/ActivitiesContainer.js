import ActivityCard from "./ActivityCard";
import { Grid, Search, Segment } from "semantic-ui-react";
import SearchFilter from "./SearchFilter";
import FilterButton from "./FilterButton";


function ActivitiesContainer({setDateActivities, activities, setActivities, page, added, setAdded, searchValue, setSearchValue, handleFilterChange}){
    
    const activityCards = activities.map( activity => {
        return <ActivityCard key = {activity.id} setDateActivities={setDateActivities} oneActivity = {activity} page = {page} setActivities={setActivities} added={added} setAdded={setAdded}/>
    });
    
    return(
        <Segment>
            <SearchFilter searchValue={searchValue} setSearchValue={setSearchValue} handleFilterChange={handleFilterChange}/>
            <Grid columns= {4} className="cards">
                {activityCards}
            </Grid>            
        </Segment>

    );
}

export default ActivitiesContainer;