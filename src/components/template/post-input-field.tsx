'use client';

import React, { useState } from 'react';
import Button from '../base/button';
import TextArea from '../base/text-area';
import PostApi from '../../services/api/postApi';
import { useCookies } from 'next-client-cookies';

const PostInputField = ({
    label = 'submit',
    refetch,
}: {
    label?: string;
    refetch?: () => void;
}) => {
    const [postInputValue, setPostInputValue] = useState<string>('');
    const cookies = useCookies();
    const authId = cookies.get('auth-id');

    const { createPost } = PostApi;

    const handleSubmit = () => {
        if (!authId) {
            alert('User needs to login');
            return;
        }

        createPost({ authorId: Number(authId), post: postInputValue }).then(
            () => {
                if (!!refetch) {
                    refetch();
                }
            }
        );

        setPostInputValue('');
    };

    const handleTextAreaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setPostInputValue(e.target.value);
    };

    return (
        <div className="flex flex-col w-full h-full space-y-2 justify-end">
            <TextArea
                value={postInputValue}
                handleTextareaChange={handleTextAreaChange}
            />
            <Button
                onClick={handleSubmit}
                label={label}
                className="max-w-full py-2 font-bold text-lg uppercase"
            />
        </div>
    );
};

export default PostInputField;
