import { useState } from 'react'
import Infomation from '../../components/infomation/Infomation'
import Menubar from '../../components/menubar/Menubar'
import TopBarAdmin from '../../components/topbaradmin/TopBarAdmin'
import Dashboard from '../dashboard/Dashboard'
import Device from '../device/Device'
import Service from '../service/Service'
import Number from '../number/Number'
import './Admin.css'
import Report from '../report/Report'
import ManageSystem from '../system/ManageSystem'
import { Outlet } from 'react-router-dom'


export default function Admin() {  

  const [showInfomation, setShowInfomatoin ] = useState<boolean>(false)
  const [showDashboard, setShowDashboard] = useState<boolean>(false)
  const [showDevice, setShowDevice] = useState<boolean>(false)
  const [showService, setShowService] = useState<boolean>(false)
  const [showNumber, setShowNumber] = useState<boolean>(false)
  const [showReport, setShowReport] = useState<boolean>(false)
  const [showManageSystem, setShowManageSystem] = useState<boolean>(true)
  
  return (
    <div className="admin">
      <div className="admin-wrapper">
          <div className="admin-bar">
            <Menubar />
          </div>
        <div className="admin-content">
          <TopBarAdmin/>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
