import React, { useState, useRef, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { storage } from "../../firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { Loader2 } from "lucide-react";

const Editor = ({ onChange, className, containerClass }) => {
  const [isLoading, setIsLoading] = useState(false);
  const reactQuillRef = useRef(null);
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        try {
          if (file) {
            setIsLoading(true);
            const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);
            const imageUrl = await getDownloadURL(storageRef);
            const quill = reactQuillRef.current;
            if (quill) {
              const range = quill.getEditorSelection();
              range &&
                quill.getEditor().insertEmbed(range.index, "image", imageUrl);
            }
          }
        } catch (e) {
          console.log(e);
        } finally {
          setIsLoading(false);
        }
      }
    };
  }, []);

  return (
    <>
      {isLoading && <Loader2 className="animate-spin" />}
      <div className={`h-[443px] bg-white ${containerClass}`}>
        <ReactQuill
          className={`bg-transparent h-[400px] ${className}`}
          ref={reactQuillRef}
          theme="snow"
          placeholder="Start writing..."
          modules={{
            toolbar: {
              container: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image", "video"],
                ["code-block"],
                ["clean"],
              ],
              handlers: {
                image: imageHandler,
              },
            },
            clipboard: {
              matchVisual: false,
            },
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
            "code-block",
          ]}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Editor;
