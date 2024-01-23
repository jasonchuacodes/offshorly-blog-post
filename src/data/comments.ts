import { CommentProps } from "../components/base/comment";

export const comments: CommentProps[] = [
    {
        author: { id: 2, firstName: "Jane", lastName: "Doe" },
        comment: "Lorem Ipsum dolor sit amet. Lorem.",
    },
    {
        author: { id: 1, firstName: "John", lastName: "Doe" },
        comment: "Lorem Ipsum dolo",
    },
    {
        author: { id: 1, firstName: "John", lastName: "Doe" },
        comment:
            "Lorem Ipsum dolor sit amet. Lorem dolor sit amet. Lorem dolor sit amet. Lorem.",
    },
];
