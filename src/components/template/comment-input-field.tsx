import Button from "../base/button";
import InputField from "../base/input-field";

const CommentInputField = () => {
    const handleChange = () => {
        console.log('changed')
    }
    const handleClick = () => {
        console.log('Submitted')
    }
    return (
        <div className="flex flex-col space-y-1">
            <h4 className="font-bold text-sm">Comment</h4>
            <InputField handleChange={handleChange} name="comment" />
            <Button onClick={handleClick}  label="Submit"/>
        </div>
    )
}

export default CommentInputField;