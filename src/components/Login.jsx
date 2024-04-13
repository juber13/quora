import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";


const Login = () => {
    return (
        <div className="main bg-gray-900 h-auto md:h-screen flex items-center justify-center w-full md:mt-0">
            <div className='bg-black text-white p-1 md:p-5 md:rounded-xl shadow-xl md:max-w-5xl'>
                <div className="heading text-center md:p-5 mt-[10px] md:mt-0">
                    <h2 className='text-red-800 text-4xl md:text-5xl font-bold'>Quora</h2>
                    <p className='text-sm mt-2 font-bold text-gray-400'>A place to share knowledge and better understand the world</p>
                </div>

                <div className="btn-wrapper grid grid-cols-1 gap-3 md:gap-8 p-3 md:grid-cols-2">
                    <div className="login-with-google md:border-r-[1px] p-2 md:p-4 border-gray-700">
                        <div>
                            <span className='text-[14px] md:text-xs text-wrap'>By continuing you indicate that you agree to<br /> Quora’s <a className='text-blue-500 cursor-pointer'>Terms of Service</a> and <a className='text-blue-500 cursor-pointer'>Privacy Policy</a>.</span>
                        </div>

                        <div className='flex flex-col gap-3 mt-4'>
                            <button className='bg-black  flex items-center gap-3 border border-gray-700 rounded-md p-3 text-xs'>
                            <FcGoogle  className='text-xl'/>
                            Continue with Google</button>
                            <button className='bg-black  flex items-center gap-3 border border-gray-700 rounded-md p-3 text-xs'>
                            <ImFacebook2 className='text-xl' fill='#0866FF'/>
                            Continue with Facebook</button>
                        </div>
                    </div>
                    <div className="login-with-email flex flex-col justify-between">
                        <div className='form flex flex-col gap-4'>
                           <div className='border-b-[1px] border-gray-700 p-2'>
                            <h2>Login</h2>
                           </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='text-xs'>Email</label>
                                <input className='p-3 bg-black border border-gray-700 text-xs rounded-md outline-none' type="email" placeholder='Email' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='text-xs'>Password</label>
                                <input className='p-3 bg-black border border-gray-700 text-xs rounded-md outline-none' type="password" placeholder='Password' />
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-4 text-xs">
                            <p className='text-gray-500 cursor-pointer'>forgot Password ?</p>
                            <button className='bg-blue-400 p-2 px-3 opacity-45 rounded-xl'>Login</button>
                        </div>
                    </div>

                </div>

                <div className='footer mt-4 bg-gray-900 p-4 rounded-md'>
                    <ul className='flex gap-3 text-xs text-gray-400 cursor-pointer flex-wrap'>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Contact</li>
                        <li>Languages </li>
                        <li>Your Ad ChoicesPress© Quora, Inc. 2024</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Login