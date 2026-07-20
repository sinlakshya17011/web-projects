import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {

  console.log(props.company)
  console.log(props.post)
  console.log(props.tag1)
  console.log(props.tag2)
  console.log(props.pay)
  console.log(props.brandLogo)
  console.log(props.datePosted)

  return (
    <div className="card">
        
        <div>
          <div className="top">
          <img src={props.brandLogo} alt='logo'/>
          <button>Save<Bookmark size={10} /></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>

        <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>Mumbai , India</p>
            </div>
            <button>Apply Now</button>
        </div>

        

      </div>
  )
}

export default Card