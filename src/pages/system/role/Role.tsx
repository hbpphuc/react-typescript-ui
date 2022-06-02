import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import CreateRole from './createrole/CreateRole'
import EditRole from './editrole/EditRole'
import ListRole from './listrole/ListRole'
import './Role.css'

export default function Role() {

    return (
        <div className="role-wrapper">
            <div className="role-heading">
                <p className="role-title">Danh sách vai trò</p>
                <div className="role-search-frame">
                    <label htmlFor="search" className="search-label">
                        Từ khóa
                    </label>
                    <input
                        type="text"
                        className="search-bar"
                        id="search"
                        placeholder="Nhập từ khóa"
                    />
                </div>
            </div>
            <div className="role-content">
                <Outlet />
            </div>
        </div>
    )
}
