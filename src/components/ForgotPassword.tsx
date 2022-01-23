import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context";

type ForgotPasswordProps = {};

export const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { resetPassword, isLoading } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (emailRef.current && passwordRef.current) {
            await resetPassword(emailRef.current.value);
            navigate('/');
        }
    }

    return (
        <div>
            <h2 className="text-center mb-1 text-4xl">Password Reset</h2>
            <hr className="mb-5" />
          
            <form name="signUpForm" onSubmit={onSubmit}>
                <div className="flex items-center justify-center mb-3">
                    <label className="w-[150px]" htmlFor="email">Email:</label>
                    <input className="border p-2 rounded ml-3" name="email" required ref={emailRef} />
                </div>
                <div className="text-center">
                    <hr />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="cursor-pointer mt-2 bg-blue-500 px-4 py-2 rounded text-white">
                        Reset Password
                    </button>
                </div>
                <div className="text-right mt-5">
                    Need an account? <Link to="/signup">Sign up</Link>
                </div>
                <div className="text-right mt-5">
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}