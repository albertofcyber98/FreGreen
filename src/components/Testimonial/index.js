import React from 'react'
import ItemTestimonial from '../Item-testimonial'
import ImgTesti1 from '../../assets/images/testi-1.jpg'
import ImgTesti2 from '../../assets/images/testi-2.jpg'
import ImgTesti3 from '../../assets/images/testi-3.jpg'
import ImgTesti4 from '../../assets/images/testi-4.jpg'

export default function Testimonial() {
    const DataTestimonial = [
        {id:0,name:"Caroline",job:"Product Manager",comment:"“Buah yang datang masih terjaga kesegarannya”",img:ImgTesti1},
        {id:0,name:"Edward",job:"Wiraswasta",comment:"“Produk yang dijual sangat-sangat segar karena langsung dari kebun”",img:ImgTesti2},
        {id:0,name:"Hermawan",job:"Wiraswasta",comment:"“Harga murah dengan kualitas sayur yang sangat baik”",img:ImgTesti3},
        {id:0,name:"John",job:"Software Engineer",comment:"“Saya lebih suka berlangganan dengan FreGreen karena produk yang segar”",img:ImgTesti4}
    ]
  return (
    <div className='pt-[110px] transition-all ease-in duration-500'>
        <h1 className='text-center text-[28px] font-medium'>Testimonials</h1>
        <p className='text-[#c4c4c4] text-center font-light text-[16px]'>“Responses from those who have shopped”</p>
        <div className='flex-wrap sm:flex md:flex justify-center pt-[40px]'>
            {
                DataTestimonial.map((data)=>(<ItemTestimonial key={data.id} dataTestimonial={data}/>))
            }
        </div>
    </div>
  )
}
