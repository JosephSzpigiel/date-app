import { Form, Message, Segment } from "semantic-ui-react"
import { useState } from "react"

function DateForm({dateActivities, setDateActivities, setAdded}){

    const [ error, setError ] = useState(false)

    const emptyDate = {
        'name1':'',
        'name2':'',
        'budget':'',
        'date':''
    }
    const [newDate, setNewDate] = useState({
        'name1':'',
        'name2':'',
        'budget':'',
        'date':''
    })



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
        if(dateActivities.length === 0){
            setError(true)
        }else{
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
                }).then(r=>r.json()).then(act => {
                    setNewDate({
                        'name1':'',
                        'name2':'',
                        'budget':'',
                        'date':''
                    })
                    setDateActivities([])
                    setAdded([])
                    setDateActivities([])
                    setError(false)
                })                
            }
            )          
        }
        )    
        }
        
    }

    return(
        <Segment>
            <h3>Create a Date!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Input inline required label='Person #1' name = 'name1' value={newDate['name1']} onChange={handleChange}/>
                <Form.Input inline required label='Person #2' name = 'name2' value={newDate.name2} onChange={handleChange}/>
                <Form.Select inline required label='Budget' placeholder="Budget Options" options={priceOptions} name = 'budget' value={newDate.budget} onChange={handleBudget}/>
                <Form.Input required type='date' label='Date' name = 'date' value={newDate.date} onChange={handleChange}/>
                <Form.Button type='submit'>Save</Form.Button>  
                {error ? <Message negative>You must add activities to your date!</Message>: null}          
            </Form> 
        </Segment>
    )

}
export default DateForm