import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Componenets/Card';

const App = () => {
  
  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

const getData = async ()=> {
const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
setUserData(response)
}

useEffect(function(){
  getData()
},[index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  
  if(userData?.data?.length>0){
    printUserData = userData?.data?.map(function(elem,idx){

    return  <div key={idx}>
               <a href={elem.url} target='_'>
                 <div className='h-40 w-44 overflow-hidden  bg-white rounded-xl'>
                  <img className='h-full w-full object-cover'  src={elem.download_url} />
                 </div>

                 <h2 className='font-bold'>{elem.author}</h2>
              </a>
             </div>
    })
  }


  return (
    <div className='bg-black overflow-auto h-screen py-4  text-white'>
      
      <div className='flex flex-wrap gap-4 p-2 h-[80%]'>
        {printUserData}
      </div>

      <div
       className='flex  justify-center gap-6 items-center p-4'>
       <button
       className='bg-amber-400 text-black px-4 py-2 rounded cursor-pointer active:scale-95'
       onClick={()=>{
        if(setIndex>1){
        setIndex(index-1)
        setUserData([])
        }
         
       }} >
       Prev
       </button>

       <h1>Page{index}</h1>
        
       <button
        className='bg-amber-400 text-black px-4 py-2 rounded cursor-pointer active:scale-95'
        onClick={()=>{
        setUserData([])
        setIndex(index+1)
        }}>
        Next
        </button>
      </div>
    </div>
  )
}

export default App