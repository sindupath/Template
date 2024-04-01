import React from 'react'
import { Link } from 'react-router-dom';

 const About = () => {
  return (
    
    <div className="h-100 w-100 p-10">
    <Link
      className="font-bold font-mono text-xl hover:text-red-600"
      to="/" 
    >
      Home
    </Link>
  </div>
  )
}

export default About;