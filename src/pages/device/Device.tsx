import React, { useState } from 'react'
import './Device.css'
import ListDevice from './listdevice/ListDevice'
import CreateDevice from './createdevice/CreateDevice'
import DetailDevice from './detaildevice/DetailDevice'
import EditDevice from './editdevice/EditDevice'
import { Outlet } from 'react-router-dom'

export default function Device() {

  return (
    <div className='device-wrapper'>
        <Outlet/>
    </div>
  )
}
