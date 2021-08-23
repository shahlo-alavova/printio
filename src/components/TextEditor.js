import React from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {

    return (
         <div>
           <Editor
               editorClassName="editorClassName"
           />

         </div>
);
}

export default TextEditor


