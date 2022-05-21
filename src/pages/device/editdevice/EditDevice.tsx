import Select from 'antd/lib/select'
import React from 'react'
import './EditDevice.css'

export default function EditDevice() {
    const { Option } = Select;
    return (
        <div className="editdevice">
            <p className="editdevice-title">Quản lý thiết bị</p>
            <form action="" method="post" className="editdevice-form">
                <div className="edit-form-frame">
                    <p className="edit-form-title">Thông tin thiết bị</p>
                    <div className="edit-input-wrapper">
                        <div className="edit-input-frame">
                            <label htmlFor="id" className="edit-input-title">
                                Mã thiết bị: <span className="red-star">*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="id"
                                value={'KIO_01'}
                                placeholder="Nhập mã thiết bị"
                                className="edit-input"
                            />
                        </div>
                        <div className="edit-input-frame">
                            <label htmlFor="type" className="edit-input-title">
                                Loại thiết bị:{' '}
                                <span className="red-star">*</span>
                            </label>
                            <select
                                name=""
                                id="type"
                                className="edit-input edit-select"
                            >
                                <option value="" disabled hidden>
                                    Chọn loại thiết bị
                                </option>
                                <option value="kiosk" selected>
                                    Kiosk
                                </option>
                                <option value="dc">Display counter</option>
                            </select>
                        </div>
                        <div className="edit-input-frame">
                            <label htmlFor="name" className="edit-input-title">
                                Tên thiết bị:{' '}
                                <span className="red-star">*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                value={'Kiosk'}
                                id="name"
                                placeholder="Nhập tên thiết bị"
                                className="edit-input"
                            />
                        </div>
                        <div className="edit-input-frame">
                            <label
                                htmlFor="username"
                                className="edit-input-title"
                            >
                                Tên đăng nhập:{' '}
                                <span className="red-star">*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                value={'baifernP'}
                                id="username"
                                placeholder="Nhập tên đăng nhập"
                                className="edit-input"
                            />
                        </div>
                        <div className="edit-input-frame">
                            <label htmlFor="ipadd" className="edit-input-title">
                                Địa chỉ IP: <span className="red-star">*</span>
                            </label>
                            <input
                                type="text"
                                value={'128.172.308'}
                                name=""
                                id="ipadd"
                                placeholder="Nhập địa chỉ IP"
                                className="edit-input"
                            />
                        </div>
                        <div className="edit-input-frame">
                            <label
                                htmlFor="password"
                                className="edit-input-title"
                            >
                                Mật khẩu: <span className="red-star">*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                value={'CMS'}
                                id="password"
                                placeholder="Nhập mật khẩu"
                                className="edit-input"
                            />
                        </div>
                        <div className="edit-input-frame">
                            <label htmlFor="id" className="edit-input-title">
                                Dịch vụ sử dụng:{' '}
                                <span className="red-star">*</span>
                            </label>
                            <Select
                                mode="multiple"
                                placeholder="Chọn dịch vụ sử dụng"
                                defaultValue={['1', '2']}
                                optionLabelProp="label"
                                className='edit-input edit-select long-select'
                                
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
                        <span className="red-star">*</span> Là trường thông tin
                        bắt buộc
                    </p>
                </div>
                <div className="edit-button-frame">
                    <button type="submit" className="button button-normal">
                        Hủy bỏ
                    </button>
                    <button type="submit" className="button button-active">
                        Cập nhật
                    </button>
                </div>
            </form>
        </div>
    )
}
