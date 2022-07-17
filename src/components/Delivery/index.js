import React from 'react'
import ItemDelivery from '../Item-delivery/index'
import IconRegister from '../../assets/icons/icon-information.jpg'
import IconOrder from '../../assets/icons/icon-order.jpg'
import IconDelivery from '../../assets/icons/icon-delivery.jpg'

export default function Delivery() {
    const DataDelivery = [
        { id: 0, title: "Registration", description: "Register your account data to be able to make transactions on our products", icon: IconRegister },
        { id: 1, title: "Make your order", description: "Choose the products we offer and make payments with the payment methods we offer.", icon: IconOrder },
        { id: 2, title: "Delivery", description: "We will deliver the order according to the delivery address quickly and maintain the freshness of the product.", icon: IconDelivery },
    ]
  return (
    <div className='pt-[110px] transition-all ease-in duration-500'>
        <h1 className='text-center text-[28px] font-medium'><span className='text-[#1E9153]'>Our</span> Delivery</h1>
        <p className='text-[#c4c4c4] text-center font-light text-[16px]'>“Our process is doing the delivery to the <br/> consumer”</p>
        <div className='flex-wrap sm:flex md:flex justify-center pt-[30px]'>
            {
                DataDelivery.map((data)=>(<ItemDelivery key={data.id} dataDelivery={data}/>))
            }
        </div>
    </div>
  )
}
