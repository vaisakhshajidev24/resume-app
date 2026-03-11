import React, { useState } from 'react'
import Preview from '../components/Preview'
import Steps from '../components/Steps'

function Pforms() {

  const [userInput,setUserInput] = useState({
    personalDetails:{
      name:"",
      jobTitle:"",
      location:"",
      phone:"",
      email:"",
      github:"",
      linkedIn:"",
      portfolio:""
    },
    Education:{
      course:"",
      collage:"",
      university:"",
      year:"",
    },
    experience:{
      job:"", 
      company:"",
      location:"",
      duration:""
    },
    skills:[],
    summary:""

  })

  const [finish,setFinish] = useState(false)
  const [resumeId,setResumeId] = useState("")


  return (
    <div>
       <div className="row p-5">
        
       { finish? <div className='row'>
        <div className='col-3'></div>
        <div className='col-8'>
          <Preview resumeId={resumeId} userInput={userInput} setUserInput={setUserInput} finish={finish}/>
        </div>
        <div className='col-1'></div>
        </div> :
      <div className="row p-5">
        <div className="col-6">
          <Steps setResumeId={setResumeId} userInput={userInput} setUserInput={setUserInput} setFinish={setFinish} />
        </div>
        <div className="col-6">
          <Preview userInput={userInput} />
        </div></div>}
      </div>
    </div>
  );
}

export default Pforms
