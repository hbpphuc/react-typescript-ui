import { BellFilled } from '@ant-design/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './TopBarAdmin.css'

export default function TopBarAdmin() {
    const handleNoti = () => {
        const btn: any = document.querySelector(".notification-button")
        const notiDisplay: any = document.querySelector(".notification")
        if(btn.classList.toggle('button-active')){
            notiDisplay.style.display = 'block'
        }else{
            notiDisplay.style.display = 'none'
        }
    }

  return (
    <div className='topbar-admin'>
        <div className="topbar-title">
            Dashboard
        </div>
        <div className="topbar-user">
            <div className="user-notification" onClick={handleNoti}>
                <button className="notification-button">
                    <BellFilled />
                </button>
                <div className="notification">
                    <p className="noti-title">Thông báo</p>
                    <ul className="noti-list">
                        <li className="noti-items">
                            <p className="noti-user">Người dùng: Nguyễn Thị Thùy Dung</p>
                            <p className="noti-timestamp">Thời gian nhận số: 12h20 ngày 30/11/2021</p>   
                        </li>
                        <span className="separate"></span>
                        <li className="noti-items">
                            <p className="noti-user">Người dùng: Nguyễn Thiên Chính</p>
                            <p className="noti-timestamp">Thời gian nhận số: 12h20 ngày 30/11/2021</p>   
                        </li>
                        <span className="separate"></span>
                        <li className="noti-items">
                            <p className="noti-user">Người dùng: Võ Thị Kim Liên</p>
                            <p className="noti-timestamp">Thời gian nhận số: 12h20 ngày 30/11/2021</p>    
                        </li>
                        <span className="separate"></span>
                        <li className="noti-items">
                            <p className="noti-user">Người dùng: Nguyễn Thiên Chính</p>
                            <p className="noti-timestamp">Thời gian nhận số: 12h20 ngày 30/11/2021</p>   
                        </li>
                    </ul>
                </div>
            </div>
            <div className="user-welcome">
                <div className="user-avatar">
                    <img src="https://bloganchoi.com/wp-content/uploads/2021/09/hinh-anh-baifern-pimchanok.jpg" alt="avatar" className='img-avatar'/>
                </div>
                <div className="user-link">
                    Xin chào
                    <br />
                    <Link to='infomation' className='user-name'>Baifern Pimchanok</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

