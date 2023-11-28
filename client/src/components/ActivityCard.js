import {useState} from "react";
import { Card, Image, Button } from 'semantic-ui-react'


function ActivityCard({oneActivity}){
    const {name,mood,price,img,description} = oneActivity
    const [ showDetails, setShowDetails ] = useState(true)

    const toggleDetails = ()=>{
        setShowDetails(!showDetails)
      }

      return(
        <Card>
          <Image src={img} wrapped ui={false} onClick={toggleDetails}/>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <div>
              {showDetails ? 
            <Card.Meta>
              <span className='mood'>Mood: {mood}</span>
              <span className='price'>Price: {price}</span>
            </Card.Meta>:
              <Card.Description>
                  {description}
              </Card.Description>
            }
            </div>
            <Button color='green'>Edit</Button>
            <Button color='red'>Delete</Button>
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