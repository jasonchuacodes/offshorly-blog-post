'use client';

import React, { useState } from 'react';
import Button from '../base/button';
import TextArea from '../base/text-area';

const PostInputField = () => {
    const [value, setValue] = useState<string>('');

    const handleSubmit = () => {
        console.log('submitted:', value);
        setValue('');
    };

    const handleTextAreaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setValue(e.target.value);
    };

    return (
        <div className="flex flex-col w-full h-full space-y-2 justify-end">
            <TextArea
                value={value}
                handleTextareaChange={handleTextAreaChange}
            />
            <Button
                onClick={handleSubmit}
                label="Submit"
                className="max-w-full py-2 font-bold text-lg uppercase"
            />
        </div>
    );
};

export default PostInputField;
