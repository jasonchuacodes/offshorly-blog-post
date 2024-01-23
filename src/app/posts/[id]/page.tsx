'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PostApi, { Post } from '../../../services/api/postApi';

const PostPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { getPost } = PostApi;

    const {
        data: post,
        isLoading,
        error,
    } = useQuery<Post>({
        queryKey: ['post'],
        queryFn: () => getPost(Number(id)),
    });

    if (error) {
        return <div>ERROR FETCHING POST</div>;
    }

    if (isLoading || !post) {
        return <div>...Loading</div>;
    }

    return (
        <div className="flex flex-col w-full space-y-2">
            <div className="text-lg font-bold">
                Author: {post.author?.firstName}
            </div>
            <div className="flex flex-col w-full space-y-4 p-4 border border-1 border-slate-500">
                <div className="text-base">Post: {post.post}</div>
                <div>
                    {post.comments?.map(({ comment }, index) => {
                        return <div key={index}>{comment}</div>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default PostPage;
