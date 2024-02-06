// Client/src/components/Login.js
import React from "react";

const Login = () => {
  return (
    <div>
      {/* Your HTML content from logInSignup.html */}
      <html lang="en">

      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <link rel="stylesheet" href="styles.css" />
        <title>Login Page</title>
      </head>

      <body>

        <div className="container" id="container">
          <div className="form-container sign-up">
            <form action="/login-signup">
              <h1>Create Account</h1>

              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form>
              <h1>Sign In</h1>

              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forget Your Password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className="hidden" id="login">Sign In</button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details</p>
                <button className="hidden" id="register">Sign Up</button>
              </div>
            </div>
          </div>
        </div>

        <script src="script.js"></script>
      </body>

      </html>
    </div>
  );
};

export default Login;
