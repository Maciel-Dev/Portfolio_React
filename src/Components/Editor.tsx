import React, { useState } from "react";

import Editor from "@monaco-editor/react";

// @ts-ignore
const CodeEditorWindow = ({ onChange, language, code, theme }) => {
    const [value, setValue] = useState(code || "");

    // @ts-ignore
    const handleEditorChange = (value) => {
        setValue(value);
    };

    return (
        <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
            <Editor
                height="85vh"
                width={`100%`}
                language={language || "javascript"}
                value={value}
                theme={theme}
                defaultValue="// some comment"
                onChange={handleEditorChange}
            />
        </div>
    );
};
export default CodeEditorWindow;