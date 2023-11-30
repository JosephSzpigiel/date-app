import {Grid} from "semantic-ui-react";
import { useOutletContext } from "react-router";

function AllDates() {
    const {datePlans} = useOutletContext()
    console.log(datePlans)
    return (
        <Grid>
          <Grid.Column textAlign="center">
            <div className="childtitle">
              <h1 className="sitetitle">View all Dates</h1>
            </div>
          </Grid.Column>
        </Grid>
      );
    }

export default AllDates;