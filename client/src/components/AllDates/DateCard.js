import { useState } from "react";
import { Card } from 'semantic-ui-react'

function DateCard({ oneDate }) {
  const { name1, date, name2, budget, date_activities, id } = oneDate

  const [showDetails, setShowDetails] = useState(false)

  const dateLines = date_activities.map(dateActivity => {
    return <p>{dateActivity.start_time}-{dateActivity.activity.name} </p>
  })

  const toggleDetails = () => {
    setShowDetails(curr => !curr)
  }

  return (
    <Card >
      <Card.Content textAlign="center">
        <Card.Header onClick={toggleDetails}> {name1} & {name2}: {date}  </Card.Header>
        {showDetails && (
          <Card.Description>
            {dateLines}
          </Card.Description>
        )}
      </Card.Content>
    </Card>
  )
}

export default DateCard;