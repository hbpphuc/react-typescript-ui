import './login.css'
import { Button, Form, Input } from 'antd'
import LogoAlta from '../../components/logoalta/LogoAlta'
import BannerLogin from '../../components/bannerform/BannerLogin'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="content-login">
                    <LogoAlta />
                    <div className="login-form">
                        <form action="" className="form-control" method="">
                            <div className="frame-input" id="input-user">
                                <label htmlFor="user" className="label-title">
                                    Tên đăng nhập *
                                </label>
                                <Input
                                    type="text"
                                    className="login-input"
                                    id="user"
                                    value={'lequynhaivan01'}
                                    required
                                />
                            </div>
                            <div className="frame-input" id="input-password">
                                <label
                                    htmlFor="password"
                                    className="label-title"
                                >
                                    Mật khẩu *
                                </label>
                                <Input.Password
                                    className="login-input"
                                    id="password"
                                    value={'lequynhaivan01'}
                                />
                            </div>
                            <div className="forgot-password">
                                <Link className='forgot-link' to="/verifyemail">Quên mật khẩu?</Link>  
                            </div>
                            <button className="login-button">Đăng nhập</button>
                        </form>
                    </div>
                </div>
                <BannerLogin />
            </div>
        </div>
    )
}
