import { PlusSquareFilled } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './ListRole.css'

export default function ListRole() {
    return (
        <div className="list-role">
            <div className="list-role-table">
                <table className="table-list">
                    <thead>
                        <tr>
                            <th>Tên vai trò</th>
                            <th>Số người dùng</th>
                            <th>Mô tả</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="td-1">Kế toán</td>
                            <td id="td-2">6</td>
                            <td id="td-3">
                                Thực hiện nhiệm vụ về thống kê số liệu và tổng
                                hợp số liệu
                            </td>
                            <td id="td-4">
                                <a href="#" className="table-link">
                                    Cập nhật
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Lễ tân</td>
                            <td>6</td>
                            <td>
                                Thực hiện nhiệm vụ về đón tiếp và giải đáp thắc
                                mắc cho khách hàng
                            </td>
                            <td>
                                <a href="#" className="table-link">
                                    Cập nhật
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="list-role-button">
                <div className="role-add-button">
                    <PlusSquareFilled className="add-icon" />
                    <Link to="" className="add-link">
                        Thêm vai trò
                    </Link>
                </div>
            </div>
        </div>
    )
}
