'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UserApi from '../../services/api/userApi';
import Button from '../../components/base/button';
import { UserProps } from '../../components/base/post';
import InputField from '../../components/base/input-field';
import { useCookies } from 'next-client-cookies';

const AuthPage = () => {
    const [authId, setAuthId] = useState<string>('');
    const [_authUser, setAuthUser] = useState<UserProps>();

    const cookies = useCookies();
    const router = useRouter();

    const { getUser } = UserApi;

    const handleChange = (e: any) => {
        const { value } = e.target;
        setAuthId(value);
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            cookies.set('auth-id', authId);

            getUser(Number(authId))
                .then((data) => {
                    setAuthUser(data);
                    router.push('/');
                })
                .catch((e) => {
                    alert(e.message);
                });
        }
    };

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            cookies.remove('auth-id');
            alert('Successfully logged out');
        }
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
                onClick={handleLogin}
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
