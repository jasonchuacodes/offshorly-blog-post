'use client';

import { useEffect, useState } from 'react';
import UserApi from '../../services/api/userApi';
import { useCookies } from 'next-client-cookies';
import { UserProps } from '../base/post';

const WelcomeBanner = () => {
    const { getUser } = UserApi;
    const cookies = useCookies();
    const [authUser, setAuthUser] = useState<UserProps | null>(null);
    const authId = cookies.get('auth-id');

    useEffect(() => {
        getUser(Number(authId)).then((data) => {
            setAuthUser(data);
        });
    }, []);

    if (!authId) {
        return (
            <h4 className="font-bold text-4xl uppercase">
               Howdy, visitor!
            </h4>
        );
    }
    return (
        <div className="flex flex-col w-full space-y-2 items-center">
            <h4 className="font-bold text-4xl uppercase">
                Welcome, {authUser?.firstName} {authUser?.lastName}
            </h4>
        </div>
    );
};
export default WelcomeBanner;
