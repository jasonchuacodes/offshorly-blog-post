'use client';

import Comment from '../base/comment';
import Post, { PostDetailProps } from '../base/post';

function PostCard(props: PostDetailProps) {
    const { post, author, comments } = props;

    return (
        <div className="flex flex-col space-y-1 p-4 border border-slate-400 bg-white/40">
            {/* PostDetail */}
            <Post author={author} post={post} />

            {/* PostComments */}
            <div className="px-4 space-y-2">
                {comments?.map(({ comment }, index) => {
                    return (
                        <div
                            key={index}
                            className="px-4 py-2 space-y-2 border-l-2 border-slate-400"
                        >
                            <Comment author={author} comment={comment} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PostCard;
