import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Header, Button, Icon } from "semantic-ui-react";

const Navbar = () => {
  let location = useLocation();
  console.log(location.pathname);
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
          <Header
            as="h1"
            style={{
              margin: "0px",
            }}
          >
            BlogMind
          </Header>
          <Button animated size="large" style={{ color: "black" }}>
            <Button.Content visible>Post</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
