import { CommentProps } from 'postcss';
import instance from '../axios';

const CommentApi = {
    getComments: async (): Promise<CommentProps[]> => {
        const {data} = await instance.get('/comments');
        return data;
    },
    createComment: async (params: {
    }): Promise<Comment> => {
        try {
            const { data } = await instance.post('/comments', params);
            if (data) {
                alert('successfully created a comment')
            }

            
            return data;
        } catch (error: any) {
            throw new Error('failed to create comment');
        }
    },
};
export default CommentApi;
