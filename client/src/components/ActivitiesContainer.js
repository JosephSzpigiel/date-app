import ActivityCard from "./ActivityCard";
import { Grid } from "semantic-ui-react";


function ActivitiesContainer({setDateActivities, activities, setActivities, page, added, setAdded}){
    
    const activityCards = activities.map( activity => {
        return <ActivityCard key = {activity.id} setDateActivities={setDateActivities} oneActivity = {activity} page = {page} setActivities={setActivities} added={added} setAdded={setAdded}/>
    });
    
    return(
        <Grid columns= {4} className="cards">
            {activityCards}
        </Grid>
    );
}

export default ActivitiesContainer;