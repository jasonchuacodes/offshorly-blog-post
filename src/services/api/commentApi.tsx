import instance from '../axios';
import { Post } from './postApi';

export type Comment = {
    id: number;
    authorId: string;
    comment: string;
};

const CommentApi = {
    getComments: async (): Promise<Comment[]> => {
        const {data} = await instance.get('/comments');
        return data;
    },
};
export default CommentApi;
