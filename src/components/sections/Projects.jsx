import React from "react";
import { Box, Container, Typography, Button, Stack, Paper } from "@mui/material";

import babyBirthday from "../../assets/DSC01834-BNiwbCx4.jpg";
import modelPhotoshoot from "../../assets/IMG_4323-Dxh5C1id.jpg";
import marriagePhotoshoot from "../../assets/DSC02154-D7aGm7xC.jpg";

export const Projects = () => {
  const openDrive = () => {
    window.open(
      "https://drive.google.com/drive/folders/1TkEGPXBgSKvRKM_N4r8IJo6nu5P8_8ys",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const projects = [
    { title: "Baby Birthday", imageUrl: babyBirthday },
    { title: "Model Photoshoot", imageUrl: modelPhotoshoot },
    { title: "Marriage Photoshoot", imageUrl: marriagePhotoshoot },
  ];

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
        bgcolor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        px: 2,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: { xs: 6, md: 8 },
            fontFamily: "'Montserrat', sans-serif",
            background: "linear-gradient(90deg, #ff0066, #00ccff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: 2,
          }}
        >
          Projects
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 6, sm: 8 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {projects.map(({ title, imageUrl }, index) => (
            <Paper
              key={index}
              elevation={8}
              sx={{
                width: { xs: "100%", sm: 320 },
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow:
                  "0 10px 20px rgba(0, 0, 0, 0.4), 0 6px 6px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow:
                    "0 20px 40px rgba(255, 0, 102, 0.5), 0 10px 20px rgba(0, 204, 255, 0.5)",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#121212",
                px: 1,
                py: 2,
              }}
              onClick={() => window.open(imageUrl, "_blank")}
              aria-label={`View project: ${title}`}
            >
              <Box
                component="img"
                src={imageUrl}
                alt={title}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.7))",
                  transition: "transform 0.3s ease",
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  userSelect: "none",
                }}
              >
                {title}
              </Typography>
            </Paper>
          ))}
        </Stack>

        <Button
          variant="contained"
          size="large"
          onClick={openDrive}
          sx={{
            mt: { xs: 8, md: 10 },
            px: 5,
            py: 1.8,
            fontWeight: "bold",
            fontSize: "1.1rem",
            borderRadius: 3,
            background: "linear-gradient(90deg, #ff0066, #00ccff)",
            boxShadow: "0 4px 15px rgba(255, 0, 102, 0.6)",
            transition: "background 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #e6005c, #0099cc)",
              boxShadow: "0 6px 20px rgba(204, 0, 255, 0.7)",
            },
          }}
        >
          For More, Check Out the Drive
        </Button>
      </Container>
    </Box>
  );
};
