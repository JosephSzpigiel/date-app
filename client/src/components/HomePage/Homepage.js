import {Grid} from "semantic-ui-react";
import ActivitiesContainer from "../ActivitiesContainer";
import {useOutletContext} from 'react-router-dom';

function HomePage() {

  const {
    activities,
    setActivities
} = useOutletContext()

    return (
        <Grid>
          <Grid.Column textAlign="center">
            <div className="childtitle">
              <h1 className="sitetitle">Welcome!</h1>
              <ActivitiesContainer activities = {activities} />
            </div>
          </Grid.Column>
        </Grid>
      );
    }

export default HomePage;