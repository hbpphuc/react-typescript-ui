import { useState } from 'react'
import Infomation from '../../components/infomation/Infomation'
import Menubar from '../../components/menubar/Menubar'
import TopBarAdmin from '../../components/topbaradmin/TopBarAdmin'
import Dashboard from '../dashboard/Dashboard'
import './Admin.css'


export default function Admin() {  

  const [showInfomation, setShowInfomatoin ] = useState<boolean>(false)
  const [showDashboard, setShowDashboard] = useState<boolean>(true)
  
  return (
    <div className="admin">
      <div className="admin-wrapper">
          <div className="admin-bar">
            <Menubar />
          </div>
        <div className="admin-content">
          <TopBarAdmin/>
          {showInfomation && <Infomation />}
          {showDashboard && <Dashboard />}
        </div>
      </div>
    </div>
  )
}