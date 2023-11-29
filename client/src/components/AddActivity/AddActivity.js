
import {Grid} from "semantic-ui-react";
import ActivityForm from "./AddActivityForm";

function AddActivity() {
    return (
        <Grid>
          <Grid.Column textAlign="center">
            <div className="childtitle">
              <h1 className="sitetitle">Add Date Activity </h1>
              <ActivityForm/>
            </div>
          </Grid.Column>
        </Grid>
      );
    }

export default AddActivity;