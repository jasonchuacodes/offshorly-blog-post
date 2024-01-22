'use client'
 
import { useState } from "react";

function TextArea() {
    const [textareaValue, setTextareaValue] = useState("");

    const handleTextareaChange = (event: any) => {
        setTextareaValue(event.target.value);
    };

    return (
        <textarea
            id="input-field"
            rows={4}
            value={textareaValue}
            onChange={handleTextareaChange}
            className="p-4 h-20 min-h-20 border border-slate-500"
        />
    );
}

export default TextArea;
