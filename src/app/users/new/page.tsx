'use client';

import UserApi from '../../../services/api/userApi';
import InputField from '../../../components/base/input-field';
import Button from '../../../components/base/button';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

const CreateUserPage = () => {
    const router = useRouter();

    const { creatUser } = UserApi;

    const initialUserState = {
        firstName: '',
        lastName: '',
    };
    const [user, setUser] = useState(initialUserState);

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (user !== initialUserState) creatUser(user);
        
        router.push('/users');
    };

    return (
        <>   
            <h4 className="font-bold text-xl">CREATE USER</h4>
            <form className="flex flex-col w-1/2 space-y-2">
                <InputField
                    name="firstName"
                    handleChange={handleChange}
                    label="FirstName"
                    className="min-h-10"
                />
                <InputField
                    name="lastName"
                    handleChange={handleChange}
                    label="LastName"
                    className="min-h-10"
                />
                <Button
                    onClick={handleSubmit}
                    label="Create user"
                    className="py-2 !text-base"
                />
            </form>
        </>
    );
};

export default CreateUserPage;
