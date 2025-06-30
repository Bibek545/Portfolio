import React from 'react'
// import { icons } from './Icons'

const Card = ({image, title, description, url}) => {
  return (
    <div>
                   <div className="col">
                     <div className="card h-50 ">
                       <img
                         src={image}
                         className="card-img-top"
                         alt="React Digital Clock"
                       />
                       <div className="card-body">
                         <h5 className="card-title">{title}</h5>
                         <p className="card-text">
                        {description}
                         </p>
                         <a
                           href={url}
                           className="btn btn-primary"
                         >
                           View Live App
                         </a>
                       </div>
                     </div>
                   </div>
       
    </div>
  )
}

export default Card
