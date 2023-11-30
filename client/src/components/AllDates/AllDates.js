import { useState, useEffect } from "react";
import {Grid, Card, Segment } from "semantic-ui-react";
import { useOutletContext } from "react-router-dom";
import DateCard from "./DateCard";

function AllDates() {

  const [datePlans, setDatePlans] = useState([])
  const [sortedDatePlans, setSortedDatePlans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/dateplans')
        .then((r) => r.json())
        .then((dateObj) => {
            setDatePlans(dateObj[0]);
        });
  }, []);


  useEffect(() => {
    const sortedPlans = [...datePlans].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setSortedDatePlans(sortedPlans);
  }, [datePlans]);

  const dComponents = sortedDatePlans.map((dateobj)=>(
    <DateCard key = {dateobj.id} oneDate = {dateobj} setDatePlans={setDatePlans}/>
  ));
    console.log(datePlans, "hi")
  return (
    <Grid centered>
      <Grid.Column textAlign="center" width={15}>
        <div className="childtitle">
          <h1 className="sitetitle">All Saved Dates:</h1>
          <Segment>
            <Grid columns= {4} className="cards">
                {dComponents}
            </Grid>  
          </Segment>
        </div>
      </Grid.Column>
    </Grid>


    // <Grid centered>
    //   <Grid.Column textAlign="center" width={15}>
    //     <Grid columns={4} width={15}>
    //       <Card.Group>
    //         {dComponents}
    //       </Card.Group>
    //     </Grid>
    //   </Grid.Column>
    // </Grid>
  )
}

export default AllDates;

