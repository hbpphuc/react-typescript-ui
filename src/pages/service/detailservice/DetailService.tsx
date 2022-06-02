import React from 'react'
import './DetailService.css'
import { DatePicker, Pagination } from 'antd'
import { CaretRightFilled, EditFilled, RollbackOutlined } from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea'
import moment from 'moment'
import { Link } from 'react-router-dom'

export default function DetailService() {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    return (
        <div className="detailservice">
            <div className="detailservice-info">
                <div className="detailservice-info-frame">
                    <p className="detailservice-info-title">
                        Thông tin dịch vụ
                    </p>
                    <div className="detailservice-input-frame">
                        <label
                            htmlFor="id"
                            className="detailservice-input-label"
                        >
                            Mã dịch vụ:
                        </label>
                        <input
                            type="text"
                            name=""
                            id="id"
                            value={'201'}
                            className="detailservice-input"
                            disabled
                        />
                    </div>
                    <div className="detailservice-input-frame">
                        <label
                            htmlFor="id"
                            className="detailservice-input-label"
                        >
                            Tên dịch vụ:
                        </label>
                        <input
                            type="text"
                            name=""
                            id="id"
                            value={'Khám tim mạch'}
                            className="detailservice-input"
                            disabled
                        />
                    </div>
                    <div className="detailservice-input-frame">
                        <label
                            htmlFor="id"
                            className="detailservice-input-label"
                        >
                            Mô tả:
                        </label>
                        <TextArea
                            name=""
                            id="id"
                            value={'Chuyên các bệnh lý về tim'}
                            className="detailservice-textarea"
                            autoSize
                            readOnly
                        />
                    </div>
                </div>
                <div className="detailservice-rule-frame">
                    <p className="detailservice-info-title">Quy tắc cấp số</p>
                    <div className="detailservice-input-frame">
                        <label htmlFor="1" className="rule-label">
                            Tăng tự động từ:
                        </label>{' '}
                        <span className="rule-num-box">0001</span>{' '}
                        <span
                            style={{
                                color: '#282739',
                                fontWeight: '600',
                                fontSize: '16px',
                            }}
                        >
                            đến
                        </span>
                        <span className="rule-num-box">9999</span>
                    </div>
                    <div className="detailservice-input-frame">
                        <label htmlFor="2" className="rule-label">
                            Prefix:
                        </label>{' '}
                        <span className="rule-num-box">0001</span>
                    </div>
                    <div className="detailservice-input-frame">
                        <label htmlFor="4" className="rule-label">
                            Reset mỗi ngày
                        </label>
                    </div>
                </div>
            </div>
            <div className="detailservice-table">
                <div className="detailservice-table-top">
                    <div className="detailservice-filter">
                        <p className="detailservice-filter-title">
                            Trạng thái
                        </p>
                        <select
                            name=""
                            id=""
                            className="detailservice-filter-status-select"
                        >
                            <option value="all">Tất cả</option>
                            <option value="active">Đã hoàn thành</option>
                            <option value="all">Đã thực hiện</option>
                            <option value="all">Vắng</option>
                        </select>
                    </div>
                    <div className="detailservice-filter">
                        <p className="detailservice-filter-title">
                            Chọn thời gian
                        </p>
                        <div className="detailservice-filter-datepicker">
                            <DatePicker
                                defaultValue={moment(
                                    '10/10/2021',
                                    dateFormatList[0]
                                )}
                                format={dateFormatList}
                                className="detailservice-datepicker"
                            />
                            <span>
                                <CaretRightFilled className="detailservice-filled-arrowleft" />
                            </span>
                            <DatePicker
                                defaultValue={moment(
                                    '18/10/2021',
                                    dateFormatList[0]
                                )}
                                format={dateFormatList}
                                className="detailservice-datepicker"
                            />
                        </div>
                    </div>
                    <div className="detailservice-filter">
                        <p className="detailservice-filter-title">
                            Từ khóa
                        </p>
                        <input
                            type="text"
                            className="detailservice-search-bar"
                            placeholder="Nhập từ khóa"
                        />
                    </div>
                </div>
                <div className="detailservice-table-content">
                    <table className='detailservice-table-list'>
                        <thead>
                            <tr>
                                <th>Số thứ tự</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="td-1">201001</td>
                                <td id="td-2"><span className='td-dot' id='tddotbg-1'></span>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <td>201002</td>
                                <td id="td-2"><span className='td-dot' id='tddotbg-2'></span>Đang thực hiện</td>
                            </tr>
                            <tr>
                                <td>201003</td>
                                <td id="td-2"><span className='td-dot'></span>Vắng</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="detailservice-table-pagination">
                    <Pagination defaultCurrent={1} total={100} />
                </div>
            </div>
            <div className="detailservice-button-group">
                <div className="detailservice-button">
                    <EditFilled className='detailservice-icon'/>
                    <Link to="/admin/service/edit" className="detailservice-link">Cập nhật danh sách</Link>
                </div>
                <span className="line"></span>
                <div className="detailservice-button">
                    <RollbackOutlined className='detailservice-icon'/>
                    <Link to="/admin/service" className="detailservice-link">Quay lại</Link>
                </div>
            </div>
        </div>
    )
}
