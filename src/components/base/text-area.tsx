'use client';

type TextAreaProps = {
    value: string;
    handleTextareaChange: any;
};

function TextArea(props: TextAreaProps) {
    const { value, handleTextareaChange } = props;

    return (
        <textarea
            id="input-field"
            rows={4}
            value={value}
            onChange={handleTextareaChange}
            className="p-4 h-20 min-h-20 border border-slate-500"
        />
    );
}

export default TextArea;
