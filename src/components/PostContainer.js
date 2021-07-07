import React from "react";
import Posts from "./Posts";
import { Grid, Container } from "semantic-ui-react";

const PostContainer = () => {
  return (
    <div>
      <Container fluid style={{ padding: "10px 0" }}>
        <Grid>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Grid.Column key={item} width={16} style={{ padding: "5px 0" }}>
              <Posts />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PostContainer;
