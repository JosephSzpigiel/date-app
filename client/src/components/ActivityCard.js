import {useState} from "react";
import { Card, Image, Button, Form } from 'semantic-ui-react'


function ActivityCard({oneActivity, page, setActivities, setDateActivities, added, setAdded}){
    const {name,mood,price,img,description,id} = oneActivity
    const [ showDetails, setShowDetails ] = useState(false)
    const [ editState, setEditState] = useState(false)
    const [ details, setDetails] = useState(oneActivity)
    const [ selected, setSelected] = useState(false)
    const [ time, setTime] = useState('')

    const toggleDetails = ()=>{
        setShowDetails(curr => !curr)
    }

    const toggleSelected = () =>{
      setSelected(curr => !curr)
    }

    function handleSetTime(e){
      setTime(e.target.value)
    }

    function toggleEdit(){
      setEditState(curr => !curr)
    }

    function handleChange(e){
      setDetails(curr => {
        return {...curr, [e.target.name]: e.target.value}
      })
    }

    const handleMood = (e, {value} ) => {
      setDetails(curr => {
        return {...curr, "mood": value}
      })    
    };

    const moodOptions = [
      { key: 'a', text: 'Adventure', value: 'Adventure' },
      { key: 'c', text: 'Creative', value: 'Creative' },
      { key: 'co', text: 'Comfy', value: 'Comfy' },
      { key: 'f', text: 'Fun', value: 'Fun' },
      { key: 'r', text: 'Romantic', value: 'Romantic'},
      { key: 'u', text: 'Unique', value: 'Unique'}
    ]
      
    const handlePrice = (e, {value} ) => {
      setDetails(curr => {
        return {...curr, "price": value}
      })    
    };

    const priceOptions = [
      { key: '$', text: '$', value: '$' },
      { key: '$$', text: '$$', value: '$$' },
      { key: '$$$', text: '$$$', value: '$$$' },
      { key: '$$$$', text: '$$$$', value: '$$$$' },
      { key: '$$$$$', text: '$$$$$', value: '$$$$$' }
    ];

    function handleCancel(){
      setDetails(oneActivity)
      toggleEdit()
    }

    function handleSubmit(e){
      e.preventDefault()
      fetch(`http://localhost:5555/activities/${id}`, {
        method: 'PATCH',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(
            {
                "name" : details.name, 
                "mood" : details.mood,
                "price" : details.price,
                "img" : details.img,
                "description" : details.description
            }
        ) 
      })
      .then(r => r.json())
      .then(activity => {
          setActivities(activities => {
              return (activities.map((arrayActivity) => {
                  if (arrayActivity.id === activity.id) {
                      return{ ...arrayActivity, 
                        'name' : activity.name, 
                        'mood' : activity.mood,
                        'price' : activity.price,
                        'img' : activity.img,
                        'description' : activity.description}
                  } else {
                      return arrayActivity
                  }
              }))
          })
          setShowDetails(false)
          setEditState(false)
      }) 
    }

    const editForm = (
      <Form onSubmit={handleSubmit}>
        <Form.Input inline label='Name' name = 'name' value={details.name} onChange={handleChange}/>
        <Form.Select inline label='Mood' name = 'mood' options={moodOptions} value={details.mood} onChange={handleMood}/>
        <Form.Select inline label='Price' name = 'price' options={priceOptions} value={details.price} onChange={handlePrice}/>
        <Form.TextArea label='Description' name= 'description' value={details.description} onChange={handleChange}/>
        <Form.Input inline label='Image Link' name= 'img' value={details.img} onChange={handleChange}/>
        <Button type='submit'>Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Form>
    )

    const homeButtons = (
      <div>
        <Button color='green' onClick={toggleEdit}>Edit</Button>
        <Button color='red' onClick={handleDelete}>Delete</Button>
      </div>
    )

    const selectButton = added.includes(id) ? <Button disabled>ADDED!</Button>:(
      <Button color='green' onClick={toggleSelected}>Select</Button>
    )

    function handleSaveAct(e){
      e.preventDefault()
      const savedActivity = {'activity': oneActivity, 'activity_id': oneActivity.id,'start_time': time}
      setDateActivities(curr => [...curr,savedActivity])
      setAdded(curr =>  [...curr, savedActivity['activity_id']])
      setSelected(false)
    }

    const selectForm = (
      <div>
      <Form onSubmit={handleSaveAct}>
        <Form.Input type="time" label='Time' value={time} onChange={handleSetTime}/>
        <Form.Button type='submit'>Submit</Form.Button>
        <Form.Button onClick={toggleSelected}>Cancel</Form.Button>
      </Form>
      </div>
    )

    function handleDelete(){
      fetch(`http://localhost:5555/activities/${id}`, {
        method: 'DELETE',
      })
      .then( () => setActivities(curr => curr.filter(activity => activity.id !== id)))
    }
  

      return(
        <Card>
          <Image src={img} wrapped ui={false} onClick={toggleDetails}/>
          <Card.Content textAlign="center">
            <Card.Header>{name}</Card.Header>
            {editState ?
              editForm :
              <div>
                {selected ?
                selectForm :
                (showDetails ?
                  <div>
                  <Card.Meta>
                    <p className='mood'>Mood: {mood}</p>
                    <p className='price'>Price: {price}</p>
                    <p></p>
                  </Card.Meta>
                  {page == 'home' ? homeButtons : selectButton}
                  </div>
                  :
                  <div>
                  <Card.Description>
                      {description}
                  </Card.Description> 
                  {page == 'home' ? homeButtons : selectButton}
                  </div>            
                )}
              </div>
            }
          </Card.Content>
        </Card>
        )
      //(
      //   <li className="cards__item">
      //     <div className="card">
      //       <img onClick={toggleDetails}
      //         src={img}
      //         alt={name}
      //         className="card__image"
      //       />
      //       <div className="card__content">
      //         <div className="card__title">{name}</div>
      //         <div className="card__text">{showDetails ? <p >{description}</p> : <p>{mood}{price}</p> }</div>
      //         <div className="card__detail">
      //         </div>
      //       </div>
      //     </div>
      //   </li>
      // );
}


export default ActivityCard;