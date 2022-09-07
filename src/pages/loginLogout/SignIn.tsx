import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { getAuthenticatorTokenReducer } from '@/store/loginSlice';

interface Iinput {
    email: string;
    password: string;
}

const SignIn: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        setFocus,
        reset,
        formState: { errors },
    } = useForm<Iinput>();

    const onSubmit: SubmitHandler<Iinput> = async (data) => {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            dispatch(
                getAuthenticatorTokenReducer({
                    // idToken: authInformation.providerId,
                    email: data.email,
                })
            );
            // console.log(auth.currentUser?.getIdToken());
            // console.log((await user.user.getIdToken()).toString());
            alert('로그인 되었습니다.');
            navigate('/');
        } catch (error) {
            alert('아이디 또는 비밀번호를 잘못 입력하셨습니다.');
            setFocus('password');
            reset({ password: '' });
        }
    };

    return (
        <div className="grid w-full h-full place-items-center text-gray-400 pt-28">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid w-96 h-96 rounded-lg bg-gray-700 place-content-center"
            >
                <div className="flex flex-col">
                    <div>
                        <p className="font-bold text-2xl text-center pb-2">
                            로그인
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
                            autoComplete="off"
                        />
                    </div>
                    <div className="flex mt-8 justify-between">
                        <input
                            type="submit"
                            className="w-20 h-10 rounded-lg bg-stone-400 text-white font-semibold"
                            value="로그인"
                        />
                        <Link to="/signUp">
                            <button
                                type="button"
                                className="w-20 h-10 rounded-lg bg-slate-600 text-white font-semibold"
                            >
                                회원가입
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
