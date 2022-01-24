import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context";

type UpdateProfileProps = {};

export const UpdateProfile: React.FC<UpdateProfileProps> = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const { updateProfile, isLoading, currentUser } = useAuth();

    const email = currentUser?.email || ''

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateProfile(emailRef.current?.value, passwordRef.current?.value);
        // TODO: do something here like
    }

    return (
        <div>
            <h2 className="text-center mb-1 text-4xl">Update profile</h2>
            <hr className="mb-5" />
            <form name="signUpForm" onSubmit={onSubmit}>
                <div className="flex items-center justify-center mb-3">
                    <label className="w-2/3" htmlFor="email">Email:</label>
                    {currentUser && <input className="border p-2 w-full rounded ml-3"
                        name="email"
                        required
                        ref={emailRef}
                        defaultValue={email}
                    />
                    }
                </div>
                <div className="flex items-center justify-center mb-3">
                    <label className="w-2/3" htmlFor="password">Password:</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Leave blank to keep the same"
                        type="password"
                        name="password"
                        ref={passwordRef} />
                </div>
                <div className="flex items-center justify-center mb-3">
                    <label className="w-2/3" htmlFor="confirm_password">Confirm Password:</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Leave blank to keep the same"
                        type="password"
                        name="confirm_password"
                        ref={confirmPasswordRef} />
                </div>
                <div className="text-center">
                    <hr />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="cursor-pointer mt-2 bg-blue-500 px-4 py-2 rounded text-white">
                        Update profile
                    </button>
                </div>
                <div className="text-center mt-5">
                    <Link to="/">Cancel</Link>
                </div>
            </form>
        </div>
    )
}