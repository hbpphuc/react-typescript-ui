import { BarChartOutlined, CommentOutlined, DashboardOutlined, DesktopOutlined, LoginOutlined, MoreOutlined, NumberOutlined, SettingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Menubar.css'

export default function Menubar() {

    const handleDisplay = () => {
        const settingLink:any = document.querySelector(".setting-list")
        if(settingLink.style.display === 'block'){
            settingLink.style.display = 'none'
        }else{
            settingLink.style.display = 'block'
        }
    }

    return (
        <div className="menubar-wrapper">
            <div className="logo">
                <svg
                    width="80"
                    height="64"
                    viewBox="0 0 391 313"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_2_1329)">
                        <path
                            d="M176.6 304.5L184.1 255.6C184.4 253.9 185.2 252.4 186.6 251.1C188.2 249.6 190.1 248.9 192.1 248.9C194.1 248.9 195.8 249.5 197.3 250.8C198.8 252.1 199.8 253.5 200.2 255.2L209.9 289.9L219.7 255.2C220.2 253.5 221.2 252.1 222.6 250.9C224.2 249.6 226 248.9 227.9 248.9C230 248.9 231.8 249.6 233.3 250.9C234.8 252.2 235.6 253.8 235.9 255.5L243.6 304.4V306C243.6 307.9 243 309.4 241.9 310.6C240.8 311.8 239.4 312.3 237.7 312.3C235.7 312.3 234.2 311.8 233.3 310.9C232.4 309.9 231.7 308.4 231.3 306.2L226.6 270.5L216.6 307.3C216.2 308.8 215.6 309.9 214.8 310.6C213.7 311.8 212.1 312.3 210.1 312.3C208.1 312.3 206.6 311.7 205.4 310.6C204.5 309.7 203.9 308.6 203.6 307.3L193.8 270.5L188.7 306.2C188.4 308.3 187.8 309.9 186.9 310.8C185.9 311.8 184.4 312.3 182.4 312.3C180.7 312.3 179.3 311.7 178.2 310.6C177.1 309.5 176.5 307.9 176.5 306C176.4 305.3 176.5 304.8 176.6 304.5Z"
                            fill="black"
                        />
                        <path
                            d="M271.9 285.8C269.3 287.3 267.2 288 264.4 288C261.7 288 260 287.5 258.4 286.3C256.9 285.2 256 283.5 255.8 282.1C255.8 281.9 255.9 281.6 256.1 281.5C261.2 281.3 270.1 280.9 272.2 280.3C272.4 280.1 272.8 278.6 272.8 278.3C272.3 278.2 271.7 277.8 271.6 277.5C271.1 274.4 268.7 269.4 261.5 269.4C258.9 269.4 256.1 270.2 254 271.3C250.6 273.2 248.1 276.7 248.1 281.4C248.1 284.5 249.2 288.1 252 290.4C253.9 292 256.5 293 260.4 293C264.1 293 269.1 291.4 271.8 288.4C271.9 288.1 272.3 286.8 272.2 286.2C272.2 286.1 272 285.9 271.9 285.8ZM259.7 272.2C262.3 272.2 263.9 274.6 264.3 277.8C264.2 278 264.1 278.2 263.8 278.3C262.7 278.5 258 278.5 256.1 278.5C255.8 278.5 255.6 278.2 255.6 278.1C255.8 274.9 257.3 272.2 259.7 272.2ZM308.2 288.7C306.6 288.7 305.7 288.7 305 288.6C304.3 288.5 303.9 288.1 303.9 286.9V278C303.9 269.8 304 265.7 304.1 262.5C304.2 259.8 304.1 258.9 304.8 258C304.9 257.8 304.6 256.9 304.3 256.7C301.9 257.5 295.1 258.3 291.3 258.3C290.9 258.5 290.8 260.3 291 260.6C292.5 260.8 293.9 260.9 294.9 261.2C296 261.6 296.2 262.3 296.3 263.2C296.4 264.6 296.4 266.2 296.4 269.3C296.4 269.5 296.2 269.6 296.1 269.6C295.5 269.5 294.7 269.5 294.1 269.5C290 269.5 284.7 271.1 282.2 272.9C279.3 274.8 277.3 278.1 277.3 282C277.3 285 278.4 288 280.2 289.9C281.9 291.7 284.5 292.9 287.4 292.9C289.4 292.9 292.9 291.6 295.9 289.9C296 289.8 296.2 290 296.2 290.1C296.3 291 296.3 292.2 296.4 292.7C296.5 292.9 296.8 293.3 297 293.3C298.6 293.3 305.3 292.1 307.7 291.2C307.9 291 308.3 289 308.2 288.7ZM290.7 272.5C292.1 272.5 293.7 272.8 294.9 273.6C296.1 274.4 296.3 275.2 296.3 276.3C296.3 279.4 296.3 284.9 296.2 286.3C296.2 286.9 296.1 287.3 295.8 287.5C294.9 288.1 293.6 288.4 292.7 288.4C288.2 288.4 285.1 285.2 285.1 279.5C285.1 276.6 286.1 274.7 287.3 273.6C288.4 272.8 289.6 272.5 290.7 272.5ZM325.6 290.2C324.1 290 323.5 289.8 322.9 289.7C322.1 289.5 321.7 288.9 321.7 287.5C321.6 285 321.6 281.8 321.6 278.9V269.5C318.5 270.5 312.3 271.3 310.7 271.3C310.4 271.6 310.1 273 310.4 273.4C312.5 274 313.1 274.4 313.6 274.9C313.9 275.1 314 275.7 314 276.1V281C314 283.7 314 286.5 313.9 287.8C313.8 289 313.8 289.4 313 289.7C312.3 289.9 311.6 290 310.3 290.2C309.9 290.5 310.1 292.3 310.3 292.6C311.7 292.6 314.2 292.4 317.5 292.4C322.2 292.4 324.4 292.6 325.3 292.6C325.7 292.3 326 290.5 325.6 290.2ZM321.5 262.6C321.5 262.1 321.4 261 320.9 260.5C320.6 260.2 319.6 259.9 318.1 259.9C316.4 259.9 314.3 260.4 313.4 261.3C312.9 261.8 312.9 263.4 313 263.8C313.5 265.3 314.2 265.9 315.2 266.3C315.8 266.6 319.3 266.5 319.8 266C320.8 265.2 321.5 263.7 321.5 262.6ZM366.8 288.8C365.2 288.8 364.7 287.8 364.7 286C364.8 284 365.9 278.9 367 274.3C367.4 272.5 367.9 271.4 368.4 270.2C366.8 269.9 364.8 269.4 361.2 269.4C356.4 269.4 350 272.6 347.7 274.9C344.5 277.8 341.9 282.7 341.9 287.3C341.9 289.8 342.7 293.2 345.8 293.2C348.6 293.2 353.8 290.3 357.4 286.2C357.5 286 357.7 286.1 357.7 286.3C357.4 287.9 357.4 288.8 357.3 289.6C357.2 291.3 357.9 293.3 360.7 293.3C369.1 293.3 380.1 287.9 380.1 275.7C380.1 268.4 373.6 259.3 360.1 259.3C351.7 259.3 344.2 262.2 338.3 267.5C333.2 272 330 278.1 330 285.2C330 299.5 342.7 304.5 346.5 304.5C348.4 304.5 351.4 304.1 352.9 302.9C353 302.7 353 301.9 352.9 301.8C351.2 302 348.5 301.6 347 301.3C341.5 300.1 335.8 294.9 335.8 284.8C335.8 268.6 349.1 262.7 357.3 262.7C366.7 262.7 375.5 267.1 375.5 278.3C375.4 285.1 370.6 288.8 366.8 288.8ZM351.4 287.2C350.3 287.2 349.3 286.2 349.4 283.6C349.4 281.1 350.2 278.5 351.2 276.7C353 273.8 354.9 273.1 357.2 273.1C358.4 273.1 359.9 273.3 360.9 273.8C360.6 274.4 360.1 275.9 359.8 276.9C358.9 280.1 358.5 281.1 357.8 282.1C355.3 285.7 353 287.2 351.4 287.2Z"
                            fill="black"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M390.2 0C371.6 57 347.4 116.1 307.4 160.5C262.9 205.8 193.2 208.2 145.2 210.4C97.2 212.6 58.2 212.2 32.8 224.9C7.39997 237.6 4.09998 259.4 4.09998 259.4L6.59998 245.9L24.2 220.7L114.7 190.1L245.5 171.7L331.1 118.8L364.3 58.7L384.3 13.1L390.2 0Z"
                            fill="black"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M351.3 79.3C351.4 79.3 339.9 100.7 317.6 114.5C302.3 124 282.5 129.5 261.2 130.4C232.6 131.6 208.6 130.1 190.4 134.1C173.5 137.8 158.6 143.6 153.2 168C153.2 168 151.5 143.7 181.2 129C210.9 114.2 285.5 120.2 310.1 108.3C320.3 103.4 329.8 99 338.2 92.1C343.1 88 347.4 84.7 351.3 79.3Z"
                            fill="black"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M219.6 103.1C215.3 97.2001 206.2 84.5001 164.6 98.3001C132.8 108.8 106.2 118.8 82 113.7C66.8 110.5 55.8 100.2 45.1 89.3001C29.1 72.8001 17.6 56.0001 18.4 55.6001L26.8 66.1001L51.6 88.9001L93.4 107.4L158.9 93.3001L195.5 86.7001L207 90.0001L215.1 95.8001L217.9 99.5001L219.2 101.9L219.6 103.1Z"
                            fill="black"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.3999 55.6C18.3999 55.6 50.8999 98 89.1999 97.8C111.9 97.7 138.7 90.7 161.4 86.6C170.9 84.9 180.2 83.8 187.7 83.8C199.3 83.7 217.6 89.6 219.6 103.1C219.6 103.1 211.1 80.5 167.8 94C131.8 105.3 101.3 114.6 77.3999 107.9C71.7999 106.3 66.6999 103.8 62.1999 100.9C52.3999 94.5 44.0999 85.4 35.9999 76.8C25.0999 65 17.4999 55.4 18.3999 55.6Z"
                            fill="#FF7506"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.09996 259.4C4.09996 259.4 1.79996 243.5 16.3 226.1C26.2 214.2 45 201.5 73.9 193.5C145 173.7 238.7 166.2 268.7 152.7C298.6 139.2 325.8 118.5 338.6 99.4C351.3 80.3 351 79.7 351.2 79.7C351.3 79.7 341 97.9 318.1 110.6C308.4 116 293.8 122.4 280.5 123.9C235.5 128.9 209.6 125.1 189.6 130.4C169.6 135.7 162.4 143.6 157.7 153.2C153 162.7 153.3 168.1 153.3 168.1C153.3 168.1 150.9 140.9 180.6 126.1C210.3 111.3 288.2 110 312.7 98C322.9 93.1 332.4 88.7 340.8 81.8C352.7 72 360.5 59.1 370.5 38.7C387.7 3.7 390.2 0 390.2 0C371 51.2 348.1 111.3 310 150.2C265.5 195.5 195.8 199.7 147.8 201.9C99.8 204.1 58.9 207.2 33.5 219.9C8.09996 232.6 4.09996 259.4 4.09996 259.4Z"
                            fill="#FF7506"
                        />
                        <path
                            d="M16.3 260.5H30.4L45.6 292.9H31.7L30 288.6H16.3L14.7 292.9H1.09998L16.3 260.5ZM18.9 281.8H27.7L23.2 270.2L18.9 281.8ZM50.5 260.5H64.4V285.3H83.4V292.8H50.4V260.5H50.5ZM87.1 260.5H125.9V269H113.5V292.9H99.7V269H87.1V260.5ZM143.7 260.5H157.8L173 292.9H159.2L157.5 288.6H143.7L142.1 292.9H128.6L143.7 260.5ZM146.3 281.8H155.1L150.6 270.2L146.3 281.8Z"
                            fill="#231F20"
                            stroke="white"
                            stroke-width="0.5345"
                            stroke-miterlimit="2.6131"
                        />
                        <path
                            d="M16.3 260.5H30.4L45.6 292.9H31.7L30 288.6H16.3L14.7 292.9H1.09998L16.3 260.5ZM18.9 281.8H27.7L23.2 270.2L18.9 281.8ZM50.5 260.5H64.4V285.3H83.4V292.8H50.4V260.5H50.5ZM87.1 260.5H125.9V269H113.5V292.9H99.7V269H87.1V260.5ZM143.7 260.5H157.8L173 292.9H159.2L157.5 288.6H143.7L142.1 292.9H128.6L143.7 260.5ZM146.3 281.8H155.1L150.6 270.2L146.3 281.8Z"
                            fill="white"
                            stroke="black"
                            stroke-width="1.4173"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_1329">
                            <rect width="390.2" height="312.4" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li className="menu-items" id="frame-dashboard">
                        <DashboardOutlined className='menu-icons'/>
                        <Link className='menu-link' to="dashboard">Dashboard</Link>
                    </li>
                    <li className="menu-items" id="frame-1">
                        <DesktopOutlined className='menu-icons'/>
                        <Link className='menu-link' to="device">Thiết bị</Link>
                    </li>
                    <li className="menu-items" id="frame-2">
                        <CommentOutlined className='menu-icons'/>
                        <Link className='menu-link' to="service">Dịch vụ</Link>
                    </li>
                    <li className="menu-items" id="frame-3">
                        <NumberOutlined className='menu-icons'/>
                        <Link className='menu-link' to="number">Cấp số</Link>
                    </li>
                    <li className="menu-items" id="frame-4">
                        <BarChartOutlined className='menu-icons' />
                        <Link className='menu-link' to="report">Báo cáo</Link>
                    </li>
                    <li className="menu-items" id="frame-5">
                        <SettingOutlined className='menu-icons' />
                        Cài đặt hệ thống
                        <span className='setting-link' onClick={handleDisplay}><MoreOutlined className='menu-icons more-icon'/></span>
                        <div className="more-setting">
                            <ul className='setting-list'>
                                <li className="setting-items">
                                    <Link to="role" className='menu-link'>Quản lý vai trò</Link>
                                </li>
                                <li className="setting-items">
                                    <Link to="account" className='menu-link'>Quản lý người dùng</Link>
                                </li>
                                <li className="setting-items">
                                    <Link to="history" className='menu-link'>Nhật ký người dùng</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                
                <Link to='/login' className="menu-items" id="frame-logout">
                    <LoginOutlined className='menu-icons' />
                        Đăng xuất
                </Link>
            </div>
        </div>
    )
}
