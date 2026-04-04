// import React, { useContext } from 'react'

// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';

// const TopDoctors = () => {

//     const navigate = useNavigate();
//     const {doctors} = useContext(AppContext);

//   return (
//     <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 '>
//         <h1 className='text-3xl font-medium '>Top Doctors to Book</h1>
//         <p className='sm:w-1/3 text-center text-sm '>Simply browse through our extensive list of trusted doctors.</p>

//         <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
//             {doctors.slice(0,10).map((item,index)=>(
//                 <div onClick={()=> {navigate(`/appointment/${item._id}`) ; scrollTo(0,0)}} key= {index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-[-10px] transition-all duration-500 '>
//                     <img className='bg-blue-50' src={item.image} alt="" />
//                     <div className='p-4'>
//                         <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
//                             <p className={`${item.available ? 'bg-green-500' :'bg-gray-500' } w-2 h-2 rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
//                         </div>
//                         <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                         <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                     </div>

//                 </div>

//             ))}

//         </div>

//             <button onClick={()=> {navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 px-12 py-3 rounded-full mt-10 ' >more</button>

//     </div>
//   )
// }

// export default TopDoctors


import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 py-20 px-4 md:px-10'
      style={{ background: '#f7f8fc' }}>

      {/* Section eyebrow */}
      <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
        style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
        Our Team
      </span>

      {/* Heading */}
      <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight text-center'>
        Top Doctors to Book
      </h2>
      <p className='text-sm text-gray-500 text-center max-w-sm leading-relaxed'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctors grid */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-6'>
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
            className='rounded-2xl overflow-hidden cursor-pointer transition-all duration-300'
            style={{ border: '1.5px solid #e8eaf2', background: 'white' }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(67,97,238,0.15)'
              e.currentTarget.style.borderColor = 'transparent'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = '#e8eaf2'
            }}
          >
            {/* Doctor photo */}
            <div className='w-full aspect-square flex items-center justify-center overflow-hidden'
              style={{ background: 'linear-gradient(160deg, #eef1fd 0%, #dde5fe 100%)' }}>
              <img
                className='w-full h-full object-cover object-top'
                src={item.image}
                alt={item.name}
              />
            </div>

            {/* Doctor info */}
            <div className='p-3.5'>
              {/* Availability status */}
              <div className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 ${item.available ? 'text-emerald-600' : 'text-gray-400'}`}>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.available ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                {item.available ? 'Available' : 'Not Available'}
              </div>

              <p className='text-gray-900 font-semibold text-sm leading-snug'>{item.name}</p>
              <p className='text-gray-500 text-xs mt-0.5'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More button */}
      <button
        onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
        className='mt-8 px-10 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5'
        style={{
          border: '1.5px solid #e8eaf2',
          background: 'white',
          color: '#5a5f7a',
        }}
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
        View all doctors →
      </button>
    </div>
  )
}

export default TopDoctors
