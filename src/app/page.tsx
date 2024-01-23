import React from 'react';
import PostCard from '../components/template/post-card';
import PostInputField from '../components/template/post-input-field';
import { posts } from '../data/posts';

const HomePage = () => {
    return (
        <main className="flex flex-col items-center w-full max-w-[640px] py-16 space-y-8 mb-10">
            {/* Title */}
            <h1 className="font-bold text-3xl">OFFSHORLY | BlogPost</h1>
            
            {/* PostsContainer */}
            <div className="flex flex-col w-full space-y-4">
                {/* Posts */}
                {posts.map((post, index) => {
                    return <PostCard key={index} post={post} />;
                })}
            </div>
        </main>
    );
};

export default HomePage;
