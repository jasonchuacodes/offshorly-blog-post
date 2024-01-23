import { UserProps } from "./post";

export type CommentProps = {
    author: UserProps;
    comment: string;
};

function Comment(props: CommentProps) {
    const { author, comment } = props;
    const { firstName, lastName } = author;

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
