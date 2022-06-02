import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './Account.css'
import CreateAccount from './createaccount/CreateAccount'
import ListAccount from './listaccount/ListAccount'

export default function Account() {

    return (
        <div className="account-wrapper">
            <div className="account-heading">
                <p className="account-title">Danh sách Tài khoản</p>
                <div className="account-filter">
                    <div className="account-filter-frame">
                        <label htmlFor="role" className="filter-label">
                            Tên vai trò
                        </label>
                        <select name="" id="role" className="filter-select">
                            <option value="all" disabled hidden selected>
                                Tất cả
                            </option>
                            <option value="1">Kế toán</option>
                            <option value="2">Bác sĩ</option>
                            <option value="3">Lễ tân</option>
                        </select>
                    </div>
                    <div className="account-filter-frame">
                        <label htmlFor="search" className="filter-label">
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
            </div>
            <div className="account-content">
                <Outlet />
            </div>
        </div>
    )
}
