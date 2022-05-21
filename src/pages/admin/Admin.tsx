import { useState } from 'react'
import Infomation from '../../components/infomation/Infomation'
import Menubar from '../../components/menubar/Menubar'
import TopBarAdmin from '../../components/topbaradmin/TopBarAdmin'
import Dashboard from '../dashboard/Dashboard'
import Device from '../device/Device'
import Service from '../service/Service'
import './Admin.css'


export default function Admin() {  

  const [showInfomation, setShowInfomatoin ] = useState<boolean>(false)
  const [showDashboard, setShowDashboard] = useState<boolean>(false)
  const [showDevice, setShowDevice] = useState<boolean>(false)
  const [showService, setShowService] = useState<boolean>(true)
  
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
          {showDevice && <Device />}
          {showService && <Service />}
        </div>
      </div>
    </div>
  )
}
