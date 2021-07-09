import React from "react";
import Posts from "./Posts";
import { Grid, Container } from "semantic-ui-react";

const PostContainer = (props) => {
  console.log('props in post conatiner', props);
  const {list} = props.blogs;
  return (
    <div>
      <Container fluid style={{ padding: "10px 0" }}>
        <Grid>
          {list.map((blog) => (
            <Grid.Column key={blog._id} width={16} style={{ padding: "5px 0" }}>
              <Posts blog={blog} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PostContainer;
