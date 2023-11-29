import { Form, Segment } from "semantic-ui-react"
import { useState } from "react"
import SemanticDatepicker from 'react-semantic-ui-datepickers';


function DateForm(){
    
    const [newDate, setNewDate] = useState({
        'name1':'',
        'name2':'',
        'budget':'',
        'date':'',
    })

    function handleChange(e){
        setNewDate(curr => {
            return {...curr, [e.target.name]: e.target.value}})
    }

    function dateChecker(date){
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if(date > yesterday){
            return true
        }
        else{
            return false
        }
    }

    return(
        <Segment>
            <Form>
                <Form.Input inline label='Person #1' name = 'name1' value={newDate.name1} onChange={handleChange}/>
                <Form.Input inline label='Person #2' name = 'name2' value={newDate.name2} onChange={handleChange}/>
                <Form.Input inline label='Budget' name = 'budget' value={newDate.budget} onChange={handleChange}/>
                <SemanticDatepicker datePickerOnly filterDate = {dateChecker} format= 'MM-DD-YYYY' label='Date' name = 'date' onChange={handleChange}/>
                <Form.Button type='submit'>Save</Form.Button>            
            </Form> 
        </Segment>
    )


}

export default DateForm