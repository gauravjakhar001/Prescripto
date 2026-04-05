// import React, { useContext, useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import {assets} from '../assets/assets'
// import { AppContext } from '../context/AppContext';


// const Navbar = () => {

//     const navigate = useNavigate();
//     const [showMenu,setShowMenu]= useState(false);
//     const {token,setToken,userData} = useContext(AppContext);

//     const logout = () =>{
//         setToken('');
//         localStorage.removeItem('token');
//     }
   
//   return (
//     <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 '>
//         <img onClick={()=> navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
//         <ul className='hidden md:flex items-start gap-5 font-medium '>
//             <NavLink to='/' >
//                 <li className='py-1'>HOME</li>
//                 <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
//             </NavLink>
//             <NavLink to='/doctors'  >
//                 <li className='py-1'>ALL DOCTORS</li>
//                 <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
//             </NavLink>
//             <NavLink to='/about'>
//                 <li className='py-1'>ABOUT </li>
//                 <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '/>
//             </NavLink>
//             <NavLink to='/contact'>
//                 <li className='py-1'>CONTACT</li>
//                 <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '/>
//             </NavLink>
//         </ul>

//         <div className='flex items-center gap-4'>
//             {
//                 token && userData
//                 ? <div className='flex items-center gap-2 cursor-pointer group relative'> 
//                     <img className='w-8 rounded-full ' src={userData.image} alt=""  />
//                     <img className='w-2.5' src={assets.dropdown_icon} alt="" />

//                     <div className='absolute top-0 right-0 pt-14 text-base font-medium  text-gray-600 z-20 hidden group-hover:block'>
//                         <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
//                             <p onClick={()=> navigate('my-profile')} className='hover:text-black cursor-pointer '>My Profile</p>
//                             <p onClick={()=> navigate('my-appointments')} className='hover:text-black cursor-pointer '>My Appointments</p>
//                             <p onClick={logout} className='hover:text-black cursor-pointer '>Logout</p>
//                         </div>
//                     </div>
                    
//                      </div> :
//                 <button onClick={()=> navigate('/login')} className='bg-primary text-white px-4 py-2 rounded-full font-light hidden md:block'>Create Account</button>
                
//             }

//             <img onClick={()=> setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
//             {/* Mobile menu */}

//             <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}>
//                 <div className='flex items-center justify-between px-5 py-6'>
//                     <img className='w-36'  src={assets.logo} alt="" />
//                     <img className='w-7' onClick={()=> setShowMenu(false)} src={assets.cross_icon} alt="" />
//                 </div>

//                 <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
//                     <NavLink  onClick={()=>setShowMenu(false)} to='/'> <p className='px-4 py-2  rounded inline-block'>HOME</p></NavLink>
//                     <NavLink  onClick={()=>setShowMenu(false)} to ='/doctors'> <p className='px-4 py-2  rounded inline-block'>ALL DOCTORS</p></NavLink>
//                     <NavLink    onClick={()=>setShowMenu(false)}to='/about'><p className='px-4 py-2  rounded inline-block'>ABOUT</p></NavLink>
//                     <NavLink   onClick={()=>setShowMenu(false)} to ='/contact'> <p className='px-4 py-2  rounded inline-block'>CONTACT</p></NavLink>
                    
//                 </ul>
//             </div>
            
//         </div>

//     </div>
//   )
// }

// export default Navbar


