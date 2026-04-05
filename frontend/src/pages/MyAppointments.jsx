// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";


// const MyAppointments = () => {
//   const { backendUrl ,token,getDoctorsData } = useContext(AppContext);

//   const [appointments,setAppointments] = useState([]);
//   const navigate = useNavigate();

//   const months= ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

//   const slotDateFormat = (slotDate) => {

//     const dateArray = slotDate.split('_');

//     return dateArray[0]+ " "+ months[Number(dateArray[1])] + " " + dateArray[2];
//   }

//   const getUsersAppointments = async () => {
//     try {

//       const {data} = await axios.get(backendUrl + '/api/user/appointments',{headers:{token}});

//       if(data.success){
//         setAppointments(data.appointments.reverse());
//         console.log(data.appointments);
//       }
      
//     } catch (error) {
//       console.log(error);
//       toast(error.message);
      
//     }
//   }

//   const cancelAppointment = async (appointmentId) =>{

//     try {
      
//       const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', {appointmentId}, {headers : {token}});

//       if(data.success){
//         toast.success(data.message);
//         getUsersAppointments();
//         getDoctorsData();

//       }else{
//         toast.error(data.message);
//       }

    
      
//     } catch (error) {
//       console.log(error);
//       toast(error.message);
//     }


//   }

//   const initPay= (order) =>{
//     const options = {
//       key : import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount : order.amount,
//       currency  : order.currency,
//       name :'Appointment Payment',
//       description : 'Appointment Payment',
//       order_id : order.id,
//       receipt : order.receipt,
//       handler : async (response)=>{
//         console.log(response);

//         try {
          
//           const {data} = await axios.post(backendUrl + '/api/user/verifyRazorpay',response,{headers:{token}});

//           if(data.success){
//             getUsersAppointments();
//             navigate('/my-appointments');
//           }
          
//         } catch (error) {
//           console.log(error);
//           toast.error(error.message);
        
//         }

//       } 
//     }

//     const rzp  = new window.Razorpay(options);
//     rzp.open();
//   }

//   const appointmentRazorPay = async (appointmentId)=>{

//     try {
//       const {data} = await axios.post(backendUrl + '/api/user/payment-razorpay',{appointmentId}, {headers:{token}});
      
//       if(data.success){
//         initPay(data.order);
//       }
      
//     } catch (error) {
      
//     }

//   }

//   useEffect(()=> {
//     if(token){
//       getUsersAppointments()
//     }
//   },[token]);


//   return (
//     <div>
//       <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments</p>
//       <div>
//         {appointments.map((item, index) => (
          
//           <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b " key={index}>
//             <div>
//               <img className="w-32 bg-indigo-50" src={item.docData.image} alt="" />

//             </div>

//             <div className="flex-1 text-sm text-zinc-600 ">
//               <p className="text-neutral-800 font-semibold">{item.docData.name}</p>
//               <p >{item.docData.speciality}</p>
//               <p className="text-zinc-700 font-medium mt-1">Address: </p>
//               <p className="text-xs">{item.docData.address.line1}</p>
//               <p className="text-xs">{item.docData.address.line2}</p>
//               <p className="text-xs mt-1"> <span className="text-sm text-neutral-700 font-medium"> Date & Time:</span>  {slotDateFormat(item.slotDate)} | {item.slotTime} </p>
//             </div>

//             <div></div>

//             <div className="flex flex-col gap-2  justify-end">
//               {!item.cancelled && item.payment  && !item.isCompleted && <button className="sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50 ">Paid</button> }
//              {!item.cancelled && !item.payment && !item.isCompleted &&  <button onClick={() => appointmentRazorPay(item._id)} className="txt-sm text-stone-500 text-center sm:min-w-48 border py-2 rounded hover:bg-primary hover:text-white transition-all duration-300 ">Pay Online </button> }
//               {!item.cancelled && !item.isCompleted && <button onClick={()=> cancelAppointment(item._id)} className="txt-sm text-stone-500  text-center sm:min-w-48 border py-2 rounded  hover:bg-red-600 hover:text-white transition-all duration-300   ">Cancel Appointment </button> }
//               {item.cancelled &&  !item.isCompleted && <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500 " >Appointment cancelled </button> }
//               {item.isCompleted && <button className="sm:min-w-48 py-2 border border-green-500 rounded text-green-500  " >Appointment Completed </button> }
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAppointments;


