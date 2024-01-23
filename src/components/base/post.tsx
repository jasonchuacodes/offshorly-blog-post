import { CommentProps } from "./comment";

export type UserProps = {
    id: number;
    firstName: string;
    lastName: string;
    refetch?: () => void
};

export type PostDetailProps = {
    id: number;
    author: UserProps;
    post: string;
    comments?: CommentProps[];
    refetch?: () => void
};

function Post(props: PostDetailProps) {
    const { author, post } = props;
    const { firstName, lastName } = author;
    
    return (
        <div className="flex flex-col space-y-1 text-lg">
            <div className="font-bold">
                {firstName} {lastName}
            </div>
            <div>{post}</div> 
        </div>
    );
}

export default Post;
