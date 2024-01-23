import { UserProps } from '../base/post';

function UserCard(props: UserProps) {
    const { id, firstName, lastName } = props;

    return (
        <div className="flex w-1/2 min-h-14 justify-start p-4 space-x-4 bg-black-5 border border-slate-400 ">
            <p>ID {id}:</p>
            <div className='uppercase'>
                {firstName} {lastName}
            </div>
        </div>
    );
}

export default UserCard;
