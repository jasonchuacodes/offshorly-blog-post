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
    getUser: async (id: number): Promise<User> => {
        try {
            const { data } = await instance.get(`/users/${id}`);
            return data;
        } catch (error: any) {
            throw new Error('failed to fetch user')
        }
    },
};
export default UserApi;
