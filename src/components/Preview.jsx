import { Box, Divider, Paper, Stack,Button, Typography } from "@mui/material";
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TbFileDownload } from "react-icons/tb";
import Edit from '../components/Edit'
import { MdHistory } from "react-icons/md";
import html2canvas from "html2canvas";
import jsPDF from "jsPDF";
import { addDownloadHistoryAPI } from "../services/allAPI";

function Preview({userInput, finish, resumeId, setUserInput }) {
  

  const [downloadStatus,setDownloadStatus] = useState(false)

 // console.log(userInput);

 const downloadCV = async () =>{
    // grt element to create screenshot
    const input = document.getElementById('result')
    const canvas = await html2canvas(input,{scale:2}) //takes screenshot
    const imgUrl = canvas.toDataURL('image/png')

  //jsPDF

  const pdf = new jsPDF()
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = pdf.internal.pageSize.getHeight()
  pdf.addImage(imgUrl,'PNG',0,0,pdfWidth,pdfHeight)
  pdf.save('resume.pdf')

  // get TimeDate
  const localTimeDate = new Date()
  const timeStamp = `${localTimeDate.toLocaleDateString()},${localTimeDate.toLocaleTimeString()}`
  
  // add history
  try{
    const result = await addDownloadHistoryAPI({...userInput,timeStamp,imgUrl})
    console.log(result)
    setDownloadStatus(true)
  }
  catch(err){
    console.log(err);
  }

 }

  return (
    <div>
      
      { userInput.personalDetails.name!=""&&

    <div>
       {finish && <div className="d-flex justify-content-center align-items-center">
        {/* download */}
        <button onClick={downloadCV} className="btn text-primary fs-1"><TbFileDownload /></button>
        
        {/* edit */}
        <div> <Edit resumeId={resumeId} setUpdateResume={setUserInput}/></div>
       
        {/* history */}
        {downloadStatus && <>
        <Link to={"/history"} className="btn text-primary fs-1">
          <MdHistory />
        </Link>
        </>}

        {/* back */}
        <Link to={"/resume-generator"} className="text-primary text-decoration-none">
        BACK
        </Link>
      </div>}



        <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={5}
          id="result"
          sx={{
            width: "100%",
            maxWidth: 600,
            p: 3,
            borderRadius: 2,
            textAlign: "center",
          }}>
          <Typography variant="h4" align="center" component="h2">
            Name:{userInput.personalDetails.name}
          </Typography>
          <Typography variant="subtitle1" align="center"  color="#00b0ff">
            Job title :{userInput.personalDetails.jobTitle}
          </Typography>
          <Typography variant="body2" align="center" >
            {userInput.personalDetails.email} | {userInput.personalDetails.location} | {userInput.personalDetails.phone}
          </Typography>
          <Typography variant="body2" align="center" mb={4} >          
            <Link href={userInput.personalDetails.github} target="_blank"> GitHub</Link> |
            <Link href={userInput.personalDetails.linkedIn} target="_blank"> LinkedIn</Link> |
            <Link href={userInput.personalDetails.portfolio} target="_blank"> Portfolio</Link>
          </Typography>
          <Divider>Summary</Divider>
          <Typography mb={3} textAlign="left" sx={{wordWrap:"break-word",p:2}} component="p">
            {userInput.summary}
          </Typography>
          <Divider>Education</Divider>
          <h5>{userInput.Education.course}</h5>
          <p><span>{userInput.Education.collage}</span> | <span>{userInput.Education.university}</span> | <span>{userInput.Education.year}</span></p>
          <Divider>Proffesional Experience</Divider>
          <h5>{userInput.experience.job}</h5>
          <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.location}</span>
          | <span>{userInput.experience.duration}</span></p>
          <Divider>Skills</Divider>
          <Stack spacing={2} direction="row" sx={{ flexWrap: "wrap", gap: "10px", padding: "10px" }}>
            {
            userInput.skills.map(skill => (
              <Button variant="contained">{skill}</Button>
            ))
            }
          </Stack>
        </Paper>
        </Box>
    </div>
      }
    </div>
  );
}

export default Preview
