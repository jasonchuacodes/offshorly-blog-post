'use client';

import { useQuery } from '@tanstack/react-query';
import UserApi, { User } from '../../services/api/userApi';
import UserCard from '../../components/template/user-card';
import Link from 'next/link';
import PostInputField from '../../components/template/post-input-field';

const UsersPage = () => {
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
            <h4 className="font-bold text-xl uppercase">list of users</h4>
            <div className="flex justify-center max-w-fit px-4 py-1 text-sm border border-slate-500 bg-white">
                <Link href="/users/new">Create User</Link>
            </div>
            <div className="flex flex-col space-y-2 w-full justify-center items-center">
                {users.map((user) => {
                    return (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default UsersPage;
