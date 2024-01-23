import instance from '../axios';
import { Comment } from './commentApi'

export type Post = {
    id: number;
    authorId: string;
    post: string;
    comments?: Comment[]
};

const PostApi = {
    getPosts: async (): Promise<Post[]> => {
        const { data } = await instance.get('/posts');
        return data;
    },
};
export default PostApi;
