// import React, { use, useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";
// import RelatedDoctors from "../components/RelatedDoctors";
// import { toast } from "react-toastify";
// import axios from "axios";

// const Appointment = () => {
//   const { docId } = useParams();
//   const { doctors, currencySymbol, backendUrl, token, getDoctorsData } =
//     useContext(AppContext);
//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const navigate = useNavigate();

//   const [docInfo, setDocInfo] = useState(null);

//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState("");

//   const fectchDocInfo = async () => {
//     const docInfo = doctors.find((doc) => doc._id === docId);
//     setDocInfo(docInfo);
//   };

//   const getAvailableSlots = async () => {
//     setDocSlots([]);

//     let today = new Date();

//     for (let i = 0; i < 7; i++) {
//       let currentDate = new Date();
//       currentDate.setDate(today.getDate() + i);

//       //setting end time of the day with index
//       let endTime = new Date();
//       endTime.setDate(today.getDate() + i);
//       endTime.setHours(21, 0, 0, 0); //9 PM

//       //setting hours

//       if (today.getDate() === currentDate.getDate()) {
//         currentDate.setHours(
//           currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
//         );
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
//       } else {
//         currentDate.setHours(10);
//         currentDate.setMinutes(0);
//       }

//       let timeSlots = [];
//       while (currentDate < endTime) {
//         let formattedTime = currentDate.toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//           hour12: true
          
//         });

//         let day = currentDate.getDate();
//         let month = currentDate.getMonth() + 1;
//         let year = currentDate.getFullYear();

//         const slotDate = day + "_" + month + "_" + year;
//         const slotTime = formattedTime;

//         const isSlotAvailable =
//           docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime)
//             ? false
//             : true;

//         if(isSlotAvailable) {
//           //add slot to array
//           timeSlots.push({
//             datetime: new Date(currentDate),
//             time: formattedTime,
//           });
//         }

//         //increrment current time by 30 mins
//         currentDate.setMinutes(currentDate.getMinutes() + 30);
//       }
//       setDocSlots((prev) => [...prev, timeSlots]);
//     }
//   };

//   const bookAppointment = async () => {
//     if (!token) {
//       toast.warn("Login to book appointment");
//       return navigate("/login");
//     }

//     try {
//       const date = docSlots[slotIndex][0].datetime;

//       let day = date.getDate();
//       let month = date.getMonth() + 1;
//       let year = date.getFullYear();

//       const slotDate = day + "_" + month + "_" + year;

//       const { data } = await axios.post(
//         backendUrl + "/api/user/book-appointment",
//         { docId, slotDate, slotTime },
//         { headers: { token } },
//       );

//       if (data.success) {
//         toast.success(data.message);
//         getDoctorsData();
//         navigate("/my-appointments");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     fectchDocInfo();
//   }, [doctors, docId]);

//   useEffect(() => {
//     getAvailableSlots();
//   }, [docInfo]);

//   useEffect(() => {
//     console.log(docSlots);
//   }, [docSlots]);

//   return (
//     docInfo && (
//       <div>
//         {/* {Doctors details} */}

//         <div className=" flex flex-row sm:flex-row gap-4">
//           <div>
//             <img
//               className="bg-primary w-full sm:max-w-72 rounded-lg"
//               src={docInfo.image}
//               alt=""
//             />
//           </div>

//           <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0  ">
//             {/* doc info : name ,degree, exprerience */}
//             <p className="flex items-center gap-2 text-2xl font-medium text-gray-900 ">
//               {docInfo.name}
//               <img className="w-5" src={assets.verified_icon} alt="" />
//             </p>
//             <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
//               <p>
//                 {docInfo.degree} -{docInfo.speciality}{" "}
//               </p>

//               <button className="py-0.5 px-2 border text-xs rounded-full">
//                 {docInfo.experience}{" "}
//               </button>
//             </div>

