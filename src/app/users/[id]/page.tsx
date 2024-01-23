'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import UserApi, { User } from '../../../services/api/userApi';
import PostCard from '../../../components/template/post-card';
import PostInputField from '../../../components/template/post-input-field';

const UserPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { getUser } = UserApi;

    const {
        data: user,
        isLoading,
        error,
    } = useQuery<User>({
        queryKey: ['user'],
        queryFn: () => getUser(Number(id)),
    });

    if (error) {
        return <div>ERROR. FAILED TO FETCH USER.</div>;
    }

    if (isLoading || !user) {
        return <div>...Loading</div>;
    }

    return (
        <div className='flex flex-col w-full space-y-8'>
            <h4 className="font-bold text-xl uppercase">
                Welcome, {user.firstName} {user.lastName}
            </h4>
            <PostInputField label="create a post" />
            <div className='flex flex-col space-y-2'>
                {user.posts?.map(({ id, post, comments }, index) => {
                    return (
                        <PostCard
                            key={index}
                            id={id}
                            author={user}
                            post={post}
                            comments={comments}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default UserPage;
