// import React, { useContext } from "react";
// import { assets } from "../../assets/assets";
// import { useState } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { toast } from "react-toastify";
// import axios from "axios";

// const AddDoctor = () => {

//   const [docImg,setDocImg]  = useState(false);
//   const [name,setName] = useState('');
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const [experience,setExperience] = useState('1 Year');
//   const [fees,setFees] = useState('');
//   const [about,setAbout] = useState('');
//   const [speciality,setSpeciality] = useState('General physician');
//   const [degree,setDegree] = useState('');
//   const [address1,setAddress1] = useState('');
//   const [address2,setAddress2] = useState('');

//   const {aToken,backendUrl} = useContext(AdminContext);


//   const onSubmitHandler =async (event)=>{

//     event.preventDefault();

//     try {
      
//       if(!docImg){
//         return toast.error('Image Not Selected');
//       }

//       const formData = new FormData()

//       formData.append('image',docImg);
//       formData.append('name',name);
//       formData.append('email',email);
//       formData.append('password',password);
//       formData.append('experience',experience);
//       formData.append('fees',Number(fees));
//       formData.append('about',about);
//       formData.append('speciality',speciality);
//       formData.append('degree',degree);
//       formData.append('address',JSON.stringify({line1: address1, line2 :address2}));
      
//       //console log formData
//       formData.forEach((value,key)=>{
//           console.log(`${key}  :${value}`);
//       })

//       const {data} = await axios.post(backendUrl + '/api/admin/add-doctor' ,formData, {headers : {aToken}});
      
//       if(data.success){
//         toast.success(data.message);
//         setDocImg(false);
//         setName('');
//         setPassword('');
//         setEmail('');
//         setAddress1('');
//         setAddress2('');
//         setDegree('');
//         setAbout('');
//         setFees('');
//       }else{
//         toast.error(data.message);
//       }

//     } catch (error) {
//       toast.error(error.message);
//       console.log(error)
      
//     }


//   }


//   return (
//     <form onSubmit={onSubmitHandler} className="m-5 w-full">
//       <p className="mb-3 text-lg font-medium">Add Doctor</p>

//       <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll ">
//         <div className="flex items-center gap-4 mb-8 text-gray-500">
//           <label htmlFor="doc-image">
//             <img
//               className="w-16 bg-gray-100 rounded-full cursor-pointer"
//               src={docImg ? URL.createObjectURL(docImg) :  assets.upload_area}
//               alt=""
//             />
//           </label>
//           <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id="doc-image" hidden />
//           <p>
//             Upload Doctor <br />
//             Picture{" "}
//           </p>
//         </div>

//         {/* Form Body */}
//         <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
//           <div className="w-full lg:flex-1  flex flex-col gap-4">

//             <div className="flex-1 flex flex-col gap-1">
//               <p> Doctor name</p>
//               <input onChange={(e)=>setName(e.target.value)} value={name} className="border rounded px-3 py-2" type="text" placeholder="Name" required />
//             </div>

//             <div className="flex-1 flex flex-col gap-1">
//               <p> Doctor Email</p>
//               <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border rounded px-3 py-2"  type="email" placeholder="Email" required />
//             </div>

//             <div className="flex-1 flex flex-col gap-1">
//               <p> Doctor Password </p>
//               <input onChange={(e)=>setPassword(e.target.value)} value={password} className="border rounded px-3 py-2" type="password" placeholder="password" required />
//             </div>

//             <div className="flex-1 flex flex-col gap-1">
//               <p>Experience</p>
//               <select onChange={(e)=>setExperience(e.target.value)} value={experience} className="border rounded px-3 py-2" name="" id="">
//                 <option value="1 Year">1 Year</option>
//                 <option value="2 Year">2 Year</option>
//                 <option value="3 Year">3 Year</option>
//                 <option value="4 Year">4 Year</option>
//                 <option value="5 Year">5 Year</option>
//                 <option value="6 Year">6 Year</option>
//                 <option value="7 Year">7 Year</option>
//                 <option value="8 Year">8 Year</option>
//                 <option value="9 Year">9 Year</option>
//                 <option value="10 Year">10 Year</option>
//               </select>
//             </div>

