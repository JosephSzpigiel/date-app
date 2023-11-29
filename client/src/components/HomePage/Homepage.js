import {Grid, Segment} from "semantic-ui-react";
import ActivitiesContainer from "../ActivitiesContainer";
import {useOutletContext} from 'react-router-dom';

function HomePage() {

  const {
    activities,
    setActivities
} = useOutletContext()

  const page = 'home';

  return (
    <Grid centered>
      <Grid.Column textAlign="center" width={15}>
        <div className="childtitle">
          <h1 className="sitetitle">Welcome!</h1>
          <Segment>
            <ActivitiesContainer activities = {activities} setActivities = {setActivities} page = {page} added={[]}/>
          </Segment>
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default HomePage;