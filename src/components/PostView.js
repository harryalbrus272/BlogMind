import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  clearErrorState,
  clearPostSaveState,
  fetchBlog,
} from "../actions/blogs";
import ReactHtmlParser from "react-html-parser";
import { Container, Header, Image, Loader, Dimmer } from "semantic-ui-react";

const PostView = (props) => {
  const { dispatch, blogs } = props;
  const currentBlog = blogs.currentBlog;
  const { params } = props.match;

  useEffect(() => {
    if (currentBlog._id && currentBlog._id !== params.id)
      dispatch(fetchBlog(params.id));
    return () => {
      dispatch(clearErrorState());
      dispatch(clearPostSaveState());
    };
  }, []);

  return (
    <div>
      {blogs.inProgress && (
        <Container fluid>
          <Dimmer active>
            <Loader content="Loading" />
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Container>
      )}
      {!blogs.inProgress && (
        <Container>
          <Header as="h1">{currentBlog.title}</Header>
          <Container>{ReactHtmlParser(currentBlog.content)}</Container>
        </Container>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(PostView);
