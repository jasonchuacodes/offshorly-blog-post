import instance from '../axios';

export type User = {
    id: number;
    firstName: string;
    lastName: string;
};

const UserApi = {
    getUsers: async (): Promise<User[]> => {
        const { data } = await instance.get('/users');
        return data;
    },
};
export default UserApi;
