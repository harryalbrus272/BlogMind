import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import { Button, Icon, Container } from "semantic-ui-react";

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

  const MenuBar = ({ editor }) => {
    if (!editor) {
      return null;
    }
    return (
      <React.Fragment>
        <Button
          icon
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
          size="mini"
          basic
        >
          <Icon name="bold" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
          size="mini"
          basic
        >
          <Icon name="italic" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
          size="mini"
          basic
        >
          <Icon name="strikethrough" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
          size="mini"
          basic
        >
          <Icon name="code" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
          size="mini"
          basic
        >
          <Icon name="paragraph" />
        </Button>
        <Button
          icon
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
          size="mini"
          basic
        >
          <Icon name="heading" />1
        </Button>
        <Button
          icon
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
          size="mini"
          basic
        >
          <Icon name="heading" />2
        </Button>
        <Button
          icon
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
          size="mini"
          basic
        >
          <Icon name="heading" />3
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
          size="mini"
          basic
        >
          <Icon name="list ul" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
          size="mini"
          basic
        >
          <Icon name="align center" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
          size="mini"
          basic
        >
          <Icon name="align right" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
          size="mini"
          basic
        >
          <Icon name="align justify" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
          size="mini"
          basic
        >
          <Icon name="align left" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
          size="mini"
          basic
        >
          <Icon name="list ol" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
          size="mini"
          basic
        >
          <Icon name="quote left" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().undo().run()}
          size="mini"
          basic
        >
          <Icon name="undo" />
        </Button>
        <Button
          icon
          onClick={() => editor.chain().focus().redo().run()}
          size="mini"
          basic
        >
          <Icon name="redo" />
        </Button>
      </React.Fragment>
    );
  };

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