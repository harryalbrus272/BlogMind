import React from "react";
import { Segment, Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Posts = ({ blog }) => {
  //Rendering a single blog instance
  return (
    <div>
      <Container>
        <Segment>
          <Header>{blog.title}</Header>
          <div
            style={{
              maxHeight: "50px",
              maxWidth: "100%",
              textOverflow: "ellipsis",
              whiteSpace: "wrap",
              overflow: "hidden",
              marginBottom: "10px"
            }}
          >
            <Container>{ReactHtmlParser(blog.content.substring(0,200) + '.....')}</Container>
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
