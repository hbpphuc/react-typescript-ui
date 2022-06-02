import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import CreateNumber from './createnumber/CreateNumber'
import DetailNumber from './detailnumber/DetailNumber'
import ListNumber from './listnumber/ListNumber'
import './Number.css'

export default function Number() {
    return (
      <div className='number-wrapper'>
        <p className="number-title">Quản lý cấp số</p>
          <Outlet />
      </div>
    )
}
