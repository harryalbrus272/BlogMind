import React from "react";
import { Segment, Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Posts = ({ blog }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: blog.content,
  });
  return (
    <div>
      <Container>
        <Segment>
          <Header>{blog.title}</Header>
          <p>
            <EditorContent editor={editor} />
          </p>
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
