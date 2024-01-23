'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UserApi from '../../services/api/userApi';
import { useCookies } from 'next-client-cookies';
import Button from '../../components/base/button';
import { UserProps } from '../../components/base/post';
import InputField from '../../components/base/input-field';

const AuthPage = () => {
    const { getUser } = UserApi;
    const router = useRouter();

    const [_authUser, setAuthUser] = useState<UserProps>();
    const cookies = useCookies();

    const handleLogout = () => {
        cookies.remove('auth-id');
    };

    const [authId, setAuthId] = useState<string>('');

    const handleChange = (e: any) => {
        const { value } = e.target;
        setAuthId(value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        cookies.set('auth-id', authId);

        getUser(Number(authId)).then((data) => {
            setAuthUser(data);
        });

        router.push('/');
    };

    return (
        <form className="flex items-center justify-center w-full h-10 space-x-2">
            <InputField
                name="user"
                handleChange={handleChange}
                label="id"
                className="flex h-full max-w-20"
            />
            <Button
                onClick={handleSubmit}
                label="login"
                className="flex items-center h-full"
            />
            <Button
                onClick={handleLogout}
                label="logout"
                className="flex items-center h-full"
            />
        </form>
    );
};

export default AuthPage;
