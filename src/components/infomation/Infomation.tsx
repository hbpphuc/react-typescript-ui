import { CameraOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import './Infomation.css'

export default function Infomation() {
  return (
    <div className='infomation-wrapper'>
        <div className="simple-info">
          <img src="https://bloganchoi.com/wp-content/uploads/2021/09/hinh-anh-baifern-pimchanok.jpg" alt="avatar-info" className="avatar-info" />
          <div className="input-file">
            <input type="file" id="file" className='input-choose'/>
            <label htmlFor="file" className='inputfile-label'><CameraOutlined /></label>
          </div>
          <p className="info-name">Baifern Pimchanok</p>
        </div>
        <div className="detail-info">
          <div className="info-items">
            <label htmlFor="fullname" className="info-title">Tên người dùng</label>
            <Input className='info-input' id="fullname" value="Baifern Pimchanok"/>
          </div>
          <div className="info-items">
            <label htmlFor="contact" className="info-title">Số điện thoại</label>
            <Input className='info-input' id="contact" value="0333123021"/>
          </div>
          <div className="info-items">
            <label htmlFor="email" className="info-title">Email</label>
            <Input className='info-input' id="email" value="baifern.beauty@gmail.com"/>
          </div>
          <div className="info-items">
            <label htmlFor="username" className="info-title">Tên đăng nhập</label>
            <Input className='info-input' id="username" value="baifernP"/>
          </div>
          <div className="info-items">
            <label htmlFor="password" className="info-title">Mật khẩu</label>
            <Input className='info-input' id="password" value="129847812"/>
          </div>
          <div className="info-items">
            <label htmlFor="role" className="info-title">Vai trò</label>
            <Input className='info-input' id="role" value="Idol"/>
          </div>
        </div>
    </div>
  )
}
