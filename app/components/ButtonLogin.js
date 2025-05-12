import Link from "next/link";

const ButtonLogin = ({ isloggedin, name, age, children}) => {
    //let { isloggedin, name, age } = props;
    if (isloggedin)
        return (
            <Link href="/dashboard" className="btn btn-primary text-white">Welcome back {name}</Link>
        );
    else
        return (<p>Maaan, you need to be logged in</p>);
};

export default ButtonLogin;