// import React from "react";
// import { useContext } from "react";
// import { DoctorContext } from "../../context/DoctorContext";
// import { useEffect } from "react";
// import { assets } from "../../assets/assets";
// import { AppContext } from "../../context/AppContext";

// const DoctorDashboard = () => {
//   const { dToken, dashData, setDashData, getDashData,completeAppointment ,cancelAppointment } =
//     useContext(DoctorContext);

//   const { currency, slotDateFormat } = useContext(AppContext);

//   useEffect(() => {
//     if (dToken) {
//       getDashData();
//     }
//   }, [dToken]);

//   return (
//     dashData && (
//       <div className="m-5">
//         <div className="flex flex-wrap gap-3">
//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all ">
//             <img className="w-14 " src={assets.earning_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {currency} {dashData.earnings}
//               </p>
//               <p className="text-gray-400 ">Earnings</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all ">
//             <img className="w-14 " src={assets.appointments_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.appointments}
//               </p>
//               <p className="text-gray-400 ">Appointments</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all ">
//             <img className="w-14 " src={assets.patients_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.patients}
//               </p>
//               <p className="text-gray-400 ">Patients</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white ">
//           <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border ">
//             <img src={assets.list_icon} alt="" />
//             <p className="font-semibold">Latest Booking</p>
//           </div>

//           <div className="pt-4 border border-t-0">
//             {dashData.latestAppointments.map((item, index) => (
//               <div
//                 className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
//                 key={index}
//               >
//                 <img
//                   className="rounded-full w-10"
//                   src={item.userData.image}
//                   alt=""
//                 />
//                 <div className="flex-1 text-sm">
//                   <p className="text-gray-800 font-medium">
//                     {item.userData.name}
//                   </p>
//                   <p className="text-gray-600">
//                     {slotDateFormat(item.slotDate)}{" "}
//                   </p>
//                 </div>
//                 {item.cancelled ? (
//                   <p className="text-red-400 text-xs font-medium">
//                     {" "}
//                     Cancelled{" "}
//                   </p>
//                 ) : item.isCompleted ? (
//                   <p className="text-green-500 text-xs font-medium">
//                     Completed
//                   </p>
//                 ) : (
//                   <div className="flex ">
//                     <img
//                       onClick={() => cancelAppointment(item._id)}
//                       className="w-10 cursor-pointer"
//                       src={assets.cancel_icon}
//                       alt=""
//                     />
//                     <img
//                       onClick={() => completeAppointment(item._id)}
//                       className="w-10 cursor-pointer"
//                       src={assets.tick_icon}
//                       alt=""
//                     />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default DoctorDashboard;


import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData, completeAppointment, cancelAppointment } = useContext(DoctorContext);
  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dToken) getDashData();
  }, [dToken]);

  return (
    dashData && (
      <div className='m-5'>

        {/* ── Page Header ── */}
        <div className='mb-6'>
          <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
            style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
            Doctor Panel
          </span>
          <h1 className='text-2xl font-semibold text-gray-900 tracking-tight mt-3'>Dashboard</h1>
          <p className='text-sm text-gray-500 mt-1'>Your activity at a glance</p>
        </div>

        {/* ── Stat Cards ── */}
        <div className='flex flex-wrap gap-4 mb-8'>
          {[
            { icon: assets.earning_icon,      value: `${currency}${dashData.earnings}`, label: 'Earnings',     color: '#06D6A0', bg: '#e6fdf8' },
            { icon: assets.appointments_icon, value: dashData.appointments,             label: 'Appointments', color: '#4361EE', bg: '#eef1fd' },
            { icon: assets.patients_icon,     value: dashData.patients,                 label: 'Patients',     color: '#f59e0b', bg: '#fef3c7' },
          ].map((stat, i) => (
            <div
              key={i}
              className='flex items-center gap-4 bg-white px-6 py-5 rounded-2xl min-w-52 cursor-pointer transition-all duration-200'
              style={{ border: '1.5px solid #e8eaf2', boxShadow: '0 2px 8px rgba(67,97,238,0.06)' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(67,97,238,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(67,97,238,0.06)'
              }}
            >
              <div className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0'
                style={{ background: stat.bg }}>
                <img className='w-7 h-7 object-contain' src={stat.icon} alt={stat.label} />
              </div>
              <div>
                <p className='text-2xl font-semibold leading-tight' style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className='text-sm text-gray-500 mt-0.5'>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Latest Bookings ── */}
        <div
          className='bg-white rounded-2xl overflow-hidden'
          style={{ border: '1.5px solid #e8eaf2', boxShadow: '0 4px 24px rgba(67,97,238,0.06)' }}
        >
          {/* Section header */}
          <div
            className='flex items-center gap-3 px-6 py-4'
            style={{ borderBottom: '1px solid #f0f2fa', background: '#f7f8fc' }}
          >
            <div className='w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0'
              style={{ background: '#eef1fd' }}>
              <img className='w-4' src={assets.list_icon} alt='' />
            </div>
            <p className='text-sm font-semibold text-gray-800'>Latest Bookings</p>
            <span className='ml-auto text-xs px-2.5 py-0.5 rounded-full font-medium'
              style={{ background: '#eef1fd', color: '#4361EE' }}>
              {dashData.latestAppointments.length} recent
            </span>
          </div>

          {/* Booking rows */}
          <div>
            {dashData.latestAppointments.map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-4 px-6 py-3.5 transition-colors duration-150'
                style={{ borderBottom: '1px solid #f7f8fc' }}
                onMouseEnter={e => e.currentTarget.style.background = '#fafbff'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {/* Patient photo */}
                <img
                  className='w-10 h-10 rounded-full object-cover flex-shrink-0'
                  style={{ border: '1.5px solid #e8eaf2' }}
                  src={item.userData.image}
                  alt=''
                />

                {/* Patient info */}
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-semibold text-gray-800 truncate'>{item.userData.name}</p>
                  <p className='text-xs text-gray-400 mt-0.5 flex items-center gap-1'>
                    <span>📅</span> {slotDateFormat(item.slotDate)}
                  </p>
                </div>

                {/* Status / Action */}
                <div className='flex-shrink-0 flex items-center gap-1.5'>
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
                    <>
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
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {dashData.latestAppointments.length === 0 && (
            <div className='flex flex-col items-center justify-center py-16 text-center'>
              <div className='text-4xl mb-3'>📋</div>
              <p className='text-sm font-semibold text-gray-700 mb-1'>No bookings yet</p>
              <p className='text-xs text-gray-400'>Recent appointments will appear here</p>
            </div>
          )}
        </div>

      </div>
    )
  );
};

export default DoctorDashboard;
