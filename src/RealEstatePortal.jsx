import './App.css';

export const RealEstatePortal = () => {
  return (
    <div>
      {/* --Start-- Navigation-- */}
      <nav className=' bg-white shadow-lg'>
        <div className=' px-4  mx-auto flex justify-between'>
          <div className='flex space-x-7'>
            <a className='flex items-center py-4 px-2' href='#'>
              <img className='w-8 h-8 mr-2' src='./images/house.png' alt='' />
              <span className=' font-semibold text-gray-500 text-lg'>Prime Propertie</span>
            </a>
            <div className=' hidden md:flex items-center space-x-1'>
              <a className='py-4 px-2 text-green-500 font-semibold border-green-500 border-b-4' href=''>Services</a>
              <a className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300' href=''>Home</a>
              <a className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300' href=''>About</a>
              <a className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300' href=''>Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
      {/* --End-- Navigation-- */}
      {/* --Start-- Banner-- */}
      <main className=' mt-10 px-4'>
        <div className=' flex flex-col flex-wrap content-center items-center gap-8'>
          <h1 className=' tracking-tight font-extrabold sm:text-6xl text-4xl'>
            <span className='block text-center'>Preminum Propoerties</span>
            <span className='block text-green-500 text-center'>Non-premium Prices</span>
          </h1>
          <p className='text-gray-500 text-base max-w-2xl mx-auto'>At premire properties, we ensure that our clients get the best properites at affordable proces. Luxury is our proirity and budget is our constrain. Pick and choose from 1000+ properties across the globe.</p>
          <div className='w-full  flex sm:justify-center gap-2 sm:gap-9 flex-col sm:flex-row content-center items-center'>
            <div className='w-full sm:w-auto bg-green-500 px-10 py-4 rounded-md text-white font-semibold text-center'>
              <a href=''>View properties</a>
            </div>
            <div className='w-full sm:w-auto bg-green-200 text-green-800 px-10 py-4 rounded-md font-semibold text-center'>
              <a href=''>Explore locations</a>
            </div>
          </div>
        </div>
      </main >
      {/* --End-- Banner-- */}
      <h2 className='text-center text-3xl mt-20 mb-10 text-gray-500 font-semibold'>Recent Properties</h2>


      {/* --Properties-- */}
      <div className='mx-8 grid grid-cols-1 md:grid-cols-3 gap-7'>

        {/* --Cards-- */}
        <div className='shadow-md rounded-md overflow-hidden'>
          <img className='w-full' src='./images/home1.jpg' />
          <div className='p-4'>
            <h1 className=' font-bold text-lg'>Orchid Villa</h1>
            <p className=' text-slate-500'>
              Located in the suburbs of California, orchid villa offers luxury with a mordern tourch. Equipped with green lighting and a rainwater harcesting system, this property is eco-friendly.
            </p>
            <h2 className=' text-green-500 text-lg font-semibold mt-10 ml-5'>$450,000</h2>
            <div className='mt-10 flex gap-3 flex-wrap'>
              <div className='px-3 py-1 bg-slate-300  text-slate-800 text-lg font-semibold rounded-full'>7 Beds</div>
              <div className='px-3 py-1 bg-slate-300  text-slate-800 text-lg font-semibold rounded-full'>9 Baths</div>
            </div>
            <div className='mt-12'>
              <a className='px-3 py-1 bg-green-500 text-white text-xl font-semibold rounded-full' href=''>View Property</a>
            </div>
          </div>
        </div>

        {/* --Cards-- */}
        <div className='shadow-md rounded-md overflow-hidden'>
          <img className='w-full' src='./images/home2.jpg' />
          <div className='p-4'>
            <h1 className=' font-bold text-lg'>577 Gracia</h1>
            <p className=' text-slate-500'>
              Located in the suburbs of California, orchid villa offers luxury with a mordern tourch. Equipped with green lighting and a rainwater harcesting system, this property is eco-friendly.
            </p>
            <h2 className=' text-green-500 text-lg font-semibold mt-10 ml-5'>$450,000</h2>
            <div className='mt-10 flex gap-3 flex-wrap'>
              <div className='px-3 py-1 bg-slate-300  text-slate-800 text-lg font-semibold rounded-full'>7 Beds</div>
              <div className='px-3 py-1 bg-slate-300  text-slate-800 text-lg font-semibold rounded-full'>9 Baths</div>
            </div>
            <div className='mt-12'>
              <a className='px-3 py-1 bg-green-500 text-white text-xl font-semibold rounded-full' href=''>View Property</a>
            </div>
          </div>
        </div>

        {/* --Cards-- */}
        <div className='shadow-md rounded-md overflow-hidden'>
          <img className='w-full' src='./images/home3.jpg' />
          <div className='p-4'>
            <h1 className=' font-bold text-lg'>Nexa Epitome</h1>
            <p className=' text-slate-500'>
              Located in the suburbs of California, orchid villa offers luxury with a mordern tourch. Equipped with green lighting and a rainwater harcesting system, this property is eco-friendly.
            </p>
            <h2 className=' text-green-500 text-lg font-semibold mt-10 ml-5'>$450,000</h2>
            <div className='mt-10 flex gap-3 flex-wrap'>
              <div className='px-3 py-1 bg-slate-300  text-slate-800 text-lg font-semibold rounded-full'>7 Beds</div>
              <div className='px-3 py-1 bg-slate-300  text-slate-800 text-lg font-semibold rounded-full'>9 Baths</div>
            </div>
            <div className='mt-12'>
              <a className='px-3 py-1 bg-green-500 text-white text-xl font-semibold rounded-full' href=''>View Property</a>
            </div>
          </div>
        </div>
      </div>
      {/* --Properties--End-- */}

      {/* --Bannar-- */}
      <div style={bgStyle} className="mt-10 py-5 w-screen">
        <div className='container mx-auto px-20 mt-20 mb-20'>
          <h2 className='text-5xl font-bold text-white mb-6'>Experience Luxury Like Never Before</h2>
          <h3 className='text-3xl font-bold text-white mb-10'>50+ Exotice locations across the globe.</h3>
          <button className=' uppercase text-white font-bold text-xl border-2 border-white p-4 tracking-wider shadow-lg'>Explore Locations</button>
        </div>
      </div>
      {/* --Bannar--End-- */}

      {/* --Location-- */}
      <h2 className='text-center text-3xl mt-20 mb-7 text-gray-500 font-semibold'>Locations</h2>
      <div className='mt-10 mx-7 grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='rounded-lg shadow-lg overflow-hidden'>
          <img src='./images/ny.jpg' className='w-full'></img>
          <div className='p-4'>
            <h1 className=' font-bold text-lg mb-1'>New York</h1>
            <p className=' text-slate-500'>
              New York City comprises 5 brought sitting where the Hodson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultual centers. It's conic sites include sky scrapers such as Empire State Building and sprawling Cantral Park.
            </p>
          </div>
        </div>
        <div className='rounded-lg shadow-lg overflow-hidden'>
          <img src='./images/california.jpg' className='w-full mb-1'></img>
          <div className='p-4'>
            <h1 className=' font-bold text-lg'>San Francisco</h1>
            <p className=' text-slate-500'>
            San Franscso, officially the City and County of San Francisco is a commercial, financial and cultual center in the state of California.
            </p>
          </div>
        </div>
        <div className='rounded-lg shadow-lg overflow-hidden'>
          <img src='./images/chicago.jpg' className='w-full mb-1'></img>
          <div className='p-4'>
            <h1 className=' font-bold text-lg'>Chicago</h1>
            <p className=' text-slate-500'>
            New York City comprises 5 brought sitting where the Hodson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultual centers. It's conic sites include sky scrapers such as Empire State Building and sprawling Cantral Park.
            </p>
          </div>
        </div>
      </div>
      {/* --Location--End-- */}
    </div >
  )
}

const bgStyle = {
  backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/luxury.jpg')"
};

{/*bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('luxury.jpg')]*/ }