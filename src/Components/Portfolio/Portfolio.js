
import React from 'react'
import wheather from "../../assets/wheather.png"

export const Portfolio = () => {
  return (
     <>
   <section className=" body-font bg-black text-white" name="portfolio">
    
  <div className="container px-5 py-24 mx-auto">
  <h3 className='py-8 capitalize text-2xl'> Portfolio </h3>
    <div className="flex flex-wrap -m-4 cursor-pointer">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={wheather} alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-orange-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Wheather App</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Demo
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
          
              
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-orange-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Movie App</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Demo
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
          
              
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={wheather} alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-orange-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Demo
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
          
              
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
  </div>
</section>

     </>
  )
}
