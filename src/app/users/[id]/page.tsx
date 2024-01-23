'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UserApi, { User } from '../../../services/api/userApi';

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
        <>
            <div>{user.firstName}</div>
            {/* Create post */}
            <div>CREATE POST</div>
        </>
    );
};

export default UserPage;
