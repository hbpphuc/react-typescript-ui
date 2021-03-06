import { Select } from 'antd'
import React from 'react'
import './CreateDevice.css'

export default function CreateDevice() {
    return (
        <div className="createdevice">
            <p className="createdevice-title">Quản lý thiết bị</p>
            <form action="" method="post" className="createdevice-form">
                <div className="create-form-frame">
                    <p className="create-form-title">Thông tin thiết bị</p>
                    <div className="create-input-wrapper">
                        <div className="create-input-frame">
                            <label htmlFor="id" className="create-input-title">
                                Mã thiết bị: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                placeholder="Nhập mã thiết bị"
                                className="create-input"
                            />
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="type" className="create-input-title">
                                Loại thiết bị: <span className='red-star'>*</span>
                            </label>
                            <select
                                name=""
                                id="type"
                                className="create-input create-select"
                            >
                                <option value="" disabled selected hidden>Chọn loại thiết bị</option>
                                <option value="kiosk">Kiosk</option>
                                <option value="dc">Display counter</option>
                            </select>
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="name" className="create-input-title">
                                Tên thiết bị: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="name"
                                placeholder="Nhập tên thiết bị"
                                className="create-input"
                            />
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="username" className="create-input-title">
                                Tên đăng nhập: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="username"
                                placeholder="Nhập tên đăng nhập"
                                className="create-input"
                            />
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="ipadd" className="create-input-title">
                                Địa chỉ IP: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="ipadd"
                                placeholder="Nhập địa chỉ IP"
                                className="create-input"
                            />
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="password" className="create-input-title">
                                Mật khẩu: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="password"
                                placeholder="Nhập mật khẩu"
                                className="create-input"
                            />
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="id" className="create-input-title">
                                Dịch vụ sử dụng: <span className='red-star'>*</span>
                            </label>
                            <Select
                                mode="multiple"
                                placeholder="Chọn dịch vụ sử dụng"
                                defaultValue={[]}
                                optionLabelProp="label"
                                className='create-input create-select long-select'
                                
                            >
                                <option value="1" label="Khám tim mạch" className='option-hihi'>
                                    <div className="demo-option-label-item">
                                        Khám tim mạch
                                    </div>
                                </option>
                                <option value="2" label="Khám sản phụ khoa">
                                    <div className="demo-option-label-item">
                                        Khám sản phụ khoa
                                    </div>
                                </option>
                                <option value="3" label="Khám răng hàm mặt">
                                    <div className="demo-option-label-item">
                                        Khám răng hàm mặt
                                    </div>
                                </option>
                                <option value="4" label="Khám tai mũi họng">
                                    <div className="demo-option-label-item">
                                        Khám tai mũi họng
                                    </div>
                                </option>
                                <option value="5" label="Khám tổng quát">
                                    <div className="demo-option-label-item">
                                        Khám tổng quát
                                    </div>
                                </option>
                            </Select>
                        </div>
                    </div>
                    <p className="note">
                        <span className='red-star'>*</span> Là trường thông tin bắt buộc
                    </p>
                </div>
                <div className="create-button-frame">
                    <button type="submit" className='button button-normal'>Hủy bỏ</button>
                    <button type="submit" className='button button-active'>Thêm thiết bị</button>
                </div>
            </form>
        </div>
    )
}
