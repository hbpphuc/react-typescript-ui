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
                            <label htmlFor="id" className="create-input-title">
                                Loại thiết bị: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                placeholder="Chọn loại thiết bị"
                                className="create-input"
                            />
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="id" className="create-input-title">
                                Tên thiết bị: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                placeholder="Nhập tên thiết bị"
                                className="create-input"
                            />
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="id" className="create-input-title">
                                Tên đăng nhập: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                placeholder="Nhập tên đăng nhập"
                                className="create-input"
                            />
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="id" className="create-input-title">
                                Địa chỉ IP: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                placeholder="Nhập địa chỉ IP"
                                className="create-input"
                            />
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="id" className="create-input-title">
                                Mật khẩu: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                placeholder="Nhập mật khẩu"
                                className="create-input"
                            />
                        </div>
                        <div className="create-input-frame">
                            <label htmlFor="id" className="create-input-title">
                                Dịch vụ sử dụng: <span className='red-star'>*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                placeholder="Nhập dịch vụ sử dụng"
                                className="create-input"
                            />
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
