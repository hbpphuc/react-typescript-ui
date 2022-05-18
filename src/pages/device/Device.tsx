import React from 'react'
import './Device.css'
import ListDevice from './listdevice/ListDevice'
import CreateDevice from './createdevice/CreateDevice'

export default function Device() {
  return (
    <div className='device-wrapper'>
        <CreateDevice />
    </div>
  )
}
