import React from "react";
import { Container, Header, Button, Icon, Divider } from "semantic-ui-react";

const Navbar = () => {
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
          <Button animated>
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
