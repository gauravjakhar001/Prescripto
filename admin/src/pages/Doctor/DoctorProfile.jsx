// import React from 'react'
// import { useContext } from 'react';
// import { DoctorContext } from '../../context/DoctorContext';
// import { useEffect } from 'react';
// import { AppContext } from '../../context/AppContext';
// import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const DoctorProfile = () => {
//   const {dToken ,profileData,setProfileData,getProfileData,backendUrl} = useContext(DoctorContext);
//   const {currency } = useContext(AppContext);

//   const [isEdit , setIsEdit] = useState(false);

//   const updateProfile = async() =>{

//     try {
//         const updateData = {
//           address : profileData.address,
//           fees : profileData.fees,
//           available : profileData.available
//         };

//         const {data} = await axios.post(backendUrl + '/api/doctor/update-profile',updateData,{headers:{dToken}});

//         if(data.success){
//           toast.success(data.message);
//           setIsEdit(false);
//           getProfileData();
//         }else{
//           toast.error(data.message);
//         }

//     } catch (error) {
//         console.log(error);
//         toast.error(error.message);
//     }
//   }

//   useEffect(()=>{
//     getProfileData();
//   },[dToken])

//   return  profileData && (
//     <div>
//       <div className='flex flex-col gap-4 m-5'>
//         <div>
//        <img className='bg-primary/80 w-full sm:max-w-64 rounded-lg' src={profileData.image} alt="" />
//         </div>

//       <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white '>

//         {/* Doc info name ,degree, expeireince */}
//         <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>

//         <div className='flex items-center gap-2 mt-1 text-gray-600'>
//           <p >{profileData.degree}- {profileData.speciality} </p>

//           <button className='py-0.5 px-2 border text-xs rounded-full  '>{profileData.experience}</button>

//         </div>

//       {/* Doctor About  */}

//       <div >
//         <p className='flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3'>About : </p>
//         <p className='text-sm text-gray-600 max-w-[700px] mt-1' >
//           {profileData.about}
//         </p>
//       </div>

//       <p className='text-gray-600 font-medium mt-4'>
//         Appointment Fee : <span className='text-gray-800'>{currency} {isEdit ? <input type="number" onChange={(e)=> setProfileData(prev => ({...prev,fees : e.target.value}))} value={profileData.fees} /> : profileData.fees} </span>
//       </p>

//       <div className='flex gap-2 py-2'>
//         <p> Address:</p>
//         <p className='text-sm' >
//           { isEdit ?   <input type="text" onChange={(e)=> setProfileData(prev => ({...prev,address : {...prev.address,line1 : e.target.value}}))} value={profileData.address.line1} /> :  profileData.address.line1} 
//           <br />
//            {isEdit ? <input type="text" onChange={(e)=> setProfileData(prev => ({...prev,address : {...prev.address,line2 : e.target.value}}))} value={profileData.address.line2} /> : profileData.address.line2} 
//         </p>
//       </div>

//       <div className='flex gap-1 pt-2'>
//         <input onChange={()=> isEdit && setProfileData(prev => ({...prev, available : !prev.available}))} checked={profileData.available} type="checkbox" />
//         <label htmlFor="">Available</label>
//       </div>

//       {isEdit ? 
//       <button  onClick={updateProfile}  className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Save</button> 
//       :
//       <button onClick={()=> setIsEdit(true)}  className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Edit</button>
// }
//       </div>

//       </div>


//     </div>
//   )
// }

// export default DoctorProfile

