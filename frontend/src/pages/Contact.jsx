// import { assets } from "../assets/assets";

// const Contact = () => {
//   return (
//     <div className="text-center text-2xl pt-10 text-gray-500">
//       <p>
//         CONTACT <span className="text-gray-700 font-semibold">US</span>
//       </p>

//       <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm  ">
//         <img
//           className="w-full md:max-w-[360px]"
//           src={assets.contact_image}
//           alt=""
//         />

//         <div className="flex flex-col justify-center items-start gap-6">
//           <p className="font-semibold text-lg text-gray-600 ">OUR OFFICE</p>
//           <p className="text-gray-500 text-left">
//             Aravali Boys Hostel  <br />
//             Dwarka Sector-16C , New Delhi - 110078
//           </p>
//           <p className="text-gray-500 text-left">
//             Tel: (+91) 816-850-5082 <br />
//             Email: jakhargaurav001@gmail.com
//           </p>
//           <p className="font-semibold text-lg text-gray-600">
//             CAREERS AT PRESCRIPTO
//           </p>
//           <p className="text-gray-500">
//             Learn more about our teams and job openings.
//           </p>

//           <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
//             Explore Jobs
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className='px-4 sm:px-[10%] py-10' style={{ background: '#f7f8fc', minHeight: '80vh' }}>

      {/* ── Page Header ── */}
      <div className='text-center mb-14'>
        <span className='text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full'
          style={{ color: '#4361EE', background: '#eef1fd', letterSpacing: '0.1em' }}>
          Get In Touch
        </span>
        <h1 className='text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mt-4'>
          Contact <span style={{ color: '#4361EE' }}>Us</span>
        </h1>
      </div>

      {/* ── Main Card ── */}
      <div className='flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden mb-16'
        style={{ border: '1.5px solid #e8eaf2' }}>

        {/* Image */}
        <div className='md:w-[420px] flex-shrink-0'
          style={{ background: 'linear-gradient(160deg, #eef1fd 0%, #dde5fe 100%)' }}>
          <img
            className='w-full h-full object-cover'
            style={{ minHeight: '320px' }}
            src={assets.contact_image}
            alt='Contact Prescripto'
          />
        </div>

        {/* Info */}
        <div className='flex-1 bg-white p-8 md:p-10 flex flex-col gap-8'>

          {/* Our Office */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0'
                style={{ background: '#eef1fd' }}>
                🏢
              </div>
              <h2 className='text-sm font-semibold tracking-widest uppercase'
                style={{ color: '#4361EE', letterSpacing: '0.08em' }}>
                Our Office
              </h2>
            </div>

            <div className='flex flex-col gap-3 text-sm text-gray-600 leading-relaxed pl-10'>
              <div className='flex items-start gap-2'>
                <span className='mt-0.5 flex-shrink-0'>📍</span>
                <p>Aravali Boys Hostel<br />Dwarka Sector-16C, New Delhi — 110078</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='flex-shrink-0'>📞</span>
                <p>(+91) 816-850-5082</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='flex-shrink-0'>✉️</span>
                <p>jakhargaurav001@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #f0f2fa' }} />

          {/* Careers */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0'
                style={{ background: '#eef1fd' }}>
                💼
              </div>
              <h2 className='text-sm font-semibold tracking-widest uppercase'
                style={{ color: '#4361EE', letterSpacing: '0.08em' }}>
                Careers at Prescripto
              </h2>
            </div>

            <p className='text-sm text-gray-500 leading-relaxed mb-5 pl-10'>
              Learn more about our teams and job openings. We're always looking for talented people to join our mission.
            </p>

            <div className='pl-10'>
              <button
                className='px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5'
                style={{
                  background: '#4361EE',
                  color: 'white',
                  border: 'none',
                  boxShadow: '0 4px 16px rgba(67,97,238,0.25)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#2d47c9'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(67,97,238,0.35)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#4361EE'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(67,97,238,0.25)'
                }}
              >
                Explore Jobs →
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;

