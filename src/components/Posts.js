import React from "react";
import { Segment, Container, Header, Button } from "semantic-ui-react";

const Posts = () => {
  return (
    <div>
      <Container>
        <Segment>
          <Header>DigitalStory Telling in Today's World</Header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor
            nulla quasi cum in officiis laboriosam neque ducimus quo accusamus
            veritatis soluta deserunt fuga asperiores accusantium dignissimos
            facere, numquam quaerat.
          </p>
          <Button size='medium' style={{ color: "black" }}>READ MORE</Button>
        </Segment>
      </Container>
    </div>
  );
};

export default Posts;
