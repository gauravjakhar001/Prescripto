// import  { useContext } from 'react'
// import { assets } from '../assets/assets'
// import { AdminContext } from '../context/AdminContext'
// import {useNavigate} from 'react-router-dom'
// import { DoctorContext } from '../context/DoctorContext'

// const Navbar = () => {

//     const {aToken,setAToken} = useContext(AdminContext);
//     const {dToken ,setDToken} = useContext(DoctorContext);

//     const navigate  = useNavigate();

//     const logout = ()=>{
//         navigate('/')
//         aToken && setAToken('')
//         aToken && localStorage.removeItem('aToken')
//         dToken && setDToken('')
//         dToken && localStorage.removeItem('dToken')
//     }

//   return (
//     <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
//         <div className='flex items-center gap-2 text-xs'>
//             <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
//             <p className='border px-2.5 py-0.5 rounded-full border-gray-600 text-gray-600'>{aToken ?'Admin' : 'Doctor' }    </p>
//         </div>

//         <button onClick={logout} className='bg-primary text-white text-sm  px-10 py-2 rounded-full'>Logout</button>
//     </div>
//   )
// }

// export default Navbar

import { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
  }

  const isAdmin = Boolean(aToken);

  return (
    <div
      className='flex justify-between items-center px-4 sm:px-10 py-3'
      style={{
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #e8eaf2',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Left: logo + role badge */}
      <div className='flex items-center gap-3'>
        <img
          className='w-32 sm:w-36 cursor-pointer'
          src={assets.admin_logo}
          alt='Prescripto'
        />

        {/* Role badge */}
        <span
          className='text-xs font-semibold px-3 py-1 rounded-full'
          style={isAdmin
            ? { background: '#eef1fd', color: '#4361EE', border: '1px solid #c7d0fb' }
            : { background: '#e6fdf8', color: '#059669', border: '1px solid #6ee7b7' }
          }
        >
          {isAdmin ? '🛡️ Admin' : '👨‍⚕️ Doctor'}
        </span>
      </div>

      {/* Right: logout */}
      <button
        onClick={logout}
        className='flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200'
        style={{
          background: 'white',
          color: '#5a5f7a',
          border: '1.5px solid #e8eaf2',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#fee2e2'
          e.currentTarget.style.color = '#dc2626'
          e.currentTarget.style.borderColor = '#fca5a5'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'white'
          e.currentTarget.style.color = '#5a5f7a'
          e.currentTarget.style.borderColor = '#e8eaf2'
        }}
      >
        <span>🚪</span> Logout
      </button>
    </div>
  )
}

export default Navbar
