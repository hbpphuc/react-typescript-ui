import { PlusSquareFilled } from '@ant-design/icons'
import { Pagination } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './ListAccount.css'

export default function ListAccount() {
    return (
        <div className="list-account">
            <div className="list-account-table">
                <div className="account-table">
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th>Tên đăng nhập</th>
                                <th>Số họ tên</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                                <th>Vai trò</th>
                                <th>Trạng thái hoạt động</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="td-1">baifern@P</td>
                                <td id="td-2">Baifern Pimchanok</td>
                                <td id="td-3">0912319123</td>
                                <td id="td-4">baifern.p@gmail.com</td>
                                <td id="td-5">Idol</td>
                                <td id="td-6">
                                    <span className='td-dot' id='tddotbg-1'></span>
                                    Hoạt động
                                </td>
                                <td id="td-7">
                                    <a href="#" className="table-link">
                                        Cập nhật
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td id="td-1">baifern@P</td>
                                <td id="td-2">Baifern Pimchanok</td>
                                <td id="td-3">0912319123</td>
                                <td id="td-4">baifern.p@gmail.com</td>
                                <td id="td-5">Idol</td>
                                <td id="td-6">
                                    <span className='td-dot' id='tddotbg-2'></span>
                                    Ngưng hoạt động
                                </td>
                                <td id="td-7">
                                    <a href="#" className="table-link">
                                        Cập nhật
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
            <div className="list-account-button">
                <div className="account-add-button">
                    <PlusSquareFilled className="add-icon" />
                    <Link to="" className="add-link">
                        Thêm tài khoản
                    </Link>
                </div>
            </div>
        </div>
    )
}
