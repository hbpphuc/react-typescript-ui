import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import CreateService from './createservice/CreateService'
import DetailService from './detailservice/DetailService'
import EditService from './editservice/EditService'
import ListService from './listservice/ListService'
import './Service.css'

export default function Service() {
    return (
        <div className="service-wrapper">
            <p className="service-title">Quản lý dịch vụ</p>
            <Outlet />
        </div>
    )
}
