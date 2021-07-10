import React from "react";
import Posts from "./Posts";
import { Grid, Container } from "semantic-ui-react";
import { useEffect } from "react";
import { clearErrorState, clearPostSaveState } from "../actions/blogs";

const PostContainer = (props) => {
  const { dispatch, blogs } = props;
  const { list } = props.blogs;
  //Clearing error and postsave state to avoid incorrect message to be seen
  useEffect(() => {
    //Clearing all states on redirect
    dispatch(clearErrorState());
    dispatch(clearPostSaveState());
  }, []);
  return (
    <div>
      {blogs.error && <div className="alert error-dailog">{blogs.error}</div>}
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
