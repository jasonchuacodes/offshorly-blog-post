import Button from "../base/button";
import TextArea from "../base/text-area";

const PostInputField = () => {
    return (
        <div className="flex flex-col w-full h-full space-y-2 justify-end">
            <TextArea />
            <Button label="Submit" className="max-w-full py-2 font-bold text-lg uppercase"/>
        </div>
    )
}

export default PostInputField;