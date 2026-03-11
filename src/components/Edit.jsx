import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaRegEdit } from "react-icons/fa";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { IoIosClose } from "react-icons/io";
import { editResumeAPI, getResumeAPI } from "../services/allAPI";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Edit({ resumeId, setUpdateResume }) {
  // console.log(resumeId)

  const [userInput, setUserInput] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userSkill,setUserSkill] = React.useState("")

  //get editresume details

  const getEditResumeDetails = async () => {
    try {
      const result = await getResumeAPI(resumeId);
      setUserInput(result?.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    resumeId && getEditResumeDetails();
  }, [resumeId]);


  //add skill
  const addSkill = () => {

    if(userSkill){
      if(userInput.skills.includes(userSkill)){

        alert("skill already exist...add another skill")

      } else{
        setUserInput({...userInput,skills:[...userInput.skills,userSkill]})
      }
    }
    setUserSkill("")

  }

  // remove skill
  const removeSkill = (skill) => {
    setUserInput({...userInput,skills:userInput.skills.filter(item => item!=skill)})
  }

  //updtae
  const handleUpdate = async () => {
    try {
      const result = await editResumeAPI(userInput?.id,userInput)
      console.log(result);
      handleClose()
      setUpdateResume(result?.data)
    } catch (err) {
      console.log(err)
    }
  }

  // console.log(userInput);

  return (
    <div>
      <button onClick={handleOpen} className="btn text-primary fs-1">
        <FaRegEdit />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>Personal Details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      name: e.target.value,
                    },
                  })
                }
                label="Full Name"
                variant="standard"
                value={userInput?.personalDetails?.name}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      jobTitle: e.target.value,
                    },
                  })
                }
                label="Job Title"
                variant="standard"
                value={userInput?.personalDetails?.jobTitle}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      location: e.target.value,
                    },
                  })
                }
                label="Location"
                variant="standard"
                value={userInput?.personalDetails?.location}
              />
            </div>

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
                value={userInput?.personalDetails?.email}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      phone: e.target.value,
                    },
                  })
                }
                label="Phone Number"
                variant="standard"
                value={userInput?.personalDetails?.phone}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      github: e.target.value,
                    },
                  })
                }
                label="Github Profile Link"
                variant="standard"
                value={userInput?.personalDetails?.github}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      linkedIn: e.target.value,
                    },
                  })
                }
                label="LinkedIn Profile Link"
                variant="standard"
                value={userInput?.personalDetails?.linkedIn}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      portfolio: e.target.value,
                    },
                  })
                }
                label="Portfolio Link"
                variant="standard"
                value={userInput?.personalDetails?.portfolio}
              />
            </div>

            <h3>Educational Details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    Education: {
                      ...userInput.Education,
                      course: e.target.value,
                    },
                  })
                }
                label="Course Name"
                variant="standard"
                value={userInput?.Education?.course}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    Education: {
                      ...userInput.Education,
                      collage: e.target.value,
                    },
                  })
                }
                label="Collage Name"
                variant="standard"
                value={userInput?.Education?.collage}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    Education: {
                      ...userInput.Education,
                      university: e.target.value,
                    },
                  })
                }
                label="University"
                variant="standard"
                value={userInput?.Education?.university}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    Education: { ...userInput.Education, year: e.target.value },
                  })
                }
                label="Year Of Passout"
                variant="standard"
                value={userInput?.Education?.year}
              />
            </div>

            <h3>Proffesional Details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      job: e.target.value,
                    },
                  })
                }
                label="Job or Internship"
                variant="standard"
                value={userInput?.experience?.job}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      company: e.target.value,
                    },
                  })
                }
                label="Company Name"
                variant="standard"
                value={userInput?.experience?.company}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      location: e.target.value,
                    },
                  })
                }
                label="Location"
                variant="standard"
                value={userInput?.experience?.location}
              />
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      duration: e.target.value,
                    },
                  })
                }
                label="Duration"
                variant="standard"
                value={userInput?.experience?.duration}
              />
            </div>

            <h3>Skills</h3>
            <div
              spacing={2}
              className="d-flex flex-wrap align-items-center justify-content-between "
            >
              <TextField
                id="standard-basic"
                label="Add Skill"
                variant="standard"
                onChange={e=>setUserSkill(e.target.value)}
                value={userSkill}
              />
              <Button className="me-3" variant="text" sx={{ maxWidth: "40px" }} onClick={addSkill}>
                Add
              </Button>
            </div>
            <div className="mb-5">
              <h5>Added Skills : </h5>
              <div className="d-flex flex-wrap justify-content-between">
                {userInput?.skills?.length > 0 &&
                  userInput?.skills.map((skill) => (
                    <span className="btn btn-primary d-flex justify-content-center align-items-center">
                      {skill}
                      <button className="btn text-light" onClick={()=>removeSkill(skill)}>
                        <IoIosClose />
                      </button>
                    </span>
                  ))}
              </div>
            </div>

            <h3>Proffesional Summary</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-multiline-static"
                onChange={(e) => {
                  setUserInput({ ...userInput, summary: e.target.value });
                }}
                label="Write a Short summary of yourself"
                multiline
                rows={4}
                variant="standard"
                value={userInput?.summary}
              />
            </div>
            <Button onClick={handleUpdate}>Update</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
