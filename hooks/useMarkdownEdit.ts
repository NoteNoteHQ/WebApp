import {
  ContentState,
  DraftHandleValue,
  EditorCommand,
  EditorState,
  Modifier,
  RichUtils,
  SelectionState,
} from "draft-js";
import { useCallback, useState } from "react";
import remarkParse from "remark-parse";
import { Root } from "remark-parse/lib";
import { unified } from "unified";

export const useMarkdownEdit = () => {
  const [state, setState] = useState(() => EditorState.createEmpty());

  const handleGrandchildType = useCallback(
    (
      editorState: EditorState,
      currentContent: ContentState,
      selectionState: SelectionState,
      grandchildType: string
    ) => {
      console.log(grandchildType);
      switch (grandchildType) {
        case "inlineCode":
          setState(
            EditorState.push(
              editorState,
              Modifier.setBlockType(
                currentContent,
                selectionState,
                "code-block"
              ),
              "change-block-type"
            )
          );
          break;
        case "strong":
          break;
      }
    },
    []
  );

  const handleKeyCommand = useCallback(
    (command: EditorCommand, editorState: EditorState): DraftHandleValue => {
      const newState = RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        setState(newState);
        return "handled";
      }

      return "not-handled";
    },
    []
  );

  const handleChange = useCallback(
    (editorState: EditorState) => {
      const currentContent = editorState.getCurrentContent();
      const selectionState = editorState.getSelection();
      const startKey = selectionState.getStartKey();
      const endKey = selectionState.getEndKey();
      // 複数行選択されているので装飾は行わない
      if (startKey !== endKey) {
        setState(editorState);
        return;
      }
      const anchorKey = selectionState.getAnchorKey();
      const block = currentContent.getBlockForKey(anchorKey);
      const plainText = block.getText();

      // 行のすべての文字が消されたので、paragraphに戻る
      if (!plainText.length) {
        setState(
          EditorState.push(
            editorState,
            Modifier.setBlockType(currentContent, selectionState, "paragraph"),
            "change-block-type"
          )
        );
        return;
      }

      const mdTree = unified().use(remarkParse).parse(plainText);
      const child = mdTree.children[0];
      const childType = child?.type;
      const grandchildType = (child as unknown as Root)?.children?.[0]?.type;

      console.log(childType, grandchildType);

      switch (childType) {
        case "paragraph":
          setState(
            EditorState.push(
              editorState,
              Modifier.setBlockType(
                currentContent,
                selectionState,
                "paragraph"
              ),
              "change-block-type"
            )
          );

          handleGrandchildType(
            editorState,
            currentContent,
            selectionState,
            grandchildType
          );
          break;
        case "heading":
          const { depth } = child;
          const headingDepths = [
            "header-one",
            "header-two",
            "header-three",
            "header-four",
            "header-five",
            "header-six",
          ] as const;
          setState(
            EditorState.push(
              editorState,
              Modifier.setBlockType(
                currentContent,
                selectionState,
                headingDepths[depth - 1]
              ),
              "change-block-type"
            )
          );
          break;

        // TODO: どう対応するか要議論
        // case "list":
        //   break;

        // TODO: 多分前のchildTypeがcodeであるか判定しないといけないので、一旦別タスクで対処
        // case "code":
        //   break;

        default:
          setState(
            EditorState.push(
              editorState,
              Modifier.setBlockType(
                currentContent,
                selectionState,
                "paragraph"
              ),
              "change-block-type"
            )
          );
          break;
      }
    },
    [handleGrandchildType]
  );

  return { handleChange, handleKeyCommand, state, setState };
};