import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext);
  const { currency } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      };
      const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } });
      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getProfileData();
  }, [dToken])

  // Shared input style
  const inputClass = 'px-3 py-2 rounded-xl text-sm outline-none transition-all duration-200 w-full'
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

  return profileData && (
    <div className='m-5'>

      {/* ── Page Header ── */}
      <div className='mb-6'>
        <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
          style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
          Doctor Panel
        </span>
        <h1 className='text-2xl font-semibold text-gray-900 tracking-tight mt-3'>My Profile</h1>
        <p className='text-sm text-gray-500 mt-1'>Manage your public profile and availability</p>
      </div>

      <div className='flex flex-col sm:flex-row gap-6 max-w-4xl'>

        {/* ── Photo ── */}
        <div className='flex-shrink-0'>
          <div className='w-full sm:w-56 rounded-2xl overflow-hidden'
            style={{ background: 'linear-gradient(160deg, #eef1fd 0%, #dde5fe 100%)' }}>
            <img
              className='w-full object-cover object-top'
              src={profileData.image}
              alt={profileData.name}
            />
          </div>
        </div>

        {/* ── Info Card ── */}
        <div
          className='flex-1 bg-white rounded-2xl p-7'
          style={{ border: '1.5px solid #e8eaf2', boxShadow: '0 4px 24px rgba(67,97,238,0.06)' }}
        >
          {/* Name */}
          <h2 className='text-2xl font-semibold text-gray-900 tracking-tight mb-1'>{profileData.name}</h2>

          {/* Degree · Speciality · Experience */}
          <div className='flex items-center flex-wrap gap-2 text-sm text-gray-500 mb-5'>
            <span>{profileData.degree} — {profileData.speciality}</span>
            <span className='px-3 py-0.5 rounded-full text-xs font-medium'
              style={{ background: '#eef1fd', color: '#4361EE', border: '1px solid #c7d0fb' }}>
              {profileData.experience}
            </span>
          </div>

          {/* Divider */}
          <div className='mb-5' style={{ borderTop: '1px solid #f0f2fa' }} />

          {/* About */}
          <div className='mb-5'>
            <p className='text-xs font-semibold uppercase tracking-wide mb-2'
              style={{ color: '#9399b2', letterSpacing: '0.08em' }}>
              About
            </p>
            <p className='text-sm text-gray-600 leading-relaxed max-w-2xl'>{profileData.about}</p>
          </div>

          {/* Divider */}
          <div className='mb-5' style={{ borderTop: '1px solid #f0f2fa' }} />

          {/* Editable fields */}
          <div className='flex flex-col gap-5'>

            {/* Appointment Fee */}
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide mb-2'
                style={{ color: '#9399b2', letterSpacing: '0.08em' }}>
                Appointment Fee
              </p>
              {isEdit ? (
                <div className='flex items-center gap-2 max-w-xs'>
                  <span className='text-sm font-medium text-gray-500'>{currency}</span>
                  <input
                    type='number'
                    className={inputClass}
                    style={inputStyle}
                    onFocus={inputFocus} onBlur={inputBlur}
                    onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))}
                    value={profileData.fees}
                  />
                </div>
              ) : (
                <p className='text-sm font-semibold' style={{ color: '#4361EE' }}>
                  {currency}{profileData.fees}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide mb-2'
                style={{ color: '#9399b2', letterSpacing: '0.08em' }}>
                Address
              </p>
              {isEdit ? (
                <div className='flex flex-col gap-2 max-w-sm'>
                  <input
                    type='text'
                    className={inputClass}
                    style={inputStyle}
                    onFocus={inputFocus} onBlur={inputBlur}
                    placeholder='Address line 1'
                    onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                    value={profileData.address.line1}
                  />
                  <input
                    type='text'
                    className={inputClass}
                    style={inputStyle}
                    onFocus={inputFocus} onBlur={inputBlur}
                    placeholder='Address line 2'
                    onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                    value={profileData.address.line2}
                  />
                </div>
              ) : (
                <p className='text-sm text-gray-600 leading-relaxed'>
                  {profileData.address.line1}<br />
                  {profileData.address.line2}
                </p>
              )}
            </div>

            {/* Availability toggle */}
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide mb-2'
                style={{ color: '#9399b2', letterSpacing: '0.08em' }}>
                Availability
              </p>
              <div
                className='flex items-center gap-3 cursor-pointer w-fit'
                onClick={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
              >
                <div
                  className='w-10 h-5 rounded-full flex items-center px-0.5 transition-all duration-300'
                  style={{ background: profileData.available ? '#06D6A0' : '#e8eaf2' }}
                >
                  <div
                    className='w-4 h-4 rounded-full bg-white transition-all duration-300'
                    style={{
                      transform: profileData.available ? 'translateX(20px)' : 'translateX(0)',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                    }}
                  />
                </div>
                <span className='text-sm font-medium'
                  style={{ color: profileData.available ? '#059669' : '#9399b2' }}>
                  {profileData.available ? 'Available for appointments' : 'Not available'}
                </span>
                {isEdit && (
                  <span className='text-xs text-gray-400'>(click to toggle)</span>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='mt-6 mb-5' style={{ borderTop: '1px solid #f0f2fa' }} />

          {/* Action buttons */}
          <div className='flex gap-3'>
            {isEdit ? (
              <>
                <button
                  onClick={updateProfile}
                  className='px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5'
                  style={{
                    background: '#4361EE', color: 'white', border: 'none',
                    boxShadow: '0 4px 14px rgba(67,97,238,0.3)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#2d47c9'}
                  onMouseLeave={e => e.currentTarget.style.background = '#4361EE'}
                >
                  Save Changes
                </button>
                <button
                  onClick={() => { setIsEdit(false); getProfileData(); }}
                  className='px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-200'
                  style={{ border: '1.5px solid #e8eaf2', color: '#5a5f7a', background: 'white' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#4361EE'
                    e.currentTarget.style.color = '#4361EE'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e8eaf2'
                    e.currentTarget.style.color = '#5a5f7a'
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className='px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5'
                style={{
                  background: '#4361EE', color: 'white', border: 'none',
                  boxShadow: '0 4px 14px rgba(67,97,238,0.3)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#2d47c9'}
                onMouseLeave={e => e.currentTarget.style.background = '#4361EE'}
              >
                Edit Profile
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
