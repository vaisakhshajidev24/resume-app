import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Link } from 'react-router-dom';




function Header() {

  const toolinto = "A Resume builder for generating resumes easily and downloading them"




  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "purple" }}>
          <Toolbar>
            <img
              width={"50px"}
              style={{ marginRight: "15px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVXTsGoN2OB-NqetGji3hgETSqos7XLeDzg&s"
              alt="logo"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              <Link to={"/"} style={{textDecoration:"none",color:"inherit"}}>Resume-Builder</Link>
            </Typography>
            <Tooltip title={toolinto}>
              <Button color="inherit">About Us</Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header
