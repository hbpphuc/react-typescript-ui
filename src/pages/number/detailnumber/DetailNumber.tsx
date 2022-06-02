import { RollbackOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './DetailNumber.css'

export default function DetailNumber() {
  return (
    <div className='detailnumber'>
        <div className="detailnumber-info">
            <p className="detailnumber-info-title">Thông tin cấp số</p>
            <div className="detailnumber-info-wrapper">
                <div className="detailnumber-info-half">
                    <div className="info-frame">
                        <label className="detailnumber-info-label">Họ tên:</label>
                        <input readOnly type="text" name="" id="" className='detailnumber-info-input' value={'Baifern Pimchanok'}/>
                    </div>
                    <div className="info-frame">
                        <label className="detailnumber-info-label">Tên dịch vụ:</label>
                        <input readOnly type="text" name="" id="" className='detailnumber-info-input' value={'Khám sắc đẹp'}/>
                    </div>
                    <div className="info-frame">
                        <label className="detailnumber-info-label">Số thứ tự:</label>
                        <input readOnly type="text" name="" id="" className='detailnumber-info-input' value={'2001201'}/>
                    </div>
                    <div className="info-frame">
                        <label className="detailnumber-info-label">Thời gian cấp:</label>
                        <input readOnly type="text" name="" id="" className='detailnumber-info-input' value={'14:35 - 07/11/2021'}/>
                    </div>
                    <div className="info-frame">
                        <label className="detailnumber-info-label">Hạn sử dụng:</label>
                        <input readOnly type="text" name="" id="" className='detailnumber-info-input' value={'18:00 - 07/11/2021'}/>
                    </div>
                </div>
                <div className="detailnumber-info-half">
                    <div className="info-frame">
                        <label className="detailnumber-info-label">Nguồn cấp:</label>
                        <input readOnly type="text" name="" id="" className='detailnumber-info-input' value={'Kiosk'}/>
                    </div>
                    <div className="info-frame">
                        <label className="detailnumber-info-label">Trạng thái:</label>
                        <span className="detailnumber-dot" id="dotbg-1"></span>
                        <input readOnly type="text" name="" id="" className='detailnumber-info-input' value={'Đang chờ'}/>
                    </div>
                    <div className="info-frame">
                        <label className="detailnumber-info-label">Số điện thoại:</label>
                        <input readOnly type="text" name="" id="" className='detailnumber-info-input' value={'0948523423'}/>
                    </div>
                    <div className="info-frame">
                        <label className="detailnumber-info-label">Địa chỉ Email:</label>
                        <input readOnly type="text" name="" id="" className='detailnumber-info-input' value={'baifernP@gmail.com'}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="detailnumber-button">
            <div className="detailnumber-button-wrapper">
                <RollbackOutlined className='detailnumber-icon'/>
                <Link to="/admin/number" className="detailnumber-link">Quay lại</Link>
            </div>
        </div>
    </div>
  )
}
