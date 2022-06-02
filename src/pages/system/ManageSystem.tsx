import React, { useState } from 'react'
import Role from './role/Role'
import Account from './account/Account'
import History from './history/History'
import './ManageSystem.css'

export default function ManageSystem() {
  const [showRole, setShowRole] = useState(false)
  const [showAccount, setShowAccount] = useState(false)
  const [showHistory, setShowHistory] = useState(true)
  return (
    <div className='managesystem-wrapper'>
       {showRole && <Role />}
       {showAccount && <Account />}
       {showHistory && <History />}
    </div>
  )
}
