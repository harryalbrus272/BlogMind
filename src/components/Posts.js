import React from "react";
import { Segment, Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Posts = ({ blog }) => {
  return (
    <div>
      <Container>
        <Segment>
          <Header>{blog.title}</Header>
          <div
            style={{
              maxHeight: "50px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <Container>{ReactHtmlParser(blog.content)}</Container>
          </div>
          <Link to={`/blog/${blog._id}`}>
            <Button size="medium" style={{ color: "black" }}>
              READ MORE
            </Button>
          </Link>
        </Segment>
      </Container>
    </div>
  );
};

export default Posts;
