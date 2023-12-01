import {useState} from "react";
import { Header, Grid } from "semantic-ui-react";
import {useOutletContext} from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from "formik"
import * as Yup from 'yup';

function ActivityForm(){
    const {onNewActivity} = useOutletContext()

    // const moodOptions = [
    //   { key: 'a', text: 'Adventure', value: 'Adventure' },
    //   { key: 'c', text: 'Creative', value: 'Creative' },
    //   { key: 'c', text: 'Comfy', value: 'Comfy' },
    //   { key: 'f', text: 'Fun', value: 'Fun' },
    //   { key: 'r', text: 'Romantic', value: 'Romantic'},
    //   { key: 'u', text: 'Unique', value: 'Unique'}
    // ]

    return(
    <Grid centered>
      <Grid.Column width={5}>
        <div>
        <Header as='h3' textAlign='center'>
        </Header>
    <Formik
      initialValues={{ name: '', mood: 'Adventure', price: '$' , description:'', img:'' }}
      validate ={values => {
        const errors = {}
        if (!values.name){
          errors.name = 'Name is required'
        }else if(values.name.length < 3){
          errors.name = 'Name must be greater than 3 characters'
        }
        if (!values.mood){
          errors.mood = 'Mood is required'
        }
        if (!values.price){
          errors.price = 'Price is required'
        }
        if (!values.description){
          errors.description = 'Description is required'
        }
        if (!values.img){
          errors.img = 'Image Url is required'
        }
        return errors
      }}
      onSubmit={(values,{setSubmitting, resetForm}) => {
      fetch('http://localhost:5555/activities', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(values)
        })
        .then((r)=> {
            if(r.ok) {
                return r.json();
            }
        })
        .then((newActivityFromServer) => {
          onNewActivity(newActivityFromServer)
          setSubmitting(false)
          resetForm()
        }) 
      ;
      }}
    >
      {({ isSubmitting }) => (
      <Form>
        <Grid.Row>
          <label htmlFor="name">Name: </label>
          <Field name="name" type="text" />
          <ErrorMessage style={{color:"red"}} name="name" component='div'/>
        </Grid.Row>

        <Grid.Row>
          <label htmlFor="mood">Mood: </label>
          <Field name="mood" as='select'>
            <option value='Adventure'>Adventure</option>
            <option value='Creative'>Creative</option>
            <option value='Comfy'>Comfy</option>
            <option value='Fun'>Fun</option>
            <option value='Romantic'>Romantic</option>
            <option value='Unique'>Unique</option>
          </Field>
          <ErrorMessage style={{color:"red"}} name="mood" component='div'/>
        </Grid.Row>

        <Grid.Row>
          <label htmlFor="price">Price: </label>
          <Field name="price" as='select'>
            <option value='$'>$</option>
            <option value='$$'>$$</option>
            <option value='$$$'>$$$</option>
            <option value='$$$$'>$$$$</option>
            <option value='$$$$$'>$$$$$</option>
          </Field>
          <ErrorMessage style={{color:"red"}} name="price" component='div'/>
        </Grid.Row>

        <Grid.Row>
          <label htmlFor="description">Description: </label>
          <Field name="description" type="text" />
          <ErrorMessage style={{color:"red"}} name="description" component='div'/>
        </Grid.Row>

        <Grid.Row>
          <label htmlFor="img">Image Url: </label>
          <Field name="img" type="text"/>
          <ErrorMessage style={{color:"red"}} name="img" component='div'/>
        </Grid.Row>

        <button type="submit">Submit</button>
      </Form>
      )}

    </Formik>
    </div>
    </Grid.Column>
  </Grid>)}


    {/* const [ newName , setNewName ] = useState('')
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

                <Form.TextArea  
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
} */}



export default ActivityForm;