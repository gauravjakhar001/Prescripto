// import React, { useContext, useEffect } from 'react'
// import { AdminContext } from '../../context/AdminContext'

// const DoctorsList = () => {
  
//   const {doctors ,aToken, getAllDoctors,changeAvailability} = useContext(AdminContext);

//   useEffect(()=>{
//     if(aToken){
//       getAllDoctors();
//     }
//   },[aToken])

//   return (
//     <div className='m-5 max-h-[90vh] overflow-y-scroll' >
//       <h1 className='text-lg font-medium'>All Doctors</h1>
//       <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
//         {doctors.map((item,index)=>(
//           <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
//             <img className='bg-indigo-50 group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
//             <div className='p-4 '>
//               <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
//               <p className='text-zinc-600 text-sm'>{item.speciality}</p>
//               <div className='mt-2 flex items-center gap-1 text-sm'>
//                 <input onChange={()=> changeAvailability(item._id)} type="checkbox" checked={item.available} />
//                 <p>Available</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>


//     </div>
//   )
// }

// export default DoctorsList

import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) getAllDoctors();
  }, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-auto'>

      {/* ── Page Header ── */}
      <div className='mb-6'>
        <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
          style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
          Admin Panel
        </span>
        <div className='flex items-center justify-between mt-3'>
          <div>
            <h1 className='text-2xl font-semibold text-gray-900 tracking-tight'>All Doctors</h1>
            <p className='text-sm text-gray-500 mt-1'>
              {doctors.length} doctor{doctors.length !== 1 ? 's' : ''} registered
            </p>
          </div>
        </div>
      </div>

      {/* ── Doctors Grid ── */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
        {doctors.map((item, index) => (
          <div
            key={index}
            className='rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group'
            style={{ border: '1.5px solid #e8eaf2', background: 'white' }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(67,97,238,0.13)'
              e.currentTarget.style.borderColor = 'transparent'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = '#e8eaf2'
            }}
          >
            {/* Doctor photo */}
            <div
              className='w-full aspect-square overflow-hidden transition-all duration-500'
              style={{ background: 'linear-gradient(160deg, #eef1fd 0%, #dde5fe 100%)' }}
            >
              <img
                className='w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105'
                src={item.image}
                alt={item.name}
              />
            </div>

            {/* Info */}
            <div className='p-3.5'>
              <p className='text-gray-900 font-semibold text-sm leading-snug'>{item.name}</p>
              <p className='text-gray-500 text-xs mt-0.5 mb-3'>{item.speciality}</p>

              {/* Availability toggle */}
              <div
                className='flex items-center gap-2 cursor-pointer'
                onClick={() => changeAvailability(item._id)}
              >
                {/* Custom toggle */}
                <div
                  className='w-8 h-4 rounded-full flex items-center px-0.5 transition-all duration-300 flex-shrink-0'
                  style={{
                    background: item.available ? '#06D6A0' : '#e8eaf2',
                  }}
                >
                  <div
                    className='w-3 h-3 rounded-full bg-white transition-all duration-300'
                    style={{
                      transform: item.available ? 'translateX(16px)' : 'translateX(0)',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                    }}
                  />
                </div>
                <span
                  className='text-xs font-medium'
                  style={{ color: item.available ? '#059669' : '#9399b2' }}
                >
                  {item.available ? 'Available' : 'Unavailable'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {doctors.length === 0 && (
        <div className='flex flex-col items-center justify-center py-20 text-center'>
          <div className='text-5xl mb-3'>👨‍⚕️</div>
          <p className='text-base font-semibold text-gray-700 mb-1'>No doctors added yet</p>
          <p className='text-sm text-gray-400'>Add doctors using the "Add Doctor" section</p>
        </div>
      )}

    </div>
  )
}

export default DoctorsList
