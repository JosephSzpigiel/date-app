import {useState} from "react";
import { Header, Grid, Form } from "semantic-ui-react";
import {useOutletContext} from 'react-router-dom'

function ActivityForm(){
    const {onNewActivity} = useOutletContext()
    const [ newName , setNewName ] = useState('')
    const [ newMood , setnewMood ] = useState('')
    const [ newPrice , setnewPrice ] = useState('')
    const [ newDescription, setNewDescription ] = useState('')
    const [ newImage , setNewImage ] = useState('')

    const handleName = (e) => {
      setNewName(e.target.value);
    };
    
    const handleImage = (e) => {
      setNewImage(e.target.value);
    };
    
    const handleDescription = (e) => {
      setNewDescription(e.target.value);
    };
    
    const handleMood = (e, {value} ) => {
      setnewMood(value);
    };

    const moodOptions = [
      { key: 'a', text: 'Adventure', value: 'Adventure' },
      { key: 'c', text: 'Creative', value: 'Creative' },
      { key: 'c', text: 'Comfy', value: 'Comfy' },
      { key: 'f', text: 'Fun', value: 'Fun' },
      { key: 'r', text: 'Romantic', value: 'Romantic'},
      { key: 'u', text: 'Unique', value: 'Unique'}
    ]
      
    const handleprice = (e, {value} ) => {
      setnewPrice(value);
      };

    const priceOptions = [
      { key: '$', text: '$', value: '$' },
      { key: '$$', text: '$$', value: '$$' },
      { key: '$$$', text: '$$$', value: '$$$' },
      { key: '$$$$', text: '$$$$', value: '$$$$' },
      { key: '$$$$$', text: '$$$$$', value: '$$$$$' }
    ];

    function handleSubmit(e) {
      e.preventDefault();
      const newActivitySubmitted = {
        name : newName,
            mood : newMood,
            price : newPrice,
            img : newImage,
            description : newDescription  
      };

    fetch('http://localhost:5555/activities', {
      method : "POST",
      headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(newActivitySubmitted)
        })
        .then((r)=> {
            if(r.ok) {
                return r.json();
            }
        })

        .then((newActivityFromServer) => {

          onNewActivity(newActivityFromServer);
          setNewName('')
          setNewImage('')
          setNewDescription('')
          setnewMood('')
        }) 
    }
  
    return(
    <Grid centered>
      <Grid.Column width={4}>
        <div>
        <Header as='h3' textAlign='center'>
    </Header>
          <Form
              onSubmit={handleSubmit}>

              <Form.Field>
                <Form.Input 
                fluid 
                label="Name" 
                placeholder="Name" 
                name="Name" 
                value={newName} 
                onChange={handleName} 
                />

                <Form.Input 
                fluid 
                label="Image" 
                placeholder="Image URL" 
                name="Image" 
                value={newImage} 
                onChange={handleImage} 
                />

                <Form.Input 
                fluid 
                label="Description" 
                placeholder="Description" 
                name="Description" 
                value={newDescription} 
                onChange={handleDescription} 
                />

              </Form.Field>

              <Form.Group>
                <Form.Select 
                fluid 
                label="Mood" 
                placeholder="Mood Options" 
                name="Mood" 
                options={moodOptions}
                value={newMood} 
                onChange={handleMood} 
                width = {16}/>
              </Form.Group> 

              <Form.Group>
                <Form.Select 
                fluid 
                label="Budget" 
                placeholder="Budget Options" 
                name="Budget" 
                options={priceOptions}
                value={newPrice} 
                onChange={handleprice} 
                width = {16}/>
              </Form.Group>

              <Form.Button >Submit</Form.Button>
          </Form>
      </div>
    </Grid.Column>
  </Grid>
    );
}



export default ActivityForm;