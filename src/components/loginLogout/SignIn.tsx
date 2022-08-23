import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignIn: FC = () => {
    const { handleSubmit } = useForm();

    const loginClick = () => {};

    return (
        <div className="grid w-full h-96 place-items-center text-gray-400 pt-28">
            <form
                onSubmit={handleSubmit(loginClick)}
                className="grid w-72 h-72 rounded-lg bg-gray-700 place-content-center"
            >
                <div className="flex flex-col">
                    <div>
                        <p className="font-bold text-2xl text-center pb-2">
                            Sign In
                        </p>
                    </div>
                    <div>
                        <label
                            htmlFor="user-id"
                            className="text-lg font-semibold block"
                        >
                            Email
                        </label>
                        <input
                            name="id"
                            type="id"
                            className="mt-3 p-1 bg-gray-200"
                        ></input>
                    </div>
                    <div className="pt-5">
                        <label
                            htmlFor="user-password"
                            className="text-lg font-semibold block"
                        >
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="mt-3 p-1 bg-gray-200"
                        ></input>
                    </div>
                    <div className="flex mt-6 justify-between">
                        <button
                            type="submit"
                            className="w-20 h-10 text-white rounded bg-stone-600"
                        >
                            SIGN IN
                        </button>
                        <Link to="/signUp">
                            <button
                                type="button"
                                className="w-20 h-10 rounded bg-slate-600 text-white"
                            >
                                SIGN UP
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
