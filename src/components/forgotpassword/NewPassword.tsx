import { Input } from 'antd'
import { Link } from 'react-router-dom'
import BannerForgot from '../bannerform/BannerForgot'
import LogoAlta from '../logoalta/LogoAlta'
import './ForgotPassword.css'

export default function NewPassword() {
  return (
    <div className="forgot">
            <div className="forgot-wrapper">
                <div className="content-forgot">
                    <LogoAlta />
                    <div className="forgot-form">
                        <form action="" className="form-forgot-control" method="">
                        <p className='para-title'>Đặt lại mật khẩu mới</p>
                            <div className="frame-input-newpwd" id="input-newpwd">
                                <label htmlFor="newpwd" className="label-forgot">
                                    Mật khẩu *
                                </label>
                                <Input.Password
                                    type="password"
                                    className="forgot-input"
                                    id="newpwd"
                                    required
                                />
                            </div>
                            <div className="frame-input-newpwd" id="input-confirmpwd">
                                <label htmlFor="confirmpwd" className="label-forgot">
                                    Nhập lại mật khẩu *
                                </label>
                                <Input.Password
                                    type="password"
                                    className="forgot-input"
                                    id="confirmpwd"
                                    required
                                />
                            </div>
                            <Link to='/newpassword' className="forgot-button confirm-forgot button-active">Xác nhận</Link>
                        </form>
                    </div>
                </div>
                <BannerForgot />
            </div>
        </div>
  )
}
