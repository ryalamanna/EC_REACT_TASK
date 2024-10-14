import React from 'react'
import e1 from '/public/e1.png'
import e2 from '/public/e2.png'
import e3 from '/public/e3.png'


const EssentialCollections = () => {
  return (
    <section id='category_section' className="mt-9 py-20 bg-gray-100">
        <div className="main_container  flex align-center justify-center flex-wrap flex-col">
            <h3 className='font-bold text-md w-[100%] text-center text-blue-800'>THE ESSENTIALS</h3>
            <h2 className="font-bold text-4xl w-[100%] text-center mt-2">Browse the <span className="text-[#fe7d53]">Essential</span> Collection</h2>
            <p className="text-gray-400 font-medium w-[100%] text-center px-[10%] lg:px-[22%] pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo assumenda officiis voluptas velit hic amet sequi atque soluta nihil?</p>
            <div className="flex mt-8">
                <div className="w-[33%] m-4 flex flex-wrap align-center justify-center">
                    <img className="w-[100%] transition hover:-translate-y-1" src={e1} alt="" />
                </div>
                <div className="w-[33%] m-4 flex flex-wrap align-center justify-center">
                    <img className="w-[100%] transition hover:-translate-y-1" src={e2} alt="" />
                </div>
                <div className="w-[33%] m-4 flex flex-wrap align-center justify-center">
                    <img className="w-[100%] transition hover:-translate-y-1" src={e3} alt="" />
                </div>
            </div>
        </div>
      </section>
  )
}

export default EssentialCollections