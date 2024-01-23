import { useState } from 'react';
import Button from '../base/button';
import InputField from '../base/input-field';
import useLocalStorage from '../../utils/useLocalStorage';

const WelcomeBanner = () => {
    return (
        <h4 className="font-bold text-xl uppercase">Welcome, TSET</h4>
    );
};

const AuthField = () => {
    const [localStorageValue, setLocalStorageValue] = useLocalStorage(
        'auth-user',
        ''
    );
    const [authUser, setAuthUser] = useState<string>('');

    const handleChange = (e: any) => {
        const { value } = e.target;
        setAuthUser(value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLocalStorageValue(authUser);
    };

    if (localStorageValue !== '') {
        return <WelcomeBanner />;
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
