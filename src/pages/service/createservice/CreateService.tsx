import { Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import './CreateService.css'

export default function CreateService() {
    return (
        <div className="createservice">
            <form action="" method="post" className="createservice-form">
                <div className="createservice-form-frame">
                    <p className="create-form-title">Thông tin dịch vụ</p>
                    <div className="createservice-info-frame">
                        <div className="createservice-input-frame">
                            <div className="input-frame-left">
                                <label
                                    htmlFor="id"
                                    className="create-input-title"
                                >
                                    Mã dịch vụ:
                                    <span className="red-star">*</span>
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id="id"
                                    placeholder="Nhập mã dịch vụ"
                                    className="createservice-input"
                                />
                            </div>
                            <div className="input-frame-left">
                                <label
                                    htmlFor="name"
                                    className="create-input-title"
                                >
                                    Tên dịch vụ:
                                    <span className="red-star">*</span>
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id="name"
                                    placeholder="Nhập tên dịch vụ"
                                    className="createservice-input"
                                />
                            </div>
                        </div>
                        <div className="createservice-textarea-frame">
                            <label
                                htmlFor="name"
                                className="create-input-title"
                            >
                                Mô tả: <span className="red-star">*</span>
                            </label>
                            <TextArea
                                placeholder="Nhập mô tả"
                                className="createservice-area"
                                autoSize
                            />
                        </div>
                    </div>
                    <p className="create-form-title">Quy tắc cấp số</p>
                    <div className="createservice-rule-frame">
                        <div className="rule-checkbox-wrapper">
                            <input
                                type="checkbox"
                                name=""
                                id="1"
                                className="createservice-rule-checkbox"
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
                                className="createservice-rule-checkbox"
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
                                className="createservice-rule-checkbox"
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
                                className="createservice-rule-checkbox"
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

                <div className="create-button-frame">
                    <button type="submit" className="button button-normal">
                        Hủy bỏ
                    </button>
                    <button type="submit" className="button button-active">
                        Thêm dịch vụ
                    </button>
                </div>
            </form>
        </div>
    )
}
