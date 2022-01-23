import { FormEvent, useRef } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../context";

type SignUpProps = {};

export const SignUp: React.FC<SignUpProps> = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    
    const navigate = useNavigate();
    const { signUp, error, isLoading } = useAuth();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // TODO: validate passwords match

        if (emailRef.current && passwordRef.current) {
            await signUp(emailRef.current.value, passwordRef.current.value);
            navigate('/'); // got to dashboard
        }
    }

    return (
        <div>
            <h2 className="text-center mb-1 text-4xl">SignUp</h2>
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
                <div className="flex items-center justify-center mb-3">
                    <label className="w-[150px]" htmlFor="confirm_password">Confirm Password:</label>
                    <input className="border p-2 rounded ml-3" type="password" name="confirm_password" required ref={confirmPasswordRef} />
                </div>
                <div className="text-center">
                    <hr />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="cursor-pointer mt-2 bg-blue-500 px-4 py-2 rounded text-white">
                        Sign Up
                    </button>
                </div>
                <div className="text-right mt-5">
                    Have already an account? <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}