import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./OTP.css";
import { Button, Paper } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
const OTPScreen = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="flex-center justify-content-center mainContainer ">
      <Paper style={{ maxWidth: "800px", padding: "50px" }}>
        <div
          className="flex-column align-items-center"
          style={{ margin: "10px" }}
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
                width: `${90 / 6}%`,
                height: "65px",
                borderRadius: "10px",
                fontSize: "20px",
                textAlign: "center",
              }}
            />
          )}
        />
        <Button variant="outlined" className="resendbutton">
          Resend Code
        </Button>

        <Button color="primary" variant="contained" className="signinBtn">
          Sign In
        </Button>
      </Paper>
    </div>
  );
};
export default OTPScreen;
