import React from 'react'

const Card = (props) => {

console.log(props)
  return (
    <div>
         <a href={props.elem.url} target='_'>
                 <div className='h-40 w-44 overflow-hidden  bg-white rounded-xl'>
                  <img className='h-full w-full object-cover'  src={props.download_url} />
                 </div>

                 <h2 className='font-bold'>{props.elem.author}</h2>
              </a>
    </div>
  )
}

export default Card