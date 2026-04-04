// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Banner = () => {
//     const navigate = useNavigate();
//   return (
//     <div className='flex bg-primary rounded-lg px-6 sm:px-14 lg:px-12 my-20 md:mx-10 '>
//         {/* Left side content */}
//         <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
//             <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white  '>
//                 <p>Book Appointment</p>
//                 <p className='mt-4 '>With 100+ Trusted Doctors</p>
//             </div>
//             <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base cursor-pointer text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '> Create Account</button>
//         </div>

//         {/* Right side image */}
//         <div className='hidden md:block md:w-1/2 lg:w-[370px] relative '>
//             <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
//         </div>
//     </div>
//   )
// }

// export default Banner

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className='mb-20'>
      <div
        className='relative flex flex-col md:flex-row items-center justify-between overflow-hidden px-8 sm:px-14 lg:px-20 py-14 md:py-0'
        style={{ background: 'linear-gradient(135deg, #4361EE 0%, #3a4fd6 60%, #5E35B1 100%)' }}
      >
        {/* Decorative circles */}
        <div className='absolute right-[-40px] top-[-60px] w-[360px] h-[360px] rounded-full pointer-events-none'
          style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className='absolute right-[120px] bottom-[-80px] w-[220px] h-[220px] rounded-full pointer-events-none'
          style={{ background: 'rgba(255,255,255,0.04)' }} />

        {/* ── Left: Text ── */}
        <div className='relative z-10 flex-1 py-0 md:py-16 lg:py-24'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight'>
            Book Appointment <br />
            <span className='mt-2 block'>With 100+ Trusted Doctors</span>
          </h2>
          <p className='mt-4 text-sm md:text-base max-w-sm leading-relaxed'
            style={{ color: 'rgba(255,255,255,0.72)' }}>
            Join thousands of patients who trust Prescripto for their healthcare needs.
          </p>

          <div className='flex flex-wrap gap-3 mt-7'>
            <button
              onClick={() => { navigate('/login'); scrollTo(0, 0) }}
              className='flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5'
              style={{ background: 'white', color: '#4361EE', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}
            >
              Create Account →
            </button>
            <button
              className='px-8 py-3.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200'
              style={{
                background: 'transparent',
                color: 'white',
                border: '1.5px solid rgba(255,255,255,0.4)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Learn more
            </button>
          </div>
        </div>

        {/* ── Right: Image + mini stats ── */}
        <div className='relative z-10 hidden md:flex flex-col items-center gap-5 md:w-[42%] lg:w-[370px]'>
          <img
            className='w-full max-w-sm object-contain object-bottom'
            style={{ maxHeight: '340px', filter: 'drop-shadow(0 -4px 30px rgba(0,0,0,0.1))' }}
            src={assets.appointment_img}
            alt='Doctor'
          />

          {/* Mini stat cards */}
          <div className='absolute bottom-6 left-0 right-0 flex justify-center gap-3'>
            {[
              { num: '50K+', label: 'Happy patients' },
              { num: '100+', label: 'Doctors' },
            ].map((s, i) => (
              <div key={i} className='rounded-xl px-5 py-3 text-center'
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(12px)',
                }}>
                <p className='text-xl font-semibold text-white leading-tight'>{s.num}</p>
                <p className='text-xs mt-0.5' style={{ color: 'rgba(255,255,255,0.7)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
