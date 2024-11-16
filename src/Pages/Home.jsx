import React from 'react'
import {Link} from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
function Home() {
  return (
    <div>
      <div className="row d-flex">
        <div className="col-6 mt-5 p-5">
          <center>
          <h1 className='mt-5'>Project fair</h1>
          <p>One destination for all software development Projects</p>
          <Link to={'/login'}>
          <button className='btn'>Get Started</button>
          </Link>
         
          </center>

        </div>
        <div className="col-6  ">
          <img src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?t=st=1731482725~exp=1731486325~hmac=d526112151a090d033d494d1b3fa7e2479e6d9d9fd9440d4ebef4b234c9c66cf&w=740" height={'600px'} alt="" />
        </div>
      </div>


      <div className='p-5 '>
        <h3 className='text-center '>Explore Our Projects</h3>
      
      <div className="row p-5">
        <div className="col-4">
          <ProjectCard/>
        </div>
        <div className="col-4"><ProjectCard/></div>
        <div className="col-4"><ProjectCard/></div>
      </div>
      </div>

    </div>
  )
}

export default Home