import UserApi from '../../services/api/userApi';
import Button from '../base/button';
import { UserProps } from '../base/post';

function UserCard(props: UserProps) {
    const { id, firstName, lastName, refetch } = props;
    const { deleteUser } = UserApi;

    const handleRemove = () => {
        deleteUser(id);
        alert(`Deleted user: ${id}`);

        if (!!refetch) {
            refetch();
        }
    };

    return (
        <div className="flex w-1/2 min-h-14 justify-between p-4 bg-black-5 border border-slate-400 ">
            <div className="flex  space-x-4  ">
                <p>ID {id}:</p>
                <div className="uppercase">
                    {firstName} {lastName}
                </div>
            </div>
            <Button onClick={handleRemove} label="Delete" />
        </div>
    );
}

export default UserCard;
