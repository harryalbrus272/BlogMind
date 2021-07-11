import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Header, Button, Icon } from "semantic-ui-react";

const Navbar = () => {
  let location = useLocation();
  //Location instance to switch between the post and back button
  const [redirectLocation, setRedirectLocation] = useState("/");
  const [arrowDirection, setArrowDirection] = useState("arrow right");
  const [buttonText, setButtonText] = useState("Create Post");
  //Changing button parameters on location change
  useEffect(() => {
    if (location.pathname === "/create") {
      setRedirectLocation("/");
      setArrowDirection("arrow left");
      setButtonText("Back");
    } else {
      setRedirectLocation("/create");
      setArrowDirection("arrow right");
      setButtonText("Post");
    }
  }, [location]);
  return (
    <Container fluid>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "14px",
          }}
        >
          <Link to="/">
            <Header
              as="h1"
              style={{
                margin: "0px",
              }}
            >
              BlogMind
            </Header>
          </Link>
          <Link to={redirectLocation}>
            <Button animated size="large" style={{ color: "black" }}>
              <Button.Content visible>{buttonText}</Button.Content>
              <Button.Content hidden>
                <Icon name={arrowDirection} />
              </Button.Content>
            </Button>
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default Navbar;
