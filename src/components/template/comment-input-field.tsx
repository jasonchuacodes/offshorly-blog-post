import Button from "../base/button";
import InputField from "../base/input-field";

const CommentInputField = () => {
    return (
        <div className="flex flex-col space-y-1">
            <h4 className="font-bold text-sm">Comment</h4>
            <InputField />
            <Button label="Submit"/>
        </div>
    )
}

export default CommentInputField;