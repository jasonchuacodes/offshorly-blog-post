import { UserProps } from "./post";

export type CommentProps = {
    user: UserProps;
    comment: string;
};

function Comment(props: CommentProps) {
    const { user, comment } = props;
    const { firstName, lastName } = user;

    return (
        <div className="flex flex-col text-sm">
            <div className="font-bold text-base">
                {firstName} {lastName}
            </div>
            <div className="text-sm">{comment} </div>
        </div>
    );
}

export default Comment;
