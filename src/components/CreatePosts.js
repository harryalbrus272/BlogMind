import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import { Container, Input, Grid, Button } from "semantic-ui-react";
import MenuBar from "./MenuBar";

const CreatePosts = () => {
  const [content, setContent] = useState("");
  console.log({ content });
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
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  const handleReset = (e) => {
    editor.commands.setContent("");
    editor.commands.focus();
    setContent("");
  };

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
        <Button.Group>
          <Button onClick={(e) => handleReset(e)}>Reset</Button>
          <Button.Or />
          <Button positive>Create Post</Button>
        </Button.Group>
      </Container>
    </div>
  );
};

export default CreatePosts;
