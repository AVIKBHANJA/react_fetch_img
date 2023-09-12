"use client"
import React, { useState } from 'react'
// import Header from '@/Components/Header'
// import Link from 'next/link'
import axios from 'axios'


const page = () => {
   const [Image,setImage]=useState([])
  const getImage =async()=>{
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      setImage(data)
      console.log(data)
    } catch (error) {
      console.error("errror fetching img")
    }
  }
  // const [marks,setmarks]=useState(90)
  // const [name,setname]=useState("avik")
  return (
    <>
    <button onClick={getImage} className='bg-white p-3 text-black '>get img</button>
    <div className='p-10 h-10'>
        {Image.map((Elem,i)=>{
          return <img 
          key={i}
          src={Elem.download_url}
          width={300}
          height={300}
          className='rounded'
          />
        })}
    </div>
    </>
  )
}

export default page
