import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

interface Iinput {
    email: string;
    password: string;
    passwordConform: string;
}

const SignUp: FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Iinput>();

    const onSubmit: SubmitHandler<Iinput> = async (data) => {
        console.log(data.email);
        console.log(data.password);
        console.log(watch('password'));
        const auth = getAuth();
        const result = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );
        console.log(result);
        window.location.replace('/signIn');
    };

    return (
        <div className="flex w-full h-full">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mt-28 items-center justify-center m-auto w-96 h-96 font-semibold bg-gray-200 rounded-lg gap-5"
            >
                <div>
                    <p className="font-bold text-2xl">Sign Up</p>
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
                <div>
                    <p>password</p>
                    <input
                        type="password"
                        {...register('password', {
                            required: true,
                            minLength: {
                                value: 8,
                                message: '8자 이상의 비밀번호를 입력해주세요',
                            },
                            maxLength: {
                                value: 16,
                                message: '16자 이하의 비밀번호를 입력해주세요',
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                                message: '영문, 숫자를 섞어서 입력해주세요.',
                            },
                        })}
                        className="p-1 mt-1"
                    />
                    {errors.password && (
                        <p className="text-xs text-red-700 font-bold">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <input
                    type="submit"
                    className="w-32 h-10 rounded-lg bg-stone-400"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default SignUp;
