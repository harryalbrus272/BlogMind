import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBlog } from "../actions/blogs";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Container, Header } from "semantic-ui-react";

const PostView = (props) => {
  console.log("props in postview", props);
  const { dispatch, blogs } = props;
  const currentBlog = blogs.currentBlog;
  const { params } = props.match;
  console.log(params);

  const editor = useEditor({
    extensions: [StarterKit],
    content: currentBlog.content,
  });

  useEffect(() => {
    dispatch(fetchBlog(params.id));
  }, []);

  return (
    <div>
      <Container>
        <Header as="h1">{currentBlog.title}</Header>
        <EditorContent editor={editor} />
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(PostView);
