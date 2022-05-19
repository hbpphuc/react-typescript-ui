import { EditOutlined } from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import { Link } from 'react-router-dom'
import './DetailDevice.css'

export default function DetailDevice() {
    return (
        <div className="detaildevice">
            <p className="detaildevice-title">Quản lý thiết bị</p>
            <div className="detail-wrapper">
                <p className="detail-title">Thông tin thiết bị</p>
                <div className="detail-frame">
                    <div className="detail-input-wrapper">
                        <div className="detail-input-frame">
                            <label htmlFor="id" className="detail-input-title">
                                Mã thiết bị:
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                value={'KIO_01'}
                                className="detail-input"
                                disabled
                            />
                        </div>
                        <div className="detail-input-frame">
                            <label htmlFor="id" className="detail-input-title">
                                Loại thiết bị:
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                value={'Kiosk'}
                                className="detail-input"
                                disabled
                            />
                        </div>
                        <div className="detail-input-frame">
                            <label htmlFor="id" className="detail-input-title">
                                Tên thiết bị:
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                value={'Kiosk'}
                                className="detail-input"
                                disabled
                            />
                        </div>
                        <div className="detail-input-frame">
                            <label htmlFor="id" className="detail-input-title">
                                Tên đăng nhập:
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                value={'baifernP'}
                                className="detail-input"
                                disabled
                            />
                        </div>
                        <div className="detail-input-frame">
                            <label htmlFor="id" className="detail-input-title">
                                Địa chỉ IP:
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                value={'128.172.308'}
                                className="detail-input"
                                disabled
                            />
                        </div>
                        <div className="detail-input-frame">
                            <label htmlFor="id" className="detail-input-title">
                                Mật khẩu:
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                value={'CMS'}
                                className="detail-input"
                                disabled
                            />
                        </div>
                    </div>
                    <div className="detail-input-service-frame">
                        <label htmlFor="id" className="detail-input-title">
                            Dịch vụ sử dụng:
                        </label>
                        <TextArea
                            rows={3}
                            value={
                                'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tại mũi họng, Khám tổng quát'
                            }
                            className="detail-area-service"
                            readOnly
                            autoSize
                        />
                    </div>
                </div>
            </div>
            <div className="device-updatepage">
                <EditOutlined className="updatepage-icon" />
                <Link to="" className="updatepage-link">
                    Cập nhật thiết bị
                </Link>
            </div>
        </div>
    )
}
