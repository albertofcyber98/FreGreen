import React from 'react'
import ImgAbout from '../../assets/images/img-about.jpg'
import iconServiceItem from '../../assets/icons/icon-service-item.jpg'

export default function About() {
    const Service = [
        { id: 0, title: "Provide quality agricultural processes and products."},
        { id: 1, title: "Providing the best service to consumers." },
        { id: 2, title: "Maintain product freshness."},
    ]
  return (
    <div className='pt-[110px] transition-all ease-in duration-500'>
          <h1 className='text-center text-[28px] font-medium'>About <span className='text-[#1E9153]'>us</span></h1>
          <div className='lg:flex justify-center lg:justify-start pt-[40px]'>
              <div className='px-4 sm:px-[70px] xl:pl-[130px] w-full lg:w-[300%] xl:w-[2550px] transition-all ease-in duration-500 pb-6'>
                  <img src={ImgAbout} alt='img-about' className='md:w-full'></img>
              </div>
              <div className='md:pr-[80px] lg:pr-[130px] xl:pr-[160px] px-4 sm:px-[70px]'>
                  <p className='text-[18px]'>
                        <span className='font-medium'>Fre<span className='text-[#1E9153]'>Green</span>.</span> is the supply and direct sale of vegetable products, fresh fruits.
                        We prioritize product protection so that it remains fresh, with quality and
                      ease of transactions, so that the product shopping experience becomes more
                      comfortable and fresh. Our address is in Makassar, Sulawesi Selatan, Indonesia
                  </p>
                  <p className='font-medium pt-4 pb-2 text-[18px]'>
                      Our service
                  </p>
                    {
                      Service.map((data) => {
                          return (
                             <div key={data.id} className="pb-1 flex">
                                  <div className='pt-1'>
                                    <img src={iconServiceItem} alt='list-icon' width="15px"></img>
                                  </div>
                                  <div className='pl-2'>
                                      <p className='text-[18px]'>
                                        {data.title}
                                      </p>
                                  </div>
                            </div>
                            )
                        })
                    }
              </div>
          </div>
    </div>
  )
}
