// import React, { useContext, useEffect } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { assets } from "../../assets/assets";
// import { AppContext } from "../../context/AppContext";

// const Dashboard = () => {
//   const { aToken, getDashData, cancelAppointment, dashData } =
//     useContext(AdminContext);

//     const {slotDateFormat} = useContext(AppContext);

//   useEffect(() => {
//     if (aToken) {
//       getDashData();
//     }
//   }, aToken);

//   return (
//     dashData && (
//       <div className="m-5">
//         <div className="flex flex-wrap gap-3">
//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all ">
//             <img className="w-14 " src={assets.doctor_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.doctors}
//               </p>
//               <p className="text-gray-400 ">Doctors</p>
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
//               <div className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100" key={index}>
//                 <img className="rounded-full w-10" src={item.docData.image} alt="" />
//                 <div className="flex-1 text-sm">
//                   <p className="text-gray-800 font-medium">{item.docData.name}</p>
//                   <p className="text-gray-600">{slotDateFormat(item.slotDate)} </p>
//                 </div>
//                 {item.cancelled ?
//                            <p className='text-red-400 text-xs font-medium'>Cancelled</p>
//                            : item.isCompleted ?
//                            <p className='text-green-500 text-xs font-medium'>Completed</p>  : <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
//                          }


//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Dashboard;

import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) getDashData();
  }, [aToken]);

  return (
    dashData && (
      <div className='m-5'>

        {/* ── Page Header ── */}
        <div className='mb-6'>
          <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
            style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
            Admin Panel
          </span>
          <h1 className='text-2xl font-semibold text-gray-900 tracking-tight mt-3'>Dashboard</h1>
          <p className='text-sm text-gray-500 mt-1'>Overview of your platform's activity</p>
        </div>

        {/* ── Stat Cards ── */}
        <div className='flex flex-wrap gap-4 mb-8'>
          {[
            { icon: assets.doctor_icon, value: dashData.doctors, label: 'Doctors', color: '#4361EE', bg: '#eef1fd' },
            { icon: assets.appointments_icon, value: dashData.appointments, label: 'Appointments', color: '#06D6A0', bg: '#e6fdf8' },
            { icon: assets.patients_icon, value: dashData.patients, label: 'Patients', color: '#f59e0b', bg: '#fef3c7' },
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
              {/* Icon */}
              <div className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0'
                style={{ background: stat.bg }}>
                <img className='w-7 h-7 object-contain' src={stat.icon} alt={stat.label} />
              </div>

              {/* Value */}
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
                {/* Doctor photo */}
                <img
                  className='w-10 h-10 rounded-full object-cover flex-shrink-0'
                  style={{
                    background: 'linear-gradient(160deg,#eef1fd,#dde5fe)',
                    border: '1.5px solid #e8eaf2'
                  }}
                  src={item.docData.image}
                  alt=''
                />

                {/* Doctor info */}
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-semibold text-gray-800 truncate'>{item.docData.name}</p>
                  <p className='text-xs text-gray-400 mt-0.5 flex items-center gap-1'>
                    <span>📅</span> {slotDateFormat(item.slotDate)}
                  </p>
                </div>

                {/* Status / Action */}
                <div className='flex-shrink-0'>
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
                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className='flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200'
                      style={{ background: '#fff0f0', color: '#e53e3e', border: '1px solid #fca5a5' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#fee2e2'
                        e.currentTarget.style.borderColor = '#f87171'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#fff0f0'
                        e.currentTarget.style.borderColor = '#fca5a5'
                      }}
                    >
                      <img className='w-3.5' src={assets.cancel_icon} alt='' />
                      Cancel
                    </button>
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

export default Dashboard;

