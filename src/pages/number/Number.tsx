import React, { useState } from 'react'
import CreateNumber from './createnumber/CreateNumber'
import DetailNumber from './detailnumber/DetailNumber'
import ListNumber from './listnumber/ListNumber'
import './Number.css'

export default function Number() {
    
    const [showListNumber, setShowListNumber ] = useState<boolean>(false)
    const [showCreateNumber, setShowCreateNumber ] = useState<boolean>(false)
    const [showDetailNumber, setShowDetailNumber ] = useState<boolean>(false)
  
    return (
      <div className='number-wrapper'>
        <p className="number-title">Quản lý cấp số</p>
          {showListNumber && <ListNumber />}
          {showCreateNumber && <CreateNumber />}
          {showDetailNumber && <DetailNumber  />}
      </div>
    )
}
