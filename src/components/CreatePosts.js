import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import { Redirect } from "react-router-dom";
import {
  Container,
  Input,
  Grid,
  Button,
  Message,
  Dimmer,
  Loader,
  Confirm,
  Popup,
} from "semantic-ui-react";
import MenuBar from "./MenuBar";
import { saveBlog } from "../actions/blogs";
import { connect } from "react-redux";

const CreatePosts = (props) => {
  const { dispatch, blogs } = props;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [editorEditable, setEditorEditable] = useState(true);
  const [confirmModal, setConfirmModal] = useState(false);
  const [message, setMessage] = useState("");
  console.log({ content, title });
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: content,
    editable: editorEditable,
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  const openConfirmModal = () => {
    if (title === "") {
      setMessage("Title is required field");
    } else if (content === "") {
      setMessage("Content is required field");
    } else if (title !== "" && content !== "") {
      setMessage("");
      setConfirmModal(true);
    }
  };

  const handleSubmit = (e) => {
    if (title && content) {
      dispatch(saveBlog(title, content));
      setEditorEditable(false);
    }
  };

  const handleReset = (e) => {
    editor.commands.setContent("");
    editor.commands.focus();
    setContent("");
  };

  if (blogs.postSave.started && blogs.postSave.finished) {
    setTimeout(() => {
      setRedirect(true);
    }, 1500);
  }

  if (redirect) return <Redirect to="/" />;

  if (blogs.inProgress)
    return (
      <Container>
        <Dimmer active>
          <Loader />
        </Dimmer>
      </Container>
    );

  return (
    <div>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Input
          fluid
          placeholder="Enter Blog Title...."
          style={{ marginBottom: "15px" }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <MenuBar editor={editor} />
        <Grid
          columns={16}
          container
          style={{
            margin: "10px 0 0 0",
            border: "1px solid rgba(34,36,38,.15)",
            borderRadius: ".28571429rem",
          }}
        >
          <EditorContent
            editor={editor}
            style={{
              minHeight: "400px",
              width: "100%",
              caretColor: "red",
            }}
          />
        </Grid>
        {!blogs.postSave.started && !blogs.postSave.finished ? (
          <Button.Group>
            <Button onClick={(e) => handleReset(e)}>Reset</Button>
            <Button.Or />
            {message !== "" ? (
              <Popup
                content={message}
                on='hover click'
                pinned
                trigger={
                  <Button
                    positive
                    onClick={(e) => openConfirmModal(e)}
                    disabled={blogs.inProgress}
                  >
                    Create Post
                  </Button>
                }
              />
            ) : (
              <Button
                positive
                onClick={(e) => openConfirmModal(e)}
                disabled={blogs.inProgress}
              >
                Create Post
              </Button>
            )}
            <Confirm
              open={confirmModal}
              onCancel={() => setConfirmModal(false)}
              onConfirm={(e) => handleSubmit(e)}
            />
          </Button.Group>
        ) : blogs.error ? (
          <div className="alert error-dailog">{blogs.error}</div>
        ) : (
          <Message>
            <Message.Header>Post Saved and Redirecting.....</Message.Header>
          </Message>
        )}
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CreatePosts);
