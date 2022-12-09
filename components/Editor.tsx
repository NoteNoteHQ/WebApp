import { Editor as DJSEditor } from "draft-js";
import "draft-js/dist/Draft.css";
import { useMarkdownEdit } from "hooks/useMarkdownEdit";

const Editor = () => {
  const { state, handleChange, handleKeyCommand } = useMarkdownEdit();

  return (
    <DJSEditor
      editorState={state}
      onChange={handleChange}
      handleKeyCommand={handleKeyCommand}
      placeholder="入力してください..."
    />
  );
};

// SSR対応していないためexport default
export default Editor;
