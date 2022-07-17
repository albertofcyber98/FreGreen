import React from 'react'
import CardProduct from '../Card-product/index'
import ImgProductCarrot from '../../assets/images/carrot.jpg'
import ImgProductApple from '../../assets/images/apple.jpg'
import ImgProductPotato from '../../assets/images/potato.jpg'
import ImgProductTomato from '../../assets/images/tomato.jpg'

export default function Product() {
    const DataProduct = [
        { id: 0, title: "Carrot", description: "Vegetables with the best quality and fresh that are still maintained until they reach consumers", price: "Rp. 13.000,-", img: ImgProductCarrot },
        { id: 1, title: "Apple", description: "Fruit with the best quality and fresh that is still maintained until it reaches the consumer", price: "Rp. 65.000,-", img: ImgProductApple },
        { id: 2, title: "Potato", description: "Vegetables with the best quality and fresh that are still maintained until they reach consumers", price: "Rp. 13.000,-", img: ImgProductPotato },
        { id: 3, title: "Tomato", description: "Vegetables with the best quality and fresh that are still maintained until they reach consumers", price: "Rp. 20.000,-", img: ImgProductTomato }
        
    ]
    return (
            <div className='pt-[110px] transition-all ease-in duration-500'>
                <h1 className='text-center text-[28px] font-medium'><span className='text-[#1E9153]'>Our</span> Products</h1>
                <p className='text-[#c4c4c4] text-center font-light text-[16px]'>“We provide fresh fruit and vegetables”</p>
                <div className='flex flex-wrap sm:flex-wrap md:flex-wrap justify-center pt-[40px]'>
                    {
                        DataProduct.map((data)=>(<CardProduct key={data.id} dataProduct={data}/>))
                    }
                </div>
            </div>
    )
}
