import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import { Container } from "semantic-ui-react";
import MenuBar from "./MenuBar";

const CreatePosts = () => {
  const [state, setState] = useState("Hello World! The next is coming up");
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
      <Container>
        <MenuBar editor={editor} />
        <EditorContent
          editor={editor}
          onChange={(e) => setState(e.target.value)}
        />
      </Container>
    </div>
  );
};

export default CreatePosts;