import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
  }

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <div
        className='flex items-center justify-between py-4 px-4 '
        style={{
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #e8eaf2',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          className='w-36 cursor-pointer'
          src={assets.logo}
          alt='Prescripto'
        />

        {/* Nav links */}
        <ul className='hidden md:flex items-center gap-8'>
          {[
            { to: '/', label: 'Home' },
            { to: '/doctors', label: 'All Doctors' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <NavLink key={to} to={to}>
              {({ isActive }) => (
                <li
                  className='text-sm font-medium py-1 relative cursor-pointer transition-colors duration-200'
                  style={{ color: isActive ? '#4361EE' : '#5a5f7a', listStyle: 'none' }}
                >
                  {label}
                  {isActive && (
                    <span
                      className='absolute left-0 right-0 h-0.5 rounded-full'
                      style={{ background: '#4361EE', bottom: '-4px' }}
                    />
                  )}
                </li>
              )}
            </NavLink>
          ))}
        </ul>

        {/* Right side */}
        <div className='flex items-center gap-3'>
          {token && userData ? (
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img
                className='w-9 h-9 rounded-full object-cover'
                style={{ border: '2px solid #e8eaf2' }}
                src={userData.image}
                alt='Profile'
              />
              <img className='w-2.5 opacity-50' src={assets.dropdown_icon} alt='' />

              {/* Dropdown */}
              <div className='absolute top-full right-0 mt-2 z-50 hidden group-hover:block'>
                <div
                  className='flex flex-col gap-1 p-2 rounded-xl min-w-[180px]'
                  style={{
                    background: 'white',
                    border: '1.5px solid #e8eaf2',
                    boxShadow: '0 8px 32px rgba(67,97,238,0.12)',
                  }}
                >
                  {[
                    { label: '👤  My Profile', path: 'my-profile' },
                    { label: '📋  My Appointments', path: 'my-appointments' },
                  ].map(({ label, path }) => (
                    <p
                      key={path}
                      onClick={() => navigate(path)}
                      className='px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors duration-150'
                      style={{ color: '#5a5f7a' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#eef1fd'
                        e.currentTarget.style.color = '#4361EE'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = '#5a5f7a'
                      }}
                    >
                      {label}
                    </p>
                  ))}

                  <div style={{ borderTop: '1px solid #f0f2fa', margin: '4px 0' }} />

                  <p
                    onClick={logout}
                    className='px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors duration-150'
                    style={{ color: '#9399b2' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#fee2e2'
                      e.currentTarget.style.color = '#dc2626'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#9399b2'
                    }}
                  >
                    🚪  Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className='hidden md:flex items-center gap-2'>
              <button
                onClick={() => navigate('/login')}
                className='px-5 py-2 rounded-full text-sm font-medium transition-all duration-200'
                style={{ border: '1.5px solid #e8eaf2', color: '#5a5f7a', background: 'white' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#4361EE'
                  e.currentTarget.style.color = '#4361EE'
                  e.currentTarget.style.background = '#eef1fd'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e8eaf2'
                  e.currentTarget.style.color = '#5a5f7a'
                  e.currentTarget.style.background = 'white'
                }}
              >
                Log in
              </button>
              <button
                onClick={() => navigate('/login')}
                className='px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5'
                style={{
                  background: '#4361EE',
                  color: 'white',
                  border: 'none',
                  boxShadow: '0 4px 14px rgba(67,97,238,0.25)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#2d47c9'}
                onMouseLeave={e => e.currentTarget.style.background = '#4361EE'}
              >
                Create Account →
              </button>
            </div>
          )}

          {/* Mobile hamburger */}
          <img
            onClick={() => setShowMenu(true)}
            className='w-6 md:hidden cursor-pointer'
            src={assets.menu_icon}
            alt='Menu'
          />
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-[60] overflow-hidden bg-white transition-all duration-300`}
      >
        <div className='flex items-center justify-between px-6 py-5'
          style={{ borderBottom: '1px solid #e8eaf2' }}>
          <img className='w-32' src={assets.logo} alt='Prescripto' />
          <img
            className='w-6 cursor-pointer opacity-50 hover:opacity-100 transition-opacity'
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt='Close'
          />
        </div>

        <ul className='flex flex-col gap-1 mt-4 px-4'>
          {[
            { to: '/', label: 'Home' },
            { to: '/doctors', label: 'All Doctors' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <NavLink key={to} onClick={() => setShowMenu(false)} to={to}>
              {({ isActive }) => (
                <li
                  className='px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all'
                  style={{
                    listStyle: 'none',
                    background: isActive ? '#eef1fd' : 'transparent',
                    color: isActive ? '#4361EE' : '#5a5f7a',
                  }}
                >
                  {label}
                </li>
              )}
            </NavLink>
          ))}
        </ul>

        {/* Mobile CTA */}
        {!token && (
          <div className='px-4 mt-6'>
            <button
              onClick={() => { navigate('/login'); setShowMenu(false) }}
              className='w-full py-3 rounded-full text-sm font-semibold'
              style={{ background: '#4361EE', color: 'white', boxShadow: '0 4px 14px rgba(67,97,238,0.25)' }}
            >
              Create Account →
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
