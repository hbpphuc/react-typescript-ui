import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import './CreateRole.css'

export default function CreateRole() {
    return (
        <div className="create-role">
            <form action="" method="" className="form-control">
                <div className="create-role-form">
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
                            />
                            <label htmlFor="desc" className="input-label">
                                Mô tả:{' '}
                            </label>
                            <TextArea
                                placeholder="Nhập mô tả"
                                className="area"
                                autoSize
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
                                            className="create-role-checkbox"
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
                                            className="create-role-checkbox"
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
                                            className="create-role-checkbox"
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
                                            className="create-role-checkbox"
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
                                            className="create-role-checkbox"
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
                                            className="create-role-checkbox"
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
                                            className="create-role-checkbox"
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
                                            className="create-role-checkbox"
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
                <div className="create-role-button">
                    <button type="submit" className="button button-normal">
                        Hủy bỏ
                    </button>
                    <button type="submit" className="button button-active">
                        Thêm
                    </button>
                </div>
            </form>
        </div>
    )
}
