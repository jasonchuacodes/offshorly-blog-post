import { CommentProps } from "../app/components/base/comment";

export const comments: CommentProps[] = [
    {
        user: { id: 2, firstName: "Jane", lastName: "Doe" },
        comment: "Lorem Ipsum dolor sit amet. Lorem.",
    },
    {
        user: { id: 1, firstName: "John", lastName: "Doe" },
        comment: "Lorem Ipsum dolo",
    },
    {
        user: { id: 1, firstName: "John", lastName: "Doe" },
        comment:
            "Lorem Ipsum dolor sit amet. Lorem dolor sit amet. Lorem dolor sit amet. Lorem.",
    },
];
