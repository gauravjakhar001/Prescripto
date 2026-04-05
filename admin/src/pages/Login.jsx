// import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets'
// import { AdminContext } from '../context/AdminContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { DoctorContext } from '../context/DoctorContext';


// const Login = () => {

//   const [state,setState] = useState('Admin');
  
//   const {setAToken,backendUrl} =  useContext(AdminContext);
//   const{setDToken } = useContext(DoctorContext);

//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');

//   const onSubmitHandler = async(event)=>{

//     event.preventDefault();

//     try {

//       if (state === 'Admin') {
//         const {data} = await axios.post(backendUrl + '/api/admin/login',{email,password});

//         if(data.success){
//           localStorage.setItem('aToken',data.token)
//           setAToken(data.token);
//         }else{
//           toast.error(data.message);
//         }
        
//       }else {
//           //state === 'Doctor'

//           const {data} = await axios.post(backendUrl + '/api/doctor/login',{email,password});

//           if(data.success){
//           localStorage.setItem('dToken',data.token)
//           setDToken(data.token);
//           console.log(data.token)
//         }else{
//           toast.error(data.message);
//         }



//       }
      
//     } catch (error) {
      
//     }

//   }

//   return (
//     <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
//       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
//         <p className='text-2xl font-semibold m-auto '><span className='text-primary'>{state}</span> Login</p>
//         <div className='w-full '>
//           <p>Email</p>
//           <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
//         </div>

//          <div className='w-full '>
//           <p>Password</p>
//           <input onChange={(e)=> setPassword(e.target.value)} value={password}  className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
//         </div>

//         <button className='bg-primary text-white w-full py-2 rounded-md text-base' >Login</button>

//         {
//           state === 'Admin' 
//           ? <p> Doctor Login? <span className='text-primary underline cursor-pointer' onClick={()=> setState('Doctor')}>Click here</span> </p>
//           : <p> Admin Login? <span className='text-primary underline cursor-pointer' onClick={()=> setState('Admin')}>Click here</span> </p>
//         }
//       </div>

//     </form>
//   )
// }

// export default Login


import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Admin');
  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password });
        if (data.success) {
          localStorage.setItem('aToken', data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password });
        if (data.success) {
          localStorage.setItem('dToken', data.token);
          setDToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const isAdmin = state === 'Admin';

  return (
    <div className='min-h-screen flex items-center justify-center px-4'
      style={{ background: '#f7f8fc' }}>

      <form onSubmit={onSubmitHandler} className='w-full max-w-md'>
        <div
          className='bg-white rounded-2xl p-8 flex flex-col gap-5'
          style={{ border: '1.5px solid #e8eaf2', boxShadow: '0 8px 40px rgba(67,97,238,0.08)' }}
        >

          {/* Role toggle tabs */}
          <div className='flex rounded-xl p-1 gap-1' style={{ background: '#f0f2fa' }}>
            {['Admin', 'Doctor'].map((role) => (
              <button
                key={role}
                type='button'
                onClick={() => setState(role)}
                className='flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200'
                style={{
                  background: state === role ? 'white' : 'transparent',
                  color: state === role ? '#4361EE' : '#9399b2',
                  boxShadow: state === role ? '0 1px 6px rgba(67,97,238,0.1)' : 'none',
                }}
              >
                {role === 'Admin' ? '🛡️' : '👨‍⚕️'} {role}
              </button>
            ))}
          </div>

          {/* Header */}
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <div className='w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0'
                style={{ background: '#eef1fd' }}>
                {isAdmin ? '🛡️' : '👨‍⚕️'}
              </div>
              <span className='text-xs font-semibold tracking-widest uppercase'
                style={{ color: '#4361EE', letterSpacing: '0.1em' }}>
                {isAdmin ? 'Admin Access' : 'Doctor Access'}
              </span>
            </div>
            <h1 className='text-2xl font-semibold text-gray-900 tracking-tight'>
              {state} Login
            </h1>
            <p className='text-sm text-gray-500 mt-1'>
              Sign in to access the {isAdmin ? 'admin' : 'doctor'} panel
            </p>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #f0f2fa' }} />

          {/* Email */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={isAdmin ? 'admin@prescripto.com' : 'doctor@prescripto.com'}
              className='w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200'
              style={{ border: '1.5px solid #e8eaf2', background: '#f7f8fc', color: '#0D0F1A' }}
              onFocus={e => {
                e.currentTarget.style.borderColor = '#4361EE'
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(67,97,238,0.08)'
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = '#e8eaf2'
                e.currentTarget.style.background = '#f7f8fc'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Password */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-medium text-gray-700'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='••••••••'
              className='w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200'
              style={{ border: '1.5px solid #e8eaf2', background: '#f7f8fc', color: '#0D0F1A' }}
              onFocus={e => {
                e.currentTarget.style.borderColor = '#4361EE'
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(67,97,238,0.08)'
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = '#e8eaf2'
                e.currentTarget.style.background = '#f7f8fc'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 mt-1'
            style={{
              background: '#4361EE',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 16px rgba(67,97,238,0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#2d47c9'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(67,97,238,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#4361EE'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(67,97,238,0.3)'
            }}
          >
            Login as {state} →
          </button>

          {/* Toggle */}
          <p className='text-sm text-center text-gray-500'>
            {isAdmin ? (
              <>Looking for doctor login?{' '}
                <span
                  className='font-medium cursor-pointer'
                  style={{ color: '#4361EE' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2d47c9'}
                  onMouseLeave={e => e.currentTarget.style.color = '#4361EE'}
                  onClick={() => setState('Doctor')}
                >
                  Click here
                </span>
              </>
            ) : (
              <>Looking for admin login?{' '}
                <span
                  className='font-medium cursor-pointer'
                  style={{ color: '#4361EE' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2d47c9'}
                  onMouseLeave={e => e.currentTarget.style.color = '#4361EE'}
                  onClick={() => setState('Admin')}
                >
                  Click here
                </span>
              </>
            )}
          </p>

        </div>
      </form>
    </div>
  )
}

export default Login
