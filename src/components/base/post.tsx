import { CommentProps } from "./comment";

export type UserProps = {
    id: number;
    firstName: string;
    lastName: string;
};

export type PostDetailProps = {
    user: UserProps;
    post: string;
    comments?: CommentProps[];
};

function PostDetail(props: PostDetailProps) {
    const { user, post } = props;
    const { firstName, lastName } = user;
    
    return (
        <div className="flex flex-col space-y-1 text-lg">
            <div className="font-bold">
                {firstName} {lastName}
            </div>
            <div>{post}</div> 
        </div>
    );
}

export default PostDetail;
