import { FormEvent, useRef } from "react";

type SignUpProps = {

};

export const SignUp: React.FC<SignUpProps> = (props) => {

    const emailRef = useRef<string>();
    const passwordRef = useRef<string>();
    const passwordConfirmationRef = useRef<string>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('form submited');
    }

    return (
        <div>
            <h2 className="text-center mb-1">SignUp</h2>
            <hr className="mb-5" />
            <form name="signUpForm" onSubmit={onSubmit}>

                <div className="flex items-center justify-center mb-3">
                    <label className="w-[150px]" htmlFor="email">Email:</label>
                    <input className="border p-2 rounded ml-3" name="email" required ref={emailRef.current} />
                </div>
                <div className="flex items-center justify-center mb-3">
                    <label className="w-[150px]" htmlFor="password">Password:</label>
                    <input className="border p-2 rounded ml-3" type="password" name="password" required ref={passwordRef.current} />
                </div>
                <div className="flex items-center justify-center mb-3">
                    <label className="w-[150px]" htmlFor="confirm_password">Confirm Password:</label>
                    <input className="border p-2 rounded ml-3" type="password" name="confirm_password" required ref={passwordConfirmationRef.current} />
                </div>
                <div className="text-center">
                    <hr />
                    <button
                        type="submit"
                        className="cursor-pointer mt-2 bg-blue-500 px-4 py-2 rounded text-white">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}