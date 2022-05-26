import {
    AlignLeftOutlined,
    CaretRightFilled,
    DownloadOutlined,
} from '@ant-design/icons'
import { DatePicker, Pagination } from 'antd'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import './Report.css'

export default function Report() {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    // const ul:any = document.querySelector('.report-table-dropdown')
    // const handleDisplay = () => {
    //     if(ul.style.display === "none"){
    //         ul.style.display = "block"
    //     }else{
    //         ul.style.display = "none"
    //     }
    // }
    return (
        <div className="report-wrapper">
            <div className="report-filter-date">
                <p className="report-filter-title">Chọn thời gian</p>
                <div className="report-filter-datepicker">
                    <DatePicker
                        defaultValue={moment('10/10/2021', dateFormatList[0])}
                        format={dateFormatList}
                        className="report-datepicker"
                    />
                    <span>
                        <CaretRightFilled className="filled-arrowleft" />
                    </span>
                    <DatePicker
                        defaultValue={moment('18/10/2021', dateFormatList[0])}
                        format={dateFormatList}
                        className="report-datepicker"
                    />
                </div>
            </div>
            <div className="report-content">
                <div className="report-table-wrapper">
                    <div className="report-table">
                        <table className="report-list">
                            <tr>
                                <th className="report-th">
                                    Số thứ tự
                                    <div className="thead-dropdown">
                                        <ul className="report-table-dropdown">
                                            <li className="dropdown-items">
                                                Tất cả
                                            </li>
                                            <li className="dropdown-items">
                                                2040001
                                            </li>
                                            <li className="dropdown-items">
                                                2060001
                                            </li>
                                            <li className="dropdown-items">
                                                2050002
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th className="report-th">
                                    Tên dịch vụ
                                    <div className="thead-dropdown">
                                        <ul className="report-table-dropdown">
                                            <li className="dropdown-items">
                                                Tất cả
                                            </li>
                                            <li className="dropdown-items">
                                                Khám tim mạch
                                            </li>
                                            <li className="dropdown-items">
                                                Khám mắt
                                            </li>
                                            <li className="dropdown-items">
                                                Khám tổng quát
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th className="report-th">
                                    Thời gian cấp
                                    <div className="thead-dropdown">
                                        <ul className="report-table-dropdown">
                                            <li className="dropdown-items">
                                                Tất cả
                                            </li>
                                            <li className="dropdown-items">
                                                07:30 01/01/2022
                                            </li>
                                            <li className="dropdown-items">
                                                07:45 01/02/2022
                                            </li>
                                            <li className="dropdown-items">
                                                08:30 01/03/2022
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th className="report-th">
                                    Tình trạng
                                    <div className="thead-dropdown">
                                        <ul className="report-table-dropdown">
                                            <li className="dropdown-items">
                                                Tất cả
                                            </li>
                                            <li className="dropdown-items">
                                                Đang chờ
                                            </li>
                                            <li className="dropdown-items">
                                                Đã sử dụng
                                            </li>
                                            <li className="dropdown-items">
                                                Bỏ qua
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th className="report-th">
                                    Nguồn cấp
                                    <div className="thead-dropdown">
                                        <ul className="report-table-dropdown">
                                            <li className="dropdown-items">
                                                Tất cả
                                            </li>
                                            <li className="dropdown-items">
                                                Kiosk
                                            </li>
                                            <li className="dropdown-items">
                                                Hệ thống
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td id="td-1">201001</td>
                                <td id="td-2">Khám tim mạch</td>
                                <td id="td-3">14:35 - 07/11/2021</td>
                                <td id="td-4">
                                    <span
                                        className="td-dot"
                                        id="tddotbg-1"
                                    ></span>
                                    Đang chờ
                                </td>
                                <td id="td-5">Kiosk</td>
                            </tr>
                            <tr>
                                <td id="td-1">201001</td>
                                <td id="td-2">Khám tổng quát</td>
                                <td id="td-3">14:35 - 07/11/2021</td>
                                <td id="td-4">
                                    <span className="td-dot"></span>
                                    Đã sử dụng
                                </td>
                                <td id="td-5">Kiosk</td>
                            </tr>
                            <tr>
                                <td id="td-1">201001</td>
                                <td id="td-2">Khám tai mũi họng</td>
                                <td id="td-3">14:35 - 07/11/2021</td>
                                <td id="td-4">
                                    <span
                                        className="td-dot"
                                        id="tddotbg-2"
                                    ></span>
                                    Bỏ qua
                                </td>
                                <td id="td-5">Hệ thống</td>
                            </tr>
                        </table>
                    </div>
                    <div className="report-pagination">
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
                <div className="report-button">
                    <div className="report-download-button">
                        <DownloadOutlined className="report-download-icon" />
                        <Link to="" className="report-link">
                            Tải về
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
