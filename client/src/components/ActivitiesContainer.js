import ActivityCard from "./ActivityCard";
import { Grid } from "semantic-ui-react";


function ActivitiesContainer({activities, setActivities, page}){
    
    const activityCards = activities.map( activity => {
        return <ActivityCard key = {activity.id} oneActivity = {activity} page = {page} setActivities={setActivities}/>
    });
    
    return(
        <Grid columns= {4} className="cards">
            {activityCards}
        </Grid>
    );
}

export default ActivitiesContainer;