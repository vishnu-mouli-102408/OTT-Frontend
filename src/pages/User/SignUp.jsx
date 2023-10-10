import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { userRegistration } from "../../services/userAuth";
import { useDispatch } from "react-redux";
import { setUserRoles } from "../../userSlice";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        OTT Platform
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [selectedRole, setSelectedRole] = useState("user"); // Default selected role is 'user'

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const form = useForm();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  const onSubmit = (data) => {
    const newData = {
      username: data.firstName + " " + data.lastName,
      email: data.email,
      phoneNumber: data.mobile,
      password: data.password,
      gender: "male",
      DOB: "29-07-2203",
      role: selectedRole,
    };
    // console.log(newData, data);
    dispatch(setUserRoles(selectedRole));
    userRegistration(newData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
          <Avatar sx={{ m: 1, bgcolor: "#131314" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="white">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  inputProps={{ style: { color: "white" } }}
                  style={{
                    backgroundColor: "#131314",
                    color: "#fff",
                    borderRadius: "6px",
                  }}
                  color="warning"
                  autoFocus
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputProps={{ style: { color: "white" } }}
                  style={{
                    backgroundColor: "#131314",
                    color: "#fff",
                    borderRadius: "6px",
                  }}
                  color="warning"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputProps={{ style: { color: "white" } }}
                  style={{
                    backgroundColor: "#131314",
                    color: "#fff",
                    borderRadius: "6px",
                  }}
                  color="warning"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      // /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                      message: "Invalid Email Address",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                  autoComplete="mobile"
                  inputProps={{ style: { color: "white" } }}
                  style={{
                    backgroundColor: "#131314",
                    color: "#fff",
                    borderRadius: "6px",
                  }}
                  color="warning"
                  {...register("mobile", {
                    required: "Mobile Number is required",
                    // valueAsNumber: true,
                    pattern: {
                      value: /^\+?[1-9][0-9]{7,14}$/,
                      message: "Invalid Mobile Number",
                    },
                  })}
                  error={!!errors.mobile}
                  helperText={errors.mobile?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputProps={{ style: { color: "white" } }}
                  style={{
                    backgroundColor: "#131314",
                    color: "#fff",
                    borderRadius: "6px",
                  }}
                  color="warning"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 4,
                      message: "Password must be more than 4 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Password cannot exceed more than 10 characters",
                    },
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid>
            </Grid>
            <FormControl
              component="fieldset"
              style={{ padding: "14px", color: "white", margin: "5px" }}
            >
              <FormLabel component="legend">Select a Role</FormLabel>
              <RadioGroup
                aria-label="role"
                name="role"
                value={selectedRole}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "white",
                }}
                onChange={handleRoleChange}
              >
                <FormControlLabel
                  value="user"
                  control={<Radio sx={{ color: "white" }} />}
                  label="User"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Admin"
                />
                <FormControlLabel
                  value="distributor"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Distributor"
                />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              //   disabled={!isDirty || !isValid}
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  <Typography
                    sx={{ textDecoration: "underline" }}
                    style={{ color: "rgb(187, 138, 51)" }}
                  >
                    {"Already have an account? Sign in"}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