//             {/* Doctor About */}
//             <div>
//               <p className="flex items-center gap-1 text-sm font-medium text-gray-900 my-3 ">
//                 About <img src={assets.info_icon} alt="" />
//               </p>
//               <p className="text-sm text-gray-500 max-w-[700px] mt-1">
//                 {docInfo.about}
//               </p>
//             </div>

//             <div className="text-gray-500 font-medium mt-4">
//               <p>
//                 {" "}
//                 Appointment Fee:{" "}
//                 <span className="text-gray-600">
//                   {currencySymbol}
//                   {docInfo.fees}
//                 </span>{" "}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Booking Slots */}

//         <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 ">
//           <p>Booking slots</p>

//           <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
//             {docSlots.length &&
//               docSlots.map((item, index) => (
//                 <div
//                   onClick={() => setSlotIndex(index)}
//                   className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "text-white bg-primary" : "border border-gray-200"}  `}
//                   key={index}
//                 >
//                   <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                   <p>{item[0] && item[0].datetime.getDate()}</p>
//                 </div>
//               ))}
//           </div>

//           <div className="flex text-center gap-3 w-full overflow-x-scroll mt-4">
//             {docSlots.length &&
//               docSlots[slotIndex].map((item, index) => (
//                 <p
//                   onClick={() => setSlotTime(item.time)}
//                   className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time == slotTime ? "bg-primary text-white" : "text-gray-400 border border-gray-300"}`}
//                   key={index}
//                 >
//                   {item.time.toLowerCase()}
//                 </p>
//               ))}
//           </div>

//           <button
//             onClick={bookAppointment}
//             className="bg-primary text-white font-light text-sm px-14 py-3 rounded-full my-6"
//           >
//             Book an Appointment
//           </button>
//         </div>

//         {/*Lisitng related doctors  */}
//         <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
//       </div>
//     )
//   );
// };

