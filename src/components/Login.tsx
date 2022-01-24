import { FormEvent, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import { NavigationState } from "../types";

type LoginProps = {};

export const Login: React.FC<LoginProps> = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { login, isLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (emailRef.current && passwordRef.current) {
            await login(emailRef.current.value, passwordRef.current.value);

            // NavigationState is a custom type created by me
            const to = location.state ? (location.state as NavigationState).from : '/';

            navigate(to); // go to the same place where it was redirected to login page
        }
    }

    return (
        <div>
            <h2 className="text-center mb-1 text-4xl">Login</h2>
            <hr className="mb-5" />
            <form name="signUpForm" onSubmit={onSubmit}>
                <div className="flex items-center justify-center mb-3">
                    <label className="w-2/3" htmlFor="email">Email:</label>
                    <input className="w-full border p-2 rounded ml-3"
                        type="email"
                        name="email" required ref={emailRef} />
                </div>
                <div className="flex items-center justify-center mb-3">
                    <label className="w-2/3" htmlFor="password">Password:</label>
                    <input className="border w-full p-2 rounded ml-3" type="password" name="password" required ref={passwordRef} />
                </div>
                <div className="text-center">
                    <hr />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="cursor-pointer mt-2 bg-blue-500 px-4 py-2 rounded text-white">
                        Login
                    </button>
                </div>
                <div className="text-right mt-5">
                    Need an account? <Link to="/signup">Sign up</Link>
                </div>
                <div className="text-right mt-5">
                    Forgot password <Link to="/forgot-password">Forgot Password</Link>
                </div>
            </form>
        </div>
    )
}