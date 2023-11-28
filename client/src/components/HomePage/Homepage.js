import {Grid} from "semantic-ui-react";

function HomePage() {
    return (
        <Grid>
          <Grid.Column textAlign="center">
            <div className="childtitle">
              <h1 className="sitetitle">Welcome!</h1>
            </div>
          </Grid.Column>
        </Grid>
      );
    }

export default HomePage;