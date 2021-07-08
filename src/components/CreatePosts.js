import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import { Container, Input, Grid } from "semantic-ui-react";
import MenuBar from "./MenuBar";

const CreatePosts = () => {
  const [state, setState] = useState("");
  console.log({ state });
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: state,
    onUpdate({ editor }) {
      setState(editor.getHTML());
    },
  });

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
          style={{
            margin: "10px 0 0 0",
            border: "1px solid rgba(34,36,38,.15)",
            borderRadius: ".28571429rem",
          }}
        >
          <EditorContent
            editor={editor}
            onChange={(e) => setState(e.target.value)}
            style={{
              minHeight: "400px",
              width: "100%",
              caretColor: "red",
            }}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default CreatePosts;
