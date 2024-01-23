"use client";

import Comment, { CommentProps } from "../base/comment";
import PostDetail, { PostDetailProps } from "../base/post";
import CommentInputField from "./comment-input-field";

type PostCardProps = {
    post: PostDetailProps;
};

function PostCard(props: PostCardProps) {
    const { post } = props;

    return (
        <div className="flex flex-col space-y-1 p-4 border border-slate-400 bg-white/40">
            {/* PostDetail */}
            <PostDetail user={post.user} post={post.post} />

            {/* PostComments */}
            <div className="px-4 space-y-2">
                <div className="px-4 py-2 space-y-2 border-l-2 border-slate-400">
                    {post.comments?.map(({ user, comment }, index) => {
                        return (
                            <Comment
                                key={index}
                                user={user}
                                comment={comment}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default PostCard;
