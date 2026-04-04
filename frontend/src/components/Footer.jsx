// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//          {/* Left section */}
//         <div >
//             <img className='mb-5 w-40 ' src={assets.logo} alt="" />
//             <p className='w-full md:w-2/3 text-gray-600 leading-6'>This the Hospital Management System.</p>

//         </div>
//         {/* Center section */}
//         <div>

//             <p className='text-xl font-medium mb-5 '>COMPANY</p>

//             <ul className='flex flex-col gap-2 text-gray-600'>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Contact us</li>
//                 <li>Privacy policy</li>
//             </ul>
            

//         </div>
//          {/* Right section */}
//         <div>
           
//             <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>

//             <ul className='flex flex-col gap-2 text-gray-600'>
//                 <li>+91-816-850-5082</li>
//                 <li>support@prescripto.com</li>
//             </ul>
//         </div>
//     </div>

//      {/* Copyright text */}
//     <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright 2026 - Gaurav Jakhar</p>
       
//     </div>

//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div style={{ background: '#0D0F1A' }}>
      <div className='md:mx-10'>

        {/* ── Top grid ── */}
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 mt-0 text-sm'
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Left section */}
          <div>
            <img className='mb-5 w-40 brightness-0 invert' src={assets.logo} alt='Prescripto' />
            <p className='w-full md:w-2/3 leading-6' style={{ color: 'rgba(255,255,255,0.45)' }}>
              The modern Hospital Management System.<br />
              Connecting patients with trusted healthcare professionals worldwide.
            </p>
          </div>

          {/* Center section */}
          <div>
            <p className='text-xs font-semibold mb-5 tracking-widest'
              style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
              COMPANY
            </p>
            <ul className='flex flex-col gap-3'>
              {['Home', 'About us', 'Contact us', 'Privacy policy'].map((item) => (
                <li key={item}
                  className='cursor-pointer transition-colors duration-200'
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'white'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right section */}
          <div>
            <p className='text-xs font-semibold mb-5 tracking-widest'
              style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
              GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-3'>
              <li className='flex items-center gap-2' style={{ color: 'rgba(255,255,255,0.55)' }}>
                <span>📞</span> +91-816-850-5082
              </li>
              <li className='flex items-center gap-2' style={{ color: 'rgba(255,255,255,0.55)' }}>
                <span>✉️</span> support@prescripto.com
              </li>
            </ul>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className='flex flex-col sm:flex-row items-center justify-between py-5 gap-2'>
          <p className='text-xs' style={{ color: 'rgba(255,255,255,0.25)' }}>
            Copyright 2026 — Gaurav Jakhar. All rights reserved.
          </p>
          <p className='text-xs' style={{ color: 'rgba(255,255,255,0.25)' }}>
            Made with care for better healthcare
          </p>
        </div>

      </div>
    </div>
  )
}

export default Footer
