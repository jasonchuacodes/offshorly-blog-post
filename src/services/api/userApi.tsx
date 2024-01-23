import instance from '../axios';
import { Post } from './postApi';

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    posts: Post[];
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
            throw new Error('failed to fetch user');
        }
    },
    creatUser: async (params: {
        firstName: string;
        lastName: string;
    }): Promise<User> => {
        try {
            const { data } = await instance.post('/users', params);
            if (data) {
                alert('successfully created a user');
            }

            return data;
        } catch (error: any) {
            throw new Error('failed to create user');
        }
    },
    deleteUser: async (id: number) => {
        try {
            await instance.delete(`/users/${id}`);
        } catch(e) {
            throw new Error('failed to remove user')
        }
    },
};
export default UserApi;
