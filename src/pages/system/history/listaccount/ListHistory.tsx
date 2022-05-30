import { PlusSquareFilled } from '@ant-design/icons'
import { Pagination } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './ListHistory.css'

export default function ListHistory() {
    return (
        <div className="list-history">
            <div className="list-history-table">
                <div className="history-table">
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th>Tên đăng nhập</th>
                                <th>Thời gian tác động</th>
                                <th>IP thực hiện</th>
                                <th>Thao tác thực hiện</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="td-1">baifern@P</td>
                                <td id="td-2">01/12/2021 15:12:17</td>
                                <td id="td-3">192.168.3.1</td>
                                <td id="td-4">Cập nhật thông tin dịch vụ DV_01</td>
                            </tr>
                            <tr>
                                <td id="td-1">baifern@P</td>
                                <td id="td-2">02/12/2021 15:12:17</td>
                                <td id="td-3">192.168.3.1</td>
                                <td id="td-4">Cập nhật thông tin dịch vụ DV_02</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    )
}
