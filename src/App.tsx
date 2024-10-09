import { useEffect, useRef } from 'react';
import './App.css';
import screenshot1 from './assets/images/screenshot1.png';
import screenshot2 from './assets/images/screenshot2.png';
import screenshot3 from './assets/images/screenshot3.png';
import screenshot4 from './assets/images/screenshot4.png';

function App() {
  const ref = useRef<HTMLDivElement | null>(null);

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
    <div className="w-full h-full flex items-center gap-x-8 justify-center">
      <div className="w-[380.317px] h-[581.15px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
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
      <div className='w-[350px] bg-white border px-[40px] pt-10 pb-2'>
        <a href='#' className='flex justify-center mb-8'>
          <img className='h-[59px] w-[175px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="" />

        </a>
        <form className='grid gap-y-1'>
          <label className='block relative'>
            <input type='text' required={true} className='bg-zinc-50 px-2 border rounded-sm outline-none text-xs focus:border-gray-400 w-full h-[38px] valid:pt-[10px] peer'/>
            <small className='absolute top-1/2 left-[9px] cursor-text pointer-event-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 peer-valid:text-gray-500'>Phone number, username or email</small>
          </label>
          <label className='block relative'>
            <input type='password' required={true} className='bg-zinc-50 px-2 border rounded-sm outline-none text-xs focus:border-gray-400 w-full h-[38px] valid:pt-[10px] peer'/>
            <small className='absolute top-1/2 left-[9px] cursor-text pointer-event-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 peer-valid:text-gray-500'>Password</small>
          </label>
          <button type='submit' disabled={true} className='h-[30px] rounded bg-button text-white font-medium text-sm disabled:opacity-50'>Log In</button>

        </form>
      </div>
    </div>
  );
}

export default App;
