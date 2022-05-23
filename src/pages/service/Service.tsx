import React, { useState } from 'react'
import CreateService from './createservice/CreateService'
import DetailService from './detailservice/DetailService'
import EditService from './editservice/EditService'
import ListService from './listservice/ListService'
import './Service.css'

export default function Service() {
    
    const [showListService, setShowListService ] = useState<boolean>(false)
    const [showCreateService, setShowCreateService ] = useState<boolean>(false)
    const [showDetailService, setShowDetailService ] = useState<boolean>(true)
    const [showEditService, setShowEditService ] = useState<boolean>(false)
  
    return (
      <div className='service-wrapper'>
        <p className="service-title">Quản lý dịch vụ</p>
          {showListService && <ListService />}
          {showCreateService && <CreateService />}
          {showDetailService && <DetailService  />}
          {showEditService && <EditService  />}
      </div>
    )
}
