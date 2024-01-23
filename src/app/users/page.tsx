'use client';

import { useQuery } from '@tanstack/react-query';
import UserCard from '../../components/template/user-card';
import UserApi, { User } from '../../services/api/userApi';

const UsersPage = () => {
    const { getUsers } = UserApi;

    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: getUsers,
    });

    if (isLoading || !users) {
        return <div>...Loading</div>;
    }
    return (
        <>
            <h4 className="font-bold text-xl uppercase">list of users</h4>
           
            <div className="flex flex-col space-y-2 w-full justify-center items-center">
                {users.map((user) => {
                    return (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            refetch={refetch}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default UsersPage;
