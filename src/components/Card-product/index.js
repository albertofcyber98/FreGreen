import React from 'react'
import ButtonSecondary from '../Button-secondary'

export default function CardProduct(props) {
  return (
      <div className='shadow-[#45A973] shadow-sm rounded-md pt-[30px] pb-[25px] w-[295px] mx-3 mb-4 transition-all ease-in duration-500'>
          <img src={props.dataProduct.img} alt='card-product' className='block ml-auto mr-auto transition-all ease-in duration-500' width="140px"></img>
          <h3 className='text-center text-[22px] font-medium pt-[20px]'>{props.dataProduct.title}</h3>
          <p className='px-[30px] text-justify text-[14px] text-[#c4c4c4] font-light pt-[8px]'>{props.dataProduct.description}</p>
          <h4 className='text-center text-[#45A973] font-medium text-[22px] pt-[10px]'>{props.dataProduct.price}<span className='text-[18px] text-[#01261F]'> / kg</span></h4>
          <ButtonSecondary/>
    </div>
  )
}
