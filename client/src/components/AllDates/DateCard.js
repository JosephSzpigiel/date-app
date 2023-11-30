import { useState } from "react";
import { Card, Segment, Button } from 'semantic-ui-react'

function DateCard({ oneDate, setDatePlans }) {
  const { name1, date, name2, budget, date_activities, id } = oneDate

  const [showDetails, setShowDetails] = useState(false)

  const dateLines = date_activities.map(dateActivity => {
    return <p key={dateActivity['activity']['id']}>{dateActivity.start_time}-{dateActivity.activity.name} </p>
  })

  const toggleDetails = () => {
    setShowDetails(curr => !curr)
  }

  function handleDelete(e){
      fetch(`http://localhost:5555/dateplans/${id}`, {
        method: 'DELETE',
      })
      .then( () => setDatePlans(curr => curr.filter(date => date.id !== id)))
    }

  const parsedDate = date.split('-')
  const prettyDate = `${parsedDate[1]}/${parsedDate[2]}/${parsedDate[0]}`

  const numberOfActivities = date_activities.length

  return (
    <Card >
      <Card.Content textAlign="center">
        <Card.Header onClick={toggleDetails}> {prettyDate} <br></br> {name1} & {name2}  </Card.Header>
        {showDetails ? (
          <div>
          <Segment>
            <h3>Itinerary:</h3>
              <Card.Meta>
                {dateLines}
              </Card.Meta>
            </Segment>
            <Button onClick={handleDelete}>Delete Date</Button>
          </div>)
          :
          <Card.Meta>
            Budget: {budget} <br></br>
            Number of Activities: {numberOfActivities}
          </Card.Meta>
        }
      </Card.Content>
    </Card>
  )
}

export default DateCard;