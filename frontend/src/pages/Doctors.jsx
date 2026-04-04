// import { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom"
// import { AppContext } from "../context/AppContext";


// const Doctors = () => {

//   const {speciality} =  useParams();
  
//   const {doctors}= useContext(AppContext);

//   const [filterDoc,setFilterDoc]= useState([]);

//   const [showFilter ,setShowFilter] = useState(false);
//   const navigate = useNavigate();

//   const applyFilter = ()=>{
//     if(speciality){
//       setFilterDoc(doctors.filter(doc => doc.speciality == speciality))
//     }else{
//       setFilterDoc(doctors);
//     }
//   }

//   useEffect(()=>{
//     applyFilter();
//   },[doctors,speciality])

//   return (
//     <div>
//       <p className="text-gray-600 ">Browse through the doctors specialist.</p>
//       <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
//         <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white':'' }`} onClick={()=> setShowFilter(prev => !prev)}>Filters</button>
//         <div className={`flex flex-col gap -4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'} `}>
//           <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "General physician" ? "bg-indigo-100 text-black" : "" }`}>General physician</p>
//           <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : "" } `}>Gynecologist</p>
//           <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : "" } `}>Dermatologist</p>
//           <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : "" } `}>Pediatricians</p>
//           <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : "" } `}>Neurologist</p>
//           <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : "" } `}>Gastroenterologist</p>
//         </div>

//       <div className="w-full grid grid-cols-auto gap-4 gap-y-6 ">
//         {
//           filterDoc.map((item,index)=>(
//                 <div onClick={()=> navigate(`/appointment/${item._id}`)} key= {index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-[-10px] transition-all duration-500 '>
//                     <img className='bg-blue-50' src={item.image} alt="" />
//                     <div className='p-4'>
//                          <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
//                             <p className={`${item.available ? 'bg-green-500' :'bg-gray-500' } w-2 h-2 rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
//                         </div>
//                         <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                         <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                     </div>

//                 </div>

//             ))
//         }
//       </div>

//       </div>
//     </div>
//   )
// }

// export default Doctors


import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";

const specialities = [
  'General physician',
  'Gynecologist',
  'Dermatologist',
  'Pediatricians',
  'Neurologist',
  'Gastroenterologist',
]

const Doctors = () => {

  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality])

  return (
    <div className='px-4 sm:px-[10%] py-10' style={{ background: '#f7f8fc', minHeight: '80vh' }}>

      {/* Page header */}
      <div className='mb-8'>
        <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
          style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
          Find a Doctor
        </span>
        <h1 className='text-3xl font-semibold text-gray-900 tracking-tight mt-3 mb-1'>
          Browse Specialists
        </h1>
        <p className='text-sm text-gray-500'>
          Browse through the doctors specialist and book your appointment hassle-free.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row items-start gap-6'>

        {/* ── Filter Sidebar ── */}
        <div className='w-full sm:w-auto'>

          {/* Mobile filter toggle */}
          <button
            className='sm:hidden flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-200'
            style={{
              border: '1.5px solid',
              borderColor: showFilter ? '#4361EE' : '#e8eaf2',
              background: showFilter ? '#eef1fd' : 'white',
              color: showFilter ? '#4361EE' : '#5a5f7a',
            }}
            onClick={() => setShowFilter(prev => !prev)}
          >
            <span>⚙</span> {showFilter ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Filter list */}
          <div className={`flex flex-col gap-2 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
            <p className='text-xs font-semibold tracking-widest uppercase mb-2 hidden sm:block'
              style={{ color: '#9399b2', letterSpacing: '0.1em' }}>
              Speciality
            </p>
            {specialities.map((spec) => {
              const isActive = speciality === spec;
              return (
                <p
                  key={spec}
                  onClick={() => isActive ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
                  className='w-[94vw] sm:w-52 px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200'
                  style={{
                    border: '1.5px solid',
                    borderColor: isActive ? '#4361EE' : '#e8eaf2',
                    background: isActive ? '#eef1fd' : 'white',
                    color: isActive ? '#4361EE' : '#5a5f7a',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#4361EE'
                      e.currentTarget.style.color = '#4361EE'
                      e.currentTarget.style.background = '#f5f7ff'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#e8eaf2'
                      e.currentTarget.style.color = '#5a5f7a'
                      e.currentTarget.style.background = 'white'
                    }
                  }}
                >
                  {spec}
                </p>
              )
            })}

            {/* Clear filter */}
            {speciality && (
              <p
                onClick={() => navigate('/doctors')}
                className='w-[94vw] sm:w-52 px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer text-center mt-1 transition-all duration-200'
                style={{
                  border: '1.5px dashed #e8eaf2',
                  background: 'transparent',
                  color: '#9399b2',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#4361EE'; e.currentTarget.style.borderColor = '#4361EE' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9399b2'; e.currentTarget.style.borderColor = '#e8eaf2' }}
              >
                ✕ Clear filter
              </p>
            )}
          </div>
        </div>

        {/* ── Doctors Grid ── */}
        <div className='flex-1'>

          {/* Result count */}
          <p className='text-sm text-gray-400 mb-4'>
            Showing <span className='font-semibold text-gray-700'>{filterDoc.length}</span> doctor{filterDoc.length !== 1 ? 's' : ''}
            {speciality && <span> in <span className='text-indigo-500 font-medium'>{speciality}</span></span>}
          </p>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
            {filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
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
                <div className='w-full aspect-square overflow-hidden'
                  style={{ background: 'linear-gradient(160deg, #eef1fd 0%, #dde5fe 100%)' }}>
                  <img
                    className='w-full h-full object-cover object-top'
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                {/* Doctor info */}
                <div className='p-3.5'>
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

          {/* Empty state */}
          {filterDoc.length === 0 && (
            <div className='flex flex-col items-center justify-center py-20 text-center'>
              <div className='text-5xl mb-4'>🔍</div>
              <p className='text-lg font-semibold text-gray-700 mb-1'>No doctors found</p>
              <p className='text-sm text-gray-400'>Try selecting a different speciality</p>
              <button
                onClick={() => navigate('/doctors')}
                className='mt-5 px-6 py-2.5 rounded-full text-sm font-medium transition-all'
                style={{ background: '#eef1fd', color: '#4361EE', border: '1.5px solid #4361EE' }}
              >
                View all doctors
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Doctors
