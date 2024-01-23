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
    getPost: async (id: number): Promise<PostDetailProps> => {
        try {
            const { data } = await instance.get(`/posts/${id}`);
            return data;
        } catch (error: any) {
            throw new Error('failed to fetch post');
        }
    },
    createPost: async (params: {
        authorId: number;
        post: string;
    }): Promise<Post> => {
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
    editPost: async (params: { id: number; post: string }) => {
        const { id, post } = params;
        try {
            await instance.put(`/posts/${id}`, {post});
        } catch (error: any) {
            throw new Error('failed to update post');
        }
    },
    removePost: async (id: number) => {
        try {
            await instance.delete(`/posts/${id}`);
        } catch (e) {
            throw new Error('failed to delete post');
        }
    },
};
export default PostApi;
