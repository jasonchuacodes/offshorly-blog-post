'use client';

import {
    useQuery,
} from '@tanstack/react-query';
import UserApi, { User } from '../../services/api/userApi';

const UserPage = () => {
    const { getUsers } = UserApi;

    const { data: users, isLoading } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: getUsers,
    });

    if (isLoading || !users) {
        return <div>...Loading</div>;
    }
    return (
        <>
            {users.map((user) => {
                return <div key={user.id}>{user.firstName}</div>;
            })}
        </>
    );
};

export default UserPage;
