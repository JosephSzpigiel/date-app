import { useState, useEffect } from "react";
import {Grid, Card } from "semantic-ui-react";
import { useOutletContext } from "react-router-dom";
import DateCard from "./DateCard";

function AllDates() {

  const {
    datePlans
  } = useOutletContext()

  const [sortedDatePlans, setSortedDatePlans] = useState([]);

  useEffect(() => {
    const sortedPlans = [...datePlans].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setSortedDatePlans(sortedPlans);
  }, [datePlans]);

  const dComponents = sortedDatePlans.map((dateobj)=>(
    <DateCard key = {dateobj.id} oneDate = {dateobj}/>
  ));
    console.log(datePlans, "hi")
  return (
    <Grid columns={4}>
      <Card.Group>
        {dComponents}
      </Card.Group>
    </Grid>
  )
}

export default AllDates;

