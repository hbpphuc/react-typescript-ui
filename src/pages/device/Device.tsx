import React, { useState } from 'react'
import './Device.css'
import ListDevice from './listdevice/ListDevice'
import CreateDevice from './createdevice/CreateDevice'
import DetailDevice from './detaildevice/DetailDevice'
import EditDevice from './editdevice/EditDevice'

export default function Device() {

  const [showListDevice, setShowListDevice ] = useState<boolean>(false)
  const [showCreateDevice, setShowCreateDevice ] = useState<boolean>(false)
  const [showDetailDevice, setShowDetailDevice ] = useState<boolean>(false)
  const [showEditDevice, setShowEditDevice ] = useState<boolean>(true)

  return (
    <div className='device-wrapper'>
        {showListDevice && <ListDevice />}
        {showCreateDevice && <CreateDevice />}
        {showDetailDevice && <DetailDevice />}
        {showEditDevice && <EditDevice />}
    </div>
  )
}
