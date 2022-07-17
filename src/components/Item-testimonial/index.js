import React from 'react'

export default function ItemTestimonial(props) {
  return (
    <div className='mx-auto sm:mx-3 w-[295px] rounded-md shadow-[#45A973] shadow-sm mb-3'>
          <div className='flex justify-start'>
              <img src={props.dataTestimonial.img} alt='icon-hero' className='mt-[20px] ml-[20px] mr-[12px]' width="50px"></img>
              <div className='pt-[20px]'>
                  <h3 className='font-semibold text-[18px]'>{props.dataTestimonial.name}</h3>
                  <h5 className='text-[#c4c4c4] font-light'>{props.dataTestimonial.job}</h5>
              </div>
          </div>
          <p className='pl-[20px] pt-[10px] pr-[20px] pb-[20px] text-[14px]'>{props.dataTestimonial.comment}</p>
    </div>
  )
}
