import {useState} from "react";

function ActivityCard({oneActivity}){
    const {name,mood,price,img,description} = oneActivity
    const [ showDetails, setShowDetails ] = useState(true)

    const toggleDetails = ()=>{
        setShowDetails(!showDetails)
      }

      return(
        <li className="cards__item">
          <div className="card">
            <img onClick={toggleDetails}
              src={img}
              alt={name}
              className="card__image"
            />
            <div className="card__content">
              <div className="card__title">{name}</div>
              <div className="card__text">{showDetails ? <p >{description}</p> : <p>{mood}{price}</p> }</div>
              <div className="card__detail">
              </div>
            </div>
          </div>
        </li>
      );
}


export default ActivityCard;