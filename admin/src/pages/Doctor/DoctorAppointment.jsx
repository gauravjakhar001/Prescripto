// import React, { useContext, useEffect } from 'react'
// import { DoctorContext } from '../../context/DoctorContext'
// import { AppContext } from '../../context/AppContext';
// import { assets } from '../../assets/assets';

// const DoctorAppointment = () => {
    
//     const {dToken, appointments ,getAppointments ,completeAppointment,cancelAppointment}  = useContext(DoctorContext);
//     const {calculateAge ,slotDateFormat, currency }= useContext(AppContext);
    

//     useEffect(()=>{
//         if(dToken){
//              getAppointments();
//         }
       
//     },[dToken]);

//   return (
//     <div className='w-full max-w-6xl m-5'>
//       <p className='mb-3 text-lg font-medium'>All Appointments</p>

//       <div className='bg-white border text-sm max-h[80vh] min-h-[50vh] overflow-y-scroll' >

//         <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b'>
//           <p>#</p>
//           <p>Patient</p>
//           <p>Payment</p>
//           <p>Age </p>
//           <p>Date & Time</p>
//           <p>Fees</p>
//           <p>Action</p>
          
//         </div>


//         {
//           appointments.reverse().map((item,index)=>(
//             <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] items-center text-gray-500  py-3 px-6 border-b hover:bg-gray-50 ' key={index}>
 
//               <p className='max-sm:hidden'> {index+1}</p>
//               <div className='flex items-center gap-2'>
//                 <img className='w-8 rounded-full' src={item.userData.image} alt="" />
//                 <p >{item.userData.name}</p>
//               </div>

//               <div>
//                 <p className='text-xs inline border border-primary px-2 rounded-full'>{item.payment  ? 'Online' :'CASH'} </p>
//               </div>

//               <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
//               <p>{slotDateFormat(item.slotDate)} {item.slotTime}</p>
//               <p>{currency}{item.amount}</p>
//               {
//                 item.cancelled ? 
//                 <p className='text-red-400 text-xs font-medium'> Cancelled </p>
//                 : item.isCompleted ? 
//                 <p className='text-green-500 text-xs font-medium'>Completed</p>
//                 :  <div className='flex '>
//                  <img onClick={()=> cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
//                 <img onClick={()=> completeAppointment(item._id)}  className='w-10 cursor-pointer'src={assets.tick_icon} alt="" /> 
                  
//               </div>
//               }
             


//             </div>


//           ))  
          
//         }

//       </div>

//     </div>
//   )
// }

// export default DoctorAppointment

import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointment = () => {
  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) getAppointments();
  }, [dToken]);

  return (
    <div className='w-full max-w-6xl m-5'>

      {/* ── Page Header ── */}
      <div className='mb-6'>
        <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
          style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
          Doctor Panel
        </span>
        <h1 className='text-2xl font-semibold text-gray-900 tracking-tight mt-3'>All Appointments</h1>
        <p className='text-sm text-gray-500 mt-1'>
          {appointments.length} appointment{appointments.length !== 1 ? 's' : ''} total
        </p>
      </div>

      {/* ── Table Card ── */}
      <div
        className='bg-white rounded-2xl overflow-hidden max-h-[80vh] min-h-[50vh] overflow-y-auto'
        style={{ border: '1.5px solid #e8eaf2', boxShadow: '0 4px 24px rgba(67,97,238,0.06)' }}
      >

        {/* Table header */}
        <div
          className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3.5 px-6'
          style={{ borderBottom: '1px solid #f0f2fa', background: '#f7f8fc' }}
        >
          {['#', 'Patient', 'Payment', 'Age', 'Date & Time', 'Fees', 'Action'].map((h) => (
            <p key={h} className='text-xs font-semibold uppercase tracking-wide'
              style={{ color: '#9399b2', letterSpacing: '0.07em' }}>
              {h}
            </p>
          ))}
        </div>

        {/* Rows */}
        {[...appointments].reverse().map((item, index) => (
          <div
            key={index}
            className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] items-center text-sm py-3.5 px-6 transition-colors duration-150'
            style={{ borderBottom: '1px solid #f7f8fc', color: '#5a5f7a' }}
            onMouseEnter={e => e.currentTarget.style.background = '#fafbff'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {/* Index */}
            <p className='max-sm:hidden text-xs text-gray-400'>{index + 1}</p>

            {/* Patient */}
            <div className='flex items-center gap-2.5'>
              <img
                className='w-8 h-8 rounded-full object-cover flex-shrink-0'
                style={{ border: '1.5px solid #e8eaf2' }}
                src={item.userData.image} alt=''
              />
              <p className='font-medium text-gray-800 text-sm'>{item.userData.name}</p>
            </div>

            {/* Payment */}
            <div>
              <span
                className='text-xs font-semibold px-2.5 py-1 rounded-full'
                style={item.payment
                  ? { background: '#eef1fd', color: '#4361EE', border: '1px solid #c7d0fb' }
                  : { background: '#fef3c7', color: '#92400e', border: '1px solid #fcd34d' }
                }
              >
                {item.payment ? 'Online' : 'Cash'}
              </span>
            </div>

            {/* Age */}
            <p className='max-sm:hidden text-xs'>{calculateAge(item.userData.dob)} yrs</p>

            {/* Date & Time */}
            <div className='flex items-center gap-1.5'>
              <span className='text-xs'>📅</span>
              <p className='text-xs'>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            </div>

            {/* Fees */}
            <p className='font-semibold text-sm' style={{ color: '#4361EE' }}>
              {currency}{item.amount}
            </p>

            {/* Action / Status */}
            <div className='flex items-center gap-2'>
              {item.cancelled ? (
                <span className='px-2.5 py-1 rounded-full text-xs font-semibold'
                  style={{ background: '#fee2e2', color: '#991b1b' }}>
                  Cancelled
                </span>
              ) : item.isCompleted ? (
                <span className='px-2.5 py-1 rounded-full text-xs font-semibold'
                  style={{ background: '#d1fae5', color: '#065f46' }}>
                  Completed
                </span>
              ) : (
                <div className='flex items-center gap-1.5'>
                  {/* Cancel */}
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className='w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200'
                    style={{ background: '#fff0f0', border: '1px solid #fca5a5' }}
                    title='Cancel appointment'
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#fee2e2'
                      e.currentTarget.style.borderColor = '#f87171'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#fff0f0'
                      e.currentTarget.style.borderColor = '#fca5a5'
                    }}
                  >
                    <img className='w-4' src={assets.cancel_icon} alt='Cancel' />
                  </button>

                  {/* Complete */}
                  <button
                    onClick={() => completeAppointment(item._id)}
                    className='w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200'
                    style={{ background: '#e6fdf8', border: '1px solid #6ee7b7' }}
                    title='Mark as completed'
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#d1fae5'
                      e.currentTarget.style.borderColor = '#34d399'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#e6fdf8'
                      e.currentTarget.style.borderColor = '#6ee7b7'
                    }}
                  >
                    <img className='w-4' src={assets.tick_icon} alt='Complete' />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Empty state */}
        {appointments.length === 0 && (
          <div className='flex flex-col items-center justify-center py-20 text-center'>
            <div className='text-5xl mb-3'>📋</div>
            <p className='text-base font-semibold text-gray-700 mb-1'>No appointments yet</p>
            <p className='text-sm text-gray-400'>Your appointments will appear here once booked</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default DoctorAppointment
