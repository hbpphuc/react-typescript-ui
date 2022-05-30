import React, { useState } from 'react'
import CreateRole from './createrole/CreateRole'
import EditRole from './editrole/EditRole'
import ListRole from './listrole/ListRole'
import './Role.css'

export default function Role() {
    const [showListRole, setShowListRole] = useState<boolean>(true)
    const [showCreateRole, setShowCreateRole] = useState<boolean>(false)
    const [showEditRole, setShowEditRole] = useState<boolean>(false)

    return (
        <div className="role-wrapper">
            <div className="role-heading">
                <p className="role-title">Danh sách vai trò</p>
                {showListRole && (
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
                )}
            </div>
            <div className="role-content">
                {showListRole && <ListRole />}
                {showCreateRole && <CreateRole />}
                {showEditRole && <EditRole />}
            </div>
        </div>
    )
}
