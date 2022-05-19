import React, { useState } from 'react'
import './Device.css'
import ListDevice from './listdevice/ListDevice'
import CreateDevice from './createdevice/CreateDevice'
import DetailDevice from './detaldevice/DetailDevice'

export default function Device() {

  const [showListDevice, setShowListDevice ] = useState<boolean>(false)
  const [showCreateDevice, setShowCreateDevice ] = useState<boolean>(false)
  const [showDetailDevice, setShowDetailDevice ] = useState<boolean>(false)

  return (
    <div className='device-wrapper'>
        {showCreateDevice && <CreateDevice />}
        {showListDevice && <ListDevice />}
        {showDetailDevice && <DetailDevice />}
    </div>
  )
}
