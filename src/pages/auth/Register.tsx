import React, { useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import googlePlay from '../../assets/images/GooglePlay.png';
import microsoft from '../../assets/images/Microsoft.png';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../../assets/types/sliceTypes';
import { addUser } from '../../redux/actions/authAction';
import { useAppDispatch } from '../../redux/store';
import { useFormik } from 'formik';
import { registerFormSchemas } from '../../schemas/RegisterFormSchemas';
import classNames from 'classnames';

function Register() {
    const navigate = useNavigate()
    const [username,setUsername] = useState<string>("")
    const [fullname,setFullname] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [showPassword,setShowPassword] = useState<boolean>(false)
   

    const submit = async (values: any, actions: any) => {
      const { resetForm } = actions;
      const dispatch = useAppDispatch();
      const navigate = useNavigate();
    
      try {
        const payload: UserType = {
          id: String(Math.floor(Math.random() * 999999999)),
          email: values.email,
          password: values.password,
          fullname: values.fullname,
          username:values.username
        };
    
        await dispatch(addUser(payload));
    
        resetForm();
        // toast.success("Qeydiyyat uğurla tamamlandı");
        navigate("/auth/login");
      } catch (error) {
        // If any unexpected error occurs
        // toast.error("Qeydiyyatdan keçərkən xəta baş verdi");
      }
    };
  
    const enable = username && password && fullname && email;
    const toggleVisibility = () => {
      setShowPassword(!showPassword);
    }

    const { values, errors, touched, handleChange, handleBlur, handleSubmit,resetForm } = useFormik({
      initialValues: {
        email: '',
        password: '',
        fullname: '',
        username: '',
      },
      validationSchema: registerFormSchemas,
      onSubmit: submit,
    });

  return (
    <div className="w-full h-full flex flex-wrap items-center gap-x-8 justify-center md:mt-4">
    <div className='w-[350px] grid gap-y-3'>
    <div className='bg-white border px-[40px] pt-10 pb-2'>
      <a href='#' className='flex justify-center mb-3'>
        <img className='h-[59px] w-[175px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="" />

      </a>
     <div className='flex justify-center items-center mb-4'>
     <p className='text-gray-500 font-semibold text-base text-center leading-5'>
      Sign up to see photos and videos from your friends.
      </p>
     </div>
    <div className='bg-loginbtn h-[33px] mt-2 mb-2 p-2 rounded-lg hover:bg-loginbtnhover'>
    <a href="#" className='text-white text-sm font-semibold flex gap-x-2 items-center justify-center'><AiFillFacebook size={20}/>
          Log in with Facebook
        </a>
    </div>
    <div className='flex items-center mt-4 my-4'>
          <div className='h-px bg-gray-300 flex-1'/>
          <span className='px-4 text-[13px] text-gray-500 font-semibold'>OR</span>
          <div className='h-px bg-gray-300 flex-1'/>
        </div>
      <form onSubmit={handleSubmit} className='grid gap-y-1'>
      <label className='block relative'>
  <input
    id="email"
    type='text'
    required={true}
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
    className={classNames(
      'bg-zinc-50 px-2 border rounded-sm outline-none text-xs focus:border-gray-400 w-full h-[38px] valid:pt-[10px] peer',
      {
        'border-red-500': errors.email && touched.email, 
        'peer-valid:text-[10px] peer-valid:top-2.5 peer-valid:text-gray-600': values.email.length > 0,
      }
    )}
  />
  <small className={classNames(
    'absolute left-2 cursor-text pointer-events-none text-xs text-gray-500 transition-all top-1/2 transform -translate-y-1/2',
    {
      'top-2.5 text-[10px] text-gray-600': values.email.length > 0,
      'top-[20px]': values.email.length === 0 
    }
  )}>
    Mobile number or email
  </small>
  
  {/* Display error message */}
  {errors.email && touched.email && (
    <div className="text-red-500 text-xs mt-1">
      {errors.email}
    </div>
  )}
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
        <label className='block relative'>
          <input type='text' required={true} value={fullname} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setFullname(e.target.value)} className='bg-zinc-50 px-2 border rounded-sm outline-none text-xs focus:border-gray-400 w-full h-[38px] valid:pt-[10px] peer'/>
          <small className='absolute top-1/2 left-[9px] cursor-text pointer-event-none text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 peer-valid:text-gray-600'>Full Name</small>
        </label>
        <label className='block relative'>
          <input type='text' required={true} value={username} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUsername(e.target.value)} className='bg-zinc-50 px-2 border rounded-sm outline-none text-xs focus:border-gray-400 w-full h-[38px] valid:pt-[10px] peer'/>
          <small className='absolute top-1/2 left-[9px] cursor-text pointer-event-none text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 peer-valid:text-gray-600'>Username</small>
        </label>
        <div className='font-normal text-xs text-gray-500 text-center grid gap-y-4 mt-3 mb-1'>
            <p className='leading-4'>People who use our service may have uploaded your contact information to Instagram. <a className='text-link'>Learn More</a></p>
            <p className='leading-4'>By signing up, you agree to our <a className='text-link'>Terms</a> , <a className='text-link'>Privacy Policy</a> and <a className='text-link'>Cookies Policy</a> .</p>
        </div>
        <button type='submit' disabled={!enable} className={`h-[32px] rounded-lg mt-2 mb-8 bg-loginbtn text-white font-semibold text-sm ${enable ? 'hover:bg-loginbtnhover' : 'opacity-70'}`}>Sign up</button>  
      </form>
    </div>
    <div className='bg-white border p-6 text-sm text-center m-15'>
    Have an account? <a href="" onClick={() => navigate("/auth/login")} className='font-semibold text-loginbtn'>Log in</a>
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

export default Register