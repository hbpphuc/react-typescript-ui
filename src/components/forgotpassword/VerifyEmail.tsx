import { Link } from 'react-router-dom'
import { Input } from 'antd'
import LogoAlta from '../logoalta/LogoAlta'
import BannerForgot from '../bannerform/BannerForgot'
import './ForgotPassword.css'

export default function ForgotPassword() {
    return (
        <div className="forgot">
            <div className="forgot-wrapper">
                <div className="content-forgot">
                    <LogoAlta />
                    <div className="forgot-form">
                        <form action="" className="form-forgot-control" method="">
                            <p className='para-title'>Đặt lại mật khẩu</p>
                            <div className="frame-input-forgot" id="input-email">
                                <label htmlFor="email" className="label-forgot">
                                    Vui lòng nhập Email để đặt lại mật khẩu của bạn
                                </label>
                                <Input
                                    type="email"
                                    className="forgot-input"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="forgot-button-group">
                                <Link to='/login' className="forgot-button button-normal ">Hủy</Link>
                                <Link to='/newpassword' className="forgot-button button-active">Tiếp tục</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <BannerForgot />
            </div>
        </div>
    )
}
