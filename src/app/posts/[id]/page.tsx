'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PostApi from '../../../services/api/postApi';
import Post, { PostDetailProps } from '../../../components/base/post';
import Comment from '../../../components/base/comment';


const PostPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { getPost } = PostApi;

    const {
        data: post,
        isLoading,
        error,
    } = useQuery<PostDetailProps>({
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
            <div className="flex h-full w-full border p-4 border-slate-400 bg-white/40">
                <div className="flex flex-col w-full space-y-1 ">
                    {/* PostDetail */}
                    <Post id={post.id} author={post.author} post={post.post} />

                    {/* PostComments */}
                    <div className="px-4 space-y-2">
                        {post.comments?.map(({ comment }, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 space-y-2 border-l-2 border-slate-400"
                            >
                                <Comment
                                    author={post.author}
                                    comment={comment}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 
            <div className="flex flex-col w-full space-y-4 p-4 border border-1 border-slate-500 bg-white">
                <div className="text-base">{post.post}</div>
                <div>
                    {post.comments?.map(({ comment }, index) => {
                        return <div key={index}>{comment}</div>;
                    })}
                </div>
            </div> */}
        </div>
    );
};

export default PostPage;
