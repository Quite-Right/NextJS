import User from "@/components/user";

interface IUserListProps {
    users?: any[];
}

const UserList = ({users}: IUserListProps) => {
    return <>
        <h1>User list:</h1>
        {users?.map(user => <User key={user.id} name={user.name} />)}
    </>
}

export const getStaticProps = async () =>
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()).then(users => ({
        props: {
            users
        }
    }));

export default UserList;