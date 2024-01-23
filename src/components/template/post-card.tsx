'use client';

import Link from 'next/link';
import Comment from '../base/comment';
import Post, { PostDetailProps } from '../base/post';
import Button from '../base/button';
import PostApi from '../../services/api/postApi';
import { useState } from 'react';
import InputField from '../base/input-field';

function PostCard(props: PostDetailProps) {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [editValue, setEditValue] = useState<string>('');

    const { post, author, comments, id, refetch } = props;
    const { removePost, editPost } = PostApi;

    const handleDelete = () => {
        console.log(id);
        removePost(id);
        alert(`Successfully deleted user: ${id}`);
        if (!!refetch) {
            refetch();
        }
    };

    const openEditModal = () => {
        setIsOpenModal(true);
    };

    const handleEditChange = (e: any) => {
        const { value } = e.target;
        setEditValue(value);
    };

    const handleEditSubmit = (e: any) => {
        e.preventDefault();
        
        editPost({ id, post: editValue });
        alert('Successfully edited post');

        if (!!refetch) {
            refetch();
        }

        setIsOpenModal(false)
    };

    const handleEditCancel = (e: any) => {
        e.preventDefault();
        setIsOpenModal(false);
    };

    return (
        <div className="flex flex-col space-y-1">
            <div className="flex w-full border p-4 border-slate-400 bg-white/40">
                <div className="flex flex-col w-full space-y-1 ">
                    {/* PostDetail */}
                    <Post id={id} author={author} post={post} />

                    {/* PostComments */}
                    <div className="px-4 space-y-2">
                        {comments?.map(({ comment }, index) => {
                            return (
                                <div
                                    key={index}
                                    className="px-4 py-2 space-y-2 border-l-2 border-slate-400"
                                >
                                    <Comment
                                        author={author}
                                        comment={comment}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex space-x-2">
                    <div className="flex items-center justify-center px-4 py-2 border border-1 border-slate-500 bg-white cursor-pointer">
                        <Link href={`/posts/${id}`}>View</Link>
                    </div>
                    <Button
                        onClick={openEditModal}
                        label="Edit"
                        className="flex items-center justify-center px-4 py-2 border border-1 border-slate-500 cursor-pointer"
                    />
                    <Button
                        onClick={handleDelete}
                        label="Delete"
                        className="flex items-center justify-center px-4 py-2 border border-1 border-slate-500 cursor-pointer"
                    />
                </div>
            </div>
            {isOpenModal ? (
                <form action="submit" className="flex flex-col space-y-2">
                    <InputField
                        className="!min-h-10"
                        name=""
                        handleChange={handleEditChange}
                    />
                    <div className="flex space-x-2">
                        <Button onClick={handleEditSubmit} label="Confirm" />
                        <Button onClick={handleEditCancel} label="Cancel" />
                    </div>
                </form>
            ) : (
                ''
            )}
        </div>
    );
}

export default PostCard;
