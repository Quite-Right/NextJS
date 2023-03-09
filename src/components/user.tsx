interface IUserProps {
    name: string;
}

const User = ({name}: IUserProps) => {
    return <div>
        {name}
    </div>
}

export default User;