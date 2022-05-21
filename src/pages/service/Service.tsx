import React, { useState } from 'react'
import ListService from './listservice/ListService'
import './Service.css'

export default function Service() {
    
    const [showListDevice, setShowListDevice ] = useState<boolean>(true)
    const [showCreateDevice, setShowCreateDevice ] = useState<boolean>(false)
    const [showDetailDevice, setShowDetailDevice ] = useState<boolean>(false)
    const [showEditDevice, setShowEditDevice ] = useState<boolean>(true)
  
    return (
      <div className='service-wrapper'>
          {showListDevice && <ListService />}
          {/* {showCreateDevice && <CreateService />}
          {showDetailDevice && <DetailService  />}
          {showEditDevice && <EditService  />} */}
      </div>
    )
}
