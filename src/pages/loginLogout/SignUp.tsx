import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface Iinput {
    email: string;
    password: string;
    setFocus: string;
    passwordConform: string;
}

interface Ierror {
    code: string;
}

const SignUp: FC = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setFocus,
        formState: { errors },
    } = useForm<Iinput>();

    const onSubmit: SubmitHandler<Iinput> = async (data) => {
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            alert('정상적으로 회원가입 되었습니다.');
            navigate('/signIn');
        } catch (error) {
            const err = error as Ierror;
            switch (err.code) {
                case 'auth/email-already-in-use':
                    setFocus('email');
                    alert('사용중인 이메일 입니다.');
                    break;
            }
        }
    };

    return (
        <div className="flex w-full h-full">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mt-28 items-center justify-center m-auto w-96 h-96 font-semibold bg-gray-200 rounded-lg gap-5"
            >
                <div>
                    <p className="font-bold text-2xl">회원가입</p>
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
                        autoComplete="off"
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
                    value="전송"
                />
            </form>
        </div>
    );
};

export default SignUp;
