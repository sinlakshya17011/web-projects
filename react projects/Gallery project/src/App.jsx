import React from 'react'

const App = () => {

  const getData = ()=>{
  console.log("data is fetched")
  }
  return (
    <div className='bg-black h-screen p-4 text-white'>
     <button
     onClick={getData}
     className='bg-gray-600 px-5 active:scale-95 mb-3 py-2 rounded text-white'>Get Data</button>
    </div>
  )
}

export default App