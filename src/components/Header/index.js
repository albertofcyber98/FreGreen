import React from 'react'
import ButtonPrimary from '../../components/Button-primary'
import IconHero from '../../components/Icon-Hero'
import iconProduct from '../../assets/icons/icon-product.jpg'
import iconCustomer from '../../assets/icons/icon-customer.jpg'
import iconCategory from '../../assets/icons/icon-category.jpg'
import ImgHeaderRight from '../../assets/images/header-right.jpg'

export default function Header() {
    const IconHeader = [
        { id: 0,icon: iconProduct, total:"20+", title: 'Products' },
        { id: 1,icon: iconCustomer, total:"100+", title: 'Customers' },
        { id: 2,icon: iconCategory, total:"5+", title: 'Category' },
    ]
    return (
        <div className='flex justify-between pt-[100px]'>
            <div className='pl-[30px] sm:pl-[70px] md:pl-[80px] lg:pl-[90px] xl:pl-[130px] transition-all ease-in duration-500'>
                <h1 className='text-4xl font-medium'>
                    <span className='text-[#1E9153]'>Shop</span> at our store, <br/> 
                    get a <span className='text-[#1E9153]'>fresh product</span> <br/> 
                    from the field
                </h1>
                <p className='pt-2 text-[#C4C4C4]'>
                        We sell products that are still fresh from our plantations, <br /> 
                        and we maintain the quality of the products we sell to <br/> 
                        maintain customer trust
                </p>
                <ButtonPrimary />
                <div className='flex items-center'>
                    {
                        IconHeader.map((data)=>(<IconHero key={data.id} datas={data} />))
                    }
                </div>
            </div>
            <div className='md:pr-[80px] lg:pr-[130px] xl:pr-[160px] hidden lg:block md:w-[400px] lg:w-[550px] xl:w-[650px] transition-all ease-in duration-500'>
                <img src={ImgHeaderRight} alt="header-right" width="600px"></img>
            </div>
        </div>
    )
}
