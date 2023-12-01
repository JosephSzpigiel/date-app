import ActivityCard from "./ActivityCard";
import { Grid, Segment } from "semantic-ui-react";
import SearchFilter from "./SearchFilter";



function ActivitiesContainer({setDateActivities, activities, setActivities, page, added, setAdded, searchValue, setSearchValue, handleFilterChange}){
    
    const activityCards = activities.map( activity => {
        return <ActivityCard key = {activity.id} setDateActivities={setDateActivities} oneActivity = {activity} page = {page} setActivities={setActivities} added={added} setAdded={setAdded}/>
    });
    
    return(
        <Segment style={{ backgroundColor: "#d3d3d3" }} className="container">
            <SearchFilter searchValue={searchValue} setSearchValue={setSearchValue} handleFilterChange={handleFilterChange}/>
            <Grid columns= {4} className="cards">
                {activityCards}
            </Grid>            
        </Segment>

    );
}

export default ActivitiesContainer;