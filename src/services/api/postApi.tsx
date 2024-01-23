import { error } from 'console';
import instance from '../axios';
import { PostDetailProps, UserProps } from '../../components/base/post';
import { CommentProps } from '../../components/base/comment';

export type Post = {
    id: number;
    authorId: string;
    post: string;
    comments?: CommentProps[];
    author?: UserProps;
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
            throw new Error('failed to fetch post');
        }
    },
    creatPost: async (params: {}): Promise<Post> => {
        try {
            const { data } = await instance.post('/posts', params);
            if (data) {
                alert('successfully created a post');
            }

            return data;
        } catch (error: any) {
            throw new Error('failed to create post');
        }
    },
};
export default PostApi;
