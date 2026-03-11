import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Pnf() {
 
    const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 500,
          width: "100%",
          p: 5,
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "80px", sm: "110px" },
            fontWeight: 800,
            color: "#eb1313",
            letterSpacing: "4px",
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: { xs: "20px", sm: "24px" },
            fontWeight: 600,
            color: "rgba(209, 8, 8, 0.9)",
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: "14px",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          The page you are looking for doesn’t exist or was moved.
        </Typography>

        <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: 700,
              px: 3,
              py: 1.2,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#e5e5e5",
              },
            }}
          >
            Go Home
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            sx={{
              borderColor: "rgba(255,255,255,0.25)",
              color: "#fff",
              fontWeight: 700,
              px: 3,
              py: 1.2,
              borderRadius: 2,
              "&:hover": {
                borderColor: "#fff",
                backgroundColor: "rgba(255,255,255,0.06)",
              },
            }}
          >
            Go Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Pnf;
