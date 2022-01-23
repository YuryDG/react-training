import { FormEvent, useRef } from "react";
import { useAuth } from "../context";

type LoginProps = {};

export const Login: React.FC<LoginProps> = (props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { error, isLoading } = useAuth();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div>
            <h2 className="text-center mb-1 text-4xl">Login</h2>
            <hr className="mb-5" />
            {
                error && <div className="mb-5 text-red px-5 py-3 bg-red-200">
                    {error}
                </div>
            }
            <form name="signUpForm" onSubmit={onSubmit}>
                <div className="flex items-center justify-center mb-3">
                    <label className="w-[150px]" htmlFor="email">Email:</label>
                    <input className="border p-2 rounded ml-3" name="email" required ref={emailRef} />
                </div>
                <div className="flex items-center justify-center mb-3">
                    <label className="w-[150px]" htmlFor="password">Password:</label>
                    <input className="border p-2 rounded ml-3" type="password" name="password" required ref={passwordRef} />
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
            </form>
        </div>
    )
}