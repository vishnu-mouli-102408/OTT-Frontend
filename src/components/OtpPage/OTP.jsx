/* eslint-disable no-unused-vars */
import { useState } from "react";
import OtpInput from "react-otp-input";
import "./OTP.css";
import { Button, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { verifyOTP } from "../../services/userAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Snackbar from "../../common/Table/Snackbar/Snackbar";
// import KeyIcon from "@mui/icons-material/Key";
const OTPScreen = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();

  const from =
    location?.state?.from?.pathname ||
    (localStorage.getItem("role") == "user"
      ? "/"
      : localStorage.getItem("role") == "distributor"
      ? "/distributor"
      : "/admin");

  const userState = useSelector((state) => state.user);
  const handleOTP = () => {
    console.log(userState.secret);
    verifyOTP({ otp, secret: userState.secretCode })
      .then((res) => {
        console.log(res);
        setMessage("OTP Validation Successfull");
        setType("success");
        // alert("valid otp");
        navigate(from, { replace: true });
      })
      .catch(() => {
        setMessage("OTP Validation Failed. Please try again.");
        setType("error");
        // alert("invalid otp");
      });
  };
  return (
    <div className="flex-center justify-content-center mainContainer bg-image">
      <Paper
        style={{
          maxWidth: "800px",
          padding: "50px",
          color: "#f7f7f2",
          backgroundColor: "#000000",
          border: "1px solid #222028",
        }}
      >
        <div
          className="flex-column align-items-center "
          style={{ margin: "20px" }}
        >
          <img
            src="https://agent.mobisafar.com/MOBISAFAR/Images/WebSite/password.png"
            height={100}
            width={100}
          />
        </div>
        <div className="otptitle">
          Hi Test, We have sent you a six digit verification code to provided
          email and contact number. If you did not receive the code, Select
          resend code. Code will expire in 10 minutes
        </div>
        <OtpInput
          className="flex-center"
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputStyle="eachInput"
          renderSeparator={(index) => (
            <div key={index} style={{ margin: "0 5px", fontWeight: "500" }}>
              -
            </div>
          )}
          // renderInput={(props) => <input {...props} />}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: `${78 / 6}%`,
                height: "65px",
                borderRadius: "10px",
                fontSize: "20px",
                textAlign: "center",
                backgroundColor: "#e31da",
                background: "transparent",
                border: "2px solid #bb8a33",
                color: "white",
              }}
            />
          )}
        />
        <Button variant="outlined" className="resendbutton">
          Resend Code
        </Button>
        <Button
          color="primary"
          variant="contained"
          className="signinBtn"
          onClick={() => handleOTP()}
        >
          <Snackbar message={message} type={type} name="Sign In" />
        </Button>
      </Paper>
    </div>
  );
};
export default OTPScreen;
