import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface Iinput {
    email: string;
    password: string;
}

const SignIn: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Iinput>();

    const onSubmit: SubmitHandler<Iinput> = async (data) => {
        const auth = getAuth();
        const result = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );
        console.log(result);
        // window.location.replace('/');
    };

    return (
        <div className="grid w-full h-96 place-items-center text-gray-400 pt-28">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid w-72 h-72 rounded-lg bg-gray-700 place-content-center"
            >
                <div className="flex flex-col">
                    <div>
                        <p className="font-bold text-2xl text-center pb-2">
                            Sign In
                        </p>
                    </div>
                    <div>
                        <p>Email</p>
                        <input
                            type="email"
                            {...register('email', {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })}
                            className="p-1 mt-1"
                        />
                    </div>
                    <div className="pt-5">
                        <p>password</p>
                        <input
                            type="password"
                            {...register('password', {
                                required: true,
                            })}
                            className="p-1 mt-1"
                        />
                    </div>
                    <div className="flex mt-6 justify-between">
                        <input
                            type="submit"
                            className="w-20 h-10 rounded-lg bg-stone-400 text-white"
                            value="SIGN IN"
                        />
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
