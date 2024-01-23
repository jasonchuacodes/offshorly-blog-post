'use client';

import { useEffect, useState } from 'react';
import Button from '../base/button';
import InputField from '../base/input-field';
import { useCookies } from 'next-client-cookies';
import Link from 'next/link';
import UserApi from '../../services/api/userApi';
import { UserProps } from '../base/post';

const AuthField = () => {
    const { getUser } = UserApi;

    const [authId, setAuthId] = useState<string>('');
    const [authUser, setAuthUser] = useState<UserProps>();
    const cookies = useCookies();

    const authCookieValue = cookies.get('auth-id');

    const handleChange = (e: any) => {
        const { value } = e.target;
        setAuthId(value);
    };

    const handleLogout = () => {
        cookies.remove('auth-id');
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        cookies.set('auth-id', authId);

        getUser(Number(authId)).then((data) => {
            setAuthUser(data)
        })
    };

    useEffect(() => {
        console.log(authUser)
    }, [authUser])

    if (!!authCookieValue) {
        return (
            <div className="flex space-x-4 items-center">
                <h4 className="font-bold text-xl uppercase">
                    Welcome, {authUser?.firstName} {authUser?.lastName}
                </h4>
                <Button
                    onClick={handleLogout}
                    label="logout"
                    className="!py-2 text-base uppercase"
                />
            </div>
        );
    }

    return (
        <form className="flex items-center justify-center w-full space-x-2">
            <InputField
                name="user"
                handleChange={handleChange}
                label="ID"
                className="max-w-20 min-h-10"
            />
            <Button
                onClick={handleSubmit}
                label="LOGIN WITH ID"
                className="py-2 !text-base"
            />
            <div className="flex justify-center max-w-fit px-4 py-2 text-base border border-slate-500 bg-white">
                <Link href={`/users`}>Register</Link>
            </div>
        </form>
    );
};
export default AuthField;
