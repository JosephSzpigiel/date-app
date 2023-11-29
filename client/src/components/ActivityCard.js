import {useState} from "react";
import { Card, Image, Button, Form } from 'semantic-ui-react'


function ActivityCard({oneActivity, page, setActivities}){
    const {name,mood,price,img,description,id} = oneActivity
    const [ showDetails, setShowDetails ] = useState(false)
    const [ editState, setEditState] = useState(false)
    const [ details, setDetails] = useState(oneActivity)

    const toggleDetails = ()=>{
        setShowDetails(!showDetails)
    }

    function handleEdit(){
      setEditState(curr => !curr)
    }

    function handleChange(e){
      setDetails(curr => {
        return {...curr, [e.target.name]: e.target.value}
      })
    }

    function handleCancel(){
      setDetails(oneActivity)
      handleEdit()
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
        <Form.Input inline label='Mood' name = 'mood' value={details.mood} onChange={handleChange}/>
        <Form.Input inline label='Price' name = 'price' value={details.price} onChange={handleChange}/>
        <Form.TextArea label='Description' name= 'description' value={details.description} onChange={handleChange}/>
        <Form.Input inline label='Image Link' name= 'img' value={details.img} onChange={handleChange}/>
        <Button type='submit'>Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Form>
    )

    const homeButtons = (
      <div>
        <Button color='green' onClick={handleEdit}>Edit</Button>
        <Button color='red' onClick={handleDelete}>Delete</Button>
      </div>
    )

    const selectButton = (
      <Button color='green'>Select</Button>
    )

    function handleDelete(){
      fetch(`http://localhost:5555/activities/${id}`, {
        method: 'DELETE',
      })
      .then(setActivities(curr => curr.filter(activity => activity.id !== id)))
    }
  

      return(
        <Card>
          <Image src={img} wrapped ui={false} onClick={toggleDetails}/>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            {editState ?
              editForm :
              <div>
                {showDetails ? 
                  <Card.Meta>
                    <p className='mood'>Mood: {mood}</p>
                    <p className='price'>Price: {price}</p>
                    <p></p>
                  </Card.Meta>:
                  <Card.Description>
                      {description}
                  </Card.Description>
                }
                {page == 'home' ? homeButtons : selectButton}
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