//             <div className="flex-1 flex flex-col gap-1">
//               <p> Fees </p>
//               <input onChange={(e)=>setFees(e.target.value)} value={fees}  className="border rounded px-3 py-2" type="number" placeholder="fees" required />
//             </div>
//           </div>

//           <div className="w-full lg:flex-1 flex  flex-col gap-4" >
//             <div className="flex-1 flex-col gap-1">
//               <p>Speciality</p>
//               <select onChange={(e)=>setSpeciality(e.target.value)} value={speciality} className="border rounded px-3 py-2" name="" id="">
//                 <option value="General physician">General physician</option>
//                 <option value="Gynecologist">Gynecologist</option>
//                 <option value="Dermatologist">Dermatologist</option>
//                 <option value="Pediatricians">Pediatricians</option>
//                 <option value="Neurologist">Neurologist</option>
//                 <option value="Gastroenterologist">Gastroenterologist</option>
//               </select>
//             </div>

//             <div className="flex-1 flex flex-col gap-1">
//               <p> Education </p>
//               <input onChange={(e)=>setDegree(e.target.value)} value={degree} className="border rounded px-3 py-2" type="text" placeholder="degree" required />
//             </div>

//             <div className="flex-1 flex flex-col gap-1">
//               <p> Address</p>
//               <input onChange={(e)=>setAddress1(e.target.value)} value={address1} className="border rounded px-3 py-2" type="text" placeholder="address1 " required />
//               <input onChange={(e)=>setAddress2(e.target.value)} value={address2} className="border rounded px-3 py-2" type="text" placeholder="address2 " required />
//             </div>
//           </div>
//         </div>

//         <div >
//           <p className="mt-5 mb-2"> About Doctor </p>
//           <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className="w-full px-4 pt-2 border rounded "
//             type="text"
//             placeholder="Write about doctor"
//             rows={5}
//             required
//           />
//         </div>

//         <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full">Add Doctor</button>
//       </div>
//     </form>
//   );
// };

// export default AddDoctor;

