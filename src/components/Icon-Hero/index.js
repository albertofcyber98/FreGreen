import React from 'react'

export default function IconHeader(props) {
  return (
    <div className='items-center mr-[50px] pt-4'>
          <div>
          <img src={props.datas.icon} alt='icon-hero' width="30px"></img>
          </div>
          <div>
          <p className='pt-2'><span className='font-bold'>{props.datas.total}</span> {props.datas.title}</p>
          </div>
    </div>
  )
}
