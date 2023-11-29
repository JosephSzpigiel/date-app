import ActivityCard from "./ActivityCard";


function ActivitiesContainer({activities}){
    
    const activityCards = activities.map( activity => {
        return <ActivityCard key = {activity.id} oneActivity = {activity} />
    });
    
    return(
        <ul className="cards">
            {activityCards}
        </ul>
    );
}

export default ActivitiesContainer;