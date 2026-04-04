// import React from 'react'
// import {assets} from '../assets/assets'

// const Header = () => {
//   return (
//     <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

//     {/* Left side */}
//     <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
//         <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md: lg:leading-tight'>
//             Book Appoitment  <br /> With Trusted Doctors
//         </p>
//         <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light '>
//             <img className='w-28' src={assets.group_profiles} alt="" />
//             <p>
//                 Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block ' />
//                 schedule your appointment hassle-free.
//             </p>
//         </div>
//         <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
//             Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
//         </a>
//     </div>
//     {/* Right side */}
//     <div className='md:w-1/2 relative'>
//         <img className='w-full md:absolute bottom-0 h-auto rounded-lg'  src={assets.header_img} alt="" />
//     </div>

//     </div>
//   )
// }

// export default Header


import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='relative flex flex-col md:flex-row flex-wrap overflow-hidden rounded-2xl mx-4 md:mx-10 mt-6'
      style={{ background: 'linear-gradient(135deg, #4361EE 0%, #3a4fd6 50%, #5271F5 100%)' }}>

      {/* Decorative background circles */}
      <div className='absolute top-[-80px] right-[-60px] w-[500px] h-[500px] rounded-full pointer-events-none'
        style={{ background: 'rgba(255,255,255,0.04)' }} />
      <div className='absolute bottom-[-100px] right-[200px] w-[300px] h-[300px] rounded-full pointer-events-none'
        style={{ background: 'rgba(255,255,255,0.04)' }} />

      {/* ── Left Side ── */}
      <div className='relative z-10 md:w-1/2 flex flex-col items-start justify-center gap-5 py-14 px-8 md:px-12 lg:px-16'>

        {/* Badge */}
        <div className='flex items-center gap-2 px-3 py-1.5 rounded-full text-sm'
          style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}>
          <span className='w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold'
            style={{ background: '#06D6A0', color: '#03a87e' }}>✓</span>
          Trusted by 50,000+ patients
        </div>

        {/* Heading */}
        <h1 className='text-4xl md:text-5xl lg:text-[3.2rem] font-semibold text-white leading-tight tracking-tight'>
          Book Appointment <br />
          With <span className='italic font-normal' style={{ color: 'rgba(255,255,255,0.72)' }}>Trusted Doctors</span>
        </h1>

        {/* Sub-copy with group profiles image */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3'>
          <img className='w-28' src={assets.group_profiles} alt='Trusted patients' />
          <p className='text-sm font-light' style={{ color: 'rgba(255,255,255,0.78)' }}>
            <span className='block font-semibold text-white'>100+ Doctors available</span>
            Simply browse & schedule hassle-free.
          </p>
        </div>

        {/* CTA */}
        <a href='#speciality'
          className='flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5'
          style={{ background: 'white', color: '#4361EE', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
          Book Appointment
          <img className='w-3' src={assets.arrow_icon} alt='' />
        </a>
      </div>

      {/* ── Right Side: image + floating stat cards ── */}
      <div className='md:w-1/2 relative flex items-end justify-center min-h-[260px] md:min-h-0'>

        {/* Doctor image */}
        <img
          className='w-full md:absolute bottom-0 h-auto object-contain object-bottom'
          style={{ maxHeight: '420px', filter: 'drop-shadow(0 -8px 40px rgba(0,0,0,0.08))' }}
          src={assets.header_img}
          alt='Doctors'
        />

        {/* Floating stat cards — visible md+ */}
        <div className='hidden md:flex flex-col gap-3 absolute right-4 top-1/2 -translate-y-1/2 z-20'>
          {[
            { num: '98%', label: 'Patient satisfaction' },
            { num: '15min', label: 'Avg. booking time' },
            { num: '6', label: 'Specialties covered' },
          ].map((s, i) => (
            <div key={i} className='rounded-xl px-5 py-3 min-w-[150px]'
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(12px)',
              }}>
              <p className='text-2xl font-semibold text-white leading-tight'>{s.num}</p>
              <p className='text-xs mt-0.5' style={{ color: 'rgba(255,255,255,0.7)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
