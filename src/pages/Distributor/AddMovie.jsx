import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
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
// import Background from "./section.jpg";

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
                      name="movieTitle"
                      fullWidth
                      id="movieTitle"
                      label="Movie title"
                      autoFocus
                      InputLabelProps={{ sx: { color: "white" } }}
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
                      name="duration"
                      autoComplete="duration"
                      InputLabelProps={{ sx: { color: "white" } }}
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
                      label="Language Used"
                      name="language"
                      autoComplete="language"
                      InputLabelProps={{ sx: { color: "white" } }}
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
                      label="Year of Release"
                      name="year"
                      autoComplete="year"
                      InputLabelProps={{ sx: { color: "white" } }}
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
                    <Avatar
                      alt="Travis Howard"
                      variant="square"
                      src="https://random.imagecdn.app/500/150"
                      sx={{
                        width: 150,
                        height: 100,
                        margin: "auto",
                        padding: 2,
                      }}
                    />
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
                    <Avatar
                      variant="square"
                      sx={{
                        width: 150,
                        height: 100,
                        margin: "auto",
                        padding: 2,
                      }}
                      alt="Travis Howard"
                      src="https://random.imagecdn.app/500/150"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      InputLabelProps={{ sx: { color: "white" } }}
                      style={{
                        backgroundColor: "#131314",
                        color: "#fff",
                        borderRadius: "6px",
                      }}
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
                        InputLabelProps={{ sx: { color: "red" } }}
                        style={{
                          backgroundColor: "#131314",
                          color: "#fff",
                          borderRadius: "6px",
                        }}
                        color="warning"
                        // onChange={handleChange}
                      >
                        <MenuItem value="">Ten</MenuItem>
                        <MenuItem value="">Twenty</MenuItem>
                        <MenuItem value="">Thirty</MenuItem>
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
                      <VisuallyHiddenInput type="file" />
                    </Button>
                    <Avatar
                      alt="Travis Howard"
                      variant="square"
                      src="https://random.imagecdn.app/500/150"
                      sx={{
                        width: 150,
                        height: 100,
                        margin: "auto",
                        padding: 2,
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
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
