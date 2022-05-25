import React, { useState } from 'react'
import ModalPopup from '../../../components/popup/ModalPopup'
import './CreateNumber.css'

export default function CreateNumber() {
    const [isDisplay, setIsDisplay] = useState(false)
   
    const handleDisplayModal = (e:any) => {
        e.preventDefault()
        setIsDisplay(!isDisplay)    
    }

    return (
        <div className="createnumber">
            {/* <button className='close-button' ></button> */}
            <div className="createnumber-frame">
                <h1 className="createnumber-title">cấp số mới</h1>
                <form action="" method="post" className='createnumber-form'>
                    <label htmlFor="service" className="createnumber-select-title">
                        Dịch vụ khách hàng lựa chọn
                    </label>
                    <select name="" id="service" className='createnumber-select'>
                        <option value="all" disabled hidden selected>Chọn dịch vụ</option>
                        <option value="1">Khám sản phụ khoa</option>
                        <option value="2">Khám tai mũi họng</option>
                        <option value="3">Khám răng hàm mặt</option>
                        <option value="4">Khám tổng quát</option>
                        <option value="5">Khám tim mạch</option>
                    </select>
                    <div className="createnumber-button-group">
                        <button className="createnumber-button button-cancel">Hủy bỏ</button>
                        <button className="createnumber-button button-submit" onClick={handleDisplayModal}>In số</button>
                    </div>
                </form>
                {isDisplay && 
                <div className="modal-wrapper">
                    <div className="modal-wrapper-close">
                        <button className='wrapper-close-button' onClick={handleDisplayModal}></button>
                    </div>
                    <ModalPopup />
                </div>}
            </div>
        </div>
    )
}
