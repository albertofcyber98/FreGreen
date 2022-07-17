import React from 'react'

export default function ItemDelivery(props) {
  return (
    <div className='mx-auto sm:mx-5 w-[250px] sm:w-[250px] md:w-[250px] lg:w-[250px] mb-[40px] transition-all ease-in duration-500'>
        <img src={props.dataDelivery.icon} alt='icon-hero' className='block ml-auto mr-auto' width="110px"></img>
        <div>
            <h4 className=' text-center font-medium text-xl pt-5'>{props.dataDelivery.title}</h4>
            <p className='pt-2 text-center font-light'>{props.dataDelivery.description}</p>
        </div>
    </div>
  )
}