// export default Appointment;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import { toast } from "react-toastify";
import axios from "axios";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const navigate = useNavigate();

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date();
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit", minute: "2-digit", hour12: true,
        });

        const slotDate = `${currentDate.getDate()}_${currentDate.getMonth() + 1}_${currentDate.getFullYear()}`;
        const isSlotAvailable = !(docInfo.slots_booked[slotDate]?.includes(formattedTime));

        if (isSlotAvailable) {
          timeSlots.push({ datetime: new Date(currentDate), time: formattedTime });
        }
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book appointment");
      return navigate("/login");
    }
    try {
      const date = docSlots[slotIndex][0].datetime;
      const slotDate = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`;

      const { data } = await axios.post(
        backendUrl + "/api/user/book-appointment",
        { docId, slotDate, slotTime },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorsData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => { fetchDocInfo(); }, [doctors, docId]);
  useEffect(() => { if (docInfo) getAvailableSlots(); }, [docInfo]);

  return (
    docInfo && (
      <div className='px-4 sm:px-[10%] py-10' style={{ background: '#f7f8fc', minHeight: '80vh' }}>

        {/* ── Doctor Profile Card ── */}
        <div className='flex flex-col sm:flex-row gap-6 mb-8'>

          {/* Photo */}
          <div className='flex-shrink-0'>
            <div className='w-full sm:w-64 rounded-2xl overflow-hidden'
              style={{ background: 'linear-gradient(160deg, #eef1fd 0%, #dde5fe 100%)' }}>
              <img
                className='w-full object-cover object-top'
                src={docInfo.image}
                alt={docInfo.name}
              />
            </div>
          </div>

          {/* Info card */}
          <div className='flex-1 rounded-2xl p-7 bg-white'
            style={{ border: '1.5px solid #e8eaf2' }}>

            {/* Name + verified */}
            <div className='flex items-center gap-2 mb-1'>
              <h1 className='text-2xl font-semibold text-gray-900 tracking-tight'>{docInfo.name}</h1>
              <img className='w-5 h-5' src={assets.verified_icon} alt='Verified' />
            </div>

            {/* Degree · Speciality · Experience */}
            <div className='flex items-center flex-wrap gap-2 text-sm text-gray-500 mb-5'>
              <span>{docInfo.degree} — {docInfo.speciality}</span>
              <span className='px-3 py-0.5 rounded-full text-xs font-medium'
                style={{ background: '#eef1fd', color: '#4361EE', border: '1px solid #c7d0fb' }}>
                {docInfo.experience}
              </span>
            </div>

            {/* Divider */}
            <div className='mb-5' style={{ borderTop: '1px solid #e8eaf2' }} />

            {/* About */}
            <div className='mb-5'>
              <p className='flex items-center gap-1.5 text-sm font-semibold text-gray-800 mb-2'>
                <img src={assets.info_icon} alt='' className='w-4 h-4' />
                About
              </p>
              <p className='text-sm text-gray-500 leading-relaxed max-w-2xl'>{docInfo.about}</p>
            </div>

            {/* Fee */}
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium'
              style={{ background: '#f0f2fa', color: '#0D0F1A' }}>
              <span className='text-gray-500'>Appointment Fee:</span>
              <span className='font-semibold' style={{ color: '#4361EE' }}>
                {currencySymbol}{docInfo.fees}
              </span>
            </div>
          </div>
        </div>

        {/* ── Booking Slots ── */}
        <div className='bg-white rounded-2xl p-7' style={{ border: '1.5px solid #e8eaf2' }}>

          {/* Section label */}
          <div className='flex items-center gap-2 mb-6'>
            <span className='text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full'
              style={{ color: '#4361EE', background: '#eef1fd' }}>
              Booking
            </span>
            <h2 className='text-lg font-semibold text-gray-900'>Select a time slot</h2>
          </div>

          {/* Day selector */}
          <div className='flex gap-3 overflow-x-auto pb-2 mb-6'>
            {docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className='flex flex-col items-center justify-center py-4 min-w-[62px] rounded-2xl cursor-pointer transition-all duration-200 flex-shrink-0'
                style={{
                  background: slotIndex === index ? '#4361EE' : 'white',
                  border: `1.5px solid ${slotIndex === index ? '#4361EE' : '#e8eaf2'}`,
                  color: slotIndex === index ? 'white' : '#5a5f7a',
                  boxShadow: slotIndex === index ? '0 4px 16px rgba(67,97,238,0.25)' : 'none',
                }}
              >
                <p className='text-xs font-medium mb-1'>
                  {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                </p>
                <p className='text-lg font-semibold leading-none'>
                  {item[0] && item[0].datetime.getDate()}
                </p>
              </div>
            ))}
          </div>

          {/* Time slots */}
          <div className='flex flex-wrap gap-2.5 mb-8'>
            {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className='px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-200 flex-shrink-0'
                style={{
                  background: item.time === slotTime ? '#4361EE' : 'white',
                  color: item.time === slotTime ? 'white' : '#5a5f7a',
                  border: `1.5px solid ${item.time === slotTime ? '#4361EE' : '#e8eaf2'}`,
                  boxShadow: item.time === slotTime ? '0 4px 12px rgba(67,97,238,0.2)' : 'none',
                }}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
          </div>

          {/* Book button */}
          <button
            onClick={bookAppointment}
            className='flex items-center gap-2 px-10 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5'
            style={{
              background: slotTime ? '#4361EE' : '#c7d0fb',
              color: 'white',
              cursor: slotTime ? 'pointer' : 'not-allowed',
              boxShadow: slotTime ? '0 4px 20px rgba(67,97,238,0.3)' : 'none',
            }}
          >
            {slotTime ? 'Book Appointment →' : 'Select a time slot first'}
          </button>

          {!slotTime && (
            <p className='text-xs text-gray-400 mt-2'>Please select a date and time above to proceed</p>
          )}
        </div>

        {/* ── Related Doctors ── */}
        <div className='mt-10'>
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>

      </div>
    )
  );
};

export default Appointment;
