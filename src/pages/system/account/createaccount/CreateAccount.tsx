import { Input } from 'antd'
import React from 'react'
import './CreateAccount.css'

export default function CreateAccount() {
  return (
    <div className='create-account'>
        <form action="" method="" className='form-control'>
            <div className="form-input-group">
                <p className="form-title">Thông tin tài khoản</p>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-frame">
                            <label htmlFor="" className="input-label">Họ tên</label>
                            <input type="text" name="" id="" className='input' placeholder='Nhập họ tên'/>
                        </div>
                        <div className="input-frame">
                            <label htmlFor="" className="input-label">Số điện thoại</label>
                            <input type="text" name="" id="" className='input' placeholder='Nhập số điện thoại'/>
                        </div>
                        <div className="input-frame">
                            <label htmlFor="" className="input-label">Email</label>
                            <input type="text" name="" id="" className='input' placeholder='Nhập email'/>
                        </div>
                        <div className="input-frame">
                            <label htmlFor="" className="input-label">Vai trò</label>
                            <select name="" id="role" className="input">
                                <option value="all" disabled hidden selected>
                                    Tất cả
                                </option>
                                <option value="1">Kế toán</option>
                                <option value="2">Bác sĩ</option>
                                <option value="3">Lễ tân</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-frame">
                            <label htmlFor="" className="input-label">Tên đăng nhập</label>
                            <input type="text" name="" id="" className='input' placeholder='Nhập tên đăng nhập'/>
                        </div>
                        <div className="input-frame">
                            <label htmlFor="" className="input-label">Mật khẩu</label>
                            <Input.Password
                                className="input"
                                id="password"
                                value={'baifernbeauty'}
                            />
                        </div>
                        <div className="input-frame">
                            <label htmlFor="" className="input-label">Nhập lại mật khẩu</label>
                            <Input.Password
                                className="input"
                                id="password"
                                value={'baifernbeauty'}
                            />
                        </div>
                        <div className="input-frame">
                            <label htmlFor="" className="input-label">Tình trạng</label>
                            <select name="" id="role" className="input">
                                <option value="1" selected>
                                    Hoạt động
                                </option>
                                <option value="2">Ngưng hoạt động</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-button-group">
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
