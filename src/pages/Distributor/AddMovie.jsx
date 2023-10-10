/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  // LoadingButton,
} from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import { distributorData } from "../../components/Sidebar/Sidebardata";
import "./distributor.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import Background from "./section.jpg";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";
import { DEV_API } from "../../env";

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
  const [loading, setLoading] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    length: "",
    description: "",
    yearOfRelease: "",
    language: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // console.log(file?.name);
    // console.log(file);
    setVideoFile(file);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // console.log(videoFile.name);
    // console.log(f);
    console.log(event);
    setImageFile(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJoYXJhdGggR2FkaSIsImVtYWlsIjoiYmhhcmF0aC5nYWRpQGd5dHdvcmt6LmNvbSIsImlhdCI6MTY5NjkzMDg5MSwiZXhwIjoxNjk3MTkwMDkxfQ.Eb3cnSWsnMJ0KaJthcmo05ska8RmYN3r-3OmXZuUPc8`;

  const onSubmit = async (event) => {
    event.preventDefault();
    const dataToSend = new FormData();
    // const videoAndThumbnailArray = [videoFile, videoFile]; // Create an array of files

    // console.log([videoFile, videoFile]);
    dataToSend.append("files", videoFile);
    dataToSend.append("files", imageFile);
    dataToSend.append("movieName", formData.name);
    dataToSend.append("movieLength", formData.length);
    dataToSend.append("movieDescription", formData.description);
    dataToSend.append("yearOfRelease", formData.yearOfRelease);
    dataToSend.append("directorName", "Bharath");
    dataToSend.append("singerName", "sukanya");
    dataToSend.append("editorName", "venky");
    dataToSend.append("musicDirectorName", "praveen");
    dataToSend.append("commission", "123");
    dataToSend.append("distributorName", "Kumar");
    dataToSend.append("category", "Funny");

    // dataToSend.append("user);
    dataToSend.append("language", formData.language);
    setLoading(true);
    axios
      .post(`${DEV_API}/api/v1/upload-video`, dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    try {
      const response = await axios.post(
        `${DEV_API}/api/v1/upload-video`,
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const form = useForm();

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

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
              <Box
                component="form"
                noValidate
                sx={{ mt: 3 }}
                onSubmit={handleSubmit(onSubmit)}
              >
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
                      {...register("title", {
                        required: "Title is required",
                      })}
                      error={!!errors.title}
                      helperText={errors.title?.message}
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
                      {...register("duration", {
                        required: "Duration is Required",
                      })}
                      error={!!errors.duration}
                      helperText={errors.duration?.message}
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
                      {...register("language", {
                        required: "Language is Required",
                      })}
                      error={!!errors.language}
                      helperText={errors.language?.message}
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
                      {...register("yearOfRelease", {
                        required: "Year is Required",
                      })}
                      error={!!errors.yearOfRelease}
                      helperText={errors.yearOfRelease?.message}
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
                  <Grid item xs={12}>
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
                        {...register("thumbnail", {
                          required: "Thumbnail Image is Required",
                        })}
                        error={!!errors.thumbnail}
                        helperText={errors.thumbnail?.message}
                        type="file"
                        aria-label="Trhumbnail"
                        onChange={handleImageChange}
                      />
                    </Button>
                    <FormHelperText
                      style={{ color: "red", marginBottom: "16px" }}
                    >
                      {errors?.thumbnail?.message}
                    </FormHelperText>
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
                      {...register("description", {
                        required: "Description is Required",
                      })}
                      error={!!errors.description}
                      helperText={errors.description?.message}
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
                        {...register("category", {
                          required: " Category is Required",
                        })}
                        error={!!errors.category}
                        helpertext={errors.category?.message}
                        onChange={(e) => setVAlue(e.target.value)}
                      >
                        <MenuItem value={10}>Action</MenuItem>
                        <MenuItem value={20}>Comedy</MenuItem>
                        <MenuItem value={30}>Thriller</MenuItem>
                        <MenuItem value={40}>Romance</MenuItem>
                        <MenuItem value={50}>Other</MenuItem>
                      </Select>
                      <FormHelperText style={{ color: "red" }}>
                        {errors?.category?.message}
                      </FormHelperText>
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
                        {...register("movieFile", {
                          required: "MovieFile is Required",
                        })}
                        error={!!errors.movieFile}
                        helperText={errors.movieFile?.message}
                        type="file"
                        value={""}
                        onChange={handleFileChange}
                      />
                    </Button>
                    <FormHelperText style={{ color: "red" }}>
                      {errors?.movieFile?.message}
                    </FormHelperText>
                    <Typography
                      component="h4"
                      variant="subtitle1"
                      color="white"
                      align="center"
                    >
                      {videoFile?.name}
                    </Typography>
                  </Grid>
                </Grid>
                {/* <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
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
                </Button> */}
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  loading={loading} // Set loading to true when loading
                  onClick={handleSubmit}
                  style={{
                    borderRadius: "6px",
                    backgroundColor: "transparent",
                    fontSize: "14px",
                    color: "#fff",
                    minHeight: "40px",
                    textTransform: "uppercase",
                    border: "2px solid #bb8a33",
                  }}
                  loadingIndicator={<CircularProgress size={24} />}
                >
                  {!loading && "Publish Movie"}
                </LoadingButton>
              </Box>
            </Box>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