import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_');
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];
  };

  const getUsersAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } });
      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      toast(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } });
      if (data.success) {
        toast.success(data.message);
        getUsersAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast(error.message);
    }
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(backendUrl + '/api/user/verifyRazorpay', response, { headers: { token } });
          if (data.success) {
            getUsersAppointments();
            navigate('/my-appointments');
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const appointmentRazorPay = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } });
      if (data.success) initPay(data.order);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) getUsersAppointments();
  }, [token]);

  return (
    <div className='px-4 sm:px-[10%] py-10' style={{ background: '#f7f8fc', minHeight: '80vh' }}>

      {/* Page header */}
      <div className='mb-8'>
        <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
          style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
          Dashboard
        </span>
        <h1 className='text-3xl font-semibold text-gray-900 tracking-tight mt-3 mb-1'>My Appointments</h1>
        <p className='text-sm text-gray-500'>
          {appointments.length} appointment{appointments.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Appointments list */}
      <div className='flex flex-col gap-4'>
        {appointments.map((item, index) => (
          <div
            key={index}
            className='flex flex-col sm:flex-row gap-5 bg-white rounded-2xl p-5 transition-all duration-200'
            style={{ border: '1.5px solid #e8eaf2' }}
          >
            {/* Doctor photo */}
            <div className='flex-shrink-0'>
              <div className='w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden'
                style={{ background: 'linear-gradient(160deg, #eef1fd 0%, #dde5fe 100%)' }}>
                <img
                  className='w-full h-full object-cover object-top'
                  src={item.docData.image}
                  alt={item.docData.name}
                />
              </div>
            </div>

            {/* Doctor info */}
            <div className='flex-1'>
              <div className='mb-2'>
                <p className='text-base font-semibold text-gray-900'>{item.docData.name}</p>
                <p className='text-sm text-gray-500'>{item.docData.speciality}</p>
              </div>

              {/* Divider */}
              <div className='mb-3' style={{ borderTop: '1px solid #f0f2fa' }} />

              {/* Address */}
              <div className='mb-2'>
                <p className='text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5'>Address</p>
                <p className='text-sm text-gray-600'>{item.docData.address.line1}</p>
                <p className='text-sm text-gray-600'>{item.docData.address.line2}</p>
              </div>

              {/* Date & time */}
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm'
                style={{ background: '#f0f2fa', color: '#5a5f7a' }}>
                <span>📅</span>
                <span className='font-medium'>{slotDateFormat(item.slotDate)}</span>
                <span style={{ color: '#c7d0fb' }}>|</span>
                <span>{item.slotTime}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className='flex sm:flex-col gap-2 justify-start sm:justify-center sm:min-w-[160px]'>
              {/* Paid state */}
              {!item.cancelled && item.payment && !item.isCompleted && (
                <div className='flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium'
                  style={{ background: '#eef1fd', color: '#4361EE', border: '1.5px solid #c7d0fb' }}>
                  ✓ Paid
                </div>
              )}

              {/* Pay online */}
              {!item.cancelled && !item.payment && !item.isCompleted && (
                <button
                  onClick={() => appointmentRazorPay(item._id)}
                  className='px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5'
                  style={{
                    background: '#4361EE',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 4px 14px rgba(67,97,238,0.25)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#2d47c9'}
                  onMouseLeave={e => e.currentTarget.style.background = '#4361EE'}
                >
                  Pay Online →
                </button>
              )}

              {/* Cancel */}
              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className='px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200'
                  style={{
                    background: 'white',
                    color: '#9399b2',
                    border: '1.5px solid #e8eaf2',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#fee2e2'
                    e.currentTarget.style.color = '#dc2626'
                    e.currentTarget.style.borderColor = '#fca5a5'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'white'
                    e.currentTarget.style.color = '#9399b2'
                    e.currentTarget.style.borderColor = '#e8eaf2'
                  }}
                >
                  Cancel
                </button>
              )}

              {/* Completed */}
              {item.isCompleted && (
                <div className='flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium'
                  style={{ background: '#d1fae5', color: '#065f46', border: '1.5px solid #6ee7b7' }}>
                  ✓ Completed
                </div>
              )}

              {/* Cancelled */}
              {item.cancelled && !item.isCompleted && (
                <div className='flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium'
                  style={{ background: '#fee2e2', color: '#991b1b', border: '1.5px solid #fca5a5' }}>
                  ✕ Cancelled
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {appointments.length === 0 && (
        <div className='flex flex-col items-center justify-center py-24 text-center'>
          <div className='text-6xl mb-4'>📋</div>
          <p className='text-lg font-semibold text-gray-700 mb-1'>No appointments yet</p>
          <p className='text-sm text-gray-400 mb-6'>Book your first appointment with a trusted doctor</p>
          <button
            onClick={() => navigate('/doctors')}
            className='px-8 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5'
            style={{ background: '#4361EE', color: 'white', boxShadow: '0 4px 16px rgba(67,97,238,0.25)' }}
          >
            Find a Doctor →
          </button>
        </div>
      )}

    </div>
  );
};

export default MyAppointments;






