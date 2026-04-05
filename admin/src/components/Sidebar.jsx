// import React, { useContext } from 'react'
// import { AdminContext } from '../context/AdminContext'
// import { NavLink } from 'react-router-dom';
// import { assets } from '../assets/assets';
// import { DoctorContext } from '../context/DoctorContext';

// const Sidebar = () => {

//   const {aToken }= useContext(AdminContext);
//   const {dToken }= useContext(DoctorContext);


//   return (
//     <div className='min-h-screen bg-white border-r'>
//       {
//         aToken && <ul className='text-[#515151] mt-5 '>

//           <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}` } to={'admin-dashboard'}>
//             <img src={assets.home_icon} alt="" />
//             <p>Dashboard</p>
//           </NavLink>

//           <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}` } to={'all-appointments'}>
//             <img src={assets.appointment_icon} alt="" />
//             <p>Appointments</p>
//           </NavLink>

//           <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}` } to={'/add-doctor'}>
//             <img src={assets.add_icon} alt="" />
//             <p>Add Doctor</p>
//           </NavLink>

//           <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}` } to={'/doctor-list'}>
//             <img src={assets.people_icon} alt="" />
//             <p>Doctors List</p>
//           </NavLink>
//         </ul>
//       }
//       {
//         dToken && <ul className='text-[#515151] mt-5 '>

//           <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}` } to={'doctor-dashboard'}>
//             <img src={assets.home_icon} alt="" />
//             <p className='hidden md:block'>Dashboard</p>
//           </NavLink>

//           <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}` } to={'doctor-appointments'}>
//             <img src={assets.appointment_icon} alt="" />
//             <p className='hidden md:block'>Appointments</p>
//           </NavLink>

          

//           <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}` } to={'/doctor-profile'}>
//             <img src={assets.people_icon} alt="" />
//             <p className='hidden md:block'>Profile</p>
//           </NavLink>
//         </ul>
//       }

//     </div>
//   )
// }

// export default Sidebar

import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  const adminLinks = [
    { to: 'admin-dashboard',   icon: assets.home_icon,        label: 'Dashboard'     },
    { to: 'all-appointments',  icon: assets.appointment_icon, label: 'Appointments'  },
    { to: '/add-doctor',       icon: assets.add_icon,         label: 'Add Doctor'    },
    { to: '/doctor-list',      icon: assets.people_icon,      label: 'Doctors List'  },
  ];

  const doctorLinks = [
    { to: 'doctor-dashboard',    icon: assets.home_icon,        label: 'Dashboard'    },
    { to: 'doctor-appointments', icon: assets.appointment_icon, label: 'Appointments' },
    { to: '/doctor-profile',     icon: assets.people_icon,      label: 'Profile'      },
  ];

  const links = aToken ? adminLinks : dToken ? doctorLinks : [];

  return (
    <div
      className='min-h-screen bg-white'
      style={{ borderRight: '1px solid #e8eaf2', minWidth: '72px' }}
    >
      {/* Section label */}
      {links.length > 0 && (
        <p className='hidden md:block text-xs font-semibold uppercase tracking-widest px-6 pt-6 pb-3'
          style={{ color: '#9399b2', letterSpacing: '0.1em' }}>
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      )}

      <ul className='flex flex-col gap-1 px-3 mt-2'>
        {links.map(({ to, icon, label }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <li
                className='flex items-center gap-3 py-2.5 px-3 md:px-4 rounded-xl cursor-pointer transition-all duration-200'
                style={{
                  background: isActive ? '#eef1fd' : 'transparent',
                  color: isActive ? '#4361EE' : '#5a5f7a',
                  fontWeight: isActive ? '600' : '400',
                  listStyle: 'none',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#f7f8fc'
                    e.currentTarget.style.color = '#4361EE'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#5a5f7a'
                  }
                }}
              >
                {/* Icon with colored bg when active */}
                <div
                  className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200'
                  style={{ background: isActive ? 'white' : 'transparent' }}
                >
                  <img
                    className='w-4 h-4 object-contain'
                    style={{ opacity: isActive ? 1 : 0.55 }}
                    src={icon}
                    alt={label}
                  />
                </div>

                {/* Label — hidden on mobile */}
                <p className='hidden md:block text-sm'>{label}</p>

                {/* Active indicator dot on mobile */}
                {isActive && (
                  <div className='md:hidden ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0'
                    style={{ background: '#4361EE' }} />
                )}
              </li>
            )}
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
