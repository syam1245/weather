import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';

function Header() {

  function handleClick() {
    // redirect the browser to the login.html file
    window.location.href = "/login/logInSignup.html";
  }


  return (
    <>
      <div className="nav-bar">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand id="header-name" href="#home">
              Weather Dashboard
            </Navbar.Brand>
            <Button variant="dark" onClick={handleClick}>Login</Button>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
