import {Grid, Button, Segment, Header} from "semantic-ui-react";
import DateForm from "./DateForm";
import ActivitiesContainer from "../ActivitiesContainer"
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function CreateDate() {

  const {activities, setActivities} = useOutletContext()
  const page = 'date'

  const [dateActivities, setDateActivities] = useState([])
  const [ added, setAdded ] = useState([])

  const sortActivities = dateActivities.sort((a,b)  => (a.start_time < b.start_time ? -1: 1))

  const activityNames = sortActivities.map((act, index) => {
    return (
    <div key = {index}>
      <div id = {act['activity_id']}>
        {act['start_time']} - {act.activity['name']}
        <Button onClick={handleRemove} index = {index}>Remove</Button>
      </div>
    </div>
    )
  })


  function handleRemove(e){
    setDateActivities(curr => {
      return [...curr.filter((act)=> {
        if(act['activity_id'] != e.target.parentNode.id){
          return act
        }
      })]
    })
    setAdded(curr => {
      return[...curr.filter(id => {
        if(e.target.parentNode.id != id){
          return id
        }
    })]})
  }

  return (
      <Grid centered={true}>
        <Grid.Column width={5}>
          <DateForm/>
          <Segment>
            <Header as='h3'>Itinerary:</Header>
            {activityNames}
          </Segment>
        </Grid.Column>
        <Grid.Column width= {10}>
          <ActivitiesContainer  activities={activities} setActivities={setActivities} page={page} setDateActivities= {setDateActivities} added={added} setAdded={setAdded}/>
        </Grid.Column>
      </Grid>
    );
  }

export default CreateDate;