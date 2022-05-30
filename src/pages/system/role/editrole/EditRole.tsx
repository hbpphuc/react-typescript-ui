import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import './EditRole.css'

export default function EditRole() {
    return (
        <div className="edit-role">
            <form action="" method="" className="form-control">
                <div className="edit-role-form">
                    <p className="form-title">Thông tin vai trò</p>
                    <div className="form-input-frame">
                        <div className="form-input">
                            <label htmlFor="name" className="input-label">
                                Tên vai trò: <span className="red-star">*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                id="name"
                                className="input"
                                placeholder="Nhập tên vai trò"
                                value={'Kế toán'}
                            />
                            <label htmlFor="desc" className="input-label">
                                Mô tả:{' '}
                            </label>
                            <TextArea
                                placeholder="Nhập mô tả"
                                className="area"
                                autoSize
                                value={'Chịu trách nhiệm thống kê và kiểm toán'}
                            />
                            <p className="note">
                                <span className="red-star">*</span> là trường
                                thông tin bắt buộc
                            </p>
                        </div>
                        <div className="form-select">
                            <p className="input-label">
                                Phân quyền chức năng:{' '}
                                <span className="red-star">*</span>
                            </p>
                            <div className="form-select-wrapper">
                                <div className="select-frame">
                                    <p className="form-title">
                                        Nhóm chức năng A
                                    </p>
                                    <div className="select-wrapper">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="1"
                                            className="edit-role-checkbox"
                                            checked
                                        />
                                        <label
                                            htmlFor="1"
                                            className="select-label"
                                        >
                                            Tất cả
                                        </label>
                                    </div>

                                    <div className="select-wrapper">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="2"
                                            checked
                                            className="edit-role-checkbox"
                                        />
                                        <label
                                            htmlFor="2"
                                            className="select-label"
                                        >
                                            Chức năng x
                                        </label>
                                    </div>

                                    <div className="select-wrapper">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="3"
                                            checked
                                            className="edit-role-checkbox"
                                        />
                                        <label
                                            htmlFor="3"
                                            className="select-label"
                                        >
                                            Chức năng y
                                        </label>
                                    </div>

                                    <div className="select-wrapper">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="4"
                                            checked
                                            className="edit-role-checkbox"
                                        />
                                        <label
                                            htmlFor="4"
                                            className="select-label"
                                        >
                                            Chức năng z
                                        </label>
                                    </div>
                                </div>
                                <div className="select-frame">
                                    <p className="form-title">
                                        Nhóm chức năng B
                                    </p>
                                    <div className="select-wrapper">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="1"
                                            className="edit-role-checkbox"
                                        />
                                        <label
                                            htmlFor="1"
                                            className="select-label"
                                        >
                                            Tất cả
                                        </label>
                                    </div>

                                    <div className="select-wrapper">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="2"
                                            className="edit-role-checkbox"
                                        />
                                        <label
                                            htmlFor="2"
                                            className="select-label"
                                        >
                                            Chức năng x
                                        </label>
                                    </div>

                                    <div className="select-wrapper">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="3"
                                            className="edit-role-checkbox"
                                        />
                                        <label
                                            htmlFor="3"
                                            className="select-label"
                                        >
                                            Chức năng y
                                        </label>
                                    </div>

                                    <div className="select-wrapper">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="4"
                                            className="edit-role-checkbox"
                                        />
                                        <label
                                            htmlFor="4"
                                            className="select-label"
                                        >
                                            Chức năng z
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edit-role-button">
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
