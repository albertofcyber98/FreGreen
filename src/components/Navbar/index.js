import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    let Links = [
        { id:1, name: 'Home', link: '/' },
        { id:2, name: 'Product', link: '/' },
        { id:3, name: 'About us', link: '/' },
        { id:4, name: 'Login', link: '/' }
    ]
    let [open , setOpen] = useState(false);
    return (
        <div className={`h-[80px] border ${open?'mb-[180px]':''}`}>
            <div className='px-2 sm:px-12 xl:pl-12 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <Link to="/">
                        <h1 className='font-medium pl-5 md:pl-6 lg:pl-8 xl:pl-20 text-2xl logo-custom'>Fre<span className='text-[#1E9153]'>Green</span>.</h1>
                    </Link>
                </div>
                <div className='pr-10 md:pr-6 lg:pr-8 xl:pr-20'>
                    <ul className='hidden md:flex'>
                        {
                            Links.map((Data) => (
                                <li key={Data.id} className='px-10 cursor-pointer hover:text-[#1E9153]'><Link to={Data.link} >{Data.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            <div className='md:hidden text-3xl pr-5 pt-2 cursor-pointer' onClick={()=>setOpen(!open)}>
                <ion-icon className='fill-[#01261F]' name={!open ? 'menu': 'close'}></ion-icon>
            </div>
            </div>
            <ul className={`md:hidden ${!open ? 'hidden' : 'absolute bg-color-primary w-full mb-[120px] mt-[0px] shadow-md'}`}>
                {
                    Links.map((DataMini) => (<Link key={DataMini.id} to={DataMini.link}>
                        <li className='px-5 cursor-pointer py-3  hover:text-white hover:bg-[#1E9153] transition-all duration-200'>{DataMini.name}</li></Link>
                    ))
                }
            </ul>
        </div>
    )
}
