import { Form, Segment } from "semantic-ui-react"
import { useState } from "react"

function DateForm({dateActivities, setDateActivities, setAdded}){

    const emptyDate = {
        'name1':'',
        'name2':'',
        'budget':'',
        'date':''
    }
    const [newDate, setNewDate] = useState({emptyDate})



    function handleChange(e){
        setNewDate(curr => {
            return {...curr, [e.target.name]: e.target.value}})
    }

    function handleBudget(e, {value}){
        setNewDate(curr => {
            return {...curr, 'budget': value}})
    }

    const priceOptions = [
        { key: '$', text: '$', value: '$' },
        { key: '$$', text: '$$', value: '$$' },
        { key: '$$$', text: '$$$', value: '$$$' },
        { key: '$$$$', text: '$$$$', value: '$$$$' },
        { key: '$$$$$', text: '$$$$$', value: '$$$$$' }
    ];

    function handleSubmit(){
        fetch('http://localhost:5555/dateplans', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(newDate)
        })
        .then((r)=> {
        if(r.ok) {
            return r.json();
        }})
        .then(date => {
            dateActivities.forEach(activity =>{
                fetch('http://localhost:5555/dateactivities', {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        "date_plan_id": date.id,
                        "activity_id": activity['activity_id'],
                        "start_time": activity['start_time']
                    })
                }).then(r=>r.json()).then(
                    setNewDate(emptyDate),
                    setDateActivities([]),
                    setAdded([]),
                    setDateActivities([])
                    )                
            }
            )            
        }

        )
    }

    return(
        <Segment>
            <h3>Create a Date!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Input inline label='Person #1' name = 'name1' value={newDate.name1} onChange={handleChange}/>
                <Form.Input inline label='Person #2' name = 'name2' value={newDate.name2} onChange={handleChange}/>
                <Form.Select inline label='Budget' placeholder="Budget Options" options={priceOptions} name = 'budget' value={newDate.budget} onChange={handleBudget}/>
                <Form.Input type='date' label='Date' name = 'date' value={newDate.date} onChange={handleChange}/>
                <Form.Button type='submit'>Save</Form.Button>            
            </Form> 
        </Segment>
    )

}
export default DateForm