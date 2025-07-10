import React from 'react'
import logo1 from './photos/logo1.jpg'
import mm from './photos/mm.jpeg'
const Animal = () => {
  return (
    <div>
      <div className='bg-blue-gray-50 mt-6 underline text-center font-semibold p-4 '>About of Animal Science</div>
      <div className='flex mt-5 bg-gray-50'>
       <div >
<img src={logo1} alt='' className='rounded-xl mt-20 h-64 ml-28 w-64' />
      </div>
       <div className='rounded-xl  w-[980px] h-[500px] ml-80 p-5 mr-28'>
        <h1 className='  font-semibold underline mt-4 '> Animal Science</h1>
        <h2>Dear Student and Parents,</h2>
<h2 >I hope this Message finds you well. As the Agriculture Co-ordinator, I would like to take a moment to 
  share the exciting opportunities available in our agricultural program. Agriculture plyas a vital role
   in our communities, not just as a career path,but as an essential part of our everyday lives.</h2>
      </div>
      </div>
       <div className='flex mt-5  py-14 '>
        <div className='ml-28 mt-4'>
        <div >
<img src={mm} alt='' className='rounded-xl mt-20 h-60 w-60' />
<h2 className='text-center  bg-orange-50 rounded-xl h-14 w-56 mt-2'>Dr.Sanjeev Acharya <br/>Animal Science Co-odinator</h2>
      </div>
        </div>
        <div className='rounded-xl bg-gray-50  ml-56 w-[800px] h-[500px] text-justify p-5 '>
        <h1 className='  font-semibold '>Message From Animal Science Co-ordinator</h1>
        <h2  className='mt-5 '>Dear Student and Parents,</h2>
<h2 className='mt-2 text-justify'>I hope this Message finds you well. As the Agriculture Co-ordinator, I would like to take a moment to 
  share the exciting opportunities available in our agricultural program. Agriculture plyas a vital role
   in our communities, not just as a career path,but as an essential part of our everyday lives.</h2>
      </div>
      </div>
      </div>
  )
}

export default Animal
