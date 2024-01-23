import { error } from 'console';
import instance from '../axios';
import { Comment } from './commentApi';
import { PostDetailProps } from '../../components/base/post';

export type Post = {
    id: number;
    authorId: string;
    post: string;
    comments?: Comment[];
};

const PostApi = {
    getPosts: async (): Promise<PostDetailProps[]> => {
        const { data } = await instance.get('/posts');
        return data;
    },
    getPost: async (id: number) => {
        try {
            const { data } = await instance.get(`/posts/${id}`);
            return data;
        } catch (error: any) {
            throw new Error('failed to fetch post')
        }
    },
};
export default PostApi;
