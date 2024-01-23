'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PostCard from '../components/template/post-card';
import { posts } from '../data/posts';
import PostApi, { Post } from '../services/api/postApi';
import { PostDetailProps } from '../components/base/post';

const HomePage = () => {
    const { getPosts } = PostApi;

    const {
        data: posts,
        isLoading,
        error,
    } = useQuery<PostDetailProps[]>({
        queryKey: ['post'],
        queryFn: () => getPosts(),
    });

    if (error) {
        return <div>ERROR FETCHING POSTS</div>;
    }

    if (isLoading || !posts) {
        return <div>...Loading</div>;
    }

    return (
        <main className="flex flex-col items-center w-full max-w-[640px] py-16 space-y-8 mb-10">
            {/* Title */}
            <h1 className="font-bold text-3xl">OFFSHORLY | BlogPost</h1>

            {/* PostsContainer */}
            <div className="flex flex-col w-full space-y-4">
                {/* Posts */}
                {posts.map(({ author, post, comments }, index) => {
                    return (
                        <PostCard
                            key={index}
                            author={author}
                            post={post}
                            comments={comments}
                        />
                    );
                })}
                {/* {posts.map((post, index) => {
                    return <PostCard key={index} />;
                })} */}
            </div>
        </main>
    );
};

export default HomePage;
