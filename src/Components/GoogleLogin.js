import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};
console.log(process.env)
function GoogleLog() {
  return (
    <GoogleLogin
      clientId= {process.env.REACT_APP_API_KEY }
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GoogleLog;
