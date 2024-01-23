'use client';

import { useQuery } from '@tanstack/react-query';
import { Post } from '../../services/api/postApi';
import PostApi from '../../services/api/postApi';
import { Comment } from '../../services/api/commentApi';
import React from 'react';

const UserPage = () => {
    const { getPosts } = PostApi;

    const { data: posts, isLoading } = useQuery<Post[]>({
        queryKey: ['posts'],
        queryFn: getPosts,
    });

    console.log(posts);

    if (isLoading || !posts) {
        return <div>...Loading</div>;
    }
    return (
        <>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <div>{post.post}</div>
                        <div>
                            {post.comments?.map(({id, comment}: Comment) => {
                                return (
                                    <div key={id}>
                                        {comment}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default UserPage;
