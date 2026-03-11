import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { IoIosClose } from "react-icons/io";
import { addResumeAPI } from "../services/allAPI";
import swal from 'sweetalert'

function Steps({ userInput,setUserInput,setFinish,setResumeId }) {

  //console.log(userInput);

  const userSkillsRef = React.useRef()


  const steps = ["Basic Information","Contact Details","Educational Details","Work Experience","Skills & Certifications","Review & Submit",];
  const suggestionSkills = ["REACT","ANGULAR","NODE","EXPRESS","MONGODB","JAVASCRIPT","GIT","TAILWIND",];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //addskill
  const addSkill = (inputSkill) => {

    if(inputSkill){
      if(userInput.skills.includes(inputSkill)){

        alert("skill already exist...add another skill")

      } else{
        setUserInput({...userInput,skills:[...userInput.skills,inputSkill]})
      }
    }

  }

  // remove skill
  const removeSkill = (skill) => {
    setUserInput({...userInput,skills:userInput.skills.filter(item => item!=skill)})
  }

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3>Personal Details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,personalDetails:{...userInput.personalDetails,name:e.target.value}})}
                label="Full Name"
                variant="standard"
                value={userInput.personalDetails.name}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,personalDetails:{...userInput.personalDetails,jobTitle:e.target.value}})}
                label="Job Title"
                variant="standard"
                value={userInput.personalDetails.jobTitle}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,personalDetails:{...userInput.personalDetails,location:e.target.value}})}
                label="Location"
                variant="standard"
                value={userInput.personalDetails.location}
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h3>Contact Details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      email: e.target.value,
                    },
                  })
                }
                label="Email"
                variant="standard"
                value={userInput.personalDetails.email}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,personalDetails:{...userInput.personalDetails,phone:e.target.value}})}
                label="Phone Number"
                variant="standard"
                value={userInput.personalDetails.phone}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,personalDetails:{...userInput.personalDetails,github:e.target.value}})}
                label="Github Profile Link"
                variant="standard"
                value={userInput.personalDetails.github}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,personalDetails:{...userInput.personalDetails,linkedIn:e.target.value}})}
                label="LinkedIn Profile Link"
                variant="standard"
                value={userInput.personalDetails.linkedIn}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,personalDetails:{...userInput.personalDetails,portfolio:e.target.value}})}
                label="Portfolio Link"
                variant="standard"
                value={userInput.personalDetails.portfolio}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3>Educational Details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,Education:{...userInput.Education,course:e.target.value}})}
                label="Course Name"
                variant="standard"
                value={userInput.Education.course}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,Education:{...userInput.Education,collage:e.target.value}})}
                label="Collage Name"
                variant="standard"
                value={userInput.Education.collage}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,Education:{...userInput.Education,university:e.target.value}})}
                label="University"
                variant="standard"
                value={userInput.Education.university}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,Education:{...userInput.Education,year:e.target.value}})}
                label="Year Of Passout"
                variant="standard"
                value={userInput.Education.year}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3>Proffesional Details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,experience:{...userInput.experience,job:e.target.value}})}
                label="Job or Internship"
                variant="standard"
                value={userInput.experience.job}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,experience:{...userInput.experience,company:e.target.value}})}
                label="Company Name"
                variant="standard"
                value={userInput.experience.company}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,experience:{...userInput.experience,location:e.target.value}})}
                label="Location"
                variant="standard"
                value={userInput.experience.location}
              />
              <TextField
                id="standard-basic" onChange={e => setUserInput({...userInput,experience:{...userInput.experience,duration:e.target.value}})}
                label="Duration"
                variant="standard"
                value={userInput.experience.duration}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3>Skills</h3>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2} direction="row" sx={{ flexWrap: "wrap", gap: "10px", padding: "10px" }} >
                {/* <TextField id="standard-basic" label="Add Skill" variant="standard"/> */}
                <input ref={userSkillsRef} type="text" className="form-control" placeholder="add skills"/>
                <Button onClick={() => addSkill(userSkillsRef.current.value)} className="me-3" variant="text" sx={{ maxWidth: "40px" }} > Add </Button>
              </Stack>
              <div>
                <h5>Suggestions : </h5>
                <div className="d-flex flex-wrap justify-content-between">
                  {suggestionSkills.map((skills) => (
                    <Button
                      key={skills}
                      onClick={() => addSkill(skills)}
                      sx={{ padding: "5px" }}
                      size="small"
                      variant="outlined"
                    >
                      {skills}
                    </Button>
                  ))}
                </div>
              </div>
              <br></br>
              <div>
                <h5>Added Skills : </h5>
                <div className="d-flex flex-wrap justify-content-between">
                 {
                    userInput.skills.length > 0 ? userInput.skills.map(skill => (
                    <span key={skill} className="btn btn-primary d-flex justify-content-center align-items-center">
                    {skill} <button className="btn text-light" onClick={()=>removeSkill(skill)}><IoIosClose /></button></span>
                    )): <p>nothing added</p>
                 
                 }
                </div>
              </div>
            </Box>
          </div>
        );

      case 5:
        return (
          <div>
            <h3>Proffesional Summary</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-multiline-static" onChange={e => {setUserInput({...userInput,summary: e.target.value})}}
                label="Write a Short summary of yourself"
                multiline
                rows={4}
                placeholder="Eg : Im a passionate full stack developer with hands-on experience in React ,node"
                variant="standard"
                value={userInput.summary}
              />
            </div>
          </div>
        );
    }
  };

  const handleaddResumeAPI= async () => {

   // alert("api called")
   const{name,jobTitle,location}=userInput.personalDetails
   if(name && jobTitle && location){
      try{
        const result = await addResumeAPI(userInput)
        console.log(result)
        setFinish(true)
        swal("success!", "Resume Created!", "success");
        setResumeId(result?.data?.id)
      }catch(err){
        console.log(err);
        swal("Error!", "Resume Creation Failed!", "error");
      }
   }else{
      alert("plese fill missing fields")
   }

  }

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box>{renderStepContent(activeStep)}</Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
                {activeStep === steps.length - 1 ? <Button onClick={handleaddResumeAPI}>Finish</Button> : <Button onClick={handleNext}>Next</Button>}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}

export default Steps;