import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 Year');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('General physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const { aToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!docImg) return toast.error('Image Not Selected');

      const formData = new FormData();
      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', Number(fees));
      formData.append('about', about);
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

      formData.forEach((value, key) => console.log(`${key} : ${value}`));

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } });

      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName(''); setPassword(''); setEmail('');
        setAddress1(''); setAddress2('');
        setDegree(''); setAbout(''); setFees('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  // Shared input style helpers
  const inputClass = 'w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200'
  const inputStyle = { border: '1.5px solid #e8eaf2', background: '#f7f8fc', color: '#0D0F1A' }
  const inputFocus = (e) => {
    e.currentTarget.style.borderColor = '#4361EE'
    e.currentTarget.style.background = 'white'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(67,97,238,0.08)'
  }
  const inputBlur = (e) => {
    e.currentTarget.style.borderColor = '#e8eaf2'
    e.currentTarget.style.background = '#f7f8fc'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>

      {/* Page header */}
      <div className='mb-6'>
        <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
          style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
          Admin Panel
        </span>
        <h1 className='text-2xl font-semibold text-gray-900 tracking-tight mt-3'>Add Doctor</h1>
        <p className='text-sm text-gray-500 mt-1'>Fill in the details below to add a new doctor to the platform.</p>
      </div>

      <div
        className='bg-white rounded-2xl px-8 py-8 w-full max-w-4xl max-h-[80vh] overflow-y-auto'
        style={{ border: '1.5px solid #e8eaf2', boxShadow: '0 4px 24px rgba(67,97,238,0.06)' }}
      >

        {/* ── Image Upload ── */}
        <div className='flex items-center gap-5 mb-8 pb-6'
          style={{ borderBottom: '1px solid #f0f2fa' }}>
          <label htmlFor='doc-image' className='cursor-pointer group'>
            <div
              className='w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-200'
              style={{
                border: '2px dashed #c7d0fb',
                background: docImg ? 'transparent' : '#eef1fd',
              }}
            >
              <img
                className='w-full h-full object-cover'
                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                alt='Upload'
              />
            </div>
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type='file' id='doc-image' hidden />
          <div>
            <p className='text-sm font-medium text-gray-700'>Doctor Photo</p>
            <p className='text-xs text-gray-400 mt-0.5'>Click to upload a profile picture</p>
            {docImg && (
              <p className='text-xs mt-1' style={{ color: '#06D6A0' }}>✓ Image selected</p>
            )}
          </div>
        </div>

        {/* ── Form Fields ── */}
        <div className='flex flex-col lg:flex-row gap-8'>

          {/* Left column */}
          <div className='w-full lg:flex-1 flex flex-col gap-5'>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Doctor Name</label>
              <input
                onChange={(e) => setName(e.target.value)} value={name}
                className={inputClass} style={inputStyle}
                onFocus={inputFocus} onBlur={inputBlur}
                type='text' placeholder='Full name' required
              />
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Doctor Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)} value={email}
                className={inputClass} style={inputStyle}
                onFocus={inputFocus} onBlur={inputBlur}
                type='email' placeholder='doctor@example.com' required
              />
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)} value={password}
                className={inputClass} style={inputStyle}
                onFocus={inputFocus} onBlur={inputBlur}
                type='password' placeholder='••••••••' required
              />
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Experience</label>
              <select
                onChange={(e) => setExperience(e.target.value)} value={experience}
                className={inputClass} style={inputStyle}
                onFocus={inputFocus} onBlur={inputBlur}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={`${i + 1} Year`}>{i + 1} Year{i > 0 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Consultation Fees ($)</label>
              <input
                onChange={(e) => setFees(e.target.value)} value={fees}
                className={inputClass} style={inputStyle}
                onFocus={inputFocus} onBlur={inputBlur}
                type='number' placeholder='e.g. 50' required
              />
            </div>
          </div>

          {/* Right column */}
          <div className='w-full lg:flex-1 flex flex-col gap-5'>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Speciality</label>
              <select
                onChange={(e) => setSpeciality(e.target.value)} value={speciality}
                className={inputClass} style={inputStyle}
                onFocus={inputFocus} onBlur={inputBlur}
              >
                {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Education / Degree</label>
              <input
                onChange={(e) => setDegree(e.target.value)} value={degree}
                className={inputClass} style={inputStyle}
                onFocus={inputFocus} onBlur={inputBlur}
                type='text' placeholder='e.g. MBBS, MD' required
              />
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-700'>Address</label>
              <input
                onChange={(e) => setAddress1(e.target.value)} value={address1}
                className={inputClass} style={inputStyle}
                onFocus={inputFocus} onBlur={inputBlur}
                type='text' placeholder='Address line 1' required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)} value={address2}
                className={inputClass} style={{ ...inputStyle, marginTop: '8px' }}
                onFocus={inputFocus} onBlur={inputBlur}
                type='text' placeholder='Address line 2'
              />
            </div>
          </div>
        </div>

        {/* ── About ── */}
        <div className='mt-6'>
          <label className='text-sm font-medium text-gray-700 block mb-1.5'>About Doctor</label>
          <textarea
            onChange={(e) => setAbout(e.target.value)} value={about}
            className={`${inputClass} resize-none`}
            style={inputStyle}
            onFocus={inputFocus} onBlur={inputBlur}
            placeholder='Write a short bio about the doctor...'
            rows={4}
            required
          />
        </div>

        {/* ── Submit ── */}
        <div className='mt-6 flex items-center gap-4'>
          <button
            type='submit'
            className='px-10 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5'
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
            Add Doctor →
          </button>
          <p className='text-xs text-gray-400'>All fields marked are required</p>
        </div>

      </div>
    </form>
  );
};

export default AddDoctor;

