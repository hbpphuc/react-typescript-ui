import { CloseOutlined } from '@ant-design/icons'
import React from 'react'
import './ModalPopup.css'

export default function ModalPopup() {
  return (
    
        <div className='modalpopup' id='modal'>
            <div className="modalpopup-close">
                {/* <button className='close-button' ></button> */}
            </div>
            <div className="modalpopup-top">
                <p className="modalpopup-top-title">Số thứ tự được cấp</p>
                <p className="modalpopup-top-content">2001201</p>
                <p className="modalpopup-top-note">DV: Khám răng hàm mặt <b>(tại quầy số 1)</b></p>
            </div>
            <div className="modalpopup-bottom">
                <div className="modalpopup-bottom-note">
                    <span>Thời gian cấp:</span>  
                    <span>09:30 11/10/2021</span>
                </div>
                <div className="modalpopup-bottom-note">
                    <span>Hạn sử dụng:</span>
                    <span>17:30 11/10/2021</span>
                </div>
            </div>
        </div>
  )
}
