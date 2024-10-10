import { useEffect, useRef, useState } from 'react';
import screenshot1 from '../../assets/images/screenshot1.png'
import screenshot2 from '../../assets/images/screenshot2.png';
import screenshot3 from '../../assets/images/screenshot3.png';
import screenshot4 from '../../assets/images/screenshot4.png';
import googlePlay from '../../assets/images/GooglePlay.png';
import microsoft from '../../assets/images/Microsoft.png';
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate()
  const ref = useRef<HTMLDivElement | null>(null);
  const [username,setUsername] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  const [showPassword,setShowPassword] = useState<boolean>(false)


  const enable = username && password;
  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  }
  useEffect(() => {
    const images:any = ref.current?.querySelectorAll('img');
    const total = images?.length;
    let current = 0;

    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].style.opacity = '0';
      } else {
        images[total - 1].style.opacity = '0';
      }

      images[current].style.opacity = '1';

      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };

    imageSlider(); 
    const interval = setInterval(imageSlider, 3000); 

    return () => {
      clearInterval(interval); 
    };
  }, [ref]);
  
  return (
    <div className="w-full h-full flex flex-wrap items-center gap-x-8 justify-center md:mt-10">
    <div className="hidden md:block w-[380.317px] h-[581.15px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
      <div className="w-[250px] h-[538.84px] absolute top-[27px] left-[112px]" ref={ref}>
        <img
          className="w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-linear"
          style={{ opacity: 0 }}
          src={screenshot1}
        />
        <img
          className="w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-linear"
          style={{ opacity: 0 }}
          src={screenshot2}
        />
        <img
          className="w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-linear"
          style={{ opacity: 0 }}
          src={screenshot3}
        />
        <img
          className="w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-linear"
          style={{ opacity: 0 }}
          src={screenshot4}
        />
      </div>
    </div>
    
    <div className='w-[350px] grid gap-y-3'>
    <div className='bg-white border px-[40px] pt-10 pb-2'>
      <a href='#' className='flex justify-center mb-8'>
        <img className='h-[59px] w-[175px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="" />

      </a>
      <form className='grid gap-y-1'>
        <label className='block relative'>
          <input type='text' required={true} value={username} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUsername(e.target.value)} className='bg-zinc-50 px-2 border rounded-sm outline-none text-xs focus:border-gray-400 w-full h-[38px] valid:pt-[10px] peer'/>
          <small className='absolute top-1/2 left-[9px] cursor-text pointer-event-none text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 peer-valid:text-gray-600'>Phone number, username or email</small>
        </label>
        <label className='relative flex border rounded-sm focus-within:border-gray-400'>
          <input type={showPassword ? 'text' : "password"} required={true} value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} className='bg-zinc-50 px-2 outline-none text-xs w-full h-[38px] valid:pt-[10px] peer'/>
          <small className='absolute top-1/2 left-[9px] cursor-text pointer-event-none text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 peer-valid:text-gray-600'>Password</small>
          {password && 
          (
          <button type='button' className='h-full flex items-center text-sm font-semibold pr-2 hover:text-gray-400' onClick={toggleVisibility}>
             {showPassword ? "Hide" : "Show"}
          </button>)

          }
        </label>
        <button type='submit' disabled={!enable} className={`h-[32px] rounded-lg mt-2 bg-loginbtn text-white font-medium text-sm ${enable ? 'hover:bg-loginbtnhover' : 'opacity-70'}`}>Log In</button>
        <div className='flex items-center mt-4 my-2'>
          <div className='h-px bg-gray-300 flex-1'/>
          <span className='px-4 text-[13px] text-gray-500 font-semibold'>OR</span>
          <div className='h-px bg-gray-300 flex-1'/>
        </div>
        <a href='www.facebook.com' className='mb-2 flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook mt-5'>
          <AiFillFacebook size={20}/>
          Log in with Facebook
        </a>
      <a href='#' className='text-xs flex items-center justify-center text-link mb-3 mt-2'>Forgot password?</a>
      </form>
    </div>
    <div className='bg-white border p-5 text-sm text-center'>
    Don't have an account? <a href="" onClick={() => navigate("/auth/register")} className='font-semibold text-loginbtn'>Sign up</a>
    </div>
    <p className='flex items-center justify-center text-sm mt-1'>Get the app.</p>
    <div className='flex justify-center gap-x-2 mt-1'>
      <img className="h-[40px]" src={googlePlay} alt="" />
      <img className="h-[40px]" src={microsoft} alt="" />
    </div>
    </div>
  </div>
  )
}

export default Login