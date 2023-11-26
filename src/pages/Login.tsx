import { useState } from "react";
import { User } from "../models/user";

type LoginPageProps = {
    logInHandler: (user: User) => void;
};

export const Login = (props: LoginPageProps) => {
    const [mode, setMode] = useState<"login" | "register">("login");
    const handleLoginClick = () => {
        const user: User = {
            id: 123,
            login: "admin",
            name: "Senior react developer Annagi",
        };

        props.logInHandler(user);
    };

    const handleRegisterClick = () => {
        let name = (document.getElementById("name") as HTMLInputElement).value;
        let login = (document.getElementById("login") as HTMLInputElement).value;
        let password = (document.getElementById("password") as HTMLInputElement).value;

        if (name != "" && login != "" && password != "") {
            alert("Registered! Please log in now.");
            setMode("login");
        } else {
            alert("Please fill all sections.")
        }
    };

    return (
        <>
            {mode === "login" ? (
                <form action="">
                    <label htmlFor="">Login</label>
                    <input type="text" />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button onClick={handleLoginClick}>Login</button>
                    <button onClick={() => setMode("register")}>Register</button>
                </form>
            ) : (
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" id='name' />
                    <label htmlFor="">Login</label>
                    <input type="text" id='login' />
                    <label htmlFor="">Password</label>
                    <input type="password" id='password' />
                    <button onClick={handleRegisterClick}>Register</button>
                    <button onClick={() => setMode("login")}>Login</button>
                </form>
            )}
        </>
    )
}