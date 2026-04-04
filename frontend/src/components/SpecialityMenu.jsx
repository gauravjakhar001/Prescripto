// import React from 'react'
// import { specialityData } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//   return (
//     <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800 '  >
//         <h1 className='text-3xl font-medium'>Find by Speciality</h1>

//         <p className='sm:w-1/3 text-center text-sm '>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

//         <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-auto-scroll '>
//             {specialityData.map((item, index)=>(
//                 <Link onClick={()=> window.scrollTo(0,0)} to ={`/doctors/${item.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index}   >
//                     <img className='w-16 sm:w-24 mb-2 ' src={item.image} alt="" />
//                     <p>{item.speciality}</p>
//                 </Link>

//             ) )}
//         </div>
        

//     </div>
//   )
// }

// export default SpecialityMenu


import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-20 px-4'>

      {/* Section eyebrow */}
      <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
        style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
        Browse By
      </span>

      {/* Heading */}
      <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight text-center'>
        Find by Speciality
      </h2>
      <p className='text-sm text-gray-500 text-center max-w-sm leading-relaxed'>
        Browse our extensive list of trusted doctors and schedule your appointment hassle-free.
      </p>

      {/* Speciality cards */}
      <div className='flex flex-wrap justify-center gap-4 pt-6 w-full'>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            onClick={() => window.scrollTo(0, 0)}
            to={`/doctors/${item.speciality}`}
            className='flex flex-col items-center gap-3 px-5 py-6 rounded-2xl cursor-pointer transition-all duration-300 min-w-[120px]'
            style={{
              border: '1.5px solid #e8eaf2',
              background: 'white',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#4361EE'
              e.currentTarget.style.background = '#eef1fd'
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(67,97,238,0.14)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#e8eaf2'
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Icon circle */}
            <div className='w-16 h-16 rounded-full flex items-center justify-center'
              style={{ background: '#f0f2fa' }}>
              <img className='w-10 h-10 object-contain' src={item.image} alt={item.speciality} />
            </div>

            <p className='text-xs font-medium text-center text-gray-500'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
