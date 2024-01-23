'use client';

import { useState } from 'react';
import Button from '../base/button';
import InputField from '../base/input-field';
import { useCookies } from 'next-client-cookies';

const AuthField = () => {
    const [authId, setAuthId] = useState<string>('');
    const cookies = useCookies();

    const authCookieValue = cookies.get('auth-id');

    const handleChange = (e: any) => {
        const { value } = e.target;
        setAuthId(value);
    };

    const handleLogout = () => {
        cookies.remove('auth-id')
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        cookies.set('auth-id', authId);
    };

    if (authCookieValue) {
        return (
            <div className="flex space-x-4">
            <h4 className="font-bold text-xl uppercase">
                Welcome, USER ID: {authCookieValue}
            </h4>
            <Button onClick={handleLogout} label="logout" />
            </div>
        );
    }

    return (
        <form className="flex items-center w-1/2 space-x-2">
            <InputField
                name="user"
                handleChange={handleChange}
                label="ID"
                className="min-h-10"
            />
            <Button
                onClick={handleSubmit}
                label="Login"
                className="py-2 !text-base"
            />
        </form>
    );
};
export default AuthField;
