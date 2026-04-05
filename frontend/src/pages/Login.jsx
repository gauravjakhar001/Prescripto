// import { useContext, useEffect, useState } from "react"
// import { AppContext } from "../context/AppContext";
// import axios from 'axios';
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = () => {

//   const {backendUrl ,token ,setToken} = useContext(AppContext);
//   const navigate = useNavigate();
  
//   const [state,setState] = useState('Sign Up');
  
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const [name,setName] = useState('');


//   const onSubmitHandler = async(event) =>{
//     event.preventDefault();

//     try {
//       if( state  === 'Sign Up'){
//         const {data} = await axios.post(backendUrl + '/api/user/register',{name,password,email});

//         if(data.success){
//           localStorage.setItem('token',data.token);
//           setToken(data.token);
//         }else{
//           toast.error(data.message);
//         }

//       }else{
//         const {data} = await axios.post(backendUrl + '/api/user/login',{password,email});

//         if(data.success){
//           localStorage.setItem('token',data.token);
//           setToken(data.token);
//         }else{
//           toast.error(data.message);
//         }
//       }
      
//     } catch (error) {
//         toast.error(error.message);
//     }

//   }

//   useEffect(()=>{
//     if(token){
//       navigate('/');
//     }
//   },[token]);

//   return (
//     <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center justify-center">

//       <div className="flex flex-col gap-3 m-auto items-start p-8 sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
//         <p className="w-full"> Please {state === 'Sign Up' ? 'sign up' : 'log in '} to book appointment</p>
        
//         {
//           state === 'Sign Up' &&
//            <div className="w-full">
//           <p >Full Name</p>
//           <input className="border border-zinc-300 rounded w-full p-2 mt-1 " type="text" onChange={(e)=> setName(e.target.value) } value={name}  required/>
//         </div>
//         }
        
//         <div className="w-full">
//           <p>Email</p>
//           <input className="border border-zinc-300 rounded w-full p-2 mt-1 " type="email" onChange={(e)=> setEmail(e.target.value) } value={email}  required/>
//         </div>

//         <div className="w-full">
//           <p>Password</p>
//           <input className="border border-zinc-300 rounded w-full p-2 mt-1 " type="password" onChange={(e)=> setPassword(e.target.value) } value={password}  required/>
//         </div>

//         <button type="submit"  className="bg-primary text-white w-full py-2 rounded-md text-base  ">{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>

//        {
//         state === 'Sign Up' ?
//         <p>Already have an account? <span className="text-primary underline cursor-pointer" onClick={()=> setState('Login')}>Login here</span></p>
//         : <p>Create an new account? <span className="text-primary underline cursor-pointer" onClick={()=> setState('Sign Up')}>Click here</span> </p>
//        }
//         </div>
     
//     </form>
//   )
// }

// export default Login


import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email });
        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { password, email });
        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) navigate('/');
  }, [token]);

  return (
    <div className='min-h-[80vh] flex items-center justify-center px-4'
      style={{ background: '#f7f8fc' }}>

      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:max-w-md'
      >
        <div
          className='bg-white rounded-2xl p-8 flex flex-col gap-5'
          style={{ border: '1.5px solid #e8eaf2', boxShadow: '0 8px 40px rgba(67,97,238,0.08)' }}
        >
          {/* Header */}
          <div className='mb-1'>
            <div className='flex items-center gap-2 mb-3'>
              <div className='w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0'
                style={{ background: '#eef1fd' }}>
                {state === 'Sign Up' ? '👤' : '🔐'}
              </div>
              <span className='text-xs font-semibold tracking-widest uppercase'
                style={{ color: '#4361EE', letterSpacing: '0.1em' }}>
                {state === 'Sign Up' ? 'New Account' : 'Welcome Back'}
              </span>
            </div>
            <h1 className='text-2xl font-semibold text-gray-900 tracking-tight'>
              {state === 'Sign Up' ? 'Create Account' : 'Log In'}
            </h1>
            <p className='text-sm text-gray-500 mt-1'>
              Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
            </p>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #f0f2fa' }} />

          {/* Full Name — Sign Up only */}
          {state === 'Sign Up' && (
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Full Name</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder='John Doe'
                className='w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200'
                style={{
                  border: '1.5px solid #e8eaf2',
                  background: '#f7f8fc',
                  color: '#0D0F1A',
                }}
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
          )}

          {/* Email */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='you@example.com'
              className='w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200'
              style={{
                border: '1.5px solid #e8eaf2',
                background: '#f7f8fc',
                color: '#0D0F1A',
              }}
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
              style={{
                border: '1.5px solid #e8eaf2',
                background: '#f7f8fc',
                color: '#0D0F1A',
              }}
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

          {/* Submit button */}
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
            {state === 'Sign Up' ? 'Create Account →' : 'Log In →'}
          </button>

          {/* Toggle state */}
          <p className='text-sm text-center text-gray-500'>
            {state === 'Sign Up' ? (
              <>Already have an account?{' '}
                <span
                  className='font-medium cursor-pointer transition-colors duration-150'
                  style={{ color: '#4361EE' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2d47c9'}
                  onMouseLeave={e => e.currentTarget.style.color = '#4361EE'}
                  onClick={() => setState('Login')}
                >
                  Log in here
                </span>
              </>
            ) : (
              <>Don't have an account?{' '}
                <span
                  className='font-medium cursor-pointer transition-colors duration-150'
                  style={{ color: '#4361EE' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2d47c9'}
                  onMouseLeave={e => e.currentTarget.style.color = '#4361EE'}
                  onClick={() => setState('Sign Up')}
                >
                  Sign up here
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
