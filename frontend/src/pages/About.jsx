// import { assets } from "../assets/assets"


// const About = () => {
//   return (
//     <div >
      
//       <div className=" text-center text-2xl pt-10 text-gray-500">
//         <p>
//           ABOUT <span className="text-gray-700 font-medium">US</span>
//         </p>

//         <div className="my-10 flex flex-col md:flex-row  gap-12">
//           <img className="w-full md:max-w-[360px] " src={assets.about_image} alt="" />
//           <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 text-left">
//             <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
//             <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
//             <b className="text-gray-800">Our Vision</b>
//             <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
//           </div>
//         </div>

//       <div className="text-left text-xl my-4">
//         <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span> </p>
  
//       </div>

//             <div className="flex flex-col md:flex-row mb-20 ">
//               <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
//           <b>EFFICIENCY:</b>
//           <p className="text-left">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">  
//           <b>CONVENIENCE:</b>
//           <p className="text-left">Access to a network of trusted healthcare professionals in your area.</p>
//           </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer" >
//            <b>PERSONALIZATION:</b>
//           <p className="text-left">Tailored recommendations and reminders to help you stay on top of your health.</p>
//           </div>
//       </div>

//       </div>
//     </div>
//   )
// }

// export default About


import { assets } from "../assets/assets"

const About = () => {
  return (
    <div className='px-4 sm:px-[10%] py-10' style={{ background: '#f7f8fc', minHeight: '80vh' }}>

      {/* ── Page Header ── */}
      <div className='text-center mb-14'>
        <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
          style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
          Who We Are
        </span>
        <h1 className='text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mt-4'>
          About <span style={{ color: '#4361EE' }}>Us</span>
        </h1>
      </div>

      {/* ── About Section ── */}
      <div className='flex flex-col md:flex-row gap-10 mb-16 bg-white rounded-2xl p-8'
        style={{ border: '1.5px solid #e8eaf2' }}>

        {/* Image */}
        <div className='flex-shrink-0'>
          <div className='rounded-2xl overflow-hidden w-full md:w-[340px]'
            style={{ background: 'linear-gradient(160deg, #eef1fd 0%, #dde5fe 100%)' }}>
            <img
              className='w-full h-full object-cover'
              src={assets.about_image}
              alt='About Prescripto'
            />
          </div>
        </div>

        {/* Text */}
        <div className='flex flex-col justify-center gap-5 text-sm text-gray-600 leading-relaxed'>
          <p>
            Welcome to <span className='font-semibold text-gray-800'>Prescripto</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>

          {/* Vision block */}
          <div className='rounded-xl p-5 mt-2' style={{ background: '#f0f2fa', border: '1.5px solid #e8eaf2' }}>
            <p className='text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2'>
              <span className='w-5 h-5 rounded-full flex items-center justify-center text-xs'
                style={{ background: '#4361EE', color: 'white' }}>✦</span>
              Our Vision
            </p>
            <p>
              Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div className='mb-16'>
        <div className='text-center mb-10'>
          <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
            style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
            Our Strengths
          </span>
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight mt-4'>
            Why <span style={{ color: '#4361EE' }}>Choose Us</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {[
            {
              icon: '⚡',
              title: 'Efficiency',
              desc: 'Streamlined appointment scheduling that fits into your busy lifestyle.',
            },
            {
              icon: '🤝',
              title: 'Convenience',
              desc: 'Access to a network of trusted healthcare professionals in your area.',
            },
            {
              icon: '🎯',
              title: 'Personalization',
              desc: 'Tailored recommendations and reminders to help you stay on top of your health.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className='flex flex-col gap-4 p-8 rounded-2xl cursor-pointer transition-all duration-300 group'
              style={{ background: 'white', border: '1.5px solid #e8eaf2' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#4361EE'
                e.currentTarget.style.borderColor = '#4361EE'
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(67,97,238,0.2)'
                e.currentTarget.querySelectorAll('[data-text]').forEach(el => el.style.color = 'rgba(255,255,255,0.9)')
                e.currentTarget.querySelectorAll('[data-title]').forEach(el => el.style.color = 'white')
                e.currentTarget.querySelectorAll('[data-icon]').forEach(el => {
                  el.style.background = 'rgba(255,255,255,0.2)'
                })
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.borderColor = '#e8eaf2'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.querySelectorAll('[data-text]').forEach(el => el.style.color = '#6b7280')
                e.currentTarget.querySelectorAll('[data-title]').forEach(el => el.style.color = '#111827')
                e.currentTarget.querySelectorAll('[data-icon]').forEach(el => {
                  el.style.background = '#eef1fd'
                })
              }}
            >
              {/* Icon */}
              <div data-icon
                className='w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300'
                style={{ background: '#eef1fd' }}>
                {item.icon}
              </div>

              {/* Title */}
              <p data-title
                className='text-base font-semibold transition-colors duration-300'
                style={{ color: '#111827' }}>
                {item.title}
              </p>

              {/* Description */}
              <p data-text
                className='text-sm leading-relaxed transition-colors duration-300'
                style={{ color: '#6b7280' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default About
