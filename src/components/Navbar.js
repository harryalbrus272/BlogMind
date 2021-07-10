import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Header, Button, Icon } from "semantic-ui-react";

const Navbar = (props) => {
  //Location instance to switch between the post and back button
  let location = useLocation();
  return (
    <div>
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

          {location.pathname !== "/create" ? (
            <Link to="/create">
              <Button animated size="large" style={{ color: "black" }}>
                <Button.Content visible>Post</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button animated size="large" style={{ color: "black" }}>
                <Button.Content visible>Back</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow left" />
                </Button.Content>
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
