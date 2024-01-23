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
        <>
            <div>{post.post}</div>
            <div>
                {post.comments?.map(({ comment }, index) => {
                    return <div key={index}>{comment}</div>;
                })}
            </div>
        </>
    );
};

export default PostPage;
