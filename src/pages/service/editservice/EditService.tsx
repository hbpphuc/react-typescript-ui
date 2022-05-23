import { Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import './EditService.css'

export default function EditService() {
    return (
        <div className="editservice">
            <form action="" method="post" className="editservice-form">
                <div className="editservice-form-frame">
                    <p className="edit-form-title">Thông tin dịch vụ</p>
                    <div className="editservice-info-frame">
                        <div className="editservice-input-frame">
                            <div className="input-frame-left">
                                <label
                                    htmlFor="id"
                                    className="edit-input-title"
                                >
                                    Mã dịch vụ:
                                    <span className="red-star">*</span>
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id="id"
                                    placeholder="Nhập mã dịch vụ"
                                    className="editservice-input"
                                    value={'201'}
                                />
                            </div>
                            <div className="input-frame-left">
                                <label
                                    htmlFor="name"
                                    className="edit-input-title"
                                >
                                    Tên dịch vụ:
                                    <span className="red-star">*</span>
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id="name"
                                    placeholder="Nhập tên dịch vụ"
                                    value={'Khám tim mạch'}
                                    className="editservice-input"
                                />
                            </div>
                        </div>
                        <div className="editservice-textarea-frame">
                            <label
                                htmlFor="name"
                                className="edit-input-title"
                            >
                                Mô tả: <span className="red-star">*</span>
                            </label>
                            <TextArea
                                placeholder="Nhập mô tả"
                                className="editservice-area"
                                autoSize
                                value={'Chuyên các bệnh lý về tim'}
                            />
                        </div>
                    </div>
                    <p className="edit-form-title">Quy tắc cấp số</p>
                    <div className="editservice-rule-frame">
                        <div className="rule-checkbox-wrapper">
                            <input
                                type="checkbox"
                                name=""
                                id="1"
                                className="editservice-rule-checkbox"
                                checked
                            />{' '}
                            <label htmlFor="1" className="rule-label">
                                Tăng tự động từ:
                            </label>{' '}
                            <span className="rule-num-box">0001</span>{' '}
                                <span style={{color: '#282739', fontWeight: '600', fontSize: '16px'}}>đến</span>
                            <span className="rule-num-box">9999</span>
                        </div>
                        <div className="rule-checkbox-wrapper">
                            <input
                                type="checkbox"
                                name=""
                                id="2"
                                checked
                                className="editservice-rule-checkbox"
                            />{' '}
                            <label htmlFor="2" className="rule-label">
                                Prefix:
                            </label>{' '}
                            <span className="rule-num-box">0001</span>
                        </div>
                        <div className="rule-checkbox-wrapper">
                            <input
                                type="checkbox"
                                name=""
                                id="3"
                                className="editservice-rule-checkbox"
                            />{' '}
                            <label htmlFor="3" className="rule-label">
                                Surfix:
                            </label>{' '}
                            <span className="rule-num-box">0001</span>
                        </div>
                        <div className="rule-checkbox-wrapper">
                            <input
                                type="checkbox"
                                name=""
                                id="4"
                                checked
                                className="editservice-rule-checkbox"
                            />{' '}
                            <label htmlFor="4" className="rule-label">
                                Reset mỗi ngày
                            </label>
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
