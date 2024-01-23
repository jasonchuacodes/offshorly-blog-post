import { useState } from 'react';
import Button from '../base/button';
import InputField from '../base/input-field';
import useLocalStorage from '../../utils/useLocalStorage';

const AuthField = () => {
    const [localStorageValue, setLocalStorageValue] = useLocalStorage(
        'authId',
        ''
    );
    const [authId, setAuthId] = useState<string>('');

    const handleChange = (e: any) => {
        const { value } = e.target;
        setAuthId(value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLocalStorageValue(authId);
    };

    if (localStorageValue !== '') {
        return (
            <h4 className="font-bold text-xl uppercase">
                Welcome, USER ID: {localStorageValue}
            </h4>
        );
    }

    return (
        <form className="flex  w-1/2 space-x-2">
            <InputField
                name="user"
                handleChange={handleChange}
                label="USER NAME"
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
