import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import { distributorData } from "../../components/Sidebar/Sidebardata";
import "./distributor.css";
import { useState } from "react";
// import Background from "./section.jpg";

import axios from "axios";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddMovie = () => {
  const [value, setVAlue] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    length: "",
    description: "",
    yearOfRelease: "",
    language: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // console.log(videoFile.name);
    // console.log(file);
    setVideoFile(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append("video", videoFile);
    dataToSend.append("name", formData.name);
    dataToSend.append("length", formData.length);
    dataToSend.append("description", formData.description);
    dataToSend.append("yearOfRelease", formData.yearOfRelease);
    dataToSend.append("language", formData.language);

    try {
      const response = await axios.post("/api/upload", dataToSend);
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <>
      <div className="flex-row" style={{ height: "100vh" }}>
        <Sidebar SidebarData={distributorData} />
        <div style={{ overflow: "auto", width: "100%" }}>
          <CssBaseline />
          <Paper
            style={{
              padding: "50px",
              color: "#f7f7f2",
              backgroundColor: "#000000",
              // backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              border: "1px solid #222028",
            }}
          >
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              style={{
                border: "1px solid rgb(34, 32, 40)",
                padding: "25px",
                borderRadius: "15px",
              }}
            >
              <Typography component="h1" variant="h4" color="white">
                Create Movie
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="movie-title"
                      name="name"
                      required
                      onChange={handleInputChange}
                      value={formData.name}
                      fullWidth
                      id="movieTitle"
                      label="Movie title"
                      autoFocus
                      inputProps={{ style: { color: "white" } }}
                      inputlabelprops={{ sx: { color: "white" } }}
                      style={{
                        backgroundColor: "#131314",
                        color: "#fff",
                        borderRadius: "6px",
                      }}
                      color="warning"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="duration"
                      label="Duration"
                      name="length"
                      required
                      onChange={handleInputChange}
                      value={formData.length}
                      autoComplete="duration"
                      inputlabelprops={{ sx: { color: "white" } }}
                      inputProps={{ style: { color: "white" } }}
                      style={{
                        backgroundColor: "#131314",
                        color: "#fff",
                        borderRadius: "6px",
                      }}
                      color="warning"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="language"
                      required
                      label="Language Used"
                      name="language"
                      onChange={handleInputChange}
                      value={formData.language}
                      autoComplete="language"
                      inputlabelprops={{ sx: { color: "white" } }}
                      inputProps={{ style: { color: "white" } }}
                      style={{
                        backgroundColor: "#131314",
                        color: "#fff",
                        borderRadius: "6px",
                      }}
                      color="warning"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="year"
                      required
                      label="Year of Release"
                      name="yearOfRelease"
                      onChange={handleInputChange}
                      value={formData.yearOfRelease}
                      autoComplete="year"
                      inputlabelprops={{ sx: { color: "white" } }}
                      inputProps={{ style: { color: "white" } }}
                      style={{
                        backgroundColor: "#131314",
                        color: "#fff",
                        borderRadius: "6px",
                      }}
                      color="warning"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12} sm={6}>
                    <Button
                      size="large"
                      component="label"
                      variant="outlined"
                      startIcon={<CloudUploadIcon />}
                      fullWidth
                      sx={{ height: 100, marginTop: 4 }}
                      style={{
                        borderRadius: "6px",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "#fff",
                        textTransform: "uppercase",
                        border: "2px solid #bb8a33",
                      }}
                    >
                      Drop Your Image Here
                      <VisuallyHiddenInput type="file" />
                    </Button>
                    <Typography
                      component="h4"
                      variant="subtitle1"
                      color="white"
                      align="center"
                      gutterBottom
                    >
                      {""}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      size="large"
                      component="label"
                      variant="outlined"
                      fullWidth
                      startIcon={<CloudUploadIcon />}
                      sx={{ height: 100, marginTop: 4 }}
                      style={{
                        borderRadius: "6px",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "#fff",
                        textTransform: "uppercase",
                        border: "2px solid #bb8a33",
                      }}
                    >
                      Drop Your Image Here
                      <VisuallyHiddenInput
                        type="file"
                        aria-label="Trhumbnail"
                      />
                    </Button>
                    <Typography
                      component="h4"
                      variant="subtitle1"
                      color="white"
                      align="center"
                      gutterBottom
                    >
                      {""}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      name="description"
                      required
                      label="Description"
                      onChange={handleInputChange}
                      value={formData.description}
                      multiline
                      rows={4}
                      inputlabelprops={{ sx: { color: "white" } }}
                      style={{
                        backgroundColor: "#131314",
                        borderRadius: "6px",
                      }}
                      inputProps={{ style: { color: "white" } }}
                      color="warning"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Category"
                        inputlabelprops={{ sx: { color: "white" } }}
                        // inputProps={{ style: { color: "white" } }}
                        style={{
                          backgroundColor: "#131314",
                          borderRadius: "6px",
                          color: "white",
                        }}
                        color="warning"
                        value={value}
                        onChange={(e) => setVAlue(e.target.value)}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12}>
                    <Button
                      size="large"
                      component="label"
                      variant="outlined"
                      startIcon={<CloudUploadIcon />}
                      fullWidth
                      sx={{ height: 100, marginTop: 4 }}
                      style={{
                        borderRadius: "6px",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        color: "#fff",
                        textTransform: "uppercase",
                        border: "2px solid #bb8a33",
                      }}
                    >
                      Drop Your Movie Here
                      <VisuallyHiddenInput
                        type="file"
                        value={""}
                        onChange={handleFileChange}
                      />
                    </Button>
                    <Typography
                      component="h4"
                      variant="subtitle1"
                      color="white"
                      align="center"
                    >
                      {videoFile.name}
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                  style={{
                    borderRadius: "6px",
                    backgroundColor: "transparent",
                    fontSize: "14px",
                    color: "#fff",
                    textTransform: "uppercase",
                    border: "2px solid #bb8a33",
                  }}
                >
                  Publish Movie
                </Button>
              </Box>
            </Box>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
